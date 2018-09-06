import React from "react";

const ProgressBar = () => (

    <div
      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
      role="progressbar"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: "100%", height: "5px"}}
    />

);
export default ProgressBar;
