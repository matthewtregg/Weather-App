import React, {useEffect, useState, useContext} from "react";
import {WeatherAppContext} from "./WeatherAppContainer";


const CoreWeatherAppContainer = () => {

const { setLocationHistory, setLocation, location, locationHistory} = useContext(WeatherAppContext);
const [refresh, setRefresh] = useState(0); 
const [secs, setSecs] = useState(0);



  const saveLocationHistory = (data) => {
    // check if weather information already exists
    const savedLocation = locationHistory.filter(history => history.name === data.name)
    // check if weather new weather location and 5 locations not already stored 
    if (locationHistory.length < 5 && savedLocation.length === 0 ) {
      setLocationHistory (history => [...history,data]) 
    }
    // if saved location already exists
    else if (savedLocation.length > 0) {
      const otherLocations = locationHistory.filter(history => history.name !== data.name)
      setLocationHistory ([...otherLocations,data]) 
    }
      
  }

  useEffect(() => {
    console.log(secs);
    const seconds = setTimeout(function () {
      setSecs(secs => secs + 1);
    }, 1000);
    if (secs >= 60) {
      clearInterval(seconds);
      setRefresh(refresh => refresh + 1);
    }
  }, [secs])


  useEffect(() => {

    // check location history for metricTemp
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},uk&units=metric&appid=46f3fbf526892ce35ec9013d2368d07c`) 
      .then((res) => res.json())
      .then((data) => {
        saveLocationHistory(data);
        setSecs(0);
      });

  }, [refresh, location])





  return ( // TODO: Replace this with your application code
    <div className="App">
      {/* <header className="App-header">
        <ExampleComp />
      </header> */}
    </div>
  );
}

export default CoreWeatherAppContainer;