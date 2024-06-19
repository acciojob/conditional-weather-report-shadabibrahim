
import React, { useState, useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const lat = 26.81, lon = 82.76;
const apiKey = "65e6c064c2e37e1fc86b9fd9f7d9c701";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
const App = () => {
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [weatherCondition,setWeatherCondition] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((report) => {
        setWeatherTemp(report.main.temp)
        setWeatherCondition(report.weather[0].main)
        // console.log(report.main)
      })
      .catch((error) => alert(error.message))
  }, [])
  
  return (
    <div>
      <WeatherDisplay temperature ={weatherTemp} condition={weatherCondition}/>
    </div>
  )
}

export default App
