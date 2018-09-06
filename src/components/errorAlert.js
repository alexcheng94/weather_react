import React, { Component } from "react";

export default class ErrorAlert extends Component {
  render() {
    const { errorData } = this.props;
    const { cod, message } = errorData;
    let bonusMessage = "";
    if (cod === "404") {
      bonusMessage = "Please make sure you entered the correct city name";
    } else if (cod === "400") {
      bonusMessage = "Please enter a city name";
    }
    return (
      <div>
        <div className="alert alert-danger">
          <h4>{"Error " + cod + ", " + message}</h4>
          <p>{bonusMessage}</p>
        </div>
      </div>
    );
  }
}

// handle error messages
