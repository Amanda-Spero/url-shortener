import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import AddUrl from './AddUrl/add-url';
import MyUrls from './MyUrls/my-urls';
import NavSidebar from './NavSidebar/nav-sidebar';
import './App.css';

function App() {
  const [urlList, setUrlList] = useState([]);
  const urlsCollectionRef = collection(db, "urls");

  useEffect(() => {
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

  }, [])

  return (
    <div className="App">
      <NavSidebar />
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<AddUrl />} />
            <Route path="/my-lists" element={<MyUrls urlList={urlList} setUrlList={setUrlList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
