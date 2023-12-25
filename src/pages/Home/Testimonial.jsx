import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    // Fetch testimonial data from the public folder
    fetch("/testimonialData.json")
      .then((response) => response.json())
      .then((data) => setTestimonialData(data))
      .catch((error) => console.error("Error fetching testimonial data:", error));
  }, []);

  return (
    <section className="my-8 bg-gray-100 text-gray-800">
    <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
      <h1 className="p-4 text-4xl font-semibold leadi text-center">
        What our customers are saying about us
      </h1>
    </div>
    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
      {testimonialData.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
        >
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              {testimonial.quote}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-indigo-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-600 text-gray-50">
            <img
              src={testimonial.imageURL}
              alt={testimonial.author}
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
            />
            <p className="text-xl font-semibold leadi">{testimonial.author}</p>
            <p className="text-sm uppercase">{testimonial.position}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Testimonial;