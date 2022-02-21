import React from 'react';
import MyUrlCard from './/my-url-card';
import './my-urls-styles.css';

const MyUrls = ({urlList}) => {
    return (
        <div className="my-urls-container">
            <div>My Urls List</div>
            {urlList && urlList.map((url, index) => {
                return <MyUrlCard url={url} key={index} />;
            })}
        </div>
    );
}

export default MyUrls