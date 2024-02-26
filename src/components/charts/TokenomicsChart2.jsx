"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TokenomicsChart2 = () => {
  const state = {
    series: [10, 5, 16, 10, 14], // Your data values
    options: {
      chart: {
        width: 380,
        type: "polarArea",
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
        labels: {
          colors: "#fff",
        },
      },
      fill: {
        opacity: 1,
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
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart">
      <ApexCharts
        options={state.options}
        series={state.series}
        type="polarArea"
        width={380}
        height={380}
      />
    </div>
  );
};

export default TokenomicsChart2;
