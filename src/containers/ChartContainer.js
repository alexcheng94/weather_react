import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Chart from "./chart";
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
      <div className="bg-light container">
        {this.props.isFetching ? (
          <ProgressBar />
        ) : (
          <div style={{ height: "5px" }} />
        )}
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = ({ error, isFetching }) => ({
  error,
  isFetching
});

export default connect(mapStateToProps)(ChartContainer);
