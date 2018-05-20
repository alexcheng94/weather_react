import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Chart from "../components/chart";
import ButtonsContainer from "../components/buttonsContainer";

class ChartContainer extends Component {
	constructor(prop) {
		super(prop);
	}

	render() {
		const cityData = this.props.weather[this.props.weather.length - 1] || [];
		const weatherList = cityData.list;
		let tempList = [];
		let timePoints = [];
		let humidity = [];
		let rain = [];

		if (this.props.weather.length > 0) {
			tempList = weatherList.map(weatherItem => weatherItem.main.temp);
			timePoints = weatherList.map(weatherItem => {
				const s = weatherItem.dt;
				const date = moment.unix(s).calendar();
				return date;
			});
			humidity = weatherList.map(weatherItem => weatherItem.main.humidity);
			rain = weatherList.map(weatherItem => !weatherItem.rain ? 0 : weatherItem.rain['3h']);
		}
		return (
			<div className="bg-light ">
				{this.props.weather.length > 0 ? (
					<Chart
						temps={tempList}
						timePoints={timePoints}
						humidity={humidity}
						rain={rain}
					/>
				) : (
					<h1>Loading</h1>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}
export default connect(mapStateToProps)(ChartContainer);
