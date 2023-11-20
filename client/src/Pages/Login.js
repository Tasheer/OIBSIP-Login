import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsPersonCircle} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                username,
                password,
            });

            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/');

        } catch (error) {
            console.error("An error occurred during login:", error.message);
        }
    };

return (
<div className="main">
    <div className='main-container'>

        <div className="c1">
            <BsPersonCircle/>

            <h2>Login</h2>
        </div>

        <div className="c2">
            <form onSubmit={handleLogin}>

            <div className="center">

                <div className="align">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        autoComplete="off"
                        required
                        />
                </div>

                <div className="align">
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        autoComplete="off"
                        required
                        />
                </div>

                <button type='submit' className='btn'>
                    Login
                </button>

            </div>

            <div className="end">

                <p>
                    Don't have an account? 
                        <Link to={"/signup"} style={{textDecoration:'none', marginLeft:'4px', fontWeight:'bolder', color:'black'}}>
                            Sign Up
                        </Link>
                </p>
            </div>



            </form>
        </div>
    </div>
    </div>

)
}

export default Login;