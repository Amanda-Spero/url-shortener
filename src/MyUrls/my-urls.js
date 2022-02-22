import React from 'react';
import MyUrlCard from './/my-url-card';
import './my-urls-styles.css';

const MyUrls = ({urlList, setEditSidebarActive}) => {
    return (
        <div className="my-urls-container">
            <h3>My Urls</h3>
            {urlList && urlList.map((url) => {
                return <MyUrlCard url={url} key={url.id} setEditSidebarActive={setEditSidebarActive} />;
            })}
        </div>
    );
}

export default MyUrls