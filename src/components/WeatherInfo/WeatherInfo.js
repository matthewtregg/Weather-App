import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({weatherData, metricTemp}) => {
 
  const weatherDetails = weatherData ?
   <div className="weatherDetails">
      <p>{weatherData.name}</p>
      <p>{metricTemp? `${weatherData.main.temp} ${String.fromCharCode(176)} C`:`${weatherData.main.temp} K`}</p>
      <p>{`${weatherData.main.pressure} hpa`}</p>
      <p>{`${weatherData.main.humidity} %`}</p>
    </div>: null;
  
  return ( 
   weatherDetails
  );
}

export default WeatherInfo;