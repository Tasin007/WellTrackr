import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TrainerDetails = () => {
  const { trainerId } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/trainers/${trainerId}`)
      .then((response) => {
        setTrainer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trainer details:', error);
      });
  }, [trainerId]);

  if (!trainer) {
    return <div>Loading...</div>;
  }

  const availableSlots = Array(trainer.availableHours).fill().map((_, index) => ({
    slotNumber: index + 1,
    startTime: `${index}:00 AM`,
    endTime: `${index + 1}:00 AM`,
  }));

  const handleBooking = (slotNumber) => {
    // Implement your booking logic here
    console.log(`Booked slot ${slotNumber}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{trainer.name}'s Details</h1>
      <div className="mt-4">
        <h2 className="text-xl font-medium mb-2">Available Time Slots:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slot</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {availableSlots.map((slot) => (
                <tr key={slot.slotNumber}>
                  <td className="px-6 py-4 whitespace-nowrap">{slot.slotNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{slot.startTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{slot.endTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleBooking(slot.slotNumber)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
