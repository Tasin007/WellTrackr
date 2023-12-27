import Banner from "../../components/Banner";
import About from "./About";
import BlogSection from "./BlogSection";
import ContactUs from "./ContactUs";
import FeaturedActivities from "./FeaturedActivities";
import FeaturedClasses from "./FeaturedClasses";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FeaturedActivities></FeaturedActivities>
            <About></About>
            <FeaturedClasses></FeaturedClasses>
            <Testimonial></Testimonial>
            <BlogSection></BlogSection>
            <ContactUs></ContactUs>
            
            
        </div>
    );
};

export default Home;