"use client";

import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TokenomicsChart2 = () => {
  const state = {
    series: [8, 6, 7, 6, 9], // Your data values
    options: {
      chart: {
        width: "200px",
        height: "200px",
        type: "polarArea",
      },
      labels: [
        "10% Operations",
        "5% Legal Department",
        "16% Team Management",
        "10% Marketing Development",
        "Others",
      ], // Your labels
      colors: ["#CBFB45", "#B8DB56", "#96B837", "#DEEBBC", "#6E8727"],
      stroke: {
        width: 0,
      },
      legend: {
        offsetY: 10,
        labels: {
          colors: "white",
        },
        markers: {
          radius: 0,
        },
        fontFamily: "Neue Machina Bold",
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
          breakpoint: 900,
          options: {
            chart: {
              width: "100%",
              height: "400px",
            },
            legend: {
              offsetX: 50,
              position: "bottom",
              onItemClick: {
                toggleDataSeries: false,
              },
              onItemHover: {
                highlightDataSeries: false,
              },
              horizontalAlign: "left",
              width: 220,
              itemsMargin: {
                horizontal: 10,
                vertical: 10,
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart" className="min-h-[200px] w-full min-w-[350px]">
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

export default TokenomicsChart2;
