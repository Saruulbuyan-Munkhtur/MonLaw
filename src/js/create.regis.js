function check() {
    let el = document.getElementById('name');
    console.log(el.value);
    if (el.value == "") {
        showError(el, "ta owog neree oruulna uu!!");
    }


    function showError(elem, message) {
        //console.log(elem, elem.parentNode);
        //let el = document.getElementsByClassName("error")[0];
        let el = elem.parentNode.querySelector(".error");

        //console.log(tt);
        el.innerHTML = el.innerHTML + "<p>" + message + "</p>";
        el.classList.remove("hide");
    }



    let rl = document.getElementById('surname');
    if (rl.value === "") { showError(rl, 'ta neree oruulna uu!'); }
    let pass1 = document.getElementsByClassName("pwd")[0];
    let pass2 = document.getElementsByClassName("pwd2")[0];
    if (pass1.value === pass2.value) {
        showError(pass2, "nuuts ug taarlaa!");
    } else {
        showError(pass2, "nuuts ug taarahgui bna dahin oroldnuu!");
    }
    let emails = document.getElementById("email");
    if (emails.value === "") {
        showError(emails, "ta email oruulna uu!");
    }
    let phone = document.getElementById("phone_number");
    if (phone.value === "") {
        showError(phone, "utasnii dugaaaraa oruulna uu!");
    }
}

