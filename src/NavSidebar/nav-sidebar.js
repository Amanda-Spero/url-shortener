import React from 'react';
import './nav-sidebar-styles.css';

const NavSidebar = () => {

    return (
        <div className="nav-sidebar">
            <a href="/">Add a New URL</a>
            <a href="/my-lists">My Urls</a>
        </div>
    );
}

export default NavSidebar;