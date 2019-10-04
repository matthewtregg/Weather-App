import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({weatherData, metricTemp}) => {
 
  const weatherDetails = weatherData ?
   <div className="weatherDetails">
      <p className="location">{weatherData.name.toUpperCase()}</p>
      <p className="temperature">{metricTemp? `${weatherData.main.temp} ${String.fromCharCode(176)} C`:`${weatherData.main.temp} K`}</p>
      <p>{`${weatherData.main.pressure} hpa`}</p>
      <p>{`${weatherData.main.humidity} %`}</p>
    </div>: <div> location not loaded</div>;
  
  return ( 
   weatherDetails
  );
}

export default WeatherInfo;