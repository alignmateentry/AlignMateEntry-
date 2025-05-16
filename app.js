function openAlignMateBlueprint() {
    "use strict";
    document.getElementById("AlignMateBlueprintID").style.display = "block";
}

let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const resultSection = document.getElementById("result");

function startQuiz() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    questions[currentQuestion].classList.add("active");
}

function nextQuestion() {
    questions[currentQuestion].classList.remove("active");
    currentQuestion++;

    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add("active");
    } else {
        document.getElementById("quiz").style.display = "none";
        resultSection.style.display = "block";
    }
}
