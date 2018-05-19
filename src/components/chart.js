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

	componentDidMount() {
		var myChart = echarts.init(document.getElementById("chart"), "macarons");
		myChart.setOption({
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


		window.addEventListener("resize", ()=>{myChart.resize()});
	}

	componentWillUnmount(){
		window.removeEventListener("resize");
	}

	render() {
		return <div id="chart" className="col-sm-12" style={{ height: 400 }} />;
	}
}
