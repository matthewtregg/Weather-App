import React from "react";
import "./RefreshInfo.css";

const RefreshInfo = ({refreshSecs, refreshMinutes}) => {
  
  return ( 
    <div className="refreshInfo">
    <p>{`Refreshing in ${0}m ${60 - refreshSecs}s`}</p>
    <p>{`Refreshed ${refreshMinutes}m ${refreshSecs}s ago`}</p>
  </div>
  );
}

export default RefreshInfo;