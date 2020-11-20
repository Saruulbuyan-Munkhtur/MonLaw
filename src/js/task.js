var data =[

            {priority: "Яаралтай", status: 1, taskName: "Task1", start:"20201119", due: "20201120"},
            {priority: "Хэвийн", status: 1, taskName: "Task2", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 1, taskName: "Task3", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 2, taskName: "Task1", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 2, taskName: "Task4", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 2, taskName: "Task5", start:"20201119", due: "20201120"},
            {priority: "Яаралтай", status: 3, taskName: "Task1", start:"20201119", due: "20201120"}
]

var taskPri = document.getElementsByClassName("task-priority");
var taskPriHigh = document.getElementsByClassName("task-priority-high");
var taskPriorityStatus = document.getElementsByClassName("priority-group");

// taskPriorityStatus.addEventListener("click",function(e){
//     console.log(e.target.parentNode.className);
//     if(e.target.parentNode.className ==="priority-group"){
//         if(e.target.innerText === "Яаралтай"){
//             e.target.parentNode.parentNode.parentNode.children[0].classList.add("textRed");
//             e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
//             e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
//         }
//         else if(e.target.innerText === "Хэвийн"){
//             e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
//             e.target.parentNode.parentNode.parentNode.children[0].classList.add("textBlue");
//             e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
//         }
//         else {
//             e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
//             e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
//             e.target.parentNode.parentNode.parentNode.children[0].classList.add("textGreen");
//         }
//     }
// });
function taskPriority(){
    
    taskPriorityStatus.style.display = "block";
    console.log("clicked");
}
function taskStatus(){
    var taskSta = document.getElementById("task-status");
    console.log(taskSta);
    taskSta.style.display = "block";
}
createTask();
function createTask(){
    var createOpen = document.getElementsByClassName("task-open-add");
    var createProgress = document.getElementsByClassName("task-progress-add");
    var createCompleted = document.getElementsByClassName("task-completed-add");
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
                <div id="task-icon">
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
function taskNew(){
    var addContainer = document.getElementsByClassName("task-add-container");
    addContainer.style.display="block";
}