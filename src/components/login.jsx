
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // Use useState to manage the state
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        // Your logic to check username and password
        if (username === 'movi' && password === '1234') {
            // Successful login
            navigate('/logout', { state: { username } });
        } else {
            // Unsuccessful login
            setError('Login failed, please try again');
            navigate('/loginUnsuccessful')
            return;
        }

        // Clear input fields
        setUsername('');
        setPassword('');
    };


    const handleInputChange = () => {
        // Clear error message when there is a change in the input fields
        setError('');
    };

    return (
        <div className="container">
            <div className='login'>
            <h1> 🌈Log in to Paint Your Imagination!</h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); handleInputChange(); }} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); handleInputChange(); }} />
                <button type="submit" onClick={handleLogin}>Sign in</button>

                {error && <p className="error">{error}</p>}
            </div>

        </div>
    );
};

export default Login;
