import React from 'react';
import {doc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import {RiCloseLine} from "react-icons/ri";
import './delete-url-popover-styles.css';

const DeleteUrlPopover = ({url, deletePopoverActive, setDeletePopoverActive, setUrlList, deletePopoverRef}) => {
    const urlsDocRef = doc(db, "urls", url.id);
    const urlsCollectionRef = collection(db, "urls");

    console.log('here', url)
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

    async function handleDelete(event) {
        console.log('here again')
        event.preventDefault();
        await deleteDoc((urlsDocRef));
        setDeletePopoverActive(false);
        refreshUrlList();
    }

    function handleClose() {
        setDeletePopoverActive(false);
    }

    const className = deletePopoverActive ? ' active' : '';

    return (
        <div ref={deletePopoverRef} className={`edit-url-popover${className}`}>
            <div className="edit-url-popover-header">
                <h3 className="title">Delete Your Itty Bitty URL</h3>
                <button type="button" className="close-button" onClick={handleClose} ><RiCloseLine size="2em"/></button>
            </div>
            <div className="edit-url-popover-body">
                <div>Are you sure you want to delete your Itty Bitty URL?</div>
                <div>
                    <button type="button" onClick={handleDelete}>Yes, Delete URL</button>
                    <button type="button" onClick={handleClose}>No, Keep this URL</button>
                </div>
            </div>
        </div>
    )

}

export default DeleteUrlPopover;