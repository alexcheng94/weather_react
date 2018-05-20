import React, { Component } from "react";
import _ from "lodash";

import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/title";
import "echarts/lib/component/axisPointer";
import "echarts/theme/macarons";

export default class Chart extends Component {
	constructor(prop) {
		super(prop);
	}

	instantiateChart() {
		const weatherChart = echarts.init(
			document.getElementById("chart"),
			"macarons"
		);
		weatherChart.clear();

		weatherChart.setOption({
			title: { text: "" },
			tooltip: {
				trigger: "axis"
				// formatter: params =>
				// 	`${params[0].name}<br/>${params[0].seriesName} : ${
				// 		params[0].value
				// 	} C\xB0<br/>${params[1].seriesName} : ${params[1].value}%`
			},
			legend: {
				data: ["Temperature", "Humidity"],
				x: "left"
			},
			axisPointer: {
				link: { xAxisIndex: "all" }
			},
			grid: [
				{
					left: 50,
					right: 50,
					height: "65%"
				},
				{
					left: 50,
					right: 50,
					// top: "55%",
					bottom: 60,
					height: "10%"
				}
			],
			xAxis: [
				{
					type: "category",
					data: this.props.timePoints,
					show: false
				},
				{
					gridIndex: 1,
					// show:false,
					type: "category",
					boundaryGap: false,
					data: this.props.timePoints
					// position: "top"
				}
			],
			yAxis: [
				{
					name: "Temperature (C\xB0)",
					type: "value",
					scale: true
				},
				{
					gridIndex: 1,
					name: "Humidity (%)",
					type: "value",
					formatter: "{value}%",
					min: value => value.min - 5
				}
			],
			series: [
				{
					name: "Temperature",
					type: "line",
					smooth: true,
					data: this.props.temps
				},
				{
					name: "Humidity",
					type: "line",
					xAxisIndex: 1,
					yAxisIndex: 1,
					smooth: true,
					data: this.props.humidity
				}
				// {
				// 	name: "Precipitation",
				// 	type: "line",
				// 	smooth: true,
				// 	data: this.props.precipitation
				// }
			],
			dataZoom: [
				{
					show: true,
					realtime: true,
					xAxisIndex: [0, 1]
				},
				{
					type: "inside",
					realtime: true,
					xAxisIndex: [0, 1]
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
		window.removeEventListener("resize", () => {
			weatherChart.resize();
		});
	}

	render() {
		return <div id="chart" className="col-sm-12" style={{ height: 600 }} />;
	}
}
