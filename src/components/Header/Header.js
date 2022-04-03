import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link className="header-btn" to="/home">HOME</Link>
                <Link className="header-btn" to="/reviews">REVIEWS</Link>
                <Link className="header-btn" to="/dashboard">DASHBOARD</Link>
                <Link className="header-btn" to="/blogs">BLOGS</Link>
                <Link className="header-btn" to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;