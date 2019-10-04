import React, {useState} from "react";
import "./LocationInputForm.css";

const LocationInputForm = ({setLocation}) => {

  const [value, setValue]=useState('');
  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation for if a user enters an invalid empty location
    if (value !== "") setLocation(value);
    else throw new Error('invalid location');
  }
  
  
  return ( 
    // Input form for the  user location to change location
   <>
    <form className="locationForm" onSubmit={handleSubmit}>
      <label > Enter your location:</label>
      <input name="locationInput" type="text" value={value} onChange={handleValue} />
    </form>
   </>
  );
}

export default LocationInputForm;