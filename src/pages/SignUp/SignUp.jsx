import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, userUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");

    console.log(image, name, email, password);

    const imgbbResponse = await axios.post(image_hosting_api, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const imageURL = imgbbResponse.data?.data?.url;
    console.log("image uploaded to imgbb", imgbbResponse?.data);

    try {
      const res = await axios.post("http://localhost:5000/api/v1/users", {
        name,
        email,
        image: imageURL,
      });

      console.log("User registered in MongoDB:", res.data);

      if (res.data.insertedId) {
        const createUserResponse = await createUser(email, password);
        const userUpdateProfileResponse = await userUpdateProfile(
          name,
          imageURL,
          email
        );

        toast.success("User successfully created");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user in MongoDB:", error);
      toast.error("Failed to create user. Please try again.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>WellTrackr | Sign Up </title>
      </Helmet>
      <body className="font-mono bg-gray-100">
      {/* Container */}
      <div className="container mx-auto p-4">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-6">Create an Account</h2>
          <form className="px-8 py-6" onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="******************"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="mb-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-700">
                    I accept the{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
              >
                Register Account
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-700 text-center pb-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </body>
    </div>
  );
};

export default Register;
