import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import Navbar from './components/Navbar/Navbar'
import ContentSection from './components/ContentSection/ContentSection';

const initTimeMachine = {
  year: 0,
  month: 0,
  day: 0
}

function App() {
  const [imgData, setImgData] = useState('');
  const [timeMachine, setTimeMachine] = useState(initTimeMachine);

  const onDateChange = (name, value) => {
    setTimeMachine({
      ...timeMachine,
      [name]: value
    })
  };

  const onSubmitChange = data => {
    let month = data.month;
    let day = data.day;

    if(month.length === 1) {
      month = 0 + month
    }

    if(day.length === 1) {
      day = 0 + day
    }

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${data.year}-${month}-${day}`)
      .then(res => {
        console.log(res.data);
        setImgData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      setImgData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])


  return (
    <div className="App">
      <Navbar />
      <ContentSection data={imgData} onDateChange={onDateChange} onSubmitChange={onSubmitChange} timeMachine={timeMachine} />
    </div>
  );
}

export default App;
