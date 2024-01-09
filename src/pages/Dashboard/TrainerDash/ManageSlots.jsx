import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";


const ManageSlots = () => {
    const [trainerSchedule, setTrainerSchedule] = useState([]);
    const axios = useAxios();
    const {user} = useAuth();

    useEffect(()=> {
        axios.get(`/api/v1/addClass`)
        .then((response) => {
        //   console.log(response.data);
          const filterByEmail = response.data.filter((trainer) => trainer.trainerEmail === user.email);
        //   console.log(filterByEmail);
          setTrainerSchedule(filterByEmail);
        })
        .catch((error) => {
          console.error('Error fetching classes:', error);
        });
    },[user.email, axios])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl text-center mt-10 font-semibold">Class Schedule</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 my-5">
                {trainerSchedule?.map((trainer) => (
                    <div
                        key={trainer._id}
                        className="border p-4 rounded-lg shadow-md flex flex-col justify-between bg-yellow-500 text-white"
                    >
                        <div>
                            <h2 className="text-xl text-center font-bold mb-2">{trainer.trainerName}&lsquo;s Class Schedule</h2>
                            <figure className="flex justify-center my-4">
                                <img
                                    className="w-52 rounded-lg"
                                    src={trainer.image}
                                    alt=""
                                />
                            </figure>

                            <p className="mb-4 text-center">
                                Email: {trainer.trainerEmail}
                            </p>
                            <p className="mb-4 text-center">
                                Time: {trainer.availableHours} classes/hour
                            </p>
                            <p className="mb-4 text-center">
                                Professional {trainer.yearsOfExperience} Years of Experience
                            </p>
                            <p className="mb-4 text-center">
                                Professional {trainer.category} Years of Experience
                            </p>
                            <div>
                                <h3 className="text-xl font-medium text-center mb-2">Social Links:</h3>
                                <ul className="flex justify-center space-x-4">
                                    <li>
                                        <a
                                            href={trainer.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <FaFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={trainer.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={trainer.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className="mb-4">{trainer.description}</p>

                            <div className="flex justify-center">
                            <button className="btn bg-[#3B0764] text-white outline-none border-none hover:bg-[#3B0764]"><AiOutlineEdit className="text-xl" /><Link to={`/dashboard/edit/${trainer?._id}`}>Edit</Link></button>
                            </div>
                        </div>
                    </div>
                ))}

                </div>
        </div>
    );
};

export default ManageSlots;