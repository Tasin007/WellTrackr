import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dietTracker" activeClassName="active">
          Diet Tracker
        </NavLink>
      </li>
      <li>
        <NavLink to="/exerciseLog" activeClassName="active">
          Exercise Log
        </NavLink>
      </li>
      <li>
        <NavLink to="/mentalWellness" activeClassName="active">
          Mental Wellness
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" activeClassName="active">
          Settings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <button className="btn btn-ghost text-xl"> <img className="w-10" src="/src/assets/Favicon.png" alt="" />WellTrackr</button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login">
          <a className="btn">Sign In</a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;