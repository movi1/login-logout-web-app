
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Use useNavigate instead of useHistory
    const navigate = useNavigate();

    const handleLogin = () => {
        // Your logic to check username and password
        if (username === 'test' && password === '1234') {
            setIsLoggedIn(true);

            navigate('/logout');
        } else {
            // Show error message or handle in a way appropriate for your app
            alert('Invalid username or password');
            setIsLoggedIn(false);
        }
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Sign in</button>
            
        </div>
    );
};

export default Login;
