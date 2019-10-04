import React, {useState} from "react";
import WeatherApp from "../components/WeatherApp/WeatherApp";
export const WeatherAppContext = React.createContext(null);

export const WeatherAppContainer = () => {
  
const [locationHistory, setLocationHistory] = useState([])
const [location, setLocation] = useState('London');

  return ( 
      <WeatherAppContext.Provider value={{setLocationHistory, setLocation, location, locationHistory}}>
        <WeatherApp locationHistory={locationHistory} setLocation={setLocation}></WeatherApp> 
      </WeatherAppContext.Provider>
  );
}

export default WeatherAppContainer;

//e0b01f