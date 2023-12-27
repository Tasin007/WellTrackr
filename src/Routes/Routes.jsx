import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQPage from "../pages/FAQ/FAQPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import UserDashboard from "../pages/UserDashboard/UserDashboard";

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
        path: "/profile",
        element: <UserDashboard />,
      },
    ],
  },
]);
