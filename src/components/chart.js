import React, { Component } from "react";
import _ from "lodash";

import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/axisPointer";
import "echarts/theme/macarons";

export default class Chart extends Component {
	constructor(prop) {
		super(prop);
	}

	instantiateChart(){
		const weatherChart = echarts.init(
			document.getElementById("chart"),
			"macarons"
		);
		weatherChart.clear();

		weatherChart.setOption({
			title: { text: "" },
			tooltip: {},
			axisPointer: {
				show: true,
				type: "line",
				snap: true
			},
			xAxis: {
				data: this.props.timePoints
			},
			yAxis: {},
			color: "",
			series: [
				{
					name: "Temperature",
					type: "line",
					smooth: true,
					data: this.props.temps
				}
			]
		});
		window.addEventListener("resize", () => {
			weatherChart.resize();
		});
	}

	componentDidUpdate() {
		this.instantiateChart();
	}
	
	componentDidMount() {
		this.instantiateChart();
	}

	componentWillUnmount() {
		window.removeEventListener("resize",  () => {
			weatherChart.resize();
		});
	}

	render() {
		return <div id="chart" className="col-sm-12" style={{ height: 400 }} />;
	}
}
