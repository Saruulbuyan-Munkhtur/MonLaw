var tdata;
var taskAddContainer = document.getElementById("task-add-container");
var taskPri = document.getElementsByClassName("task-priority")[0];
var taskPriHigh = document.getElementsByClassName("task-priority-high")[0];
var taskPriorityStatus = document.getElementsByClassName("priority-group")[0];
var taskStatusEl = document.getElementsByClassName("status-group")[0];
var taskStartInput = document.getElementsByClassName("task-startday")[0];
var taskDueInput = document.getElementsByClassName("task-dueday")[0];

const database = firebase.database();

database.ref('task/').once('value', function(snapshot) {
    tdata = snapshot.val().data;
    console.log(tdata); 
    createTask();
});
var childfire = firebase.database().ref('task/data').push();
console.log(childfire);

createTask();
function createTask(){ 
    var createOpen = document.getElementById("task-open-add");
    var createProgress = document.getElementById("task-progress-add");
    var createCompleted = document.getElementById("task-completed-add");
    var i = 0;
    createOpen.innerHTML="";
    createProgress.innerHTML="";
    createCompleted.innerHTML="";

    for(i in tdata){
        
        createBox =`
            <div class="new-task-board" draggable="true">
                <div class="board-edit">
                    <form>
                        <input value = "${tdata[i].taskName}" >  
                    </form>
                    <div class="edit" onclick="taskStatusChange(this)" title="Таскын төрөл өөрчлөх">
                        <i class="fa fa-pencil-square-o"></i>
                        <div class="dropdown-content">
                            <div class="edit-open" id="${i}" onclick="changeStatus(this)"><i class="fa fa-folder-open"></i>Open</div>
                            <div class="edit-progress" id="${i}" onclick="changeStatus(this)"><i class="fa fa-folder-open"></i>Progress</div>
                            <div class="edit-completed" id="${i}" onclick="changeStatus(this)"><i class="fa fa-folder-open"></i>Completed</div>
                        </div>
                    </div>
                </div>
                <div id="board-task-icon">
                    <i class="text${tdata[i].priority} fa fa-flag" title="Ангилал">
                    </i>
                    <span class="task-statu" title="Таскын төрөл">
                        ${tdata[i].status}
                    </span>
                    <span class="task-start" title="Эхлэх хугацаа">
                        ${tdata[i].start}
                    </span>
                    <span class="task-due" title="Дуусах хугацаа">
                        ${tdata[i].due}
                    </span>
                </div>
            </div> `; 
        if(tdata[i].status === 1){
            createOpen.insertAdjacentHTML("beforeend",createBox);
        }
        else if(tdata[i].status === 2){
            createProgress.insertAdjacentHTML("beforeend",createBox);
        }
        else {
            createCompleted.insertAdjacentHTML("beforeend",createBox);
        }
    }
}

function taskPriority(){
    taskPriorityStatus.style.display = "block";
}
var priority = "";
taskPriorityStatus.addEventListener("click",function(e){
    // console.log(e.target.parentNode.className);
    if(e.target.parentNode.parentNode.className ==="priority-group"){
        if(e.target.innerText === "Urgent"||e.target.parentNode.className ==="task-priority-high"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
            priority = "Red";
        }
        else if(e.target.innerText === "Normal"||e.target.parentNode.className ==="task-priority-normal"){
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textGreen");
            priority = "Blue";
        }
        else {
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textRed");
            e.target.parentNode.parentNode.parentNode.children[0].classList.remove("textBlue");
            e.target.parentNode.parentNode.parentNode.children[0].classList.add("textGreen");
            priority = "Green";
        }
    }
    taskPriorityStatus.style.display="none";
});


function taskNewButton(){
    taskAddContainer.style.display="block";
}

function taskStart(){
    taskStartInput.classList.toggle("displayBlock");
}
function taskDue(){
    taskDueInput.classList.toggle("displayBlock");
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
    tdata.priority = priority;
    tdata.start = taskStartInput.value;
    tdata.due = taskDueInput.value
    // console.log(taskStartInput.value);
    // console.log(taskDueInput.value);
    // console.log(priority);
}

function taskStatusChange(e){
    // console.log(e);
    // console.log(e.classList);
    e.children[1].classList.toggle("displayBlock");
} 

function changeStatus(e){
    // console.log(e);
    var id = parseInt(e.id);
    if(e.className==="edit-open"){
        tdata[id].status = 1;
    }
    else if(e.className==="edit-progress"){
        tdata[id].status = 2;
    }
    else{
        tdata[id].status = 3;
    }
    createTask();
}
    
// function getTaskSta(){
//     var newBoard=document.getElementById("new-task-board");
//     console.log(data.status);
//     curentTaskSta=newBoard.data.status;
//     console.log(curentTaskSta);
// }


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

