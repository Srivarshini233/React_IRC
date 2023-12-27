import React, { useState, useEffect } from 'react';

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://6583244202f747c8367b278f.mockapi.io/e-com');
        if (response.ok) {
          const user = await response.json();
          console.log(user);
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
    <div className="adminpanel">
    <div className="Userspanel">
      <h2 className="headUser">User Details</h2>
      {userData ? (
        <table>
          <thead>
            <tr>
              <th>
                Username
              </th>
              <th>
                password
              </th>
              
            </tr>
          </thead>
          <tbody>
            {userData.map((userData) => (
              <tr key={userData.id}>
                <td>
                  {userData.username}
                </td>
                <td>
                  {userData.email}
                </td>

              </tr>
            ))
            }
          </tbody>
        </table>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </div>
  );
};

export default User;
