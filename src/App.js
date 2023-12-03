import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import LoginFailed from './components/loginUnsuccessful';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loginUnsuccessful" element={<LoginFailed />} />
    

      </Routes>
    </Router>
  );
}
export default App;
