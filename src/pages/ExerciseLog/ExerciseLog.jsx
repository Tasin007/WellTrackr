import  { useState } from "react";
import ExerciseBanner from "./ExerciseBanner";
import exerciseData from "../../../public/exerciseData.json"; 

const ExerciseLog = () => {
  const [selectedLevel, setSelectedLevel] = useState("intermediate"); // Default to "Intermediate" level

  // Function to handle tab clicks
  const handleTabClick = (level) => {
    setSelectedLevel(level);
  };

  // Filter exercises based on the selected level
  const filteredExercises = exerciseData[selectedLevel];

  return (
    <div className="bg-gray-100 min-h-screen">
      <ExerciseBanner />

      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Exercise Log</h2>

        <div className="flex justify-center space-x-4">
          <button
            className={`${
              selectedLevel === "beginner" ? "bg-blue-500 text-white" : "bg-gray-200"
            } px-4 py-2 rounded-md`}
            onClick={() => handleTabClick("beginner")}
          >
            Beginner
          </button>
          <button
            className={`${
              selectedLevel === "intermediate" ? "bg-blue-500 text-white" : "bg-gray-200"
            } px-4 py-2 rounded-md`}
            onClick={() => handleTabClick("intermediate")}
          >
            Intermediate
          </button>
          <button
            className={`${
              selectedLevel === "advanced" ? "bg-blue-500 text-white" : "bg-gray-200"
            } px-4 py-2 rounded-md`}
            onClick={() => handleTabClick("advanced")}
          >
            Advanced
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
                <p className="text-gray-600">{exercise.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseLog;
