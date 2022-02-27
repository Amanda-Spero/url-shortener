import React, {useState} from 'react';
import {AiFillMinusCircle, AiFillPlusCircle, AiTwotoneEdit} from "react-icons/ai";
import {CgTab} from "react-icons/cg";
import {FaPaperPlane} from "react-icons/fa";
import EditUrlPopover from '../EditUrlPopover/edit-url-popover';

const MyUrlCard = ({url, key, editSidebarActive, setEditSidebarActive, setUrlList, editPopoverRef}) => {
    const [expanded, setExpanded] = useState(false);

    function handleExpand() {
        let previousState = expanded;
        setExpanded(!previousState);
    }

    function handleEditSidebar() {
        setEditSidebarActive(true);
    }

    function handleNavigate() {
        window.location.href = url.longUrl;
    }

    function handleNewTab() {
        window.open(url.longUrl, '_blank');
    }

    let displayShortUrl = (!expanded && !url.prettyUrl) || expanded;

    return (
        <>
            <div className="my-url-card" key={key}>
                <div className="card-buttons-container">
                    {!expanded && <button type="button" className="icon-button" onClick={handleExpand}><AiFillPlusCircle /></button>}
                    {expanded && <button type="button" className="icon-button" onClick={handleExpand}><AiFillMinusCircle /></button>}
                    <button type="button" onClick={handleEditSidebar} className="icon-button"><AiTwotoneEdit /></button>
                    <EditUrlPopover id={url.id} editSidebarActive={editSidebarActive} setEditSidebarActive={setEditSidebarActive} setUrlList={setUrlList} editPopoverRef={editPopoverRef} />
                    <button type="button" onClick={handleNavigate} className="icon-button"><FaPaperPlane />Go To URL</button>
                    <button type="button" onClick={handleNewTab} className="icon-button"><CgTab />Open URL in New Tab</button>
                </div>
                {url.prettyUrl && <div className="my-url-card-type">
                    <div className="my-url-card-header">Pretty Url</div>
                    <a href={url.prettyUrl}>{url.prettyUrl}</a>
                </div>}
                {displayShortUrl && <div className="my-url-card-type">
                    <div className="my-url-card-header">Short Url</div>
                    <a href={url.shortUrl}>{url.shortUrl}</a>
                </div>}
                {expanded && <div className="my-url-card-type">
                    <div className="my-url-card-header">Original Url</div>
                    <a href={url.longUrl}>{url.longUrl}</a>
                </div>}
                {expanded && url.memo && <div className="my-url-card-type">
                    <div className="my-url-card-header">Memo</div>
                    <div>{url.memo}</div>
                </div>}
            </div>
        </>
    )
}

export default MyUrlCard;

