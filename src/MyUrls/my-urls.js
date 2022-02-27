import React, {useEffect, useRef, useState} from 'react';
import MyUrlCard from './/my-url-card';
import './my-urls-styles.css';

const MyUrls = ({urlList, setUrlList}) => {
    const [editSidebarActive, setEditSidebarActive] = useState(false);
    const activeClass = editSidebarActive ? ' active' : '';
    let editPopoverRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!editPopoverRef.current.contains(event.target)) {
                setEditSidebarActive(false)
            }
        })

    })

    return (
        <>
            <div className="my-urls-container">
                <h3>My Urls</h3>
                {urlList && urlList.map((url) => {
                    return <MyUrlCard url={url} key={url.id} editSidebarActive={editSidebarActive} setEditSidebarActive={setEditSidebarActive} setUrlList={setUrlList} editPopoverRef={editPopoverRef} />;
                })}
            </div>
            <div className={`overlay${activeClass}`}></div>
        </>
    );
}

export default MyUrls