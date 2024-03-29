import React, {useContext} from "react";
import "./SidebarLocation.css";
import {WeatherAppContext} from "../../containers/WeatherAppContainer";

const SidebarLocation = ({history}) => {
  // individual sidebar history that a user can select to view again
  const {setLocation} = useContext(WeatherAppContext);

  return ( 
    <div className="SidebarLocation">
      <div onClick={()=>{setLocation(history.name)}}>
      {history.name}
      </div>
    </div>
  );
}

export default SidebarLocation;



