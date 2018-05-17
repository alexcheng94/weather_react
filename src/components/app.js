import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import ChartContainer from "../containers/ChartContainer";
import Header from "./header";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherList: [],
			temps: [],
			timePoints: [],
			celsius: true
		};
	}
	componentDidMount() {
		axios
			.get(
				"http://api.openweathermap.org/data/2.5/forecast?appid=1b436fa7255fb87869c2000de33af2d6&units=metric&q=yuci"
			)
			.then(res => {
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
			<div>
				<Header />

				<div className="container">
					{this.state.weatherList.length>0? <ChartContainer temps={this.state.temps} timePoints={this.state.timePoints}/>: <h1>Loading</h1>}
				</div>
			</div>
		);
	}
}

export default App;
