import React, { useState } from 'react';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let isValid = true;

    if (!formData.email) {
      setErrors({
        ...errors,
        email: 'Email is required',
      });
      isValid = false;
    }

    if (!formData.password) {
      setErrors({
        ...errors,
        password: 'Password is required',
      });
      isValid = false;
    }

    // If the form is valid, you can perform further actions, such as API calls for authentication
    if (isValid) {
      // Your authentication logic here
      console.log('Form is valid. Ready to submit:', formData);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.email}</span>
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.password}</span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
