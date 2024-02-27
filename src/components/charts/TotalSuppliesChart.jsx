"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalSuppliesChart = () => {
  const state = {
    series: [8, 10, 9, 7, 5], // Your data values
    options: {
      chart: {
        width: "400px",
        height: "400px",
        type: "donut",
      },
      labels: [
        "Private Sale",
        "Public Sale",
        "Stalking Reward",
        "Partnership Funds",
        "Team Pool",
      ], // Your labels
      colors: ["#CBFB45", "#B8DB56", "#96B837", "#DEEBBC", "#6E8727"],
      stroke: {
        width: 0,
      },
      // legend: {
      //   show: false,
      // },
      fill: {
        opacity: 1,
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
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
      plotOptions: {
        pie: {
          donut: {
            size: "50%", // Adjusts the diameter of the donut hole
            background: "white",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "10px",
                offsetY: -5,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
              },
              value: {
                show: true,
                fontSize: "10px",
                offsetY: -5,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
              },
              total: {
                show: true,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
                label: "Total",
                formatter: function () {
                  return "Supply";
                },
                fontSize: "10px",
              },
            },
          },
        },
      },
    },
  };

  return (
    <div id="chart" className="min-h-[200px] min-w-[320px]">
      <ApexCharts
        options={state.options}
        series={state.series}
        type="donut"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default TotalSuppliesChart;
