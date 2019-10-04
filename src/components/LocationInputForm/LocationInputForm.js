import React, {useState} from "react";
import "./LocationInputForm.css";

const LocationInputForm = ({setLocation, setMetricTemp, metricTemp}) => {

  const [value, setValue]=useState('');
  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") setLocation(value);
    else throw new Error('invalid location');
  }
  
  const tempToggle = metricTemp ?
  <button onClick={() => {setMetricTemp(false)}}> Kelvin </button >:
  <button onClick ={() =>{setMetricTemp(true)}}> Celsius </button>;  

  return ( 
    // Input form for changing the location
    // add in temperature toggle and finish styling
   <>
   <form onSubmit={handleSubmit}>
    <label>
      Enter Your Location:
      <input name="locationInput" type="text" value={value} onChange={handleValue} />
    </label>
     {tempToggle}
  </form>
  </>
  );
}

export default LocationInputForm;