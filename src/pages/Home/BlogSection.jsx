import React, { useEffect, useState } from "react";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch recent blog posts from your API or data source
    fetch("/api/blogPosts")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.summary}</p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
