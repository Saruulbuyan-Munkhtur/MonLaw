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
var taskPri = document.getElementsByClassName("task-priority");
var taskPriHigh = document.getElementsByClassName("task-priority-high");
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
    var divEl= document.createElement("div");
    var i = 0;
    var createBox;
    for(i in data){
        createBox =`
            <div id="new-task-board">
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
taskCalendar.addEventListener("click", function(){
    console.log(taskCalendar.input.value);
    taskStartDate = taskCalendar.input.value;
    taskCalendar.style.display="none";
});
function taskClose(){
    taskAddContainer.style.display="none";
}