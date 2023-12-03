
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './login.css';

const LoginFailed = () => {
   
    const navigate = useNavigate();

   


    const handleBackToLogin = () => {
        // Navigate back to login page
        navigate('/');
    }

    return (
        <div className="container">
            <div className="failed">
                <h1>Login Failed</h1>
                <div class="error-message">
                    <p>Oops! Artistic License Denied 🚫 </p>
                    <p>Check your details and give it another go.</p>
                </div>

                <button onClick={handleBackToLogin}>
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default LoginFailed;



