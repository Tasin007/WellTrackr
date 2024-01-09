import  { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useAxios from '../../Hooks/useAxios';

const Classes = () => {
  // Define initial date state
  const [date, setDate] = useState(new Date());
  const [classes, setClasses] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    
    axios.get(`/api/v1/addClass`)
      .then((response) => {
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, [axios]);



  return (
    <div>
      <Helmet>
        <title>WellTrackr | Classes</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Weekly Schedule</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Calendar
            onChange={setDate}
            value={date}
            className="mx-auto"
          />
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center text-3xl my-5 font-semibold font'>All Classes</h1>
        {/* show classes as card */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
          {classes?.map((classItem) => (
            <div
              key={classItem._id}
              className="border p-4 rounded-lg shadow-md flex flex-col justify-between bg-yellow-500 text-white"
            >
              <div>
                <h2 className="text-xl text-center font-bold mb-2">{classItem.name}</h2>
                <figure className='flex justify-center my-4'>
                <img className="w-52 rounded-ld" src={classItem.image} alt="" />
                </figure>
                <p className="mb-4 text-center">category: {classItem.category}</p>
                <p className="mb-4 text-center">Trainer: {classItem.userName}</p>
                <p className="mb-4 text-center">Email:{classItem.userEmail}</p>
                <p className="mb-4 text-center">Time:{classItem.time}</p>
                <p className="mb-4">{classItem.description}</p>

                
              </div>
            </div>
          ))}
          </div>

      </div>
    </div>
  );
};

export default Classes;
