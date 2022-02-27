import React, {useEffect, useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import validateUrl from '../validate-url';
import ErrorMessage from '../error-message';
import './home-styles.css';
import { nanoid } from 'nanoid'


const Home = () => {
    const [newUrl, setNewUrl] = useState('');
    const [validationError, setvalidationError] = useState(false);
    const urlsCollectionRef = collection(db, "urls");

    function handleChange(event) {
        setNewUrl(event.target.value)
    }

    let randomId;
    function createRandomId () {
        randomId = nanoid(5)
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        let isValid = validateUrl(newUrl);
        console.log(isValid)
        if (validateUrl(newUrl)) {
            createRandomId();
            setvalidationError(false);
            await addDoc(urlsCollectionRef, {
                id: randomId,
                longUrl: newUrl,
                shortUrl: `ittybittyurl/${randomId}`
            })
            setNewUrl('');
        } else {
            setvalidationError(true);
            alert('error')
        }
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
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    )

}

export default Home;