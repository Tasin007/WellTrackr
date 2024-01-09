import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrainerCard = ({ trainer }) => {
  return (
    <div className="bg-white p-4 mt-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
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
          <li>
            <a
              href={trainer.socialIcons.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href={trainer.socialIcons.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href={trainer.socialIcons.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium text-center mb-2">Available Time Slots:</h3>
        <select className="select select-info w-full max-w-xs mx-auto">
          <option disabled selected>Select Slot</option>
          {Array(trainer.availableHours).fill().map((_, index) => (
            <option key={index}>{`Slot ${index + 1}`}</option>
          ))}
        </select>
      </div>
      <div className="mt-6 flex justify-center">
        <Link to={`/trainer/${trainer._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
