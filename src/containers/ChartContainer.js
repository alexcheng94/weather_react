import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Chart from "../components/chart";

class ChartContainer extends Component {
	render() {
		const cityData = this.props.weather[this.props.weather.length - 1] || [];
		const weatherList = cityData.list;
		let cityName = "";
		let iconUrl = [];
		let tempList = [];
		let timePoints = [];
		let humidity = [];
		let rain = [];
		let description = [];

		if (this.props.weather.length > 0) {
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
		return (
			<div className="bg-light ">
				{this.props.weather.length > 0 ? (
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
					<h1 className='alert alert-primary'>Loading</h1>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}
export default connect(mapStateToProps)(ChartContainer);
