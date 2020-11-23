// Global variables
var userList = document.getElementById("userList");
var chat = document.getElementsByClassName("pChat")[0];
var notify;
var countMessanger = [];
var idd;
var messagesData = [];
var me = "zaya";
var userLogInState;
var currentUser;
var onCheck = false;

// Firebase reference
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     console.log("current user");
//     console.log(user.email);
//     currentUser = user;
//     setTimeout(updateLogin, 3000, true);
//     // userLogInState = true;
//     // console.log(userLogInState);
//   } else {
//     setTimeout(updateLogin, 3000, false);
//     console.log("no user did not sign in currently");
//     // get the user that logged out ...
//   }
// });

var messagesRef = firebase.database().ref("messages/");
// messagesRef.on("value", function (snapshot) {
//   // messagesData = Object.values(snapshot.val());
//   messagesData = snapshot.val();
//   console.log(messagesData);
//   if(countMessanger.length > 0){
//     viewMessage();
//   }
//   // console.log("firebase finished");
// });
// var messagesRefpri = firebase
//     .database()
//     .ref("messages/privatescrgL0iiPKRb8l6UKi7h21Tx5zR2");
// messagesRefpri.on("child_added", function (data) {
//     console.log("Child Added : ");
//     console.log(data.val());
//     // messagesData = snapshot.val();
//     // console.log(messagesData);
//     // if (countMessanger.length > 0) {
//     //   viewMessage();
//     // }
//     // console.log("firebase finished");
// });
var notificationRef = firebase.database().ref("notification/");
notificationRef.on("value", function (shot) {
    console.log(shot.val());
    notify = shot.val();

    // Notification.requestPermission().then(console.log("notification is allowed"));
    if (notify.new) {
        alert("new notication");
        doProcess(notify);
        notificationRef.update({ new: false, from: "", to: "", url: "" });

    }
});
var usersRef = firebase.database().ref("users/user");

usersRef.on("value", function (snapshot) {
    var objects = snapshot.val();
    userLogInState = objects;
    console.log(userLogInState);
    onCheck = true;
    updateUser();
});
// email: "azzayab@gmail.com"
// logIn: "false"
// name: "azzaya"
// uid: "scrgL0iiPKRb8l6UKi7h21Tx5zR2"
// url: "scrgL0iiPKRb8l6UKi7h21Tx5zR2"

// Html render section
function createChat(e) {
    console.log(e);
    console.log(userLogInState[e.id].name);
    console.log(userLogInState[e.id].uid);

    const privateChat = {
        name: userLogInState[e.id].name,
        iud: userLogInState[e.id].uid,
    };

    // console.log(name.children[1].children[0]);
    if (countMessanger.length >= 4) {
        // countMessanger = 3;
        console.log("overflow");
    } else {
        countMessanger.push(privateChat);
    }
    chat.innerText = "";
    var iid;
    for (let i in countMessanger) {
        var chatHTML = `
            <div class="chat" id="c-${i}">
              <div class="chat__left">
                <div class="chat__left__header">
                  <div class="header__title">
                    <img src="../../assets/avatar1.png" alt="" width="40px" style="border-radius:50%"/>
                    <div id="${countMessanger[i].iud}" class="uuid">${countMessanger[i].name}</div>
                  </div>
                  <i class="fas fa-times"></i>
                </div>
                <div class="chat__left__content" id="contentMessage">

                </div>
                <div class="chat__left__footer">
                  <input type="text" id="inputMsg" placeholder="Type message ..." />
                  <div class="btn__group">
                    <div>
                      <i class="fa fa-paperclip fa-1.5x"></i>
                    </div>
                    <div>
                      <i class="fa fa-smile-o fa-1.5x"></i>
                    </div>
                    <div>
                      <i
                        class="fa fa-paper-plane fa-1.5x"
                        onclick="sendMessage()"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
        chat.insertAdjacentHTML("beforeend", chatHTML);
        iid = countMessanger[i].id;
    }
    var chatClose = document.getElementsByClassName("chat")[0];
    console.log(chatClose);
    chatClose.addEventListener("click", function (e) {
        var isId = e.target.parentNode.parentNode.parentNode.id;
        if (isId) {
            console.log("chat closed");
        }
    });
    viewMessage(iid);
}

function viewMessage(cuid) {
    // console.log(cuid);
    var messagesContent = document.getElementById("contentMessage");
    // console.log(messagesContent);
    messagesContent.innerHTML = "";
    var mData = messagesData[`private-${cuid}`];
    console.log("mData");
    // console.log(mData);
    for (const i in mData) {
        var htmlContent = `<div class="chat__message ${mData[i].sender === me ? "you__message" : "other__message"
            }">
            <div class="chat__content">
              <img width="50" src="../../assets/user1.jpg" alt=""/>
              <div class="chat__message__text">${mData[i].message}</div>
              <div class="chat__message__time">${mData[i].date}</div>
            </div>
          </div>`;
        messagesContent.insertAdjacentHTML("beforeend", htmlContent);
    }
    messagesContent.scrollTop = messagesContent.scrollHeight;
    //  audio togluulah
    // setTimeout(function () {
    //   var audio = document.getElementById("audio").play();
    // }, 200);
}

function updateUser() {
    userList.innerHTML = "";
    for (let i in userLogInState) {
        var userHTML = `
        <div class="chat__right__user" id="${i}" onclick="createChat(this)">
          <img src="../../assets/avatar1.png" alt="" />
          <div>
            <p id="${userLogInState[i].uid}">${userLogInState[i].name}</p>
            <p class="chat__user ${userLogInState[i].logIn ? "online" : "offline"
            }">${userLogInState[i].logIn ? "Online" : "Offline"}</p>
          </div>
        </div>`;
        userList.insertAdjacentHTML("beforeend", userHTML);
    }
}

// Utilities section
function doProcess(data) {
    var { from, to, url } = data;
    console.log(from);
    console.log(to);
    console.log(url);
    var suid;
    for (const i in userLogInState) {
        if (userLogInState[i].uid === to) {
            console.log(i);
            suid = i;
        }
    }
    if (suid) {
        createChat({ id: suid });
    }
}

function updateLogin(state) {
    console.log(state);
    console.log(typeof state);
    if (onCheck) {
        // for(let i in userLogInState){
        //   if(userLogInState[i].email === currentUser.email){
        //     usersRef.child(i).update({"logIn" : state});
        console.log("update successful");
        //   }
        // }
    } else {
        console.log("update unsuccessful");
    }
}

function sendMessage() {
    var time = new Date(Date.now()).toLocaleTimeString();
    var msg = document.getElementById("inputMsg").value;
    var uidKey = document.querySelector(".uuid").id;
    idd = uidKey;

    messagesChildRef = messagesRef.child("private-" + uidKey).push({
        uid: uidKey,
        name: "azzaya",
        sender: me,
        email: "azzayab@gmail.com",
        date: time,
        message: msg,
        file: "url",
    });
    notificationRef.update({
        from: "zaya",
        to: uidKey,
        new: true,
        url: "private-" + uidKey,
    });
    document.getElementById("inputMsg").value = "";
}