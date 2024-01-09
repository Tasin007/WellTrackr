import { useEffect, useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css'; // Import the CSS
import AOS from 'aos';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const PlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [paymentData, setPaymentData] = useState({});
  const { user } = useAuth();

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
     // const form = new FormData(e.target);
    // const price = form.get('price');
    // const name = form.get('name');
    // const userName = user.displayName;
    // const userEmail = user.email;
  
    // const info = {
    //   price: price,
    //   name: name,
    //   userName: userName,
    //   userEmail: userEmail,
    //   planId: planId,
    // };
    // console.log(info);

    const handlePay = async (e) => {
      e.preventDefault();
    
      const name = e.target.name.value;
  const price = e.target.price.value;
  const userName = user.displayName;
  const userEmail = user.email;
  const planId = e.target.planId.value;

const newSex = {
  name: name,
  price: parseFloat(price),
  userName: userName,
  userEmail: userEmail,
  planId: planId,
};
console.log(newSex);

    
      try {
        const response = await fetch("http://localhost:5000/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(newSex),
        });
    
        const result = await response.json();
        console.log(result);

        window.location.replace(result.url)
        
        toast.success("Redirecting to payment options page");
        // if (result.url) {
        //   window.location.replace(result.url);
        //   toast.success("Redirecting to payment options page");
        // } else {
        //   toast.error("Error processing payment. Please try again.");
        // }
      } catch (error) {
        console.error("Error processing payment:", error);
        toast.error("Error processing payment. Please try again.");
      }
    };
    
  

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
             <form onSubmit={handlePay}>
              <div>
              <input type="hidden" name="planId" value={plan._id} />

                <input type="text" name='name' className="bg-yellow-200 text-xl text-center font-bold mb-2" readOnly value={plan.name} />
           
                <p className="mb-4" name="description">{plan.description}</p>
                <ul className="h-48 list-disc ml-4 mb-4">
                  {plan.features.map((feature, featIndex) => (
                    <li key={featIndex}>{feature}</li>
                  ))}
                </ul>

              </div>
              <div className="text-center flex flex-col">
                <input
                  className="form-control bg-yellow-200 p-2 mb-3 text-center"
                  type="text"
                  name="price" // Add the name attribute
                  value={plan?.price}
                  readOnly
                />

                
              </div>
              <input type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  value="Join Now"
                />
      </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
