let correctAnswers = 0;
let expression = "";

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
    let correctAnswer;

    try {
        correctAnswer = eval(expression); // Evaluates math expression safely
    } catch (e) {
        document.getElementById("result").textContent = "Invalid expression!";
        return;
    }

    if (userAnswer == correctAnswer) {
        correctAnswers++;
        document.getElementById("result").textContent = "Great job!";
    } else {
        document.getElementById("result").textContent = "Try again.";
    }


    document.getElementById("scoreCounter").textContent = `Correct Answers: ${correctAnswers}`;
}

document.getElementById("submitBtn").addEventListener("click", function () {
    let userName = document.getElementById("name").value;
    if (userName.trim() !== "") {
        document.getElementById("welcomeMessage").textContent = `Welcome, ${userName}!`;
    }
});

function changeTheme() {
    let theme = document.getElementById("theme").value;
    document.body.className = theme; 
}

