import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const DietTracker = () => {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({ name: '', calories: 0, category: 'Other' });
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userFeedback, setUserFeedback] = useState('');
  const [categories, setCategories] = useState(['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Other']);

  useEffect(() => {
    // Load data from local storage on mount
    const storedFoods = JSON.parse(localStorage.getItem('dietTrackerFoods')) || [];
    setFoods(storedFoods);
  }, []);

  useEffect(() => {
    // Save data to local storage whenever foods are updated
    localStorage.setItem('dietTrackerFoods', JSON.stringify(foods));
  }, [foods]);

  const addFood = () => {
    setFoods([...foods, { ...newFood, date: selectedDate }]);
    setNewFood({ name: '', calories: 0, category: 'Other' });
  };

  const totalCalories = foods.reduce((total, food) => total + food.calories, 0);
  const goalAchieved = totalCalories <= dailyGoal;

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  };

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleGoalChange = (event) => {
    setDailyGoal(parseInt(event.target.value, 10) || 0);
  };

  const resetTracker = () => {
    setFoods([]);
    setUserFeedback('');
  };

  const categoryOptions = categories.map((category, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ));

  const categorySelect = (
    <label>
      Category:
      <select value={newFood.category} onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}>
        {categoryOptions}
      </select>
    </label>
  );

  const categoryButtons = categories.map((category, index) => (
    <button key={index} onClick={() => setNewFood({ ...newFood, category })}>
      {category}
    </button>
  ));

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Calories per Category',
        data: categories.map((category) =>
          foods
            .filter((food) => food.category === category)
            .reduce((total, food) => total + food.calories, 0)
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="diet-tracker">
      <h1>Diet Tracker</h1>

      <div className="tracker-controls">
        <div>
          <label>
            Select Date:
            <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} />
          </label>
        </div>
        <div>
          <label>
            Daily Calorie Goal:
            <input type="number" value={dailyGoal} onChange={handleGoalChange} />
          </label>
        </div>
        <button onClick={resetTracker}>Reset Tracker</button>
      </div>

      <div className="add-food">
        <h2>Add Food</h2>
        <label>
          Food Name:
          <input
            type="text"
            value={newFood.name}
            onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
          />
        </label>
        {categorySelect}
        <label>
          Calories:
          <input
            type="number"
            value={newFood.calories}
            onChange={(e) => setNewFood({ ...newFood, calories: parseInt(e.target.value, 10) || 0 })}
          />
        </label>
        <button onClick={addFood}>Add</button>
        <div className="category-buttons">{categoryButtons}</div>
      </div>

      <div className="food-list">
        <h2>Food List for {formatDate(selectedDate)}</h2>
        <ul>
          {foods
            .filter((food) => food.date.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0])
            .map((food, index) => (
              <li key={index}>
                {food.name} - {food.calories} calories ({food.category})
              </li>
            ))}
        </ul>
      </div>

      <div className="tracker-summary">
        <h2>Summary</h2>
        <p>Total Calories: {totalCalories}</p>
        <p>Daily Goal: {dailyGoal} calories</p>
        <p>{goalAchieved ? 'You reached your daily goal!' : 'You exceeded your daily goal.'}</p>
      </div>

      <div className="chart">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default DietTracker;
