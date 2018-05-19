import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';

import Chart from "../components/chart";
import ButtonsContainer from "../components/buttonsContainer";

class ChartContainer extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			temperatureShow: true,
			humidityShow: false,
			precipitationShow: false
		};
	}

	render() {
		const cityData = this.props.weather[this.props.weather.length - 1] || [];
		const weatherList = cityData.list;

		let tempList = [];
		let timePoints = [];

		if (this.props.weather.length>0) {
			tempList = weatherList.map(weatherItem => weatherItem.main.temp)
			timePoints = weatherList.map(weatherItem => {
				const s = weatherItem.dt;
				const date = moment.unix(s).calendar();
				return date;
			})

		}

		return (
			<div className="bg-light ">
				{this.props.weather.length > 0 ? (
					<Chart
						temps={tempList}
						timePoints={timePoints}
						// temperatureShow={this.state.temperatureShow}
						// humidityShow={this.state.humidityShow}
						// precipitationShow={this.state.precipitationShow}
						// celsius={this.state.celsius}
					/>
				) : (
					<h1>Loading</h1>
				)}
				<ButtonsContainer
				// temperatureShow={this.state.temperatureShow}
				// humidityShow={this.state.humidityShow}
				// precipitationShow={this.state.precipitationShow}
				// celsius={this.state.celsius}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}
export default connect(mapStateToProps)(ChartContainer);
