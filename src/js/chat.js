// Global variables
var userList = document.getElementById("userList");
var chat = document.getElementsByClassName("pChat")[0];
var notify;
var notCheck = false;
var countMessanger = [];
var idd;
var messagesData = [];
var me = "zaya";
var userLogInState;
var currentUser = { uid: "scrgL0iiPKRb8l6UKi7h21Tx5zR2" };
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
messagesRef.on("value", function (snapshot) {
    // messagesData = Object.values(snapshot.val());
    messagesData = snapshot.val();
    console.log("Messages");
    console.log(messagesData);
    if (countMessanger.length > 0) {
        viewMessage();
    }
    // console.log("firebase finished");
});
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
    console.log("Notification");
    console.log(shot.val());
    notify = shot.val();

    // Notification.requestPermission().then(console.log("notification is allowed"));
    if (notify.new) {
        alert("new notication");
        doProcess(notify);
        notCheck = true;
        notificationRef.update({ new: false, from: "", to: "", url: "" });

    }
});
var usersRef = firebase.database().ref("users/user");
usersRef.on("value", function (snapshot) {
    var objects = snapshot.val();
    userLogInState = objects;
    console.log("Users");
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
function viewChat(e) {
    console.log("ViewChat");
    console.log(e);
    console.log(onCheck);
    chat.innerText = "";
    for (let i in countMessanger) {
        var chatHTML = `
            <div class="chat" id="chat">
              <div class="chat__left">
                <div class="chat__left__header">
                  <div class="header__title">
                    <img src="../../assets/avatar1.png" alt="" width="40px" style="border-radius:50%"/>
                    <div id="${countMessanger[i].uid}" class="uuid">${countMessanger[i].name}</div>
                  </div>
                  <i class="fas fa-times" onclick="closeChat(this)" id="${countMessanger[i].uid}"></i>
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
        if (notCheck === true) {
            viewMessage(countMessanger[i].uid, e.to);
        }
        else {
            viewMessage(countMessanger[i].uid, currentUser.uid);
        }

    }
}

function createChat(e) {
    console.log("Createchat");
    console.log(e);
    console.log(userLogInState[e.id].name);
    console.log(userLogInState[e.id].uid);
    var found = false;
    var privateChat;
    if (userLogInState[e.id].uid === currentUser.uid) {
        // return;
        console.log("currentUser's id : " + userLogInState[e.id].uid + " = " + currentUser.uid);
    } else {
        privateChat = {
            name: userLogInState[e.id].name,
            uid: userLogInState[e.id].uid,
            chatStatus: true
        };
    }


    // console.log(name.children[1].children[0]);
    if (countMessanger.length >= 4) {
        // countMessanger = 3;
        console.log("overflow");
    } else {
        for (let i in countMessanger) {
            if (countMessanger[i].uid === privateChat.uid) {
                found = true;
                break;
            }
        }
        if (!found) {
            countMessanger.push(privateChat);
        }
    }
    viewChat(e);
}

function closeChat(e) {
    var cf = false;
    var idx = -1;
    console.log(e.id);
    console.log(countMessanger);
    for (let i in countMessanger) {
        if (countMessanger[i].uid === e.id) {
            cf = true;
            idx = i;
            break;
        }
    }
    if (cf) {
        console.log("chat is closed : " + idx);
        countMessanger.splice(idx, 1);

    }
    viewChat();
}

function viewMessage(cuid, idd) {
    console.log("ViewMessage");
    if (cuid) {
        console.log("Uid : " + cuid + " - " + idd);
        // console.log(cuid);
        var messagesContent = document.getElementById("contentMessage");
        // console.log(messagesContent);
        messagesContent.innerHTML = "";
        var mData = messagesData[`p-${cuid}${idd}`];
        console.log("mData");
        console.log(mData);
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
}

function updateUser() {
    console.log("UpdateUser");
    userList.innerHTML = "";
    for (let i in userLogInState) {
        var userHTML = `
        <div class="chat__right__user" id="${i}" onclick="createChat(this)">
          <img src="../../assets/avatar1.png" alt="" />
          <div>
            <p id="${userLogInState[i].uid}">${userLogInState[i].name}</p>
            <p class="chat__user ${userLogInState[i].logIn === true ? "online" : "offline"}">${userLogInState[i].logIn === true ? "Online" : "Offline"}</p>
          </div>
        </div>`;
        if (userLogInState[i].uid === currentUser.uid) {
            console.log("current user is here");
        } else {
            console.log(userLogInState[i].logIn);
            userList.insertAdjacentHTML("beforeend", userHTML);
        }
    }
}

// Utilities section
function doProcess(data) {
    console.log("DoProcess");
    var suid;
    for (const i in userLogInState) {
        if (userLogInState[i].uid === data.from) {
            console.log(i);
            suid = i;
        }
    }
    if (suid) {
        createChat({ id: suid, to: data.to });
    }
}

function updateLogin(state) {
    console.log("UpdateLogin");
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
    console.log("SendMessage");
    var time = new Date(Date.now()).toLocaleTimeString();
    var msg = document.getElementById("inputMsg").value;
    var uidKey = document.querySelector(".uuid").id;

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
        from: currentUser.uid,
        to: uidKey,
        new: true,
        url: "p-" + uidKey + currentUser.uid,
    });
    document.getElementById("inputMsg").value = "";
}