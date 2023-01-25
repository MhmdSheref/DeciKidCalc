if (!localStorage.getItem("username")) {
    document.querySelector(".form-container").style.display= "flex";
} else {
    username= localStorage.getItem("username")
    dob= localStorage.getItem("dob")
    theme= localStorage.getItem("theme")
}

let form = document.forms[0];

form.addEventListener("submit", saveToLocal)

function saveToLocal () {
    localStorage.setItem("username", form.username.value);
    localStorage.setItem("dob", form.dob.value);
    localStorage.setItem("theme", form.theme.value);
}

function calcAge () {
    let birthDate = new Date(dob);
    let currentDate = new Date();
    let age= Math.floor((currentDate - birthDate) / 31556952000);
}
