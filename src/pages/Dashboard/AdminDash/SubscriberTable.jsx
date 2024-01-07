import React, { useEffect, useState } from 'react';

function SubscriberTable() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    // Fetch subscriber data from your API endpoint.
    fetch('http://localhost:5000/api/v1/users')
      .then((response) => response.json())
      .then((data) => {
        // Filter out users with roles "admin" and "trainer"
        const filteredSubscribers = data.filter((user) => user.role !== 'admin' && user.role !== 'trainer');
        
        setSubscribers(filteredSubscribers);
      })
      .catch((error) => {
        console.error('Error fetching subscriber data:', error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* Table Head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {/* Render subscriber data */}
          {subscribers.map((subscriber, index) => (
            <tr key={subscriber._id}>
              <th>{index + 1}</th>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.role || 'user'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscriberTable;
