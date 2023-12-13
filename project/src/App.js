import React from 'react';
import './Assets/css/nav.css';
import Home from './components/home';
import './Assets/css/home.css';
import SignInForm from './components/SignInForm';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (

      <div>
        
        <Routes>
          <Route path="/SignInForm" element={<SignInForm/>} />
        </Routes>
        <Home />
      </div>
  );
}

export default App;
