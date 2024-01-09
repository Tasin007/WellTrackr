import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/useAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddClass = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const className = form.get("name");
    const category = form.get("category");
    const yearsOfExperience = form.get("yearsOfExperience");
    const availableHours = form.get("availableHours");
    const facebook = form.get("facebook");
    const twitter = form.get("twitter");
    const linkedin = form.get("linkedin");
    const description = form.get("description");
    const time = form.get("time");

    const imageFile = form.get("image"); // Get the image file

    try {
      // Upload image to ImgBB
      const imgbbResponse = await axios.post(
        image_hosting_api,
        { image: imageFile },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const imageURL = imgbbResponse.data?.data?.url;
      console.log("Image uploaded to ImgBB", imgbbResponse?.data);

      // Send class data to your backend API
      const res = await axios.post("http://localhost:5000/api/v1/addClass", {
        className,
        category,
        image: imageURL,
        yearsOfExperience,
        availableHours,
        facebook,
        twitter,
        linkedin,
        description,
        time,
        trainerName: user?.displayName,
        trainerEmail: user?.email,
      });

      console.log("Class added in MongoDB:", res.data);
      toast.success("Class added successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error adding class:", error);
      toast.error("Failed to add class. Please try again.");
    }
  };
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center my-10 font-bold text-2xl"> Add Class </h1>

      <section className="px-4">
        <form onSubmit={handleSubmit}>
          <label>Class Name</label>
          <input
            name="name"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="Example: Yoga"
          />
          <label>Class Category</label>
          {/* category dropdown */}
          <select
            name="category"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
          >
            <option>select a class</option>
            <option value="meditation">Meditation</option>
            <option value="yoga">Yoga</option>
            <option value="fitness">Fitness</option>
            <option value="boxing">Boxing</option>
            <option value="gym">Gym</option>
          </select>

          <label>Years of Experience</label>
          <input
            name="yearsOfExperience"
            type="number"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="3"
          />
          <label>Available hours per hour</label>
          <input
            name="availableHours"
            type="number"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="2"
          />

          <div className="mb-4">
            <label>Choose Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Image URL"
              required
            />
          </div>
          <label>Facebook</label>
          <input
            name="facebook"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="https://facebook.com/alicesmith"
          />
          <label>Twitter</label>
          <input
            name="twitter"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="https://twitter.com/alicesmith"
          />
          <label>LinkedIn</label>
          <input
            name="linkedin"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="https://linkedin.com/in/alicesmith"
          />

          <label>Class Description</label>
          <textarea
            name="description"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            rows="5"
            placeholder="Example: Yoga"
          />
          <label>Class Time</label>

          <input
            type="time"
            name="time"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="Example: Yoga"
          />

          <button
            type="submit"
            className="bg-[#3B0764] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
          >
            Add Class
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddClass;
