import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Chart from "../components/chart";

class ChartContainer extends Component {

	render() {
		//handle weather data
		const cityData = this.props.weather;
		const weatherList = cityData.list;
		let cityName = "";
		let iconUrl = [];
		let tempList = [];
		let timePoints = [];
		let humidity = [];
		let rain = [];
		let description = [];

		// map weather data when it's fetched
		if (this.props.fetched) {
			cityName = cityData.city.name;
			tempList = weatherList.map(weatherItem => weatherItem.main.temp);

			iconUrl = weatherList.map(weatherItem => {
				return `http://openweathermap.org/img/w/${
					weatherItem.weather[0].icon
				}.png`;
			});

			timePoints = weatherList.map(weatherItem => {
				const s = weatherItem.dt;
				const date = moment.unix(s).calendar();
				return date;
			});

			humidity = weatherList.map(weatherItem => weatherItem.main.humidity);

			rain = weatherList.map(weatherItem => {
				if (!weatherItem.rain) {
					return 0;
				} else if (!weatherItem.rain["3h"]) {
					return 0;
				} else {
					return weatherItem.rain["3h"].toFixed(2);
				}
			});

			description = weatherList.map(
				weatherItem => weatherItem.weather[0].description
			);
		}

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
					<h1>{'Error '+cod + ", " + message}</h1>
					<p>{bonusMessage}</p>
				</div>
			);
		}

		return (
			<div className="bg-light ">
				{this.props.fetched ? (
					<Chart
						cityName={cityName}
						temps={tempList}
						timePoints={timePoints}
						humidity={humidity}
						rain={rain}
						description={description}
						iconUrl={iconUrl}
					/>
				) : (
					<h1 className="alert alert-primary">Loading</h1>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		fetched: state.fetched,
		weather: state.weather,
		error: state.error
	};
}
export default connect(mapStateToProps)(ChartContainer);
