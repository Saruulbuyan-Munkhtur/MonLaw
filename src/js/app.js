const themeCookieName = "theme";
const themeDark = "dark";
const themeLight = "light";
const body = document.getElementsByTagName("body")[0];

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 100));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == "") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function switchTheme() {
  var ico = document.getElementsByClassName("switchIcon");
  console.log(ico[0].classList);
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    ico[0].classList.remove("fa-sun-o");
    ico[0].classList.add("fa-moon-o");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    ico[0].classList.remove("fa-moon-o");
    ico[0].classList.add("fa-sun-o");
  }
}

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

window.onclick = function (event) {
  openCloseDropdown(event);
}

function closeAllDropdown() {
  var dropdowns = document.getElementsByClassName("dropdown_expand");
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("dropdown_expand");
  }
}

function openCloseDropdown(event) {
  if (!event.target.matches(".dropdown-toggle")) {
    closeAllDropdown();
  } else {
    var toggle = event.target.dataset.toggle;
    var content = document.querySelector("." + toggle);
    if (content.classList.contains("dropdown-expand")) {
      closeAllDropdown();
    } else {
      closeAllDropdown();
      content.classList.add("dropdown_expand");
    }

  }
}

function toggleSidebar() {
  var sideBar = document.getElementById("sideBar");
  var links = document.getElementsByClassName("sidebar__menu__link");
  console.log(window.innerWidth);
  if (window.innerWidth < 420) {
    if (parseInt(sideBar.style.width.split("r")[0]) < 16) {
      sideBar.style.width = "17rem"
      for (let i in links) {
        links[0].children[1].style.display = "block";
      }
      sideBar.style.display = "block";
      // sideBar.style.position = "absolute";
    } else {
      sideBar.style.width = "5rem"
      sideBar.style.display = "none";
      for (let i in links) {
        links[0].children[1].style.display = "none";
      }
    }
  } else {
    if (parseInt(sideBar.style.width.split("r")[0]) < 10) {
      sideBar.style.width = "17rem"
      for (let i in links) {
        links[0].children[1].style.display = "block";
      }
    } else {
      sideBar.style.width = "5rem"
      for (let i in links) {
        links[0].children[1].style.display = "none";
      }
    }
  }


}
// Top Bar Menu dropdown windows
// function viewToggle(e) {
//   console.log(e);
//   console.log(e.classList.value);
//   let select = e.classList.value;
//   var selectedNotific = document.getElementsByClassName(`notification__id`);
//   var selectedMessage = document.getElementsByClassName(`messages__id`);
//   var selectedProfile = document.getElementsByClassName(`profile__id`);
//   switch (select) {
//     case "notification":
//       selectedNotific[0].classList.toggle("dropdown_expand");
//       selectedMessage[0].classList.remove("dropdown_expand");
//       selectedProfile[0].classList.remove("dropdown_expand");
//       break;
//     case "messages":
//       selectedMessage[0].classList.toggle("dropdown_expand");
//       selectedNotific[0].classList.remove("dropdown_expand");
//       selectedProfile[0].classList.remove("dropdown_expand");
//       break;
//     case "profile":
//       selectedProfile[0].classList.toggle("dropdown_expand");
//       selectedMessage[0].classList.remove("dropdown_expand");
//       selectedNotific[0].classList.remove("dropdown_expand");
//       break;

//     default:
//       break;
//   }

// }