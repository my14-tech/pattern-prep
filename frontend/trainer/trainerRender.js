// ===================================
// Pattern Trainer Renderer
// ===================================

const questionTitle = document.getElementById("questionTitle");
const questionDescription = document.getElementById("questionDescription");

const optionsContainer = document.getElementById("optionsContainer");

const resultContainer = document.getElementById("resultContainer");

const questionNumber = document.getElementById("questionNumber");

const scoreElement = document.getElementById("score");

const accuracyElement = document.getElementById("accuracy");

const progressFill = document.getElementById("progressFill");

const nextButton = document.getElementById("nextBtn");

const restartButton = document.getElementById("restartBtn");

const finishScreen = document.getElementById("finishScreen");

const finalScore = document.getElementById("finalScore");

const finalAccuracy = document.getElementById("finalAccuracy");

const weakPatterns = document.getElementById("weakPatterns");



let currentQuestionIndex = 0;

let score = 0;

let answered = false;
function renderQuestion(){

    answered = false;

    resultContainer.classList.remove("show");

    const question = trainerQuestions[currentQuestionIndex];

    questionTitle.textContent = question.title;

    questionDescription.textContent = question.description;

    questionNumber.textContent =
        `${currentQuestionIndex + 1} / ${trainerQuestions.length}`;

    optionsContainer.innerHTML = "";

    question.options.forEach(option=>{

        const button = document.createElement("button");

        button.className = "option-btn";

        button.textContent = option;

        button.addEventListener("click",()=>{

            checkAnswer(button,option);

        });

        optionsContainer.appendChild(button);

    });

    updateProgress();

}
// ===================================
// Check Answer
// ===================================

function checkAnswer(selectedButton, selectedOption){

    if(answered) return;

    answered = true;

    const question = trainerQuestions[currentQuestionIndex];

    const optionButtons =
        document.querySelectorAll(".option-btn");

    optionButtons.forEach(button=>{

        button.disabled = true;

        if(button.textContent === question.answer){

            button.classList.add("correct");

        }

    });

    if(selectedOption === question.answer){

        score++;

        scoreElement.textContent = score;

    }

    else{

        selectedButton.classList.add("wrong");

    }

    updateAccuracy();

    showExplanation(question);

}



// ===================================
// Show Explanation
// ===================================

function showExplanation(question){

    resultContainer.classList.add("show");

    resultContainer.innerHTML = `

        <h3>Explanation</h3>

        <p>${question.explanation}</p>

        <h4>Recognition Keywords</h4>

        <div class="keyword-container">

            ${question.keywords.map(keyword=>`

                <span class="keyword-chip">

                    ${keyword}

                </span>

            `).join("")}

        </div>

    `;

}
// ===================================
// Update Progress Bar
// ===================================

function updateProgress(){

    const progress =
        ((currentQuestionIndex + 1) / trainerQuestions.length) * 100;

    progressFill.style.width = `${progress}%`;

}



// ===================================
// Update Accuracy
// ===================================

function updateAccuracy(){

    const accuracy =
        Math.round((score / (currentQuestionIndex + 1)) * 100);

    accuracyElement.textContent = `${accuracy}%`;

}



// ===================================
// Next Question
// ===================================

function nextQuestion(){

    if(!answered){

        alert("Please answer the current question first.");

        return;

    }

    currentQuestionIndex++;

    if(currentQuestionIndex >= trainerQuestions.length){

        showFinalScreen();

        return;

    }

    renderQuestion();

}



// ===================================
// Show Final Screen
// ===================================

function showFinalScreen(){

    finishScreen.style.display = "block";

    document.querySelector(".trainer-card").style.display = "none";

    document.querySelector(".trainer-options").style.display = "none";

    document.querySelector(".trainer-actions").style.display = "none";

    resultContainer.style.display = "none";

    finalScore.textContent =
        `Final Score : ${score} / ${trainerQuestions.length}`;

    const accuracy =
        Math.round((score / trainerQuestions.length) * 100);

    finalAccuracy.textContent =
        `Accuracy : ${accuracy}%`;

    if(accuracy >= 80){

        weakPatterns.textContent =
            "Excellent! You have strong pattern recognition.";

    }

    else if(accuracy >= 60){

        weakPatterns.textContent =
            "Good work! Review the patterns you missed and try again.";

    }

    else{

        weakPatterns.textContent =
            "Keep practicing. Revisit the Learning module before attempting the trainer again.";

    }

}



// ===================================
// Restart Trainer
// ===================================

function restartTrainer(){

    currentQuestionIndex = 0;

    score = 0;

    answered = false;

    scoreElement.textContent = 0;

    accuracyElement.textContent = "0%";

    finishScreen.style.display = "none";

    document.querySelector(".trainer-card").style.display = "block";

    document.querySelector(".trainer-options").style.display = "grid";

    document.querySelector(".trainer-actions").style.display = "flex";

    resultContainer.style.display = "block";

    renderQuestion();

}
// ===================================
// Event Listeners
// ===================================

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartTrainer);

document
    .getElementById("restartTraining")
    .addEventListener("click", restartTrainer);



// ===================================
// Initialize Trainer
// ===================================

renderQuestion();