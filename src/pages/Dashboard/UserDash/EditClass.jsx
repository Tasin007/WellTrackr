import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import { MdOutlineSaveAlt } from "react-icons/md";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const EditClass = () => {
    const [trainerSchedule, setTrainerSchedule] = useState([]);
    const axios = useAxios();
    const {user} = useAuth();
    const navigate = useNavigate();

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

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        const updatedClass = {
          name: e.target.elements.name.value,
          category: e.target.elements.category.value,
          yearsOfExperience: parseFloat(e.target.elements.yearsOfExperience.value),
          availableHours: parseFloat(e.target.elements.availableHours.value),
        //   image: e.target.elements.image.value,
          facebook: e.target.elements.facebook.value,
          twitter: e.target.elements.twitter.value,
          linkedin: e.target.elements.linkedin.value,
          description: e.target.elements.description.value,
          time: e.target.elements.time.value,
        };
    
        try {
            const res = await axios.put(`/api/v1/addClass/${trainerSchedule[0]?._id}`, updatedClass) 
            
            if(res.data.modifiedCount > 0) {
                toast.success("User Profile successfully updated");
                navigate("/dashboard/ManageSlots");
              }
              
          console.log("Class updated in MongoDB:", res.data);
          toast.success("Class updated successfully!");
          
        } catch (error) {
          console.error("Error updating class:", error);
            toast.error("Failed to update class. Please try again.");
        }
      };
    return (
        <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-2xl text-center mt-10 font-semibold">Class Schedule</h1>


                    <section className="px-4">
        <form onSubmit={handleUpdate}>
          <label>Class Name</label>
          <input
          defaultValue={trainerSchedule[0]?.className}
            name="name"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="Example: Yoga"
          />
          <label>Class Category</label>
          {/* category dropdown */}
          <select
            defaultValue={trainerSchedule[0]?.category || 'select a class'}
            name="category"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
          >
            <option>select a class</option>
            <option value="meditation">Meditation</option>
            <option value="yoga">Yoga</option>
            <option value="fitness">Fitness</option>
            <option value="boxing">Boxing</option>
            <option value="gym">Gym</option>
          </select>

          <label>Years of Experience</label>
          <input
            defaultValue={trainerSchedule[0]?.yearsOfExperience}
            name="yearsOfExperience"
            type="number"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="3"
          />
          <label>Available hours per hour</label>
          <input
            defaultValue={trainerSchedule[0]?.availableHours}
            name="availableHours"
            type="number"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="2"
          />

          {/* <div className="mb-4">
            <label>Choose Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Image URL"
              readOnly="true"
            />
          </div> */}
          <label>Facebook</label>
          <input
          defaultValue={trainerSchedule[0]?.facebook}
            name="facebook"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="https://facebook.com/alicesmith"
          />
          <label>Twitter</label>
          <input
          defaultValue={trainerSchedule[0]?.twitter}
            name="twitter"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="https://twitter.com/alicesmith"
          />
          <label>LinkedIn</label>
          <input
          defaultValue={trainerSchedule[0]?.linkedin}
            name="linkedin"
            type="text"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="https://linkedin.com/in/alicesmith"
          />

          <label>Class Description</label>
          <textarea
          defaultValue={trainerSchedule[0]?.description}
            name="description"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            rows="5"
            placeholder="Example: Yoga"
          />
          <label>Class Time</label>

          <input
          defaultValue={trainerSchedule[0]?.time}
            type="time"
            name="time"
            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
            placeholder="Example: Yoga"
          />
                   <div className="flex items-center">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-4  text-white bg-[#3B0764] hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Update <MdOutlineSaveAlt className="text-xl" />
                      </button>
                    </div>

        </form>
      </section>
               
    </div>
    );
};

export default EditClass;