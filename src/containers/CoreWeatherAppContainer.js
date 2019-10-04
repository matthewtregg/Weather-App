import React, {useEffect, useState, useContext} from "react";
import {WeatherAppContext} from "./WeatherAppContainer";
import CoreWeatherWindow from "../components/CoreWeatherWindow/CoreWeatherWindow";


const CoreWeatherAppContainer = () => {

const { setLocationHistory, setLocation, location, locationHistory} = useContext(WeatherAppContext);
const [refresh, setRefresh] = useState(0); 
const [secs, setSecs] = useState(0);
const [metricTemp, setMetricTemp] = useState(true);

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
    const seconds = setTimeout(function () {
      setSecs(secs => secs + 1);
    }, 1000);
    if (secs >= 60) {
      clearInterval(seconds);
      setRefresh(refresh => refresh + 1);
    }
  }, [secs])


  // use Effect for API request to get weather data 
  // triggered on change in location or refresh (ie when secs reaches 60)
  useEffect(() => {

    // check location history for metricTemp
    const fetchUrl = metricTemp ?
      `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&units=metric&appid=46f3fbf526892ce35ec9013d2368d07c` :
      `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&appid=46f3fbf526892ce35ec9013d2368d07c`;

    fetch(fetchUrl)
      .then((res) => {
        if (res.status !== 200) throw new Error('location not found');
        return res.json();
      })
      .then((data) => {
        // data.CelsiusTemp = metricTemp ? data.main.temp : null;
        // data.KelvinTemp = metricTemp ? null : data.main.temp;
        saveLocationHistory(data);
        setSecs(0);
      });

  }, [refresh, location, metricTemp])

  // get Weather Data for a location 
  let weatherData = null;
  if (locationHistory.length > 0) {
    const currentLocationData = locationHistory.filter(history => history.name === location)
    if (currentLocationData.length > 0) weatherData = currentLocationData[0];
    else weatherData = null;
  }


  return ( 
    <CoreWeatherWindow weatherData={weatherData} setLocation={setLocation} setMetricTemp={setMetricTemp} metricTemp={metricTemp} refreshSecs={secs}></CoreWeatherWindow>
  );
}

export default CoreWeatherAppContainer;