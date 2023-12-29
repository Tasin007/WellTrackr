import React from "react";

// Define a TrainerCard component to display each Trainer's profile
const TrainerCard = ({ trainer }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        src={trainer.profileImage}
        alt={`${trainer.name}'s profile`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{trainer.name}</h2>
        <p className="text-gray-600">{trainer.yearsOfExperience} years of experience</p>
        <div className="flex justify-between mt-4">
          <div>
            {/* Display social icons here */}
            {/* For example, you can use Font Awesome or other icon libraries */}
            {/* Replace the placeholders with actual social icons */}
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
              Know More
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Available Time Slots:</p>
          {/* Display available time slots here */}
          <ul>
            {trainer.availableTimeSlots.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Define the TrainerSection component to display all Trainer profiles
const TrainerSection = ({ trainers }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {trainers.map((trainer, index) => (
        <TrainerCard key={index} trainer={trainer} />
      ))}
    </div>
  );
};

export default TrainerSection;
