import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQPage from "../pages/FAQ/FAQPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import DietTracker from "../pages/DietTracker/DietTracker";
import ExerciseLog from "../pages/ExerciseLog/ExerciseLog";
import MentalWellness from "../pages/MentalWellness/MentalWellness";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/dietTracker",
        element: <DietTracker />,
      },
      {
        path: "/exerciseLog",
        element: <ExerciseLog />,
      },
      {
        path: "/mentalWellness",
        element: <MentalWellness/>,
      },
    ],
  },
]);
