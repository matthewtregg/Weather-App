import React from "react";
import CoreWeatherAppContainer from "../../containers/CoreWeatherAppContainer";
import Sidebar from "../SidebarList/SidebarList";
import "./WeatherApp.css";

const WeatherApp = ({locationHistory, setLocation}) => {
  // Main weather placeholder with the weather app Title and sidebar
  return ( 
    <div className="MainWindow">
      <Sidebar locationHistory={locationHistory} setLocation={setLocation}></Sidebar> 
    <div className="WeatherAppBackground">
      <h1> Your weather </h1>
      <div className="MainWeatherAppWindow">
        <CoreWeatherAppContainer></CoreWeatherAppContainer>
      </div>
    </div>
    </div>
  );
}

export default WeatherApp;