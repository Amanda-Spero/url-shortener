import React from 'react';
import Home from '../Home/home';
import MyUrls from '../MyUrls/my-urls';
import './sidebar-styles.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <a href="/">Home</a>
            <a href="/my-lists">My Urls</a>
        </div>
    );
}

export default Sidebar;