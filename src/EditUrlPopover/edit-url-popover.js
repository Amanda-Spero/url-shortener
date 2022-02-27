import React, {useRef, useState} from 'react';
import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import {RiCloseLine} from "react-icons/ri";
import './edit-url-popover-styles.css';

const EditUrlSidebar = ({id, editSidebarActive, setEditSidebarActive, setUrlList, editPopoverRef}) => {
    const [urlName, setUrlName] = useState('');
    const [prettyUrl, setPrettyUrl] = useState('');
    const [memo, setMemo] = useState('');
    const urlsDocRef = doc(db, "urls", id);
    const urlsCollectionRef = collection(db, "urls");

    // let sidebarTransitionClass = editSidebarActive ? 'sidebar-transition-enter' : '';
    // let activeClass = editSidebarActive ? 'active' : '';

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
        setUrlName(event.target.value)
    }

    function handlePrettuUrlChange(event) {
        setPrettyUrl(event.target.value)
    }

    function handleMemoChange(event) {
        setMemo(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await updateDoc(urlsDocRef, {
            urlName,
            prettyUrl,
            memo
        });

        refreshUrlList();
    }

    async function handleDelete(event) {
        event.preventDefault();
        await deleteDoc((urlsDocRef));

    }

    function handleClear(field) {
        setUrlName('');
        setPrettyUrl('');
        setMemo('');
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
                    <div>Name this Url</div>
                    <input type="text" className="url-input" value={urlName} onChange={handleUrlNameChange} />
                    <div>Create Pretty Url</div>
                    <input type="text" className="url-input" value={prettyUrl} onChange={handlePrettuUrlChange} />
                    <div>Add a Memo</div>
                    <textarea rows="4" cols="50" className="url-input memo" value={memo} onChange={handleMemoChange} />
                    <div className="bottom-button-container">
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                        <button type="button" onClick={handleClear}>Clear</button>
                        <button type="button" onClick={handleDelete}>Delete This URL</button>
                    </div>
                </form>
                <div></div>
                <div></div>
            </div>
        </div>
    )

}

export default EditUrlSidebar;