import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
// import { mapData } from "../selectors";

import Chart from "../components/chart";

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
        <Chart />
      </div>
    );
  }
}


const mapStateToProps = ({error, isFetching}) => ({
  error,
  isFetching
});

export default connect(mapStateToProps)(ChartContainer);
