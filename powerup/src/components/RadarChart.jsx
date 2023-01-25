import React from "react";
import { Radar } from "react-chartjs-2";

export default class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartRef);
  }

  render() {
    
    const RadarData = {
  labels: ["Steps", "Calories Burnt", "Calories Intake", "Protein Intake", "Fat Intake"],
  datasets: [
    {
      label: "Current",
      backgroundColor: "rgba(34, 202, 236, .2)",
      borderColor: "rgba(34, 202, 236, 1)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      data: [Number(localStorage.getItem("step24h")), Number(localStorage.getItem("cal24h")), Number(localStorage.getItem("foodCal")), Number(localStorage.getItem("foodPro")), Number(localStorage.getItem("foodFat")),]
    }
  ]
};
  const RadarOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 16,
      stepSize: 2,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: true
    }
  }
};
    return (
      <Radar ref={this.chartRef} data={RadarData} options={RadarOptions} />
    );
  }
}
