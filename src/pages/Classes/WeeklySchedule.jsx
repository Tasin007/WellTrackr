import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const WeeklySchedule = () => {
  // Define initial date state (e.g., starting from a Monday)
  const [date, setDate] = useState(new Date('2023-01-02')); // January 2, 2023 (Monday)

  // Define an array of events for the week
  const events = [
    {
      title: 'Class on Monday',
      date: new Date('2023-01-02'), // January 2, 2023 (Monday)
      time: '10:00 AM - 11:00 AM',
    },
    {
      title: 'Class on Tuesday',
      date: new Date('2023-01-03'), // January 3, 2023 (Tuesday)
      time: '10:00 AM - 11:00 AM',
    },
    {
      title: 'Class on Thursday',
      date: new Date('2023-01-05'), // January 5, 2023 (Thursday)
      time: '10:00 AM - 11:00 AM',
    },
    {
      title: 'Class on Friday',
      date: new Date('2023-01-06'), // January 6, 2023 (Friday)
      time: '10:00 AM - 11:00 AM',
    },
  ];

  // Filter events for the selected date
  const selectedDateEvents = events.filter((event) => {
    return (
      event.date.getFullYear() === date.getFullYear() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getDate() === date.getDate()
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-semibold mb-4">Weekly Schedule</h1>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Calendar onChange={setDate} value={date} className="mx-auto" />
        <div className="mt-4">
          {selectedDateEvents.length > 0 ? (
            <ul>
              {selectedDateEvents.map((event, index) => (
                <li key={index}>
                  <strong>{event.title}</strong>
                  <br />
                  {event.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events for the selected date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;
