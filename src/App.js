import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/logout"  />
        <Route path="/login-unsuccessful" />
    
      </Routes>
    </Router>
  );
}
export default App;
