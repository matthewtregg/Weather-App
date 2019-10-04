import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({weatherData}) => {
  let weatherDetails = "";
  if (weatherData ) {
    weatherDetails = <div className="weatherDetails">
      <p>{weatherData.name}</p>
      <p>{`${weatherData.main.temp} ${String.fromCharCode(176)} C`}</p>
      <p>{`${weatherData.main.pressure} hpa`}</p>
      <p>{`${weatherData.main.humidity} %`}</p>
    </div>;
  } 
  else {
    weatherDetails = null;
  }
  
  return ( 
    weatherDetails
  );
}

export default WeatherInfo;
