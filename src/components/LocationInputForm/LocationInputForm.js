import React, {useState} from "react";
import "./LocationInputForm.css";

const LocationInputForm = ({setLocation}) => {

  const [value, setValue]=useState('');
  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") setLocation(value);
    else throw new Error('invalid location');
  }
  
  
  return ( 
    // Input form for changing the location
    // add in temperature toggle and finish styling
   <>
    <form className="locationForm" onSubmit={handleSubmit}>
      <label > Enter your location:</label>
      <input name="locationInput" type="text" value={value} onChange={handleValue} />
    </form>
   </>
  );
}

export default LocationInputForm;