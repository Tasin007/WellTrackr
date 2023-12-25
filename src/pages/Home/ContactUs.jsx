import { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your Email.js service ID, template ID, and user ID
    const serviceID = "service_uk0xm87";
    const templateID = "template_t70hxrh";
    const userID = "8x4CKLBBmj6E73T40";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        // You can add a success message or redirect the user after sending the email
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle errors, e.g., display an error message to the user
      });

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Let's Talk!</h2>
          <p className="text-gray-600">Guiding Wellness for Healthier Tomorrows.</p>
          <img
            src="https://i.ibb.co/XXctPk3/Contact-US.jpg"
            alt=""
            className="mt-6 h-52 md:h-64"
          />
        </div>
        <form
          noValidate
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-100"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-sm font-bold tracking-wider rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
