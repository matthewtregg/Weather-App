import React from "react";
import "./CoreWeatherWindow.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import LocationInputForm from "../LocationInputForm/LocationInputForm";

const CoreWeatherWindow = ({weatherData, setLocation, setMetricTemp, metricTemp, refreshSecs}) => {
  
  return ( 
    <div className="CoreApp">
        <div className="weatherInfo">
          <LocationInputForm setLocation={setLocation} setMetricTemp={setMetricTemp} metricTemp={metricTemp} ></LocationInputForm> 
          <WeatherInfo weatherData={weatherData} metricTemp={metricTemp} ></WeatherInfo>
        <div className="refreshInfo">
          <p>{`Refreshing in ${60 - refreshSecs} seconds`}</p>
          <p>{`Refreshed ${refreshSecs} secs ago`}</p>
        </div>
        </div>
    </div>
  );
}

export default CoreWeatherWindow;