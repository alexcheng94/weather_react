import React, { Component } from "react";
import { connect } from "react-redux";
import echarts from "echarts/lib/echarts";
import { mapData } from "../selectors";

import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/title";
import "echarts/lib/component/axisPointer";
import "echarts/theme/macarons";

//change chart style on smaller devices
const innerMargin = window.innerWidth < 576 ? 25 : 50;
const upperChartHeight =  window.innerWidth < 576 ? '42%' : '50%';
const lowerChartHeight = window.innerWidth < 576 ? '18%' : '20%';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }
  instantiateChart() {
    const weatherChart = echarts.init(
      document.getElementById("chart"),
      "macarons"
    );
    weatherChart.setOption({
      tooltip: {
        trigger: "axis",
        formatter: params => {
          let tooltipHtml = "";
          if (params[0].seriesName === "Humidity") {
            let shift = params.shift();
            params.push(shift);
          }
          tooltipHtml = `${params[0].name}<br/>
							${params[3].value}<img src=${params[2].value} /><br/>
							${params[0].marker}${params[0].seriesName}: ${params[0].value} C\xB0<br/>
							${params[1].marker}${params[1].seriesName}: ${params[1].value || 0}mm<br/>
							${params[4].marker}${params[4].seriesName}: ${params[4].value}%<br/>`;
          return tooltipHtml;
        }
      },
      legend: {
        data: ["Temperature", "Humidity", "Rain"],
        x: "center",
        top: 10
      },
      axisPointer: {
        link: { xAxisIndex: "all" }
      },
      grid: [
        {
          top: "15%",
          left: innerMargin,
          right: innerMargin,
          height: upperChartHeight
        },
        {
          left: innerMargin,
          right: innerMargin,
          bottom: 60,
          height: lowerChartHeight
        }
      ],
      xAxis: [
        {
          type: "category",
          data: this.props.timePoints,
          show: false,
          boundaryGap: true
        },
        {
          gridIndex: 1,
          type: "category",
          data: this.props.timePoints,
          boundaryGap: true
        }
      ],
      yAxis: [
        {
          name: "C\xB0",
          type: "value",
          nameGap: 3,
          scale: true
        },
        {
          name: "mm",
          nameGap: 3,
          type: "value",
          scale: true
        },
        {
          gridIndex: 1,
          name: "%",
          nameGap: 2,
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
        },
        {
          name: "Icon",
          type: "line",
          show: false,
          data: this.props.iconUrl
        },
        {
          name: "Description",
          type: "line",
          show: false,
          data: this.props.description
        }
      ],
      dataZoom: [
        {
          type: "inside",
          realtime: true,
          xAxisIndex: [0, 1]
        },
        {
          start: 0,
          end: 10,
          handleIcon:
            "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
          handleSize: "80%"
        }
      ]
    });
    window.addEventListener("resize", this.handleResize, false);
    return weatherChart;
  }
  handleResize() {
    // -> weatherChart.resize()
    //for removing event listener later
    this.instantiateChart().resize();
  }
  componentDidUpdate() {
    this.instantiateChart();
  }
  componentDidMount() {
    this.instantiateChart();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }

  render() {
    return <div id="chart" className="bg-light rounded col-sm-12" />;
  }
}

const mapStateToProps = state => {
  const mapDataWithState = mapData(state);
  return {
    temps: mapDataWithState("tempList"),
    timePoints: mapDataWithState("timePoints"),
    humidity: mapDataWithState("humidity"),
    rain: mapDataWithState("rain"),
    description: mapDataWithState("description"),
    iconUrl: mapDataWithState("iconUrl")
  };
};

export default connect(mapStateToProps)(Chart);
