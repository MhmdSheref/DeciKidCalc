let form = document.forms[0];
let textBox = document.querySelector("#math-exp");
let ansBox = document.querySelector("#math-ans");

form.addEventListener("submit", saveToLocal);

if (!localStorage.getItem("username")) {
    document.querySelector(".form-container").style.display= "block";
} else {
    username= localStorage.getItem("username");
    dob= localStorage.getItem("dob");
    theme= localStorage.getItem("theme");
}

form.theme.addEventListener("change" , function a () {
    form.querySelector("img").src = `/assets/images/${form.theme.value}.css`;
});

function checkAns() {
    let mathExp = textBox.value;
    let mathAns = ansBox.value;
    let mathExpAns;

    if (mathExp.slice(-1) === "=") {
        //this is an equation
        mathExpAns = mathExp + "==" + mathAns;
    } else if (mathExp.includes(">") || mathExp.includes("<")) {
        //this is an inequality
        mathExpAns = mathExp;
    } else {
        return;
    }

    try {
        if (eval(mathExpAns)){
            //correct answer
            textBox.value = "Correct Answer!";
        } else {
            //wrong answer
            textBox.value = "Try Again! :(";
        }
    } catch  {
        textBox.value = "Format Error"
    }

    setTimeout(clearTxt, 1000);
}

function clearTxt() {
    textBox.value = "";
    ansBox.value = "";
}

function addToTextBox (a) {
    let selected = textBox;
    let maxChar = 12;

    if (textBox.value.slice(-1) === "=") {
        selected = ansBox;
        maxChar = 4;
    }

    if (selected.value.length < maxChar) {
        selected.value += a.innerText;
    }
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