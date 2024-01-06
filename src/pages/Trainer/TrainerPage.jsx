import { useEffect, useState } from 'react';
import TrainerCard from './TrainerCard'; // Create this component
import { Link } from 'react-router-dom'; // Import Link for navigation

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
            <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Trainers</h1>
            
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer) => (
                    <TrainerCard
                        key={trainer._id}
                        trainer={trainer}
                    />
                ))}
            </div>
            
            <div className="mt-8 text-center">
                <Link to="/be-a-trainer" className="btn-primary">
                    Become a Trainer
                </Link>
            </div>
        </div>
    );
};

export default TrainerPage;
