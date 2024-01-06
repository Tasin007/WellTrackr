import  { useEffect, useState } from 'react';
import TrainerCard from './TrainerCard'; 
import { Link } from 'react-router-dom'; 
import AOS from 'aos'; // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS styles


// Initialize AOS
AOS.init();

const TrainerPage = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        // Fetch Trainer data from your backend API
        fetch('http://localhost:5000/api/v1/trainers')
            .then((response) => response.json())
            .then((data) => setTrainers(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-10 text-center">Meet Our Trainers</h1>
            
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer, index) => (
                    <div
                        key={trainer._id}
                        data-aos="fade-up" // Add AOS animation
                        data-aos-duration="1000" // Animation duration
                        data-aos-delay={(index % 4) * 100} // Delay each card
                    >
                        <TrainerCard trainer={trainer} />
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-center" data-aos="fade-up" data-aos-duration="1000">
                <Link to="/be-a-trainer" className="btn btn-secondary">
                    Become a Trainer
                </Link>
            </div>
        </div>
    );
};

export default TrainerPage;
