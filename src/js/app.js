// Charts
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


// Top Bar Menu dropdown windows
function viewToggle(e) {
  console.log(e);
  console.log(e.classList.value);
  let select = e.classList.value;
  var selectedNotific = document.getElementsByClassName(`notification__id`);
  var selectedMessage = document.getElementsByClassName(`messages__id`);
  var selectedProfile = document.getElementsByClassName(`profile__id`);
  switch (select) {
    case "notification":
      selectedNotific[0].classList.toggle("show");
      selectedMessage[0].classList.remove("show");
      selectedProfile[0].classList.remove("show");
      break;
    case "messages":
      selectedMessage[0].classList.toggle("show");
      selectedNotific[0].classList.remove("show");
      selectedProfile[0].classList.remove("show");
      break;
    case "profile":
      selectedProfile[0].classList.toggle("show");
      selectedMessage[0].classList.remove("show");
      selectedNotific[0].classList.remove("show");
      break;

    default:
      break;
  }

}