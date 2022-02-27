import React, {useEffect, useRef, useState} from 'react';
import MyUrlCard from './/my-url-card';
import './my-urls-styles.css';

const MyUrls = ({urlList, setUrlList}) => {
    const [editSidebarActive, setEditSidebarActive] = useState(false);
    const [deletePopoverActive, setDeletePopoverActive] = useState(false);
    const activeClass = editSidebarActive ? ' active' : '';
    let editPopoverRef = useRef();
    let deletePopoverRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!editPopoverRef.current.contains(event.target)) {
                setEditSidebarActive(false)
            }

            if (!deletePopoverRef.current.contains(event.target)) {
                setDeletePopoverActive(false)
            }
        })

    })

    return (
        <>
            <h3>My Urls</h3>
            <div className="my-urls-container">
                {urlList && urlList.map((url) => {
                    return <MyUrlCard 
                        url={url} 
                        key={url.id} 
                        editSidebarActive={editSidebarActive} 
                        setEditSidebarActive={setEditSidebarActive} 
                        setUrlList={setUrlList} 
                        editPopoverRef={editPopoverRef}
                        deletePopoverRef={deletePopoverRef}
                        deletePopoverActive={deletePopoverActive} 
                        setDeletePopoverActive={setDeletePopoverActive} 
                    />;
                })}
            </div>
            <div className={`overlay${activeClass}`}></div>
        </>
    );
}

export default MyUrls