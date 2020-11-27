var myBtnSignIn = document.getElementById("btn-sign-in"),
    myBtnSignUp = document.getElementById("btn-sign-up"),
    myContainer = document.getElementById("container"),
    mybtnforgetpass = document.getElementById("btn-forget-password");

window.onload = function () {
}
var myGrayTheme = document.getElementById("gray"),
    myOrangeTheme = document.getElementById("orange"),
    myPinkTheme = document.getElementById("pink")

function resetColor() {
    myGrayTheme.style.border = "none";
    myOrangeTheme.style.border = "none";
    myPinkTheme.style.border = "none";
}
// ongo soligdoh hesegg


myOrangeTheme.onclick = function () {
    resetColor();
    this.style.border = "2px solid pink";
    document.body.style.backgroundColor = "pink";

}

myPinkTheme.onclick = function () {
    resetColor();
    this.style.border = "2px solid pink";
    document.body.style.backgroundColor = "orange";
}