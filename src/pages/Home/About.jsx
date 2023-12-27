import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 1.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
  };

  return (
    <motion.section
      className="bg-white py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={textVariants}
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            About Our Organization
          </h2>
          <p className="mt-4 text-gray-600">
            Welcome to WellTrackr, your ultimate destination for all things
            fitness, wellness, and healthy living. We are passionate about
            helping you achieve your fitness goals and live a healthier,
            happier life.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
