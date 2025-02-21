let expression = "";
let correctAnswers = 0; 

function login() {
    let userName = document.getElementById("name").value;
    if (userName.trim() !== "") {
        document.getElementById("welcomeMessage").textContent = `Welcome, ${userName}!`;
    } else {
        alert("Please enter your name.");
    }
}

function addToExpression(value) {
    expression += value;
    document.getElementById("mathExpression").textContent = "Expression: " + expression;
}

function clearExpression() {
    expression = "";
    document.getElementById("mathExpression").textContent = "Expression: ";
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correctAnswer = eval(expression);

    if (userAnswer == correctAnswer) {
        correctAnswers++;
        document.getElementById("result").textContent = "Great job!";
    } else {
        document.getElementById("result").textContent = "Try again.";
    }

    document.getElementById("scoreCounter").textContent = `Correct Answers: ${correctAnswers}`;
}

function changeTheme() {
    let theme = document.getElementById("theme").value;
    let themeStylesheet = document.getElementById("themeStylesheet");

    switch (theme) {
        case "space":
            themeStylesheet.setAttribute("href", "styles-space.css");
            break;
        case "ocean":
            themeStylesheet.setAttribute("href", "styles-ocean.css");
            break;
        case "spider":
            themeStylesheet.setAttribute("href", "styles-spider.css");
            break;
        default:
            themeStylesheet.setAttribute("href", "styles-default.css");
            break;
    }
}
