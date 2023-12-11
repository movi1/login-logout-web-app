import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store';
import 'animate.css';
import './login.css';

const Logout = () => {
    // React Router hooks for navigation
    const navigate = useNavigate();

    // Access the loggedInUser state from the Redux store
    const loggedInUser = useSelector((state) => state.loggedInUser);
    
    // Use useDispatch to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Function to handle the logout process
    const handleLogout = () => {
        // Dispatch the LOGOUT action to update the Redux store
        dispatch({ type: LOGOUT });

        // Navigate to the login page after logout
        navigate('/');
    };
  return (
    <div className="main-container">
      {/* Logout container */}
      <div className="container">
        <div className="logout">
        {/* // This checks if loggedInUser is truthy before returning the welcome message */}
                <h1>Welcome {loggedInUser && `🎨 ${loggedInUser}`}!</h1>
          <h2>Click to the button below to sign out</h2>
          {/* Button to navigate back to the login page */}
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};


export default Logout;
