import React, {useEffect, useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import validateUrl from '../validate-url';
import ErrorMessage from '../error-message';
import './home-styles.css';



const Home = () => {
    const [newUrl, setNewUrl] = useState('');
    const [validationError, setvalidationError] = useState(false);
    const urlsCollectionRef = collection(db, "urls");

    function handleChange(event) {
        setNewUrl(event.target.value)
    }


    async function onSubmit(event) {
        event.preventDefault();

        // if (validateUrl(url)) {
        //     setvalidationError(false);
        // await db.collection("urls").add({
            //     id,
            //     longUrl: newUrl,
            //     shortUrl: '',
            //     prettyUrl: ''
            // });
        // } else {
        //     setvalidationError(true);
        // }


        await addDoc(urlsCollectionRef, {
            longUrl: newUrl
            // shortUrl: `https://tiny.url/${randomId}`
        })
    }

    function handleClear() {
        setNewUrl('');
    }

    return (
        <div className="home">
            {validationError && <ErrorMessage />}
            <form>
                <h3>Enter url to shorten</h3>
                <input type="text" id="url-input" value={newUrl} onChange={handleChange} />
                <button type="submit" onClick={onSubmit}>Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    )

}

export default Home;