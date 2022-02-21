import React, {useEffect, useState} from 'react';
import {nanoid} from 'nanoid'
import ErrorMessage from './error-message';
import validateUrl from './validate-url';

const Home = () => {
    const [newUrl, setNewUrl] = useState('');
    const [validationError, setvalidationError] = useState(false);

    function handleChange(event) {
        setNewUrl(event.target.value)
    }

    async function onSubmit(event) {
        event.preventDefault();

        // if (validateUrl(url)) {
        //     setvalidationError(false);
            let id = nanoid();
            // await db.collection("urls").add({
            //     id,
            //     longUrl: newUrl,
            //     shortUrl: '',
            //     prettyUrl: ''
            // });
        // } else {
        //     setvalidationError(true);
        // }
    }

    function handleClear() {
        setNewUrl('');
    }

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