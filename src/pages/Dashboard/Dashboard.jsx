import { GiHamburgerMenu } from "react-icons/gi";
import {  MdOutlineAddComment, MdOutlineFeedback, MdOutlineManageHistory, MdOutlinePayments, MdOutlineSportsGymnastics } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiAddBoxLine } from "react-icons/ri";
import { PiUsersThreeLight } from "react-icons/pi";
import { GrUserSettings } from "react-icons/gr";
import { IoBookmarksOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useTrainer from "../../Hooks/usetrainer";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTrainer();
  const { logOut } = useAuth();
  

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-2">
          <GiHamburgerMenu className="text-4xl m-4 lg:hidden" />
        </label>

        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-purple-950 text-base-content">
          {/* Sidebar content here */}

          {/* admin dashboard */}

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <CgProfile className="text-white text-3xl mr-3" />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/subscriber"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <PiUsersThreeLight className="text-white text-3xl mr-3" />
                  All Subscribers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allTrainers"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineSportsGymnastics className="text-white text-3xl mr-3" />
                  All Trainers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appliedTrainers"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <GrUserSettings className="text-white text-3xl mr-3" />
                  Applied Trainers
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/dashboard/manageForums"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineManageHistory className="text-white text-3xl mr-3" />
                  Manage Forums
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/dashboard/addforum"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineAddComment className="text-white text-3xl mr-3" />
                  Add Forum
                </NavLink>
              </li>
            </>
          )}

          {/* Trainer dashboard */}

          {isTrainer && 
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <CgProfile className="text-white text-3xl mr-3" />
                  Trainer Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addClass"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <RiAddBoxLine className="text-white text-3xl mr-3" />
                  Add Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addForum"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineAddComment className="text-white text-3xl mr-3" />
                  Add Forum
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/classSchedule"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <AiOutlineSchedule className="text-white text-3xl mr-3" />
                  Class Schedule
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageMembers"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <IoPersonAddOutline className="text-white text-3xl mr-3" />
                  Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageSlots"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineManageHistory className="text-white text-3xl mr-3" />
                  Manage Slots
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/memberFedback"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineFeedback className="text-white text-3xl mr-3" />
                  Member Feedback
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentDetails"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlinePayments className="text-white text-3xl mr-3" />
                  Payment Details
                </NavLink>
              </li>
            </>
          }

          {/* user dashboard */}

          {!isAdmin && !isTrainer && 
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <CgProfile className="text-white text-3xl mr-3" />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/activityLog"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <LuActivitySquare className="text-white text-3xl mr-3" />
                  Activity Log
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookedClasses"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <IoBookmarksOutline  className="text-white text-3xl mr-3" />
                  Booked Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myReviews"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineReviews className="text-white text-3xl mr-3" />
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlinePayment className="text-white text-3xl mr-3" />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/trainerFeedback"
                  className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
                >
                  <MdOutlineFeedback  className="text-white text-3xl mr-3" />
                  Trainer Feedback
                </NavLink>
              </li>
            </>
          }

          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
            >
              <IoHomeOutline className="text-white text-3xl mr-3" />
              Home
            </NavLink>
          </li>

          <div className="divider"></div>
          <li>
            <button
              onClick={handleLogOut}
              className="menu text-base lg:text-2xl p-5 text-white text-left hover:bg-blue-900 hover:text-white"
            >
              <CiLogout className="text-white text-3xl mr-3" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
