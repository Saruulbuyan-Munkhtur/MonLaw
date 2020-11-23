// Initial Setting
let timeGridContent = `
<div class="time__title">
    <div class="time__title__head">
    <div class="title"></div>
    </div>
    <div class="time__title__head">
    <div class="title dayName">Дав</div>
    </div>
    <div class="time__title__head">
    <div class="title dayName">Мяг</div>
    </div>
    <div class="time__title__head">
    <div class="title dayName">Лха</div>
    </div>
    <div class="time__title__head">
    <div class="title dayName todayName">Пүр</div>
    </div>
    <div class="time__title__head">
    <div class="title dayName">Баа</div>
    </div>
    <div class="time__title__head">
    <div class="title dayName">Бям</div>
    </div>
    <div class="time__title__head">
    <div class="title dayName">Ням</div>
    </div>
</div>
<div class="time__title">
    <div class="time__title__head">
    <div class="title"></div>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum">16</h1>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum">17</h1>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum">18</h1>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum todayNum">19</h1>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum">20</h1>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum">21</h1>
    </div>
    <div class="time__title__head">
    <h1 class="title dayNum">22</h1>
    </div>
</div>
<hr />
<div class="time__data">
    <div class="data"></div>
    <div class="data"></div>
    <div class="data"></div>
    <div class="data"></div>
    <div class="data"></div>
    <div class="data"></div>
    <div class="data"></div>
    <div class="data"></div>
</div>
`;

let monthGridCOntent = `
    <div class="monthGrid">
        <div class="event">
            <button id="addEvent" class="btn">
                ADD EVENT <i class="fa fa-plus"></i>
            </button>

            <div class="event__list">
                <div class="event__one red-circle" id="event-1">
                    <div class="event__status red-status"></div>
                    <div class="event__title">Багын хурал</div>
                    <div class="event__icon">
                        <i class="fa fa-minus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="calendar__grid__title">
            <div class="month__calendar">
                <div class="weekName">
                    <h3>Дав</h3>
                </div>
                <div class="weekName">
                    <h3>Мяг</h3>
                </div>
                <div class="weekName">
                    <h3>Лха</h3>
                </div>
                <div class="weekName">
                    <h3>Пүр</h3>
                </div>
                <div class="weekName">
                    <h3>Баа</h3>
                </div>
                <div class="weekName">
                    <h3>Бям</h3>
                </div>
                <div class="weekName">
                    <h3>Ням</h3>
                </div>
                </div>
                <div class="month__days">
            </div>
        </div>
    </div>
`;
// DOM objects - html element 
const appCalendar = document.getElementsByClassName("calendar__content")[0];
appCalendar.innerHTML = timeGridContent;

// DOM objects for Time grid view
let dayNum = document.querySelectorAll(".dayNum");
let time = document.querySelectorAll(".data");
const weekBtn = document.getElementsByClassName("btn__right")[0];
const monthBtn = document.getElementsByClassName("btn__left")[0];
const weekNames = ["Цаг", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям", "Ням"];

// DOM objects for Month grid view
let dayDiv = document.querySelector(".month__days");
const monthValue = document.getElementById("today");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// DOM objects for Events
let eventList = document.querySelector(".event__list");
let addEvent = document.getElementById("addEvent");
const overlayMain = document.querySelector(".container");
const eventClose = document.getElementById("event__close");
const eventForm = document.querySelector("#event__form");
const eventSave = document.getElementById("event__save");
const eventName = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");
const eventDescription = document.getElementById("eventDescription");
const eventPriority = document.getElementById("eventPriority");
// DOM objects for Notification alert
const alert = document.getElementById("alert");
const alertMessage = document.getElementById("am");

// Event lists for calendar
const dataEvents = [
    { name: "Багын хурал", date: "2020-11-11", time: "04:55", description: "", type: "red", id: "ev-0" },
    { name: "Төслийн явцын хурал", date: "2020-11-12", time: "04:55", description: "", type: "green", id: "ev-1" },
    { name: "Өглөөний хурал", date: "2020-11-13", time: "04:55", description: "", type: "yellow", id: "ev-2" },
    { name: "Хэрэглэгчтэй уулзах", date: "2020-11-23", time: "04:55", description: "", type: "blue", id: "ev-3" }
];

// Date : Year, Month, Day, Week, Today
let today = new Date(Date.now()).getDate();
let week = new Date(Date.now()).getDay();
let month = new Date(Date.now()).getMonth();
let year = new Date().getUTCFullYear();

// First and Last day in Month.
var firstday = new Date(year, month, 1).getUTCDay();
var lastDay = new Date(year, month + 1, 0).getDate();

let selTime = false;
let evTimeArr = [];
let countMin = 0;

// Calendar render funtion - timeGrid : true, monthGrid : falsef
function calendarRender(state) {

    var hour = 1;
    if (state) {
        console.log("Time Grid");
        time = document.querySelectorAll(".data");
        dayNum = document.querySelectorAll(".dayNum");
        console.log(dayNum);
        for (let days = 1; days < 8; days++) {
            for (let times = 0; times < 48; times++) {
                time[days].insertAdjacentHTML("beforeend", `<div class="time_div"></div>`);
            }
        }
        for (let times = 0; times < 48; times++) {
            if (times % 2 === 0) {
                time[0].insertAdjacentHTML("beforeend", `<div class="time_div"></div>`);
            } else {

                time[0].insertAdjacentHTML("beforeend",
                    `<div class="time_div">
                        <span class="timeFlag">
                            ${hour}:00
                        </span>
                    </div>`
                );
                hour++;
            }
        }
        connectionDay();
    } else {
        console.log("Month Grid");
        dayDiv = document.querySelector(".month__days");
        // console.log(dayDiv);
        for (let position = 1; position <= 42; position++) {
            dayDiv.insertAdjacentHTML("beforeend", `<div class="day"></div>`);
        }
        calendarFillDay(firstday, lastDay, month + 1);
        connectionEventList();
        addEventList(dataEvents);
        addEvents();
        // closeEvents();
    }
    // swal("Амжилттай", "үүсгэгдлээ", "success");
}



function calendarFillDay(firstPos, lastPos, monthNum) {
    monthValue.textContent = monthNum;
    const dayDivs = document.querySelectorAll(".day");
    for (const divEl of dayDivs) {
        divEl.innerHTML = "";
        if (divEl.classList) {
            divEl.classList.remove("today");
        }
    }
    // console.log(month);
    // console.log(new Date(year, monthNum - 1, 21).toLocaleDateString());
    // console.log(new Date(Date.now()).toLocaleDateString());

    let position = firstPos;
    for (let startDay = 1; startDay <= lastPos; startDay++) {

        // dayDivs[position].textContent = startDay;
        dayDivs[position].id = "day-" + startDay;
        dayDivs[position].insertAdjacentHTML("beforeend", `<div class="dayCon">${startDay}</div>`);
        // if (isWeekend(position + 1)) {
        //     dayDivs[position].classList.add("weekend");
        // }
        if (new Date(year, monthNum - 1, startDay).toLocaleDateString() === new Date(Date.now()).toLocaleDateString()) {
            dayDivs[position].classList.add("today");
            dayDivs[position].insertAdjacentHTML("beforeend", `<span class="calendarEvent">Event-1</span>`);

        }
        position++;
    }
    eventListConnection()
    // console.log("End");
}

prev.addEventListener("click", function (e) {
    let monthVal = parseInt(monthValue.textContent);
    monthVal--;
    if (monthVal < 1) monthVal = 1;
    monthValue.textContent = monthVal;
    var decDayStart = new Date(year, monthVal - 1, 1).getUTCDay();
    var decDayEnd = new Date(year, monthVal, 0).getDate();
    calendarFillDay(decDayStart, decDayEnd, monthVal);
});

next.addEventListener("click", function (e) {
    let monthVal = parseInt(monthValue.textContent);
    monthVal++;
    if (monthVal > 12) monthVal = 12;
    monthValue.textContent = monthVal;
    var refirstday = new Date(year, monthVal - 1, 1).getUTCDay();
    var relastDay = new Date(year, monthVal, 0).getDate();
    calendarFillDay(refirstday, relastDay, monthVal);
});

monthBtn.addEventListener("click", function () {
    console.log("Month Button Clicked");
    appCalendar.innerHTML = monthGridCOntent;
    calendarRender(false);
    weekBtn.classList.remove("activeBtn");
    monthBtn.classList.add("activeBtn");
});


weekBtn.addEventListener("click", function () {
    console.log("Week Button Clicked");
    appCalendar.innerHTML = timeGridContent;
    calendarRender(true);
    monthBtn.classList.remove("activeBtn");
    weekBtn.classList.add("activeBtn");
});

// Calendar Global render
calendarRender(true);

// month event list
function addEventList(events) {
    eventList = document.querySelector(".event__list");
    eventList.innerHTML = "";
    for (const event of events) {
        let htmlContent = `
                <div class="event__one ${event.type}-circle" id="${event.id}">
                        <div class="event__status ${event.type}-status"></div>
                        <div class="event__title">${event.name}</div>
                        <div class="event__icon">
                            <i class="fa fa-minus-circle">
                        </i></div>
                </div>`;
        eventList.insertAdjacentHTML("beforeend", htmlContent);
        console.log(event);
    }
}
function addEvents() {
    addEvent = document.getElementById("addEvent");
    addEvent.addEventListener("click", function () {
        console.log("Added Event");
        // overlayMain.classList.add("overlay");
        eventForm.style.display = "block";
    });
}

eventClose.addEventListener("click", function () {
    console.log("Close Event");
    // overlayMain.classList.remove("overlay");
    eventForm.style.display = "none";
});

eventSave.addEventListener("click", function () {
    var eDate = Date.now();
    console.log("Event saved");
    overlayMain.classList.remove("overlay");
    eventForm.style.display = "none";
    // console.log(eventName.value);
    // console.log(eventDate.value);
    // console.log(eventDescription.value);
    // console.log(eventPriority.value);
    const date = eventDate.value.split("T");
    let newEvent = {
        name: eventName.value,
        date: date[0],
        time: date[1],
        timestamp: eDate,
        description: eventDescription.value,
        type: eventPriority.value,
        id: "ev-" + dataEvents.length
    }
    dataEvents.push(newEvent);
    console.log(dataEvents);
    addEventList(dataEvents);
    setTimeout(showNotification, 5000, dataEvents[dataEvents.length - 1]);
    setTimeout(hideNotification, 9000);
});


function deleteEvent(id) {
    console.log(id);
    let ids = dataEvents.map(function (el) {
        return el.id;
    });
    console.log(ids);
    const index = ids.indexOf(id);
    console.log(index);
    if (index !== -1) {
        dataEvents.splice(index, 1);
    }
}

function connectionEventList() {
    eventList = document.querySelector(".event__list");
    eventList.addEventListener("click", function (e) {
        //delete to massive element
        //arr.splice(arr.indexOf(item),1);
        // let ids = e.map(function(el){return el.id});
        const id = e.target.parentNode.parentNode.id;
        if (id) {
            deleteEvent(id);
            addEventList(dataEvents);
        }
    });
}

// eventeds popup menu when clicked.
function eventListConnection() {
    // console.log(document.querySelectorAll(".calendarEvent"));
    document.querySelectorAll(".calendarEvent").forEach(function (oneEvent) {
        oneEvent.addEventListener("click", function (event) {
            console.log("Clicked Event");
            console.log(event.target);
            event.target.insertAdjacentHTML("beforeend",
                `<div class="eventPopMenu">
                    <div class="eventTop">
                        <i class"fa fa-angle-right">d</i>
                        <i class"fa fa-times"></i>
                    </div>
                    <div class="eventTitle">Meeting</div>
                </div>`);

        });
    });
}

// Time event for Interval
function connectionDay() {
    document.querySelectorAll(".time_div").forEach(time => {
        time.addEventListener("mousedown", (ev) => {
            console.log("Mouse Down");
            countMin = 1;
            // console.log(time.innerText);
            // selTime = true;
            // evTimeArr.push(ev.currentTarget);
        });
        // time.addEventListener("mouseover", (ev) => {
        //     console.log("Over");
        //     // console.log(time.innerText);
        //     // if (selTime) {
        //     //     evTimeArr.push(ev.currentTarget);
        //     // }
        // });
        time.addEventListener("mouseenter", (ev) => {
            console.log("Mouse Enter");
            countMin++;
            // console.log("Div:" + countMin);
            // console.log(time.innerText);
            // if (selTime) {
            //     evTimeArr.push(ev.currentTarget);
            // }
        });
        time.addEventListener("mouseup", (ev) => {
            console.log("Mouse Up");
            console.log("Div:" + countMin);
            // console.log(time.innerText);
            //const unTime = time.innerText;
            // evTimeArr.push(ev.currentTarget);
            // console.log(evTimeArr);
            // selTime = false;
            // for (let evTime of evTimeArr) {
            //     evTime.classList.add("selected");
            //     ev.innerText = "";
            // }
            // evTimeArr.splice(0, evTimeArr.length);
            // console.log(evTimeArr);
        });

    });
}

function showNotification(data) {
    alertMessage.textContent = `${data.name}`;
    alert.classList.add("show");
    alert.classList.remove("hide");
}

// 
function hideNotification() {

    alert.classList.remove("show");
    alert.classList.add("hide");
}