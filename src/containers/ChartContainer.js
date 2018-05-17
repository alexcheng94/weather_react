import React, { Component } from "react";

import Chart from "../components/chart";
import ButtonsContainer from "../components/buttonsContainer";

export default class ChartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			temperatureShow: false,
			humidityShow: false,
			precipitationShow: false
		};
	}
	render() {
		return (
			<div className="bg-light ">
				<Chart 
					temps={this.props.temps}
					timePoints={this.props.timePoints}
					temperatureShow={this.state.temperatureShow}
					humidityShow={this.state.humidityShow}
					precipitationShow={this.state.precipitationShow}
				/>
				<ButtonsContainer />
			</div>
		);
	}
}
