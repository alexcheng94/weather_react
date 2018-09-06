import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorAlert from "../components/errorAlert";
import Chart from "./chart";
import CurrentWeather from "./CurrentWeather";

class ChartContainer extends Component {
  render() {
    return (
      <div className="chartContainer col-md-8 mx-auto">
        {this.props.error ? <ErrorAlert errorData={this.props.error} /> : null}
        <CurrentWeather />
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(mapStateToProps)(ChartContainer);
