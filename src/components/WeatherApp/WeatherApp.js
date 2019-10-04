import React from "react";
import CoreWeatherAppContainer from "../../containers/CoreWeatherAppContainer";
import Sidebar from "../SidebarList/SidebarList";
import "./WeatherApp.css";
// flexbox left to right

const WeatherApp = ({locationHistory, setLocation}) => {

  return ( 
    <div className="MainWindow">
    <Sidebar locationHistory={locationHistory} setLocation={setLocation}></Sidebar> 
    <div className="WeatherAppBackground">
      <h1> Your Weather </h1>
      <div className="MainWeatherAppWindow">
      <CoreWeatherAppContainer></CoreWeatherAppContainer>
      </div>
    </div>
    </div>
  );
}

export default WeatherApp;