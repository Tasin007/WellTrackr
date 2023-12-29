import { Helmet } from "react-helmet-async";



const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>WellTrackr | About Us </title>
      </Helmet>
       
        <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-gray-700">
        Welcome to WellTrackr, your trusted partner in health and wellness. We are
        dedicated to helping you achieve your health and fitness goals, and
        providing you with the tools and resources you need to lead a healthier
        lifestyle.
      </p>
      <p className="text-gray-700 mt-4">
        At WellTrackr, we believe that everyone deserves to live their best and
        healthiest life. Our team of experts is committed to delivering
        high-quality services and products to empower you on your health journey.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="text-gray-700 mt-4">
        Our mission is to make health and wellness accessible to all. We strive
        to provide innovative solutions that promote physical and mental well-being.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Our Team</h2>
      <p className="text-gray-700 mt-4">
        Meet the dedicated individuals behind WellTrackr. Our team consists of
        experienced professionals in the fields of fitness, nutrition, mental
        health, and technology. Together, we work tirelessly to create a
        platform that caters to your unique needs.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p className="text-gray-700 mt-4">
        Have questions or feedback? We should love to hear from you! You can reach
        out to us through our <a href="/contact">contact form</a> or by emailing us at
        contact@welltrackr.com.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
