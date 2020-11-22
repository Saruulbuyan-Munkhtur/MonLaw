var data =[

            {priority: "Яаралтай", status: 1, taskName: "Task1", start:"20201119", due: "20201120"},
            {priority: "Хэвийн", status: 1, taskName: "Task2", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 1, taskName: "Task3", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 2, taskName: "Task1", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 2, taskName: "Task4", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 2, taskName: "Task5", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 3, taskName: "Task1", start:"20201119", due: "20201120"}
]
var taskAddContainer = document.getElementById("task-add-container");
var taskPri = document.getElementsByClassName("task-priority")[0];
var taskPriHigh = document.getElementsByClassName("task-priority-high")[0];
var taskPriorityStatus = document.getElementsByClassName("priority-group")[0];
var taskStatusEl = document.getElementsByClassName("status-group")[0];

function taskPriority(){
    taskPriorityStatus.style.display = "block";
}

taskPriorityStatus.addEventListener("click",function(e){
    // console.log(e.target.parentNode.className);
    if(e.target.parentNode.parentNode.className ==="priority-group"){
        if(e.target.innerText === "Urgent"||e.target.parentNode.className ==="task-priority-high"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
        }
        else if(e.target.innerText === "Normal"||e.target.parentNode.className ==="task-priority-normal"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
        }
        else {
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textGreen");
        }
    }
    taskPriorityStatus.style.display="none";
});

function taskStatus(){
    taskStatusEl.style.display = "block";
}

taskStatusEl.addEventListener("click",function(e){
    // console.log(e.target.parentNode.className);
    if(e.target.parentNode.parentNode.className ==="status-group"){
        if(e.target.innerText === "Open"||e.target.parentNode.className==="task-status-open"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
        }
        else if(e.target.innerText === "In progress"||e.target.parentNode.className==="task-status-progress"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
        }
        else {
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textGreen");
        }
    }
    taskStatusEl.style.display = "none";
    console.log(taskStatusEl);
});

createTask();
function createTask(){
    var createOpen = document.getElementById("task-open-add");
    var createProgress = document.getElementById("task-progress-add");
    var createCompleted = document.getElementById("task-completed-add");
    var i = 0;
    var createBox;
    for(i in data){
        createBox =`
            <div id="new-task-board" draggable="true" >
                <div>
                    <form>
                        <input value = ${data[i].taskName} >  
                    </form>
                </div>
                <div id="board-task-icon">
                    <span class="task-priority">
                        ${data[i].priority}
                    </span>
                    <span id="task-start">
                        ${data[i].start}
                    </span>
                    <span id="task-due">
                        ${data[i].due}
                    </span>
                </div>
            </div> `; 
        if(data[i].status === 1){
            createOpen.insertAdjacentHTML("beforeend",createBox);
        }
        else if(data[i].status === 2){
            createProgress.insertAdjacentHTML("beforeend",createBox);
        }
        else {
            createCompleted.insertAdjacentHTML("beforeend",createBox);
        }
    }
}

function taskNewButton(){
    taskAddContainer.style.display="block";
}

function taskStart(){
    let taskCalendar = document.getElementById("task-startday");
    taskCalendar.style.display = "block";
}
var taskStartDate;
// taskCalendar.addEventListener("click", function(){
//     console.log(taskCalendar.input.value);
//     taskStartDate = taskCalendar.input.value;
//     taskCalendar.style.display="none";
// });

function taskClose(){
    taskAddContainer.style.display="none";
}
function taskSaveButton(){
    taskAddContainer.style.display="none";
}

dragElement(document.getElementById("new-task-board"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//    document.getElementById(elmnt.id).onmousedown = dragMouseDown;

//   function dragMouseDown(e) {
//     e = e || window.event;
    
//     e.preventDefault();
//     console.log(e);
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault()();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
// //   }
// // }
// function dragStart(event) {
//     event.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
// }
// function dragover(event) {
//     event.preventDefault();
// }

// function dragenter(event) {
//     if()
//     addClass("over");
// }

// function dragleave(event) {
//    .removeClass("over");
// }

//  function drop(event) {
//     var listitem = event.originalEvent.dataTransfer.getData("text/plain");
//     event.target.appendChild(document.getElementById(listitem));
//     event.preventDefault();
// }
