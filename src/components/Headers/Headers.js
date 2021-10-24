import React from 'react';
import { Link } from 'react-router-dom';
import "./Headers.css"

const Headers = () => {
    return (
        <div>
            <Link className="headerStyle" to="/home">Home</Link>
            <Link className="headerStyle" to="/users">Users</Link>
            <Link className="headerStyle" to="/user/add">AddUser</Link>
        </div>
    );
};

export default Headers;