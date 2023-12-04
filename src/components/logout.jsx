import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'animate.css';
import './login.css';

const Logout = () => {
  // React Router hooks for navigation and location
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  // Function to handle the logout process
  const handleLogout = () => {
  
    navigate('/'); // Navigate to the login page after logout
  };

  return (
    <div className="main-container">
      {/* Logout container */}
      <div className="container">
        <div className="logout">
          {/* Display a welcome message with the username */}
          <h1>Welcome back🎨 {state && state.username}!</h1>
          {/* Button to navigate back to the login page */}
          <button onClick={handleLogout}>Back to Login</button>
        </div>
      </div>
    </div>
  );
};


export default Logout;
