// =======================================
// Pattern Prep - Practice Renderer
// =======================================

const practiceGrid = document.getElementById("practiceGrid");
const recommendedContainer = document.getElementById("recommendedContainer");

const searchQuestion = document.getElementById("searchQuestion");
const patternFilter = document.getElementById("patternFilter");
const difficultyFilter = document.getElementById("difficultyFilter");
const companyFilter = document.getElementById("companyFilter");

const solvedCount = document.getElementById("solvedCount");
const bookmarkCount = document.getElementById("bookmarkCount");
const completionPercent = document.getElementById("completionPercent");

let currentQuestions = [...practiceQuestions];


// =======================================
// Render Practice Cards
// =======================================

function renderPracticeCards(questionList){

    practiceGrid.innerHTML = "";

    if(questionList.length === 0){

        practiceGrid.innerHTML = `

            <div class="empty-state card">

                <h2>No Questions Found</h2>

                <p>Try changing your search or filters.</p>

            </div>

        `;

        return;

    }

    questionList.forEach(question=>{

        const card = createPracticeCard(question);

        practiceGrid.appendChild(card);

    });

}



// =======================================
// Create Practice Card
// =======================================

function createPracticeCard(question){

    const card = document.createElement("article");

    card.className = "practice-card";

    card.innerHTML = `

        <h3>${question.title}</h3>

        <div class="badge-row">

            <span class="badge">

                ${question.pattern}

            </span>

            <span class="badge ${question.difficulty.toLowerCase()}">

                ${question.difficulty}

            </span>

            <span class="badge">

                ${question.company}

            </span>

        </div>

        <p>

            Estimated Time:
            <strong>${question.estimatedTime}</strong>

        </p>

        ${question.solved ? `

            <span class="solved-tag">

                ✔ Solved

            </span>

        ` : ""}

        <div class="practice-actions">

            <button class="btn btn-primary solve-btn">

                Solve

            </button>

            <button class="btn btn-secondary bookmark-btn ${question.bookmarked ? "active" : ""}">

                ⭐

            </button>

            <button class="btn btn-secondary solved-btn">

                ${question.solved ? "Completed" : "Mark Solved"}

            </button>

        </div>

    `;



    // Solve Button

    const solveButton = card.querySelector(".solve-btn");

    solveButton.addEventListener("click",()=>{

        window.open(question.leetcode,"_blank");

    });



    // Bookmark Button

    const bookmarkButton = card.querySelector(".bookmark-btn");

    bookmarkButton.addEventListener("click",()=>{

        toggleBookmark(question.id);

    });



    // Solved Button

    const solvedButton = card.querySelector(".solved-btn");

    solvedButton.addEventListener("click",()=>{

        toggleSolved(question.id);

    });



    return card;

}



// =======================================
// Toggle Bookmark
// =======================================

function toggleBookmark(id){

    const question = practiceQuestions.find(q=>q.id===id);

    question.bookmarked = !question.bookmarked;

    renderPracticeCards(currentQuestions);

    renderRecommended();

    updateSummary();

}



// =======================================
// Toggle Solved
// =======================================

function toggleSolved(id){

    const question = practiceQuestions.find(q=>q.id===id);

    question.solved = !question.solved;

    renderPracticeCards(currentQuestions);

    renderRecommended();

    updateSummary();

}



// =======================================
// Update Summary
// =======================================

function updateSummary(){

    const solved =
    practiceQuestions.filter(q=>q.solved).length;

    const bookmarked =
    practiceQuestions.filter(q=>q.bookmarked).length;

    solvedCount.textContent =
    `${solved} / ${practiceQuestions.length}`;

    bookmarkCount.textContent =
    bookmarked;

    const percentage =
    Math.round((solved / practiceQuestions.length) * 100);

    completionPercent.textContent =
    `${percentage}%`;

}
// =======================================
// Filter Questions
// =======================================

function filterQuestions(){

    const search =
    searchQuestion.value.toLowerCase().trim();

    const selectedPattern =
    patternFilter.value;

    const selectedDifficulty =
    difficultyFilter.value;

    const selectedCompany =
    companyFilter.value;

    currentQuestions = practiceQuestions.filter(question=>{

        const matchesSearch =
        question.title.toLowerCase().includes(search);

        const matchesPattern =
        selectedPattern==="All" ||
        question.pattern===selectedPattern;

        const matchesDifficulty =
        selectedDifficulty==="All" ||
        question.difficulty===selectedDifficulty;

        const matchesCompany =
        selectedCompany==="All" ||
        question.company===selectedCompany;

        return (
            matchesSearch &&
            matchesPattern &&
            matchesDifficulty &&
            matchesCompany
        );

    });

    renderPracticeCards(currentQuestions);

}



// =======================================
// Populate Filters
// =======================================

function populateFilters(){

    const patterns =
    [...new Set(practiceQuestions.map(q=>q.pattern))];

    patterns.forEach(pattern=>{

        const option =
        document.createElement("option");

        option.value = pattern;

        option.textContent = pattern;

        patternFilter.appendChild(option);

    });



    const companies =
    [...new Set(practiceQuestions.map(q=>q.company))];

    companies.forEach(company=>{

        const option =
        document.createElement("option");

        option.value = company;

        option.textContent = company;

        companyFilter.appendChild(option);

    });

}



// =======================================
// Recommended Questions
// =======================================

function renderRecommended(){

    recommendedContainer.innerHTML = "";

    const recommended =
    practiceQuestions
        .filter(question=>!question.solved)
        .slice(0,3);

    recommended.forEach(question=>{

        const card =
        createPracticeCard(question);

        recommendedContainer.appendChild(card);

    });

}



// =======================================
// Event Listeners
// =======================================

searchQuestion.addEventListener("input",filterQuestions);

patternFilter.addEventListener("change",filterQuestions);

difficultyFilter.addEventListener("change",filterQuestions);

companyFilter.addEventListener("change",filterQuestions);



// =======================================
// Initialize
// =======================================

populateFilters();

renderPracticeCards(practiceQuestions);

renderRecommended();

updateSummary();