import React, {useEffect, useState, useContext} from "react";
import {WeatherAppContext} from "./WeatherAppContainer";
import CoreWeatherWindow from "../components/CoreWeatherWindow/CoreWeatherWindow";

const CoreWeatherAppContainer = () => {
// get current location and location history
const {setLocationHistory, setLocation, location, locationHistory} = useContext(WeatherAppContext);
// set number of refreshes made
const [refresh, setRefresh] = useState(0); 
// set secs from refresh
const [secs, setSecs] = useState(0);
// set temperature to be Celsius (ie metric ) or kelvin
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
    // is saved location length is full (ie. more than 5 locations)
    else if (locationHistory.length === 5) {
      const nonFirstLocations = locationHistory.filter((_,index) => index !== 0);
      setLocationHistory([...nonFirstLocations, data]);
    }      
  }
  
  // get Weather information at an existing location in location historys
  const getWeatherDataAtLocation = (locationHistory) => {
    // if there 
    if (locationHistory.length > 0) {
      const currentLocationData = locationHistory.filter(history => history.name === location)
      if (currentLocationData.length > 0) return currentLocationData[0];
      else return null;
    } 
    else {
      return null;
    } 
  }

  // use Effect for one minute refresh
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
    if (location){
    // check location history depending on metricTemp type (ie Kelvin or Celsius)
    const fetchUrl = metricTemp ?
      `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&units=metric&appid=46f3fbf526892ce35ec9013d2368d07c` :
      `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&appid=46f3fbf526892ce35ec9013d2368d07c`;

    fetch(fetchUrl)
      .then((res) => {
        // status is not OK throw error location not found 
        if (res.status !== 200) throw new Error('location not found');
        return res.json();
      })
      .then((data) => {
        saveLocationHistory(data);
        setSecs(0);
      });
    }
  }, [refresh, location, metricTemp])

  // get Weather Data for a location 
  const weatherData = getWeatherDataAtLocation(locationHistory)

  // get minutes and secs until refresh
  const refreshMinutes = Math.floor(secs/60);
  const refreshSecs = refreshMinutes > 0? (secs - (refreshMinutes *60)) : secs


  return ( 
    <CoreWeatherWindow weatherData={weatherData} setLocation={setLocation} setMetricTemp={setMetricTemp} metricTemp={metricTemp} refreshSecs={refreshSecs} refreshMinutes={refreshMinutes}></CoreWeatherWindow>
  );
}

export default CoreWeatherAppContainer;