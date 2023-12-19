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
            const response = await fetch('https://6581a38a3dfdd1b11c43ce3e.mockapi.io/post', {
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


        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <Link to="/Dashboard">
                    <button type="submit">Create Account</button>
                </Link>
            </form>
        </div>
    );
};

export default SignUp;
