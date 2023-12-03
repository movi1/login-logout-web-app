import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';

// Logout component: Handles user logout and redirects to the home page
export const Logout = () => {
  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Logout function: Implement actual logout logic here
  const handleLogout = () => {
    // Redirect to the home page after logout
    navigate('/');
  };

  // Render the logout component UI
  return (
    <div className='logout'>
      <h1>Welcome! You are logged in.</h1>
      <button onClick={handleLogout}>Sign out</button>
    </div>
  );
};
