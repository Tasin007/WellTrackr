import featuredActivitiesData from "../../../public/featuredActivitiesData.json"; 

const FeaturedActivities = () => {
  return (
    <section className="featured-activities py-12 my-5 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Featured Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredActivitiesData.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <figure>
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-60 object-cover"
                />
              </figure>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{activity.title}</h2>
                <p className="text-gray-600">{activity.shortDescription}</p>
                <div className="mt-4">
                  <a
                    href={activity.link}
                    className="text-blue-500 hover:underline hover:text-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedActivities;
