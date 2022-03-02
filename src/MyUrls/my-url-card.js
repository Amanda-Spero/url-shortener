import React, {useState} from 'react';
import {doc} from "firebase/firestore";
import {db} from '../firebase-config';
import {AiFillMinusCircle, AiFillPlusCircle, AiTwotoneEdit} from "react-icons/ai";
import {CgTab} from "react-icons/cg";
import {RiDeleteBin2Fill} from "react-icons/ri";
import EditUrlPopover from '../EditUrlPopover/edit-url-popover';
import DeleteUrlPopover from '../DeleteUrlPopover/delete-url-popover';

const MyUrlCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    let {
            url, 
            key, 
            editSidebarActive, 
            setEditSidebarActive, 
            setUrlList, 
            editPopoverRef,
            deletePopoverRef,
            deletePopoverActive,
            setDeletePopoverActive
        } = props;
    const urlsDocRef = doc(db, "urls", url.id);

    function handleExpand() {
        let previousState = expanded;
        setExpanded(!previousState);
    }

    function handleEditSidebar() {
        setEditSidebarActive(true);
    }

    function handleDeletePopover() {
        setDeletePopoverActive(true);
    }

    function handleNavigate() {
        window.location.href = url.longUrl;
    }

    function handleNewTab() {
        window.open(url.longUrl, '_blank');
    }

    console.log({url})

    return (
        <>
            <div className="my-url-card" key={key}>
                <div className="card-buttons-container">
                    <div className="card-buttons-left">
                        {!expanded && <button type="button" className="icon-button" onClick={handleExpand}><AiFillPlusCircle size="1.5em" focusable={false} /></button>}
                        {expanded && <button type="button" className="icon-button" onClick={handleExpand}><AiFillMinusCircle size="1.5em"focusable={false} /></button>}
                    </div>
                    <div className="card-buttons-right">
                        <button type="button" onClick={handleEditSidebar} className="icon-button"><AiTwotoneEdit size="1.5em"focusable={false} />Edit My URL</button>
                        <EditUrlPopover 
                            url={url} 
                            editSidebarActive={editSidebarActive} 
                            setEditSidebarActive={setEditSidebarActive} 
                            setUrlList={setUrlList} 
                            editPopoverRef={editPopoverRef} 
                        />
                        <button type="button" onClick={handleDeletePopover} className="icon-button"><RiDeleteBin2Fill size="1.5em"focusable={false} />Delete This URL</button>
                        <DeleteUrlPopover 
                            url={url} 
                            deletePopoverActive={deletePopoverActive} 
                            setDeletePopoverActive={setDeletePopoverActive} 
                            setUrlList={setUrlList} 
                            deletePopoverRef={deletePopoverRef} 
                        />
                        <button type="button" onClick={handleNewTab} className="icon-button"><CgTab size="1.5em" focusable={false} />Open URL in New Tab</button>
                    </div>
                </div>
                <div className="card-body">
                    {url.urlName && <div className="my-url-card-type">
                        <div className="my-url-card-header">URL Name</div>
                        <div>{url.urlName}</div>
                    </div>}
                    <div className="my-url-card-type">
                        <div className="my-url-card-header">Short Url</div>
                        <a href={url.longUrl}>{url.shortUrl}</a>
                    </div>
                    {expanded && <div className="my-url-card-type">
                        <div className="my-url-card-header">Original Url</div>
                        <a href={url.longUrl}>{url.longUrl}</a>
                    </div>}
                    {expanded && url.memo && <div className="my-url-card-type">
                        <div className="my-url-card-header">Memo</div>
                        <div>{url.memo}</div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default MyUrlCard;

