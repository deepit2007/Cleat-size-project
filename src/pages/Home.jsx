import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <div className="button1">
            <Link to="/Question1">    
                <Button type='primary'>Get Started</Button>
            </Link>    
            </div>
        </div>
    );
}



export default Home;