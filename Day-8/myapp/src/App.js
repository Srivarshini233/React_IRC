import React, { useState } from 'react';
import './Assets/css/core.css';
import { Routes,Route } from 'react-router-dom';
import User from './pages/User';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';
const App = () => {

  return (
    <div>
      <Routes>
          <Route path = '/' element ={<User/>}/>
          <Route path = '/add' element ={<Adduser/>}/>
          <Route path = '/edit/:id' element ={<Edituser/>}/>
      </Routes>
    </div>
  );
};

export default App;
