import React from "react";
import "./CoreWeatherWindow.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import LocationInputForm from "../LocationInputForm/LocationInputForm";
import RefreshInfo from "../RefreshInfo/RefreshInfo";

const CoreWeatherWindow = ({weatherData, setLocation, setMetricTemp, metricTemp, refreshSecs}) => {
  
  return ( 
    <div className="CoreApp">
      <div className="weatherInfo">
        <LocationInputForm setLocation={setLocation}  setMetricTemp={setMetricTemp} metricTemp={metricTemp} ></LocationInputForm> 
        <WeatherInfo weatherData={weatherData} metricTemp={metricTemp}></WeatherInfo>
        <RefreshInfo refreshSecs={refreshSecs} ></RefreshInfo>
      </div>
    </div>
  );
}

export default CoreWeatherWindow;