"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TokenomicsChart2 = () => {
  const state = {
    series: [8, 10, 9, 7, 5], // Your data values
    options: {
      chart: {
        width: "200px",
        height: "200px",
        type: "pie",
      },
      labels: [
        "Operations",
        "Legal Department",
        "Team Management",
        "Marketing Development",
        "Others",
      ], // Your labels
      colors: ["#CBFB45", "#B8DB56", "#96B837", "#DEEBBC", "#6E8727"],
      stroke: {
        width: 0,
      },
      legend: {
        offsetY: -5,
        labels: {
          colors: "white",
        },
        markers: {
          radius: 0,
        },
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {

        },
      },
    },
  };

  return (
    <div id="chart" className="min-h-[200px] min-w-[350px]">
      <ApexCharts
        options={state.options}
        series={state.series}
        type="pie"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default TokenomicsChart2;
