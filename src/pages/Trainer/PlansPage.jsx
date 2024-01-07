import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css'; // Import the CSS
import AOS from 'aos';

const PlansPage = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/plans')
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching plans:', error);
      });

    // Initialize AOS
    AOS.init({ duration: 800, once: true }); // Adjust duration as needed
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-semibold mb-4">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
        {plans.map((plan, index) => (
          <div
            key={plan._id}
            className="border p-4 rounded-lg shadow-md flex flex-col justify-between bg-yellow-200"
            data-aos="fade-up" // Add AOS animation attribute
            data-aos-delay={`${index * 100}`} // Delay animation for each plan
          >
            <div>
              <h2 className="text-xl text-center font-bold mb-2">{plan.name}</h2>
              <p className="mb-4">{plan.description}</p>
              <ul className="h-48 list-disc ml-4 mb-4">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
