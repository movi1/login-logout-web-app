
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import './login.css';

const Login = () => {
    // State variables for managing username, password, and error message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // React Router hook for navigation
    const navigate = useNavigate();

    // Function to handle the login process
    const handleLogin = () => {
        // logic to check username and password
        if (username === 'movi' && password === '1234') {
            // Successful login, navigate to the logout page
            navigate('/logout', { state: { username } });
        } else {
            // Unsuccessful login, set error message and navigate to loginUnsuccessful page
            setError('Login failed, please try again');
            navigate('/loginUnsuccessful', { state: { error: "Check your details and give it another go." } })
            return;
        }

        // Clear input fields after login attempt
        setUsername('');
        setPassword('');
    };

    // Function to handle input changes and clear error messages
    const handleInputChange = () => {
        setError('');
    };

    return (
        <div className='main-container'>
            {/* Login container with animation */}
            <div className="container animate__animated animate__fadeInDown">
                <div className='login'>
                    <h1>✨Explore, Create, and Log in!</h1>
                    {/* Username input field */}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); handleInputChange(); }} />
                    {/* Password input field */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); handleInputChange(); }} />
                    {/* Login button */}
                    <button type="submit" onClick={handleLogin}>Sign in</button>
                    {/* Display error message if login fails */}
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        </div>
    );
};


export default Login;
