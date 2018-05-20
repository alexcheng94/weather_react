import React, { Component } from "react";
import _ from "lodash";

import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/title";
import "echarts/lib/component/axisPointer";
import "echarts/theme/macarons";

export default class Chart extends Component {
	instantiateChart() {
		const weatherChart = echarts.init(
			document.getElementById("chart"),
			"macarons"
		);
		weatherChart.setOption({
			title: { text: "" },
			tooltip: {
				trigger: "axis",
				formatter: params =>
					`${params[0].name}<br/>
					${params[0].marker}${params[0].seriesName}: ${params[0].value} C\xB0<br/>
					${params[1].marker}${params[1].seriesName}: ${params[1].value || 0}mm<br/>
					${params[2].marker}${params[2].seriesName}: ${params[2].value}%`
			},
			legend: {
				data: ["Temperature", "Humidity","Rain"],
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
					type: "category",
					boundaryGap: false,
					data: this.props.timePoints
				}
			],
			yAxis: [
				{
					name: "Temperature (C\xB0)",
					type: "value",
					scale: true
				},
				{
					name: "Precipitation (mm)",
					type: "value",
					scale: true
				},
				{
					gridIndex: 1,
					name: "Humidity (%)",
					nameGap: 5,
					type: "value",
					interval: 20,
					scale: true
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
					name: "Rain",
					type: "bar",
					yAxisIndex: 1,
					data: this.props.rain
				},
				{
					name: "Humidity",
					type: "line",
					areaStyle: {},
					xAxisIndex: 1,
					yAxisIndex: 2,
					smooth: true,
					data: this.props.humidity
				}
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
		return <div id="chart" className="col-sm-12" style={{ height: 580 }} />;
	}
}
