import { useState, useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { Chart } from "react-google-charts";

const ActivityLog = () => {
  const [activity, setActivity] = useState([]);
  const [review, setReview] = useState([]);
  const [payment, setPayment] = useState([]);
  const { user } = useAuth();
  const axios = useAxios();

  useEffect(() => {
    fetch("http://localhost:5000/payment")
      .then((res) => res.json())
      .then((data) => {
        const filteredByMail = data.filter((mail) => mail?.userEmail === user.email);
        setActivity(filteredByMail);
      });
  }, [user.email]);

  useEffect(() => {
    axios
      .get(`/api/v1/review`)
      .then((response) => {
        const filterByEmail = response.data.filter((review) => review.email === user.email);
        setReview(filterByEmail);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });

    axios
      .get("http://localhost:5000/payment")
      .then((response) => {
        const filterByMail = response.data.filter((payment) => payment?.userEmail === user.email);
        setPayment(filterByMail);
      })
      .catch((error) => {
        console.error('Error fetching payments:', error);
      });
  }, [axios, user.email]);

  // Combine your activity, review, and payment data into a format suitable for Google Charts
  const combinedChartData = [
    ['Date', 'Activity', 'Review', 'Payment'],
    // Add your data points here, for example:
    ['2024-01-10', activity.length, review.length, payment.length],
    // Add more data points as needed
  ];

  // Separate payment data for the second chart
  const paymentStatusChartData = [
    ['Payment Status', 'Count'],
    // Assuming 'paidStatus' is a boolean field
    ['Paid', payment.filter(p => p.paidStatus).length],
    ['Unpaid', payment.filter(p => !p.paidStatus).length],
    // Add more payment status data points as needed
  ];

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-3xl text-center font-semibold mb-4">Activity Log</h1>
      
      {/* First Chart - Combined Data */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={combinedChartData}
        options={{
          hAxis: {
            title: 'Date',
          },
          vAxis: {
            title: 'Count',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />

      {/* Second Chart - Payment Status Data */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={paymentStatusChartData}
        options={{
          title: 'Payment Status Distribution',
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
};

export default ActivityLog;
