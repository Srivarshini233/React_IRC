import React, { useState, useEffect } from 'react';

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://6581a38a3dfdd1b11c43ce3e.mockapi.io/post');
        if (response.ok) {
          const user = await response.json();
          setUserData(user);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      {userData ? (
        <div>
          <p>Username:{userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserPage;
