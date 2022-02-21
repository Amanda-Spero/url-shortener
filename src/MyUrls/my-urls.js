import React from 'react';
import MyUrlCard from './/my-url-card';

const MyUrls = ({urlList}) => {
    return (
        <>
            <div>My Urls List</div>
            {urlList && urlList.map((url, index) => {
                return <MyUrlCard url={url} key={index} />;
            })}
        </>
    );
}

export default MyUrls