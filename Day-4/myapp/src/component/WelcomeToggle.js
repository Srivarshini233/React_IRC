import React, { useState } from 'react';

const WelcomeToggle = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div class="bg-container">
      <button onClick={toggleMessage}>Start</button>
      {showMessage && <p  className = "container">Welcome to the React Toggle Example!</p>}
    </div>
  );
};

export default WelcomeToggle;
