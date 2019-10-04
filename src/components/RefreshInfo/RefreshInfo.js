import React from "react";
import "./RefreshInfo.css";

const RefreshInfo = ({refreshSecs, refreshMinutes}) => {
  
  return ( // TODO: Replace this with your application code
    <div className="refreshInfo">
    <p>{`Refreshing in ${refreshMinutes}m ${60 - refreshSecs}s`}</p>
    <p>{`Refreshed ${refreshSecs}s ago`}</p>
  </div>
  );
}

export default RefreshInfo;