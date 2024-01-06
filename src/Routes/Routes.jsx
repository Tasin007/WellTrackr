import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQPage from "../pages/FAQ/FAQPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Gallery from "../pages/Gallery/Gallery";
import TrainerPage from "../pages/Trainer/TrainerPage";
import Classes from "../pages/Classes/Classes";
import ForumPage from "../pages/Community/ForumPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Myprofile from "../pages/Dashboard/Myprofile";
import ActivityLog from "../pages/Dashboard/UserDash/ActivityLog";
import ProfileSettings from "../pages/Dashboard/UserDash/MyProfile";
import BookedClasses from "../pages/Dashboard/UserDash/BookedClasses";
import ForumParticipation from "../pages/Dashboard/UserDash/ForumParticipation";
import TrainerFeedback from "../pages/Dashboard/UserDash/TrainerFeedback";
import PaymentHistory from "../pages/Dashboard/UserDash/PaymentHistory";
import ManageSlots from "../pages/Dashboard/TrainerDash/ManageSlots";
import ManageMembers from "../pages/Dashboard/TrainerDash/ManageMembers";
import AddForum from "../pages/Dashboard/TrainerDash/AddForum";
import AddClass from "../pages/Dashboard/TrainerDash/AddClass";
import MemberFeedback from "../pages/Dashboard/TrainerDash/MemberFeedback";
import ClassSchedule from "../pages/Dashboard/TrainerDash/ClassSchedule";
import PaymentDetails from "../pages/Dashboard/TrainerDash/PaymentDetails";
import AllSubscribers from "../pages/Dashboard/AdminDash/AllSubscribers";
import AllTrainers from "../pages/Dashboard/AdminDash/AllTrainers";
import AppliedTrainers from "../pages/Dashboard/AdminDash/AppliedTrainers";
import ManageForums from "../pages/Dashboard/AdminDash/ManageForums";
import TrainerPayments from "../pages/Dashboard/AdminDash/TrainerPayments";


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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/trainer",
        element: <TrainerPage />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/community",
        element: <ForumPage />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Myprofile />,
      },
      // User dashboard
      {
        path: "activity-log",
        element: <ActivityLog />,
      },
      {
        path: "profile-settings",
        element: <ProfileSettings />,
      },
      {
        path: "booked-classes",
        element: <BookedClasses />,
      },
      {
        path: "forum-participation",
        element: <ForumParticipation />,
      },
      {
        path: "trainer-feedback",
        element: <TrainerFeedback />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      // Trainer dashboard
      {
        path: "manage-slots",
        element: <ManageSlots />,
      },
      {
        path: "manage-members",
        element: <ManageMembers />,
      },
      {
        path: "add-forum",
        element: <AddForum />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "member-feedback",
        element: <MemberFeedback />,
      },
      {
        path: "class-schedule",
        element: <ClassSchedule />,
      },
      {
        path: "payment-details",
        element: <PaymentDetails />,
      },
      // Admin dashboard
      {
        path: "all-subscribers",
        element: <AllSubscribers />,
      },
      {
        path: "all-trainers",
        element: <AllTrainers />,
      },
      {
        path: "applied-trainers",
        element: <AppliedTrainers />,
      },
      {
        path: "manage-forums",
        element: <ManageForums />,
      },
      {
        path: "trainer-payments",
        element: <TrainerPayments />,
      },
    ],
  },
]);
