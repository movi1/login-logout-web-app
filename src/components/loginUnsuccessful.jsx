
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';
import 'animate.css';

const LoginFailed = () => {
    // React Router hooks for navigation and location
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    
    // Extract 'error' from the state, or set it to an empty object if undefined
    const { error } = state || {};


    // Function to handle navigation back to the login page
    const handleBackToLogin = () => {
        // Navigate back to login page
        navigate('/');
    }

    return (
        <div className='main-container'>
            {/* Container for the failed login message */}
            <div className="container animate__animated animate__fadeInUp">
                <div className="failed">
                    {/* Display a message for unsuccessful login */}
                    <h1>Oops! Artistic License Denied 🚫 </h1>
                    {/* Display the error message */}
                    <div className="error-message">
                        {error}
                    </div>
                    {/* Button to navigate back to the login page */}
                    <button onClick={handleBackToLogin}>Back to Login</button>
                </div>
            </div>
        </div>
    );
};


export default LoginFailed;



