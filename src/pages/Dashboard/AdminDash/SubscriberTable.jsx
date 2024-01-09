import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSec from '../../../Hooks/useAxiosSec';

function SubscriberTable() {
  const [subscribers, setSubscribers] = useState([]);
  const axiosSec = useAxiosSec();

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

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it.',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSec.delete(`/api/v1/users/${id}`)
          .then((response) => {
            console.log('User deleted in MongoDB:', response.data);
            Swal.fire(
              'Deleted!',
              'User has been deleted.',
              'success',
            );
            // Remove the deleted user from the state
            const filteredSubscribers = subscribers.filter((subscriber) => subscriber._id !== id);
            setSubscribers(filteredSubscribers);
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
            Swal.fire(
              'Failed to delete!',
              'User has not been deleted.',
              'error',
            );
          });
      }
    });
  }

  const handleMakeAgent = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will make this user a trainer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, make it!',
      cancelButtonText: 'No, keep it.',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSec.patch(`/api/v1/users/make-agent/${id}`)
          .then((response) => {
            console.log('User updated in MongoDB:', response.data);
            Swal.fire(
              'Updated!',
              'User has been updated.',
              'success',
            );
            // Remove the deleted user from the state
            const filteredSubscribers = subscribers.filter((subscriber) => subscriber._id !== id);
            setSubscribers(filteredSubscribers);
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
            Swal.fire(
              'Failed to update!',
              'User has not been updated.',
              'error',
            );
          });
      }
    });
  }

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will make this user an admin!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, make it!',
      cancelButtonText: 'No, keep it.',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSec.put(`/api/v1/users/make-admin/${id}`)
          .then((response) => {
            console.log('User updated in MongoDB:', response.data);
            Swal.fire(
              'Updated!',
              'User has been updated.',
              'success',
            );
            // Remove the deleted user from the state
            const filteredSubscribers = subscribers.filter((subscriber) => subscriber._id !== id);
            setSubscribers(filteredSubscribers);
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
            Swal.fire(
              'Failed to update!',
              'User has not been updated.',
              'error',
            );
          });
      }
    });
  }

  return (
    <section className='max-w-7xl mx-auto px-2'>
      <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* Table Head */}
        <thead>
          <tr className='text-center'>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render subscriber data */}
          {subscribers.map((subscriber, index) => (
            <tr className='text-center' key={subscriber._id}>
              <th>{index + 1}</th>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.role || 'user'}</td>
              <td className='flex gap-2'>
                <button className='btn bg-green-500 hoveer:bg-green-700 text-white' onClick={() => handleMakeAdmin(subscriber?._id)}>Make Admin</button>
                <button className='btn bg-blue-500 hoveer:bg-blue-700 text-white'  onClick={() => handleMakeAgent(subscriber?._id)}>Make Trainer</button>
                <button className='btn bg-red-500 hoveer:bg-red-700 text-white' onClick={() => handleDeleteUser(subscriber?._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}

export default SubscriberTable;
