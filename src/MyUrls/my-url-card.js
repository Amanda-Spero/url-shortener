import React from 'react';

const MyUrlCard = ({url, key}) => {


    return (
        <div key={key}>
            <div>
                <span>Pretty Url</span>
                <span>{url.prettyUrl}</span>
            </div>
            <div>
                <span>Short Url</span>
                <span>{url.shortUrl}</span>
            </div>
            <div>
                <span>Original Url</span>
                <span>{url.longUrl}</span>
            </div>
        </div>
    )
}

export default MyUrlCard;

