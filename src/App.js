import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { WEB_URL } from './consts/consts'

import Navbar from './components/Navbar/Navbar'
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  const [imgData, setImgData] = useState('');

   useEffect(() => {
    axios.get(WEB_URL)
    .then(res => {
      setImgData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  })

  return (
    <div className="App">
      <Navbar />
      <ContentSection data={imgData}  />
    </div>
  );
}

export default App;
