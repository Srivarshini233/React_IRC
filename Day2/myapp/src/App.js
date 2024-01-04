import React, { useState } from 'react';
import './Asset/CSS/style.css'; 

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [repassword, setRepassword] = useState('');
  const [age, setAge] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const [errorMessage4, setErrorMessage4] = useState('');
  const [errorMessage5, setErrorMessage5] = useState('');
  const [errorMessage6, setErrorMessage6] = useState('');

  const handleLogin = () => {
    if (username.length >= 8) {
        console.log('Login successful');
    } 
    else{
        setErrorMessage1('Username must contain more than 8 character')
    }
    if(password.length >= 6){
        console.log('Login successful');
    }
    else {
        setErrorMessage2('Password must be at least 6 characters long');
    }
    if(email.length <13){
        setErrorMessage6('invalid')
    }
    else{
        setErrorMessage6('')
    }
    if(age.parseInt < 18 && age.parseInt > 40){
        setErrorMessage3('you may login if your age between 18 to 40')
    }
    else{
        setErrorMessage3('');
    }
    if(phone.length===10){
        setErrorMessage4('');
    }
    else{
        setErrorMessage4('phone Number must contain 10 digits')
    }
    if(password===repassword){
        setErrorMessage5('')
    }
    else{
        setErrorMessage5('confirm password is not match');
    }
  };

  return (
    <div >
        <div className = 'shadow'>
      <h2>Login</h2>
      <div className='shadow'>
        <label>Username:</label>
        <input
          type="text"
          value={username} className='input_style'
          onChange={(e) => setUsername(e.target.value)}
        />
         {errorMessage1 && <p style={{ color: 'red' }}>{errorMessage1}</p>}
      </div>

      <div className='shadow'>
        <label>Password:</label>
        <input
          type="text"
          value={password} className='input_style'
          onChange={(e) => setPassword(e.target.value)}
        />
         {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
      </div>

      <div className='shadow'>
        <label>Re-typePassword:</label>
        <input
          type="text"
          value={repassword} className='input_style'
          onChange={(e) => setRepassword(e.target.value)}
        />
         {errorMessage5 && <p style={{ color: 'red' }}>{errorMessage5}</p>}
      </div>
     
      <div className='shadow'>
        <label>age:</label>
        <input
          type="text" 
          value={age} className='input_style'
          onChange={(e) => setAge(e.target.value)}
          />
          {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
      </div>
      
      <div className='shadow'>
        <label>phone:</label>
        <input
          type="text" 
          value={phone} className='input_style'
          onChange={(e) => setPhone(e.target.value)}
          />
          {errorMessage4 && <p style={{ color: 'red' }}>{errorMessage4}</p>}
      </div>

      <div>
        <label>email:</label>
        <input
          type="text" 
          value={email} className='input_style'
          onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage6 && <p style={{ color: 'red' }}>{errorMessage6}</p>}
      </div>
      <button onClick={handleLogin} className='button'>Login</button>
    </div>
    </div>
  );
};

export default App;
