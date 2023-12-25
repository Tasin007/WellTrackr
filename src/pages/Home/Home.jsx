import Banner from "../../components/Banner";
import ContactUs from "./ContactUs";
import FeaturedActivities from "./FeaturedActivities";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FeaturedActivities></FeaturedActivities>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            
            
        </div>
    );
};

export default Home;