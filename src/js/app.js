var currentUser;
var onCheck = false;

const body = document.getElementsByTagName("body")[0];

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

// Firebase Login Section
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("current user");
    // console.log(user);
    var logName = document.getElementById("loginName");
    var logEmail = document.getElementById("loginEmail");
    currentUser = user;
    logName.textContent = user.displayName;
    logEmail.textContent = user.email;
    setTimeout(updateLogin, 2000, true);
  } else {
    setTimeout(updateLogin, 2000, false);
    console.log("no user did not sign in currently");
    // get the user that logged out ...
    window.location = "./components/monlaw_login.html?k=" + Math.random();
  }
});

function updateLogin(state) {
  console.log("UpdateLogin");
  console.log(state);
  console.log(typeof state);
  if (onCheck) {
    for (let i in userLogInState) {
      if (userLogInState[i].email === currentUser.email) {
        usersRef.child(i).update({ "logIn": state });
        console.log("update successful");
      }
    }
  } else {
    console.log("update unsuccessful");
  }
}

function logOut() {
  // console.log("log out");
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log("Sign-out");
  }).catch(function (error) {
    // An error happened.
  });
}


// Chart Section
var chartDiv = document.querySelector("#apex1");
if (chartDiv) {
  var apexChart = new ApexCharts(document.querySelector("#apex1"), options);
  apexChart.render();
}


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