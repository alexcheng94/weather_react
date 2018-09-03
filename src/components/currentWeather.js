import React from "react";

export default props => {
  const {
    isFetching,
    current: { name, clouds, dt, main, weather, wind }
  } = props;
  return (
    <div className="currentWeather">{isFetching ? null : name}</div>
  );
};
