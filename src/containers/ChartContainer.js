import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "./chart";
import CurrentWeather from "../components/currentWeather";
import ProgressBar from "../components/progress";

class ChartContainer extends Component {
  render() {
    // handle error messages
    if (this.props.error) {
      const { error } = this.props;
      const { cod, message } = error;
      let bonusMessage = "";
      if (cod === "404") {
        bonusMessage = "Please make sure you entered the correct city name";
      } else if (cod === "400") {
        bonusMessage = "Please enter a city name";
      }
      return (
        <div className="alert alert-danger">
          <h1>{"Error " + cod + ", " + message}</h1>
          <p>{bonusMessage}</p>
        </div>
      );
    }
    return (
      <div className="bg-light chartContainer  col-md-8 mx-auto">
        <CurrentWeather current={this.props.current} isFetching={this.props.isFetching}/>
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = ({ error, isFetching, current}) => ({
  error,
  isFetching,
  current
});

export default connect(mapStateToProps)(ChartContainer);
