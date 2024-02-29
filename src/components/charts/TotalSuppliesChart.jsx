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
        "15% Private Sale",
        "15% Public Sale",
        "15% Stalking Reward",
        "10% Partnership Funds",
        "5% Team Pool",
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
        customLegendItems: [
          "15% Private Sale",
          "15% Public Sale",
          "15% Stalking Reward",
          "10% Partnership Funds",
          "5% Team Pool",
        ],
        markers: {
          radius: 0,
        },
        fontFamily: "Neue Machina Bold",
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
                showAlways: true,
                fontFamily: "Neue Machina Bold",
                fontWeight: 800,
                color: "black",
                label: "Total 5B",
                formatter: function (val) {
                  // every word to new line
                  return "Supplies";
                },
                fontSize: "10px",
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 900,
          options: {
            chart: {
              width: "100%",
              height: "500px",
            },
            legend: {
              offsetX: 50,
              offsetY: 20,
              height: 160,
              position: "bottom",
              onItemClick: {
                toggleDataSeries: true,
              },
              onItemHover: {
                highlightDataSeries: false,
              },
              horizontalAlign: "left",
              width: 200,
              itemsMargin: {
                horizontal: 10,
                vertical: 10,
              },
            },
            plotOptions: {
              pie: {
                customScale: 0.9,
                donut: {
                  size: "45%", // Adjusts the diameter of the donut hole
                  background: "white",
                  labels: {
                    show: true,
                    name: {
                      show: true,
                      fontSize: "16px",
                      offsetY: -5,
                      fontFamily: "Neue Machina Bold",
                      fontWeight: 800,
                      color: "black",
                    },
                    value: {
                      show: true,
                      fontSize: "16px",
                      offsetY: 0,
                      fontFamily: "Neue Machina Bold",
                      fontWeight: 800,
                      color: "black",
                    },
                    total: {
                      show: true,
                      showAlways: true,
                      fontFamily: "Neue Machina Bold",
                      fontWeight: 800,
                      color: "black",
                      label: "Total 5B",
                      formatter: function (val) {
                        // every word to new line
                        return "Supplies";
                      },
                      fontSize: "16px",
                    },
                  },
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart" className="min-h-[200px] w-[80%] min-w-[350px]">
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
