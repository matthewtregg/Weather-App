import React from "react";
import "./SidebarList.css";
import SidebarLocation from "../SidebarLocation/SidebarLocation";

const SidebarList = ({locationHistory}) => {
  const locationHistories = locationHistory ? locationHistory.map((history) => {
   return <SidebarLocation key={history.name} history={history}></SidebarLocation>
  }): <div>No History</div>;
  
  return ( 
    <div className="Sidebar">
      <p> Select a weather history </p>
       {locationHistories} 
    </div>
  );
}

export default SidebarList;


 