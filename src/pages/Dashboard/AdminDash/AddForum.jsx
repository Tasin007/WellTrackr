import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

function AddForum() {
  const [forumData, setForumData] = useState({
    title: '',
    content: '',
    createdAt: new Date().toISOString(),
    votes: 0,
    name: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post('http://localhost:5000/api/v1/forums', forumData);

      // Handle success
      console.log('Forum data submitted successfully:', response.data);

      // Show a success toast notification
      toast.success('Forum data submitted successfully.');

      // Clear the form after successful submission
      setForumData({
        title: '',
        content: '',
        createdAt: new Date().toISOString(),
        votes: 0,
        name: '',
        image: '',
      });
    } catch (error) {
      // Handle error
      console.error('Error submitting forum data:', error);

      // Show an error toast notification
      toast.error('Error submitting forum data.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Forum</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={forumData.title}
            onChange={(e) => setForumData({ ...forumData, title: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={forumData.content}
            onChange={(e) => setForumData({ ...forumData, content: e.target.value })}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={forumData.name}
            onChange={(e) => setForumData({ ...forumData, name: e.target.value })}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={forumData.image}
            onChange={(e) => setForumData({ ...forumData, image: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default AddForum;
