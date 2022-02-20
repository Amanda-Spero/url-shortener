import React, {useState} from 'react';

const Home = () => {
    const [url, setUrl] = useState('');

    function handleChange(event) {
        setUrl(event.target.value)
    }

    function onSubmit(event) {
        event.preventDefault();
        console.log('submit ', url)
    }

    function handleClear() {
        setUrl('');
    }

    return (
        <>
            <h3>Enter url to shorten</h3>
            <input type="text" id="url-input" value={url} onChange={handleChange} />
            <button type="submit" onClick={onSubmit}>Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </>
    )

}

export default Home;