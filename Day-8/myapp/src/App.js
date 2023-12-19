import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('page1');

  const renderPage = () => {
    switch (currentPage) {
      case 'page1':
        return (
          <div>
            <h1>This is Page 1</h1>
            <p>Content for Page 1 goes here.</p>
          </div>
        );
      case 'page2':
        return (
          <div>
            <h1>This is Page 2</h1>
            <p>Content for Page 2 goes here.</p>
          </div>
        );
      // Add more cases for additional pages as needed

      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setCurrentPage('page1')}>Go to Page 1</button>
        <button onClick={() => setCurrentPage('page2')}>Go to Page 2</button>
        {/* Add more buttons for additional pages as needed */}
      </div>
      <div>{renderPage()}</div>
    </div>
  );
};

export default App;
