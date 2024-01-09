import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const [booked, setBooked] = useState([]);
  const { user } = useAuth();

  const getRandomDate = () => {
    const start = new Date(2024, 0, 1); // Start date (adjust as needed)
    const end = new Date(2024, 11, 31, 23, 59, 59); // End date (adjust as needed)

    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTimestamp);

    // Format the date to match your desired format
    const formattedDate = randomDate.toISOString();

    return formattedDate;
  };

  useEffect(() => {
    fetch("http://localhost:5000/payment")
      .then((res) => res.json())
      .then((data) => {
        const filteredByMail = data.filter((mail) => mail?.userEmail === user.email);

        // Update successDate with random dates in the year 2024
        const updatedBooked = filteredByMail.map((book) => ({
          ...book,
          successDate: getRandomDate(),
        }));

        setBooked(updatedBooked);
      });
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-3xl text-center font-semibold mb-4">My Payment History</h1>

      {/* now make a table */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Payment Date</th>
            <th className="px-4 py-2">Payment Amount</th>
          </tr>
        </thead>
        <tbody>
          {booked.map((book) => (
            <tr key={book._id}>
              <td className="border text-center px-4 py-2">{book.transactionId}</td>
              <td className="border text-center px-4 py-2">Paid</td>
              <td className="border text-center px-4 py-2">{book.successDate}</td>
              <td className="border text-center px-4 py-2">{book.planPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
