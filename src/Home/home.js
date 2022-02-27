import React, {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';
import {nanoid} from 'nanoid'
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
        }
    }

    function handleClear() {
        setNewUrl('');
        setvalidationError(false);
    }

    return (
        <>
            <h3>Enter the URL to Shorten</h3>
                <form className="shorten-link-form">
                    <input type="text" value={newUrl} onChange={handleChange} />
                    <div className="shorten-button-container">
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                        <button type="button" onClick={handleClear}>Clear</button>
                    </div>
                </form>
                {validationError && <ErrorMessage />}
        </>
    )

}

export default Home;