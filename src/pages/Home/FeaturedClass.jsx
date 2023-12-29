import React, { useEffect, useState } from "react";

// Class Card Component
const ClassCard = ({
  title,
  description,
  memberCount,
  imageUrl,
  onJoin,
  classId,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img
        className="w-full h-60 object-cover object-center"
        src={imageUrl}
        alt={title}
      />
      <div className="p-5">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-gray-700 mt-2 h-12">{description}</p>
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={() => onJoin(classId)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          >
            Become a Member
          </button>
          <span className="text-sm font-semibold text-indigo-500">
            Members: {memberCount}
          </span>
        </div>
      </div>
    </div>
  );
};

// Featured Classes Component
const FeaturedClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes") // Replace with your server URL
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.error("Error fetching classes:", err));
  }, []);

  const handleJoinClass = (classId) => {
    console.log(`Joining class with ID: ${classId}`);
    // Replace this with the actual enrollment logic
    // Example: make an API call to your backend to enroll the user in this class
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((c) => (
          <ClassCard
            key={c._id}
            classId={c._id}
            title={c.title}
            description={c.description}
            memberCount={c.members}
            imageUrl={c.imageUrl}
            onJoin={handleJoinClass}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedClasses;
