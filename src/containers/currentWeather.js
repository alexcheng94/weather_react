import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

function getRain(rain) {
  //rain in the response object have 4 possible situations
  //1. no "rain" key at all
  if (!rain) {
    return 0;
  }
  //2. rain:{"3h": ...}
  if ("3h" in rain) {
    return Math.round(rain["3h"])
  }
  //3. rain: {"1h": ...}
  if ("1h" in rain) {
    return Math.round(rain["1h"])
  }
  //4. rain:{empty}
  return 0;
}

class currentWeather extends Component {
  render() {
    const {
      name,
      dt,
      wind,
      main,
      weather,
      isFetchingCurrent,
      rain
    } = this.props;
    if (isFetchingCurrent) {
      return <h1 className="text-center">Loading...</h1>;
    }
    const day = moment.unix(dt).format("dddd");
    const time = moment.unix(dt).format("h a");

    return (
      <div className=" col-md-8 mx-auto mb-3">
        <div className="card currentWeather bg-light mx-auto rounded">
          <div className="card-body">
            <div className="card-left text-secondary">
              <h4>{isFetchingCurrent ? "Loading..." : name}</h4>
              <div className='time'>
                <p>{time}</p>
                <p>{day}</p>
              </div>
            </div>
            <div className="card-middle">
              <div className="card-middle-top">
                <img
                  src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                  alt="weather icon"
                />
                <span className="display-4">
                  {Math.round(main.temp)}
                  &deg;
                </span>
                <span>C</span>
              </div>
              <p>{weather[0].main}</p>
            </div>
            <div className="card-right text-secondary">
              <p>{`Rain Fall: ${getRain({ rain })} mm`}</p>
              <p>{`Humidity: ${main.humidity} %`}</p>
              <p>{`Wind: ${wind.speed} m/s`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isFetchingCurrent, current }) => ({
  name: current.name,
  clouds: current.clouds,
  dt: current.dt,
  main: current.main,
  weather: current.weather,
  wind: current.wind,
  rain: current.rain,
  isFetchingCurrent
});

export default connect(
  mapStateToProps,
  null
)(currentWeather);
