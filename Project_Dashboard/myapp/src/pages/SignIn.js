import React, { useState } from 'react';
import { Link, navigate, useNavigate } from 'react-router-dom';


const SignUp = ({ onSignUp }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validate input (add more validation as needed)
        if (password !== confirmPassword) {
            console.error("Passwords don't match");
            return;
        }

        // Perform account creation here (e.g., API request to your backend)
        // For simplicity, we'll use a mock API call
        try {
            // Replace this with your actual API endpoint
            const response = await fetch('https://6583244202f747c8367b278f.mockapi.io/e-com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                const newUser = await response.json();
                onSignUp(newUser);
                navigate("/Dashboard") // Pass the new user data to the parent component or handle as needed
            } else {
                // Handle account creation error
                console.error('Account creation failed');
            }
        } catch (error) {
            console.error('Error during account creation:', error);
        }



    };

    return (

    <div className='bg-container'>
        <div className='container1 shadow'>
            <h2 className='heading4'>Create Account</h2>
            <form onSubmit={handleSignUp}>
                    <input
                        type="text"
                        value={username}
                        placeholder='Username'
                        className='input_style1'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                <br />
                
                    <input
                        type="email"
                        value={email}
                        placeholder="email"
                        className='input_style1'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                
                <br />
    
                    <input
                        type="password"
                        placeholder='password'
                        className='input_style1'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                <br />
               
                    <input
                        type="password"
                        placeholder='confirmPassword'
                        className='input_style1'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                <br />
                <Link to="/Dashboard">
                    <button onSubmit={handleSignUp} className='button1' type="submit">Create</button>
                </Link>
            </form>
        </div>
        </div>
    );
};
export default SignUp;