import React, {useEffect, useState} from 'react';
import {db} from './firebase-config';
import {nanoid} from 'nanoid'
import {collection, getDocs} from 'firebase/firestore';
import ErrorMessage from './error-message';
import validateUrl from './validate-url';

const Home = () => {
    const [newUrl, setNewUrl] = useState('');
    const [urlList, setUrlList] = useState([]);
    const [validationError, setvalidationError] = useState(false);
    const urlsCollectionRef = collection(db, "urls");

    useEffect(() => {
        let data;
        const getUrls = async () => {
            data = await getDocs(urlsCollectionRef);
            let dataArray = [];
            data.docs.map((doc, i) => (
                dataArray.push(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ))
            setUrlList(dataArray)
        }
        getUrls();

    }, [])


    function handleChange(event) {
        setNewUrl(event.target.value)
    }

    async function onSubmit(event) {
        event.preventDefault();

        // if (validateUrl(url)) {
        //     setvalidationError(false);
            let id = nanoid();
            await db.collection("urls").add({
                id,
                longUrl: newUrl,
                shortUrl: '',
                prettyUrl: ''
            });
        // } else {
        //     setvalidationError(true);
        // }
    }

    function handleClear() {
        setNewUrl('');
    }
    console.log('listNow', urlList)

    return (
        <>
            {validationError && <ErrorMessage />}
            <form>
                <h3>Enter url to shorten</h3>
                <input type="text" id="url-input" value={newUrl} onChange={handleChange} />
                <button type="submit" onClick={onSubmit}>Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </>
    )

}

export default Home;