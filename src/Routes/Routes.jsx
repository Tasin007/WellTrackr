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
import AddClass from "../pages/Dashboard/TrainerDash/AddClass";
import MemberFeedback from "../pages/Dashboard/TrainerDash/MemberFeedback";
import ClassSchedule from "../pages/Dashboard/TrainerDash/ClassSchedule";
import PaymentDetails from "../pages/Dashboard/TrainerDash/PaymentDetails";
import AllTrainers from "../pages/Dashboard/AdminDash/AllTrainers";
import AppliedTrainers from "../pages/Dashboard/AdminDash/AppliedTrainers";
import TrainerPayments from "../pages/Dashboard/AdminDash/AddForum";
import BeATrainerPage from "../pages/Trainer/BeATrainerPage";
import TrainerDetails from "../pages/Trainer/TrainerDetails";
import PlansPage from "../pages/Trainer/PlansPage";
import SubscriberTable from "../pages/Dashboard/AdminDash/SubscriberTable";


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
        path: "/trainer/:trainerId",
        element: <TrainerDetails />,
      },
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/community",
        element: <ForumPage />,
      },
      {
        path: "/be-a-trainer",
        element: <BeATrainerPage/>,
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
        path: "activitylog",
        element: <ActivityLog />,
      },
      {
        path: "profilesettings",
        element: <ProfileSettings />,
      },
      {
        path: "bookedclasses",
        element: <BookedClasses />,
      },
      {
        path: "forumparticipation",
        element: <ForumParticipation />,
      },
      {
        path: "trainerfeedback",
        element: <TrainerFeedback />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
      // Trainer dashboard
      {
        path: "manageslots",
        element: <ManageSlots />,
      },
      {
        path: "managemembers",
        element: <ManageMembers />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "memberfeedback",
        element: <MemberFeedback />,
      },
      {
        path: "classschedule",
        element: <ClassSchedule />,
      },
      {
        path: "paymentdetails",
        element: <PaymentDetails />,
      },
      // Admin dashboard
      {
        path: "subscriber",
        element: <SubscriberTable />,
      },
      {
        path: "alltrainers",
        element: <AllTrainers />,
      },
      {
        path: "appliedtrainers",
        element: <AppliedTrainers />,
      },
      // {
      //   path: "manageforums",
      //   element: <ManageForums />,
      // },
      {
        path: "addforum",
        element: <TrainerPayments />,
      },
    ],
  },
]);
