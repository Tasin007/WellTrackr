// import React from 'react';
// import { motion } from 'framer-motion';

// const FeaturedClasses = () => {
//   const featuredClassesData = [
//     {
//       id: 1,
//       title: 'Morning Yoga',
//       imageUrl: 'https://i.ibb.co/fXcYsNp/Morning-Yoga.jpg',
//       description: 'Start your day with a refreshing yoga routine.',
//       link: '/yoga',
//     },
//     {
//       id: 2,
//       title: 'Meditation',
//       imageUrl: 'https://i.ibb.co/98pb3BZ/Meditation.jpg',
//       description: 'Find inner peace and reduce stress through meditation.',
//       link: '/meditation',
//     },
//     {
//       id: 3,
//       title: 'Healthy Recipes',
//       imageUrl: 'https://i.ibb.co/1XcsFCd/Healthy-Recipes.jpg',
//       description: 'Explore delicious and nutritious recipes for a balanced diet.',
//       link: '/recipes',
//     },
//     {
//       id: 4,
//       title: 'Cardio Workouts',
//       imageUrl: 'https://i.ibb.co/2Mrn7fP/Cardio-Workouts.jpg',
//       description: 'Boost your fitness with high-intensity cardio workouts.',
//       link: '/cardio',
//     },
//     {
//       id: 5,
//       title: 'Mindfulness Exercises',
//       imageUrl: 'https://i.ibb.co/JB58SD3/Mindfulness-Exercises.jpg',
//       description: 'Practice mindfulness for improved mental well-being.',
//       link: '/mindfulness',
//     },
//     {
//       id: 6,
//       title: 'Healthy Diet Tips',
//       imageUrl: 'https://i.ibb.co/k2yztD1/Healthy-Diet-Tips.jpg',
//       description: 'Learn essential tips for maintaining a healthy diet.',
//       link: '/diet-tips',
//     },
//     // Add more featured classes here...
//   ];

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//           Featured Classes
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//           {featuredClassesData.map((classItem) => (
//             <motion.div
//               key={classItem.id}
//               className="bg-white p-4 rounded-lg shadow-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={classItem.imageUrl}
//                 alt={classItem.title}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {classItem.title}
//               </h3>
//               <p className="text-gray-600">{classItem.description}</p>
//               <a
//                 href={classItem.link}
//                 className="mt-4 inline-block text-blue-500 hover:underline"
//               >
//                 Learn More
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedClasses;
