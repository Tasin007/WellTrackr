const TrainerCard = ({ trainer }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
        <img
          src={trainer.profileImage}
          alt={trainer.name}
          className="w-48 h-48 mx-auto rounded-full object-cover"
        />
        <h2 className="text-2xl font-semibold mt-4 text-center">{trainer.name}</h2>
        <p className="text-gray-600 text-sm text-center mt-2">
          {trainer.yearsOfExperience} Years of Experience
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium text-center mb-2">Social Links:</h3>
          <ul className="flex justify-center space-x-4">
            {Object.keys(trainer.socialIcons).map((socialPlatform) => (
              <li key={socialPlatform}>
                <a
                  href={trainer.socialIcons[socialPlatform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {socialPlatform}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium text-center mb-2">Available Time Slots:</h3>
          <ul className="flex justify-center space-x-2">
            {Array(trainer.availableHours).fill().map((_, index) => (
              <li key={index} className="text-gray-500">
                Slot {index + 1}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    );
  };
  
  export default TrainerCard;
  