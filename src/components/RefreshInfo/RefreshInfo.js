import React from "react";
import "./RefreshInfo.css";

const RefreshInfo = ({refreshSecs}) => {
  
  return ( // TODO: Replace this with your application code
    <div className="refreshInfo">
    <p>{`Refreshing in ${60 - refreshSecs} seconds`}</p>
    <p>{`Refreshed ${refreshSecs} secs ago`}</p>
  </div>
  );
}

export default RefreshInfo;