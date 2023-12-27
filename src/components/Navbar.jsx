import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: '', photo: '' });
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setUserProfile({
        name: user.displayName || '',
        photo: user.photoURL || '', // Ensure photoURL is always a string
      });
    }
  }, [user]);

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleProfileClick = () => {
    // Toggle the mobile dropdown menu
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    // Close the mobile dropdown menu
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="bg-purple-950 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 lg:px-8" aria-label="Global">
          <div className="flex justify-between items-center py-6 md:justify-start space-x-20 lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NavLink to="/" aria-label="Home">
                <span className="sr-only">WellTrackr</span>
                <img
                  className="h-8 w-auto sm:h-10 pl-9"
                  src="/src/assets/Favicon.png"
                  alt="Logo"
                />
                <h1 className="text-xl text-white inline-block ml-2">
                  WellTrackr
                </h1>
              </NavLink>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={handleProfileClick}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/gallery"
                className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/trainer"
                className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
              >
                Trainer
              </NavLink>
              <NavLink
                to="/classes"
                className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
              >
                Classes
              </NavLink>
              <NavLink
                to="/dashboard"
                className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/community"
                className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
              >
                Community
              </NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <div
                    className="cursor-pointer"
                    onClick={handleProfileClick}
                  >
                    <img
                      className="h-8 w-8 rounded-full ring-2 ring-white"
                      src={userProfile.photo}
                      alt="User"
                    />
                  </div>
                  <div
                    className={`${
                      isMenuOpen ? "block" : "hidden"
                    } absolute top-0 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="block px-4 py-2 text-xs text-black">
                      {userProfile.name}
                    </div>
                    <div
                      className="block px-4 py-2 text-xs text-black hover:text-red-500 cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="whitespace-nowrap text-base font-medium text-white hover:text-red-500"
                >
                  Sign In
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/trainer"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
            >
              Trainer
            </NavLink>
            <NavLink
              to="/classes"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
            >
              Classes
            </NavLink>
            <NavLink
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/community"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
            >
              Community
            </NavLink>
          </div>
          {user ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                {userProfile.photo && (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={userProfile.photo}
                    alt="User"
                  />
                )}
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {userProfile.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <button
                  onClick={handleLogOut}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Log Out
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <button
                  onClick={handleCloseMenu}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3 space-y-1">
              <NavLink
                to="/login"
                className="block w-full text-left px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-50"
              >
                Sign In
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
