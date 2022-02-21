import React from 'react';

const MyUrlCard = ({url, key}) => {
    return (
        <div className="my-url-card" key={key}>
            <div className="my-url-card-type">
                <div className="my-url-card-header">Pretty Url</div>
                <div>{url.prettyUrl}</div>
            </div>
            <div className="my-url-card-type">
                <div className="my-url-card-header">Short Url</div>
                <div>{url.shortUrl}</div>
            </div>
            <div className="my-url-card-type">
                <div className="my-url-card-header">Original Url</div>
                <div>{url.longUrl}</div>
            </div>
        </div>
    )
}

export default MyUrlCard;

