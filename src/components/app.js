import React from "react";

import ChartContainer from "../containers/ChartContainer";
import Header from "../containers/header";
import CurrentWeather from "../containers/currentWeather";

const App = () => (
  <div>
    <Header />
    <CurrentWeather />
    <ChartContainer />
  </div>
);

export default App;
