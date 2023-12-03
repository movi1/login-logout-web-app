
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';

const LoginFailed = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    // Destructure error from state
    const { error } = state || {};

   


    const handleBackToLogin = () => {
        // Navigate back to login page
        navigate('/');
    }

    return (
        <div className="container">
            <div className="failed">
                <h1>Oops! Artistic License Denied 🚫 </h1>
                <div class="error-message">
                    {error}
                </div>

                <button onClick={handleBackToLogin}>
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default LoginFailed;



