let form = document.forms[0];

form.addEventListener("submit", saveToLocal);

if (!localStorage.getItem("username")) {
    document.querySelector(".form-container").style.display= "flex";
} else {
    username= localStorage.getItem("username");
    dob= localStorage.getItem("dob");
    theme= localStorage.getItem("theme");
}

let mathExp = "5*5=";
let mathAns = "15";
let mathExpAns;

if (mathExp.slice(-1) === "=") {
    //this is an equation
     mathExpAns = mathExp + "==" + mathAns;
} else {
    //this is an inequality
     mathExpAns = mathExp;
}

if (eval(mathExpAns)){
    //correct answer
    console.log("correct answer");
} else {
    //wrong answer
    console.log("wrong answer");
}




function saveToLocal () {
    localStorage.setItem("username", form.username.value);
    localStorage.setItem("dob", form.dob.value);
    localStorage.setItem("theme", form.theme.value);
}

function calcAge (date) {
    let birthDate = new Date(date);
    let currentDate = new Date();
    return Math.floor((currentDate - birthDate) / 31556952000);
}

