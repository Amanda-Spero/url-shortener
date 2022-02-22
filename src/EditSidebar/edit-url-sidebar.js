import React from 'react';
import './edit-url-sidebar-styles.css';

const EditUrlSidebar = ({editSidebarActive}) => {

    console.log({editSidebarActive})
    let sidebarTransitionClass = editSidebarActive ? 'sidebar-transition-enter' : '';
    let activeClass = editSidebarActive ? 'active' : '';
    return (
        // <div className={`edit-sidebar-transition ${sidebarTransitionClass}`}>
            <div className={`edit-sidebar`}>
                <h3>Edit Your URL</h3>
                <div></div>
                <div></div>
                <div></div>
            </div>
        // </div>
    )

}

export default EditUrlSidebar;