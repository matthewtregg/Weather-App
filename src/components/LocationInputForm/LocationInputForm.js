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
   <form onSubmit={handleSubmit}>
    <label>
      Enter Your Location:
      <input type="text" value={value} onChange={handleValue} />
    </label>
  </form>
  </>
  );
}

export default LocationInputForm;