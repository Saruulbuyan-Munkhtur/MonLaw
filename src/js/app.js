var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 56, 63, 65, 69, 71, 75, 77],
    },
    {
      name: "Revenue",
      data: [75, 85, 101, 98, 87, 105, 110, 115, 117],
    },
    {
      name: "Cash Flow",
      data: [35, 45, 55, 65, 75, 55, 61, 60, 33],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "65%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (usd) {
        return "$ " + usd + " thousands";
      },
    },
  },
};

var apexChart = new ApexCharts(document.querySelector("#apex1"), options);
apexChart.render();
