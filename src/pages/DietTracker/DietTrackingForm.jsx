import React, { useState } from "react";
import { motion } from "framer-motion";

const DietTrackingForm = () => {
  const [meal, setMeal] = useState({
    mealName: "",
    date: "",
    time: "",
    mealType: "breakfast",
    description: "",
  });

  const [foodItems, setFoodItems] = useState([]);
  const [foodItem, setFoodItem] = useState({
    itemName: "",
    calories: "",
    protein: "",
    fat: "",
    carbohydrates: "",
  });

  const handleMealChange = (e) => {
    const { name, value } = e.target;
    setMeal({
      ...meal,
      [name]: value,
    });
  };

  const handleFoodItemChange = (e) => {
    const { name, value } = e.target;
    setFoodItem({
      ...foodItem,
      [name]: value,
    });
  };

  const addFoodItem = () => {
    if (foodItem.itemName && foodItem.calories) {
      setFoodItems([...foodItems, foodItem]);
      setFoodItem({
        itemName: "",
        calories: "",
        protein: "",
        fat: "",
        carbohydrates: "",
      });
    }
  };

  const submitMeal = () => {
    const mealData = {
      ...meal,
      foodItems,
    };
    console.log(mealData);
    setMeal({
      mealName: "",
      date: "",
      time: "",
      mealType: "breakfast",
      description: "",
    });
    setFoodItems([]);
  };

  return (
    <div className="container mx-auto py-4">
      <motion.h2 // Add animation to the form title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-2xl font-semibold mb-4 text-center"
      >
        Diet Tracking Form
      </motion.h2>
      <motion.form // Add animation to the form
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.5 }}
         className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        {/* Meal Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Meal Name:
          </label>
          <input
            type="text"
            name="mealName"
            value={meal.mealName}
            onChange={handleMealChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={meal.date}
            onChange={handleMealChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Time:
          </label>
          <input
            type="time"
            name="time"
            value={meal.time}
            onChange={handleMealChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Meal Type:
          </label>
          <select
            name="mealType"
            value={meal.mealType}
            onChange={handleMealChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            value={meal.description}
            onChange={handleMealChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full h-20 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        {/* Food Items */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Food Items</h3>
          <label className="block text-sm font-medium text-gray-700">
            Item Name:
          </label>
          <input
            type="text"
            name="itemName"
            value={foodItem.itemName}
            onChange={handleFoodItemChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Calories:
            </label>
            <input
              type="number"
              name="calories"
              value={foodItem.calories}
              onChange={handleFoodItemChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Protein (g):
            </label>
            <input
              type="number"
              name="protein"
              value={foodItem.protein}
              onChange={handleFoodItemChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fat (g):
            </label>
            <input
              type="number"
              name="fat"
              value={foodItem.fat}
              onChange={handleFoodItemChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Carbohydrates (g):
            </label>
            <input
              type="number"
              name="carbohydrates"
              value={foodItem.carbohydrates}
              onChange={handleFoodItemChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <button
          onClick={addFoodItem}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Food Item
        </button>

        {/* Food Items Added */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Food Items Added:</h3>
          <ul className="list-disc list-inside">
            {foodItems.map((item, index) => (
              <li key={index}>
                {item.itemName} - {item.calories} Calories
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={submitMeal}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mt-4 focus:outline-none focus:ring focus:border-green-300"
        >
          Submit Meal
        </button>
      </motion.form>
    </div>
  );
};

export default DietTrackingForm;
