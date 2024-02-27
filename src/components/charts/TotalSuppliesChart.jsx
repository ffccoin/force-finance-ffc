"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalSuppliesChart = () => {
  const state = {
    series: [12, 15, 14, 10, 5, 9], // Your data values
    options: {
      chart: {
        width: "100%",
        height: "100%",
        type: "polarArea",
      },
      labels: [
        "Private Sale",
        "Public Sale",
        "Staking Reward",
        "Partnership Funds",
        "Team Pool",
        "Others",
      ], // Your labels
      colors: [
        "#CBFB45",
        "#DEEBBC",
        "#B8DB56",
        "#CFFA57",
        "#96B837",
        "#6E8727",
      ],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 0,
      },
      yaxis: {
        show: false,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      legend: {
        width: "50%",
        labels: {
          colors: "#fff",
        },
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts
        options={state.options}
        series={state.series}
        type="polarArea"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default TotalSuppliesChart;
