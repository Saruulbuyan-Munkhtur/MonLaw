
function signIn() {
    var el = document.getElementById("eror");
    if (el.value === "") {
        showError("Нэвтрэх нэр оруулна уу!");
    }
}
function signIn() {
    var er = document.getElementById("permitt");
    if (er.value === "") {
        showError("Нууц үг оруулна уу");
    }
}
var el = document.getElementsByClassName("false");
function signIn() {
    var els = document.getElementById("eror");
    var ers = document.getElementById("permitt");
    if (els.value === "") {
        showError("Нэвтрэх нэр оруулна уу!", 0);
    } else {
        el[0].classList.add("hide");
    }

    if (ers.value === "") {
        showError("Нууц үг оруулна уу!", 1);
    } else {
        el[1].classList.add("hide");
        if (
            ers.value.length >= 6 &&
            ers.value.length <= 25 &&
            els.value.length >= 6 &&
            els.value.length <= 25
        ) {
            console.log("Login Successfully.");
            // End daraagiin huudas aa duudna
        } else {
            console.log("Length : " + els.value.length);
            console.log("Length : " + ers.value.length);
            showError(
                "Нэр ба нууц үг 6 тэмдэгтээс илүү 25 тэмдэгтээс бага тэмдэгт байх ёстой !!!",
                1
            );
            console.log("Login UnSuccessfully.");
        }
    }
}
function showError(message, type) {
    username = el[0];
    password = el[1];
    if (type === 0) {
        username.innerText = message;
        username.classList.remove("hide");
    } else {
        password.innerText = message;
        password.classList.remove("hide");
    }
}