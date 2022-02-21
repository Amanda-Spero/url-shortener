import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import MyUrls from './MyUrls/my-urls';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="my-urls" element={<MyUrls />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
