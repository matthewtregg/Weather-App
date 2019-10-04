import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({weatherData, metricTemp}) => {
 
  const weatherDetails = weatherData ?
   <div className="weatherDetails">
      <p>{weatherData.name}</p>
      <p className="temperature">{metricTemp? `${weatherData.main.temp} ${String.fromCharCode(176)} C`:`${weatherData.main.temp} K`}</p>
      <p>{`${weatherData.main.pressure} hpa`}</p>
      <p>{`${weatherData.main.humidity} %`}</p>
    </div>: <div> loading</div>;
  
  return ( 
   weatherDetails
  );
}

export default WeatherInfo;