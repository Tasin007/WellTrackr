import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";

const MyReview = () => {
    const [review, setReview] = useState([]);
    const axios = useAxios();
    const {user} = useAuth();

    useEffect(()=> {
        axios.get(`/api/v1/review`)
        .then((response) => {
          const filterByEmail = response.data.filter((review) => review.email === user.email);
          setReview(filterByEmail);
        })
        .catch((error) => {
          console.error('Error fetching classes:', error);
        });
    },[axios, user.email])
    return (
        <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-2xl text-center mt-10 font-semibold">My Reviews</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 my-5">
            {review?.map((review) => (
                <div
                    key={review?._id}
                    className="border p-4 rounded-lg shadow-md flex flex-col justify-between bg-yellow-500 text-white"
                >
                    <div>
                        <h2 className="text-xl text-center font-bold mb-2">{review?.author}&lsquo;s Review</h2>

                        <p className="mb-4 text-center">
                            Email: {review?.email}
                        </p>
                        <p className="mb-4 text-center">
                            Review: {review?.quote}
                        </p>
                        
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default MyReview;