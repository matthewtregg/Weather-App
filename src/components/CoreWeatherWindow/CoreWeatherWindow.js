import React from "react";
import "./CoreWeatherWindow.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import LocationInputForm from "../LocationInputForm/LocationInputForm";
import RefreshInfo from "../RefreshInfo/RefreshInfo";
import TemperatureToggle from "../TemperatureToggle/TemperatureToggle";

const CoreWeatherWindow = ({weatherData, setLocation, setMetricTemp, metricTemp, refreshSecs, refreshMinutes}) => {
  
  return ( 
    <div className="CoreApp">
      <div className="weatherInfo">
        <TemperatureToggle  setMetricTemp={setMetricTemp} metricTemp={metricTemp}></TemperatureToggle>
        <LocationInputForm setLocation={setLocation} ></LocationInputForm> 
        <WeatherInfo weatherData={weatherData} metricTemp={metricTemp}></WeatherInfo>
        <RefreshInfo refreshSecs={refreshSecs} refreshMinutes={refreshMinutes}></RefreshInfo>
      </div>
    </div>
  );
}

export default CoreWeatherWindow;