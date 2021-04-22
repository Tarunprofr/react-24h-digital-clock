import React, { useState } from 'react';
//import './App.css';

function App() {

  function getTime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // Adding 0 if Hours & Minutes & Seconds is More or Less than 10
    hours = (hours < 10 ? "0" : "") + hours;
   
    minutes = (minutes < 10 ? "0" : "") + minutes;
    
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    let timeOfDay = (hours < 12) ? "AM" : "PM";
    
    let ctime = (hours + ":" + minutes + ":" + seconds + " " + timeOfDay).toString();
    return ctime;
  }

  const [currentTime, setCTime] = useState(getTime());
  
  
  const UpdateTime = () => {

    let cTime = getTime();
    
    setCTime(cTime);

  };

  setInterval(UpdateTime, 1000);


  return (
    <>
      <h1>{currentTime}</h1>
    </>
  );


}

export default App;
