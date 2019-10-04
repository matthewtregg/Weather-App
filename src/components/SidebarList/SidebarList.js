import React from "react";
import "./SidebarList.css";
import SidebarLocation from "../SidebarLocation/SidebarLocation";

const SidebarList = ({locationHistory}) => {

  //list of up to five sidebar locations that a user can save in past searches
  const locationHistories = locationHistory ? locationHistory.map((history) => {
   return <SidebarLocation key={history.name} history={history}></SidebarLocation>
  }): <div>No History</div>;
  
  return ( 
    <div className="SidebarList">
      <p> Select a weather history </p>
       {locationHistories} 
    </div>
  );
}

export default SidebarList;


 