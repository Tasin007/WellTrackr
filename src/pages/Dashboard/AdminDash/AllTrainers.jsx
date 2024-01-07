import React, { useEffect, useState } from 'react';

function AllTrainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // Fetch trainer data from your API endpoint.
    fetch('http://localhost:5000/api/v1/trainers')
      .then((response) => response.json())
      .then((data) => {
        setTrainers(data);
      })
      .catch((error) => {
        console.error('Error fetching trainer data:', error);
      });
  }, []);

  const handlePayClick = (trainerId) => {
    // Implement the logic to handle payment and update the payment status.
    // After successful payment, redirect the user back to this page.
    // You can use a state variable to track the payment status and conditionally render it.
    // For now, I'll simulate a payment by updating the trainer's payment status.

    // Simulate payment by updating the trainer's payment status to "paid."
    const updatedTrainers = trainers.map((trainer) =>
      trainer._id === trainerId ? { ...trainer, paymentStatus: 'paid' } : trainer
    );
    setTrainers(updatedTrainers);
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
              <th>Experience</th>
              <th>Email</th>
              <th>Image</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Render trainer data */}
            {trainers.map((trainer, index) => (
              <tr key={trainer._id}>
                <td>{index + 1}</td>
                <td>{trainer.name}</td>
                <td>{trainer.yearsOfExperience}</td>
                <td>{trainer.email}</td>
                <td>
                  <img
                    src={trainer.profileImage}
                    alt={`${trainer.name}'s Image`}
                    style={{ maxWidth: '50px', maxHeight: '50px' }}
                  />
                </td>
                <td>{trainer.paymentStatus || 'Pending'}</td>
                <td>
                  {trainer.paymentStatus !== 'paid' && (
                    <button onClick={() => handlePayClick(trainer._id)}>Pay</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTrainers;
