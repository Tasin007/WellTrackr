import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";


const BookedClasses = () => {
    const [booked, setBooked] = useState([]);
    const {user} = useAuth();
    const getRandomTime = () => {
        const hours = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      };
      
      const getRandomDate = () => {
        const currentDate = new Date();
        const randomDays = Math.floor(Math.random() * 7); // Change this number as needed
        currentDate.setDate(currentDate.getDate() + randomDays);
        return currentDate.toISOString().split('T')[0];
      };
      
      const getRandomTrainer = () => {
        const trainers = [ "Olivia Johnson",
        "Liam Smith",
        "Ava Brown",
        "Noah Taylor",
        "Isabella Davis",
        "Jackson Martinez",
        "Sophia Miller",
        "Lucas Anderson",
        "Mia Wilson",
        "Aiden Harris"]; 
        const randomIndex = Math.floor(Math.random() * trainers.length);
        return trainers[randomIndex];
      };
      
      const getRandomDuration = () => {
        const durations = ["30 mins", "1 hour", "1.5 hours"]; // Add more durations as needed
        const randomIndex = Math.floor(Math.random() * durations.length);
        return durations[randomIndex];
      };
    useEffect(() => {
        fetch("http://localhost:5000/payment")
          .then((res) => res.json())
          .then((data) => {
            const filteredByMail = data.filter((mail) => mail?.userEmail === user.email);
            const bookedWithRandomValues = filteredByMail.map((book) => ({
              ...book,
              time: getRandomTime(),
              date: getRandomDate(),
              trainer: getRandomTrainer(),
              duration: getRandomDuration(),
            }));
            setBooked(bookedWithRandomValues);
          });
      }, [user.email]);
    return (
        <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-3xl text-center font-semibold mb-4">My Booked Classes</h1>

        {/* show data as a table format */}
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Plan Name</th>
              <th className="px-4 py-2">Class Time</th>
              <th className="px-4 py-2">Class Date</th>
              <th className="px-4 py-2">Class Trainer</th>
              <th className="px-4 py-2">Class Duration</th>
              <th className="px-4 py-2">Class Price</th>
            </tr>
          </thead>
          <tbody>
            {booked.map((book) => (
              <tr key={book._id}>
                <td className="border text-center px-4 py-2">{book.planName}</td>
                <td className="border  text-center px-4 py-2">{book.time}</td>
                <td className="border  text-center px-4 py-2">{book.date}</td>
                <td className="border  text-center px-4 py-2">{book.trainer}</td>
                <td className="border  text-center px-4 py-2">{book.duration}</td>
                <td className="border  text-center px-4 py-2">{book.planPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default BookedClasses;