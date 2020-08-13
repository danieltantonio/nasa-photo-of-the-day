import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import Navbar from './components/Navbar/Navbar'
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  const [imgData, setImgData] = useState('');

   useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      console.log(res.data)
      setImgData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])


  return (
    <div className="App">
      <Navbar />
      <ContentSection data={imgData}  />
    </div>
  );
}

export default App;
