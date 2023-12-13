import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., API call, authentication, etc.)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="bg-container">
    <div className= "container1 shadow" id = "bg-container">
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required class ="input_style"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required class ="input_style"
        />
      </label>
      <br />
      <div class = "button-design">
      <input  type = "submit" value= "Sign-In" class = "button1"/>         
      <input  type = "submit" value= "Cancel"  class = "button1"/>
      </div>
    </form>
    </div>
    </div>
  );
};

export default SignInForm;
