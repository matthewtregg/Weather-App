import React from "react";
import "./SidebarList.css";

// - two things testing 
// and Css styling
const SidebarList = ({locationHistory,setLocation}) => {
  const locationHistories = locationHistory ? locationHistory.map((history) => {
   return <div key={history.name} onClick={()=>{setLocation(history.name)}}>{history.name}</div>
  }): <div>No History</div>;
  
  return ( 
    <div className="Sidebar">
      <p> Weather History </p>
       {locationHistories} 
    </div>
  );
}

export default SidebarList;