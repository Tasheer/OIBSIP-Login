import React, { useState }  from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/auth/signup', {
                username,
                email,
                password,
            });

            console.log('User signed up successfully', response.data);

            navigate('/')

        } catch (error) {
            console.error("An error occurred during sign up:", error.message);
        }
    }

return (
<div className="main">
    <div className='main-container'>

        <div className="c1">
            <BsPersonCircle/>

            <h2>Sign Up</h2>
        </div>

        <div className="c2">

            <form onSubmit={handleSignUp}>

            <div className="align">
            <input 
                type="text" 
                placeholder='Username' 
                autoComplete='off' 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="align">
                <input 
                    type="email" 
                    placeholder='Email' 
                    autoComplete='off' 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="align">
            <input 
                type="password" 
                placeholder='Password' 
                autoComplete='off' 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit' className='btn'>
                Sign Up
            </button>

            <div className="end">
                <p>
                    Already have an account? 
                    <Link to={"/login"} style={{textDecoration:'none', marginLeft:'4px', fontWeight:'bolder', color:'black'}}>
                        Login
                    </Link>
                </p>
            </div>

        </form>
    </div>
</div>
</div>
)
}

export default Signup