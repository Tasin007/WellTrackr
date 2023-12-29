import  { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Simulated local image paths
  const initialImages = [
    "/src/assets/images/img1.jpg",
    "/src/assets/images/img2.jpg",
    "/src/assets/images/img3.jpg",
    "/src/assets/images/img4.jpg",
    "/src/assets/images/img5.jpg",
    "/src/assets/images/img6.jpg",
    "/src/assets/images/img7.jpg",
    "/src/assets/images/img8.jpg",
    "/src/assets/images/img9.jpg",
    "/src/assets/images/img10.jpg",
    "/src/assets/images/img11.jpg",
    "/src/assets/images/img12.jpg",
  ];

  useEffect(() => {
    // Initialize the component with some initial images
    setImages(initialImages);
  }, []);

  const loadMoreImages = () => {
    // Simulated loading delay (you can remove this in production)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      // You can load more images from the "images" folder using their relative paths
      const newImages = [
        "/src/assets/images/img13.jpg",
        "/src/assets/images/img14.jpg",
        "/src/assets/images/img15.jpg",
        "/src/assets/images/img16.jpg",
        "/src/assets/images/img17.jpg",
        "/src/assets/images/img1.jpg",
        "/src/assets/images/img2.jpg",
        "/src/assets/images/img3.jpg",
        "/src/assets/images/img4.jpg",
        "/src/assets/images/img5.jpg",
        "/src/assets/images/img6.jpg",
        "/src/assets/images/img7.jpg",
        "/src/assets/images/img8.jpg",
        "/src/assets/images/img9.jpg",
        "/src/assets/images/img10.jpg",
        "/src/assets/images/img11.jpg",
        "/src/assets/images/img12.jpg",
      ];

      setImages((prevImages) => [...prevImages, ...newImages]);
    }, 1000); // Simulated loading time (1 second)
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto cursor-pointer"
              onClick={() => openImageModal(image)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50"
              variants={{ visible: { opacity: 1 } }}
            >
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                onClick={() => openImageModal(image)}
              >
                View
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {isLoading ? (
        <p className="text-gray-500 mt-4">Loading...</p>
      ) : (
        <button
          onClick={loadMoreImages}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Load More Images
        </button>
      )}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-3xl bg-white p-4 rounded-lg">
            <img src={selectedImage} alt="Selected Image" />
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition-colors duration-300"
              onClick={closeImageModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
