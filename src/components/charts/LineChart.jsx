import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ data, categories }) => {
  const [dataLineChart, setDataLineChart] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: categories,
        labels: {
          style: {
            colors: "#c8cfca",
            fontSize: "12px",
          },
          formatter: function (val) {
            return moment(val).format("DD/MM/YYYY");
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#c8cfca",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
      },
      grid: {
        strokeDashArray: 5,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [],
        },
        colors: ["#4FD1C5", "#2D3748"],
      },
      colors: ["#4FD1C5", "#2D3748"],
    });
    setDataLineChart(data);
  }, [data, categories]);
  return (
    <ReactApexChart
      options={options}
      series={dataLineChart}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
