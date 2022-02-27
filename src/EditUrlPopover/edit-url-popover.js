import React, {useState} from 'react';
import {doc, updateDoc} from "firebase/firestore";
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import {RiCloseLine} from "react-icons/ri";
import './edit-url-popover-styles.css';

const EditUrlSidebar = ({url, editSidebarActive, setEditSidebarActive, setUrlList, editPopoverRef}) => {
    const [newUrlName, setNewUrlName] = useState('');
    const [newShortUrl, setNewShortUrl] = useState('');
    const [newMemo, setNewMemo] = useState('');
    const urlsDocRef = doc(db, "urls", url.id);
    const urlsCollectionRef = collection(db, "urls");

    async function refreshUrlList() {
        let data;
        let dataArray = [];
        const getUrls = async () => {
            data = await getDocs(urlsCollectionRef);
            data.docs.map((doc, i) => (
              setUrlList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ))
        }
    
        getUrls();
        setUrlList(dataArray)
    }

    function handleUrlNameChange(event) {
        setNewUrlName(event.target.value)
    }

    function handleNewUrlChange(event) {
        setNewShortUrl(event.target.value)
    }

    function handleMemoChange(event) {
        setNewMemo(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await updateDoc(urlsDocRef, {
            urlName: newUrlName || url.urlName,
            shortUrl: newShortUrl || url.shortUrl,
            memo: newMemo || url.memo
        });
        setEditSidebarActive(false);
        refreshUrlList();
    }


    function handleClear() {
        setNewUrlName('');
        setNewShortUrl('');
        setNewMemo('');
    }

    function handleClose() {
        setEditSidebarActive(false);
    }

    const className = editSidebarActive ? ' active' : '';

    return (
        <div ref={editPopoverRef} className={`edit-url-popover${className}`}>
            <div className="edit-url-popover-header">
                <h3 className="title">Customize Your URL</h3>
                <button type="button" className="close-button" onClick={handleClose} ><RiCloseLine size="2em"/></button>
            </div>
            <div className="edit-url-popover-body">
                <form>
                    <div>Name Your URL</div>
                    <input type="text" className="url-input" value={newUrlName} onChange={handleUrlNameChange} />
                    <div>Customize Your Itty Bitty Url</div>
                    <input type="text" className="url-input" value={newShortUrl} onChange={handleNewUrlChange} />
                    <div>Add a Memo</div>
                    <textarea rows="4" cols="50" className="url-input memo" value={newMemo} onChange={handleMemoChange} />
                    <div className="bottom-button-container">
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                        <button type="button" onClick={handleClear}>Clear</button>
                        {/* <button type="button" onClick={handleDelete}>Delete This URL</button> */}
                    </div>
                </form>
                <div></div>
                <div></div>
            </div>
        </div>
    )

}

export default EditUrlSidebar;