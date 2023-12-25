import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  const location = useLocation();
  const pathsWithoutFooter = ["/login", "/register"];
  const hideFooter = pathsWithoutFooter.includes(location.pathname);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* Conditionally render the Footer */}
      {!hideFooter && <Footer></Footer>}
    </div>
  );
};

export default Main;
