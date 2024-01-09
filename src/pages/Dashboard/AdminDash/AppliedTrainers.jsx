import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com"; // Import Email.js library

const serviceID = "service_uk0xm87";
const templateID = "template_t70hxrh";
const userID = "8x4CKLBBmj6E73T40";

function AppliedTrainers() {
  const [appliedTrainers, setAppliedTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    // Fetch applied trainers data from your API endpoint.
    fetch("http://localhost:5000/api/v1/appliedTrainers")
      .then((response) => response.json())
      .then((data) => {
        setAppliedTrainers(data);
      })
      .catch((error) => {
        console.error("Error fetching applied trainers data:", error);
      });
  }, []);

  const handleConfirmClick = (trainerId, trainerEmail) => {
    // Implement logic to confirm the applied person as a Trainer.
    // Remove the entry from the list of applied trainers.
    // You can also update the database to change the user's role.

    // Simulate confirmation by filtering out the selected trainer.
    const updatedAppliedTrainers = appliedTrainers.filter(
      (trainer) => trainer._id !== trainerId
    );
    setAppliedTrainers(updatedAppliedTrainers);

    // Send confirmation email to the trainer
    sendConfirmationEmail(trainerEmail);
  };

  const handleRejectClick = (trainerId, trainerEmail) => {
    // Implement logic to reject the applied person.
    // Send an email to the user using Email.js.

    // Send rejection email to the trainer
    sendRejectionEmail(trainerEmail);
  };

  const sendConfirmationEmail = (toEmail) => {
    // Send confirmation email using Email.js
    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_email: toEmail,
          // Add more variables as needed for your email template
        },
        userID
      )
      .then((response) => {
        console.log("Confirmation Email sent successfully:", response);
        // You can handle success actions here.
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
        // You can handle error actions here.
      });
  };

  const sendRejectionEmail = (toEmail) => {
    // Send rejection email using Email.js
    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_email: toEmail,
          // Add more variables as needed for your email template
        },
        userID
      )
      .then((response) => {
        console.log("Rejection Email sent successfully:", response);
        // You can handle success actions here.
      })
      .catch((error) => {
        console.error("Error sending rejection email:", error);
        // You can handle error actions here.
      });
  };

  

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Render applied trainers data */}
            {appliedTrainers.map((trainer, index) => (
              <tr key={trainer._id}>
                <td>{index + 1}</td>
                <td>{trainer.fullName}</td>
                <td>{trainer.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      setSelectedTrainer(trainer);
                      document.getElementById("my_modal_5").showModal();
                    }}
                  >
                    👁️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom Modal for Trainer Details */}
{selectedTrainer && (
  <dialog id="my_modal_5" className="modal modal-center">
    <div className="modal-box p-6 max-w-96 text-center">
    <button
        className="modal-close"
        onClick={() => {
          // Close the modal when the close button is clicked
          document.getElementById("my_modal_5").close();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="flex items-center justify-center mb-4">
        <img
          src={selectedTrainer.profileImage}
          alt={`${selectedTrainer.fullName}'s Image`}
          className="rounded-full w-32 h-32 border-4 border-primary"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{selectedTrainer.fullName}</h2>
        <p className="text-gray-600">{selectedTrainer.email}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">About Yourself:</p>
        <p className="text-gray-700">{selectedTrainer.aboutYourself}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Skills:</p>
        <p className="text-gray-700">{selectedTrainer.skills.join(', ')}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Years of Experience:</p>
        <p className="text-gray-700">{selectedTrainer.yearsOfExperience}</p>
      </div>
      {/* Social Accounts */}
<div className="mb-4 text-center">
  <p className="text-lg font-semibold">Social Accounts:</p>
  <ul className="" style={{ textAlign: 'center', paddingLeft: '0' }}>
    {Object.entries(selectedTrainer.socialAccounts).map(([key, value]) => (
      <li key={key}>
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {key}
        </a>
      </li>
    ))}
  </ul>
</div>
      <div className="flex justify-center">
        <button
          className="btn btn-primary mr-2"
          onClick={() => {
            handleConfirmClick(selectedTrainer._id, selectedTrainer.email);
            document.getElementById('my_modal_5').close(); // Close the modal
          }}
        >
          Confirm
        </button>
        <button
          className="btn btn-error"
          onClick={() => {
            handleRejectClick(selectedTrainer._id, selectedTrainer.email);
            document.getElementById('my_modal_5').close(); // Close the modal
          }}
        >
          Reject
        </button>
      </div>
    </div>
  </dialog>
)}


    </div>
  );
}

export default AppliedTrainers;
