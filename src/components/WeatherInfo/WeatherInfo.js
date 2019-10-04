import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({weatherData, metricTemp}) => {
  let weatherDetails = "";
  if (weatherData && metricTemp) {
    weatherDetails = <div className="weatherDetails">
      <p>{weatherData.name}</p>
      <p>{`${weatherData.CelsiusTemp} ${String.fromCharCode(176)} C`}</p>
      <p>{`${weatherData.main.pressure} hpa`}</p>
      <p>{`${weatherData.main.humidity} %`}</p>
    </div>;
  } else if (weatherData && !metricTemp) {
    weatherDetails = <div className="weatherDetails">
      <p>{weatherData.name}</p>
      <p>{`${weatherData.KelvinTemp} K`}</p>
      <p>{`${weatherData.main.pressure} hpa`}</p>
      <p>{`${weatherData.main.humidity} %`}</p>
    </div>;
  } else {
    weatherDetails = null;
  }
  
  
  
  return ( 
    weatherDetails
  );
}

export default WeatherInfo;