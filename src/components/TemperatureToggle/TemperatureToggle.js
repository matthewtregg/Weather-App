import React from "react";
import "./TemperatureToggle.css";

const TemperatureToggle= ({setMetricTemp, metricTemp}) => {
  
  const tempToggle = metricTemp ?
  <button onClick={() => {setMetricTemp(false)}}> Kelvin </button >:
  <button onClick ={() =>{setMetricTemp(true)}}> Celsius </button>;  

  return ( 
    // Input form for changing the location
    // add in temperature toggle and finish styling
   <>
    <div className="tempToggle">
    <label>Temperature toggle: </label>
    {tempToggle}
    </div>
   
   </>
  );
}

export default TemperatureToggle;