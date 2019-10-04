import React, {useState} from "react";
import WeatherApp from "../components/WeatherApp/WeatherApp";
export const WeatherAppContext = React.createContext(null);

export const WeatherAppContainer = () => {
// state for location history  
const [locationHistory, setLocationHistory] = useState([])
// state for currently set location (defaults to london as initial location)
const [location, setLocation] = useState('London');

  return ( 
    <WeatherAppContext.Provider value={{setLocationHistory, setLocation, location, locationHistory}}>
      <WeatherApp locationHistory={locationHistory} setLocation={setLocation}></WeatherApp> 
    </WeatherAppContext.Provider>
  );
}

export default WeatherAppContainer;