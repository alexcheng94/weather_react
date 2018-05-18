import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import Chart from "../components/chart";
import ButtonsContainer from "../components/buttonsContainer";

export default class ChartContainer extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			temperatureShow: true,
			humidityShow: false,
			precipitationShow: false,
			//data states
			weatherList: [],
			temps: [],
			timePoints: [],
			searchTerm: "shanghai",
			celsius: true
		};
	}

	componentDidMount() {
		const API_KEY = "1b436fa7255fb87869c2000de33af2d6";
		const unit = this.state.celsius ? "metric" : "imperial";
		const { searchTerm } = this.state;
		const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
		const url = `${ROOT_URL}&units=${unit}&q=${searchTerm}`;

		axios.get(url).then(res => {
			var temps = [];
			res.data.list.map(weather => temps.push(weather.main.temp));
			var timePoints = [];
			res.data.list.map(weather => timePoints.push(weather.dt_txt));

			this.setState({ weatherList: res.data.list, temps, timePoints });
			console.log(res.status);
		});
	}

	render() {
		return (
			<div className="bg-light ">
				{this.state.weatherList.length > 0 ? (
					<Chart
						temps={this.state.temps}
						timePoints={this.state.timePoints}
						temperatureShow={this.state.temperatureShow}
						humidityShow={this.state.humidityShow}
						precipitationShow={this.state.precipitationShow}
						celsius={this.state.celsius}
					/>
				) : (
					<h1>Loading</h1>
				)}
				<ButtonsContainer
					temperatureShow={this.state.temperatureShow}
					humidityShow={this.state.humidityShow}
					precipitationShow={this.state.precipitationShow}
					celsius={this.state.celsius}
				/>
			</div>
		);
	}
}
