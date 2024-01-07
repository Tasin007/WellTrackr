import  { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Classes = () => {
  // Define initial date state
  const [date, setDate] = useState(new Date());

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
      <div>
        <h1 className='text-center text-3xl my-5 font-semibold font'>All Classes</h1>
      </div>
    </div>
  );
};

export default Classes;
