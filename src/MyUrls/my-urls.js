import React from 'react';
import MyUrlCard from './/my-url-card';
import './my-urls-styles.css';

const MyUrls = ({urlList}) => {
    return (
        <div className="my-urls-container">
            <h3>My Urls</h3>
            {urlList && urlList.map((url, index) => {
                return <MyUrlCard url={url} key={index} />;
            })}
        </div>
    );
}

export default MyUrls