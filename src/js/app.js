var currentUser;
var onCheck = false;
var data_frame;
let totalFees = 0;
var countUsers = 0;
var latCases = 0;
var gTotalCase = [];
var gClosedCase = [];
var gOpenedCase = [];
var gPerson = ["Угтахбаяр", "Aззаяа", "Төгөлдөр", "Болорчимэг", "Дашням"];


const body = document.getElementsByTagName("body")[0];
const countUser = document.getElementById("countUser");
const countCase = document.getElementById("countCase");
const countPrice = document.getElementById("totalPrice");
const countLateCase = document.getElementById("totalLateCase");
const irId = document.getElementById("irId");
const zaId = document.getElementById("zaId");
const erId = document.getElementById("erId");

function switchTheme() {
  var ico = document.getElementsByClassName("switchIcon");
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



// Firebase Login Section
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("current user");
    // console.log(user);
    var logName = document.getElementById("loginName");
    var logEmail = document.getElementById("loginEmail");
    var logUid = document.getElementById("loginUID");
    currentUser = user;
    if (logEmail) {
      logEmail.textContent = user.email;
      logUid.textContent = user.uid;
    }

  } else {
    console.log("no user did not sign in currently");
    window.location = "./components/monlaw_login.html?k=" + Math.random();
  }
});

function logOut() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log("Sign-out");
  }).catch(function (error) {
    // An error happened.
  });
}

// Firebase Raw Data
const dateRef = firebase.database().ref("informations/");
dateRef.on('value', function (snapshot) {
  data_frame = snapshot.val();
  // console.log(data_frame);
  showData();
});

function showData() {
  var data = data_frame;
  countUsers = Object.keys(data).length;
  var ir = 0, za = 0, er = 0;
  for (const i in data) {
    totalFees += parseInt(data[i].bills[0].totalFee);
    if (data[i].cases[0].caseTorol === "ir") {
      ir++;
    } else if (data[i].cases[0].caseTorol === "za") {
      za++;
    } else {
      er++;
    }

  }
  // console.log(ir);
  // console.log(za);
  // console.log(er);
  if (countUser !== null && irId !== null) {
    irId.textContent = ir;
    zaId.textContent = za;
    erId.textContent = er;
    countUser.textContent = countUsers;
    countCase.textContent = countUsers;
    countPrice.textContent = format("" + totalFees);
    countLateCase.textContent = "2";
    calcData();
  }
}

function calcData() {
  var calcValue = data_frame;
  var u = 0, a = 0, t = 0, b = 0, d = 0;
  var uo = 0, ao = 0, to = 0, bo = 0, dod = 0;
  var uoc = 0, aoc = 0, toc = 0, boc = 0, dodc = 0;
  for (let k in calcValue) {
    // console.log(calcValue[k]);
    // uka, 
    if (calcValue[k].assigned === "kxalA0e6WpSSZo71c2T106Obsrc2") {
      u++;
      if (calcValue[k].cases[0].caseStatus === "open") {
        uo++;
      } else {
        uoc++;
      }
    }
    else if (calcValue[k].assigned === "scrgL0iiPKRb8l6UKi7h21Tx5zR2") {
      a++;
      if (calcValue[k].cases[0].caseStatus === "open") {
        ao++;
      } else {
        aoc++;
      }
    }
    else if (calcValue[k].assigned === "DJRY2iUrbIWCUppsW3TfylVO2N23") {
      t++;
      if (calcValue[k].cases[0].caseStatus === "open") {
        to++;
      } else {
        toc++;
      }
    }
    else if (calcValue[k].assigned === "Hmb9DM6PNQP2Twe5L1Qx7LPF0312") {
      b++;
      if (calcValue[k].cases[0].caseStatus === "open") {
        bo++;
      } else {
        boc++;
      }
    } else {
      d++;
      if (calcValue[k].cases[0].caseStatus === "open") {
        dod++;
      } else {
        dodc++;
      }
    }
  }
  // console.log(u);
  // console.log(a);
  // console.log(t);
  // console.log(b);
  // console.log(d);
  gTotalCase = [u, a, t, b, d];
  gOpenedCase = [uo, ao, to, bo, dod];
  gClosedCase = [uoc, aoc, toc, boc, dodc];
  // console.log(gTotalCase);
  // console.log(gOpenedCase);
  // console.log(gClosedCase);
  drawGraph();
  // data: [5, 8, 9, 7, 6],
}

// Chart Section


function drawGraph() {
  var options = {
    series: [
      {
        name: "Нийт хэрэг",
        data: gTotalCase,
      },
      {
        name: "Шийдсэн хэрэг",
        data: gClosedCase,
      },
      {
        name: "Нээлттэй хэрэг",
        data: gOpenedCase,
      },
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: gPerson,
    },
    yaxis: {
      title: {
        text: "Хэргийн тоо",
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (cases) {
          return ": " + cases;
        }
      }
    }
  };
  var chartDiv = document.querySelector("#apex1");
  if (chartDiv) {
    var chart = new ApexCharts(chartDiv, options);
    chart.render();
  }
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

function format(too) {
  // console.log("Convert");
  var x = too.split("").reverse().join("");
  var y = "";
  var count = 1;
  for (let i = 0; i < x.length; i++) {
    y += x[i];
    if (count % 3 === 0) {
      y += ",";
    }
    count++;
  }
  y = y.split("").reverse().join("");
  if (y[0] === ",") {
    y = y.substr(1, y.length - 1);
  }

  return y;
}
