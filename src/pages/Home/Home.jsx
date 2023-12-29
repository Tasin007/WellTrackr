import Banner from "../../components/Banner";
import About from "./About";
import BlogSection from "./BlogSection";
import ContactUs from "./ContactUs";
import FeaturedActivities from "./FeaturedActivities";
import FeaturedClass from "./FeaturedClass";
// import FeaturedClasses from "./FeaturedClasses";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>WellTrackr | Home </title>
      </Helmet>

      <Banner></Banner>
      <FeaturedActivities></FeaturedActivities>
      <About></About>
      <FeaturedClass></FeaturedClass>
      <Testimonial></Testimonial>
      <BlogSection></BlogSection>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
