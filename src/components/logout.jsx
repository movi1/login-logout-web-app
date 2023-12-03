import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleLogout = () => {
    // Your logout logic, if needed
    navigate('/');
  };

  return (
    <div className="container">
      <div className="logout">
        <h1>Welcome back🎨 {state && state.username}!</h1>
        <button onClick={handleLogout}>Back to Login</button>
      </div>
    </div>
  );
};

export default Logout;
