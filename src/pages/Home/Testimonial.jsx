import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import Carousel component
import { motion } from "framer-motion"; // Import Framer Motion

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  // useEffect(() => {
  //   // Fetch testimonial data from the public folder
  //   fetch("/testimonialData.json")
  //     .then((response) => response.json())
  //     .then((data) => setTestimonialData(data))
  //     .catch((error) => console.error("Error fetching testimonial data:", error));
  // }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/review");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setTestimonialData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="p-6 my-10">
      <div className="container max-w-xl mx-auto">
        <Carousel
          showArrows={false} // Hide navigation arrows
          showStatus={false} // Hide status indicators
          showThumbs={false} // Hide thumbnails
          autoPlay={true} // Auto-play carousel
          interval={5000} // Auto-play interval in milliseconds
          infiniteLoop={true} // Infinite loop
        >
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="rounded-full overflow-hidden w-20 h-20">
                  <img
                    src={testimonial.imageURL}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center text-gray-600">
                  <p>{testimonial.author}</p>
                  <p>{testimonial.position}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
