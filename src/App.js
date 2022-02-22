import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './NavSidebar/nav-sidebar';
import EditUrlSidebar from './EditSidebar/edit-url-sidebar';
import Home from './Home/home';
import MyUrls from './MyUrls/my-urls';
import {db} from './firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import './App.css';

function App() {
  const [urlList, setUrlList] = useState([]);
  const [editSidebarActive, setEditSidebarActive] = useState(false);
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
    setUrlList(dataArray)

    getUrls();

}, [])

  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/my-lists" element={<MyUrls urlList={urlList} setEditSidebarActive={setEditSidebarActive} />} />
        </Routes>
      </BrowserRouter>
      {editSidebarActive && <EditUrlSidebar editSidebarActive={editSidebarActive}/>}
    </div>
  );
}

export default App;
