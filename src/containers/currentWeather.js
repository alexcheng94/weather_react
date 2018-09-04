import React, { Component } from "react";
import { connect } from "react-redux";

class currentWeather extends Component {
  render() {
    const { name, dt, wind, main, weather, isFetchingCurrent } = this.props;
    if (isFetchingCurrent) {
      return <h1 className="text-center">Loading...</h1>;
    }

    // const rain = this.props.rain? this.props.rain["3h"].toFixed(2): 0;

    return (
      <div className=" col-md-8 mx-auto mb-3">
        <div className="card currentWeather bg-light mx-auto rounded">
          <div className="card-body">
            <div className="card-left text-secondary">
              <h4>{isFetchingCurrent ? "Loading..." : name}</h4>
              <p>Tuesday 12 pm</p>
              <p>{weather[0].main}</p>
            </div>
            <div className="card-middle">
              <img
                src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt="weather icon"
              />
              <span className="display-4">30&deg;</span>
              <span>C</span>
            </div>
            <div className="card-right text-secondary">
              <p>{`Rain: ${0}%`}</p>
              <p>{`Humidity: ${main.humidity}%`}</p>
              <p>{`Wind: ${wind.speed}m/s`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  isFetchingCurrent,
  current: { name, clouds, dt, main, weather, wind, rain }
}) => ({ name, clouds, dt, main, weather, wind,rain, isFetchingCurrent });

export default connect(
  mapStateToProps,
  null
)(currentWeather);
