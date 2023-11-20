import React from 'react';
import Logout from '../component/Logout';
import useAuth from '../hooks/useAuth';

const Home = () => {

    useAuth();

    return (
        <div>
            <h2>Welcome to the Homepage</h2>
            <Logout />
        </div>
    );
};

export default Home
