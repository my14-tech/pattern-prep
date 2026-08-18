// ================================
// Pattern Prep - Pattern Renderer
// ================================

const patternGrid = document.getElementById("patternGrid");
const searchInput = document.getElementById("searchPattern");
const difficultyFilter = document.getElementById("difficultyFilter");
const categoryFilter = document.getElementById("categoryFilter");

const detailModal = document.getElementById("patternModal");
const modalBody = document.getElementById("patternContent");
const closeModal = document.getElementById("closeModal");

let currentPatterns = [...patterns];


// ================================
// Render All Pattern Cards
// ================================

function renderPatternCards(patternList) {

    patternGrid.innerHTML = "";

    if (patternList.length === 0) {

        patternGrid.innerHTML = `
            <div class="card">
                <h2>No Pattern Found</h2>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;
    }

    patternList.forEach(pattern => {

        const card = createPatternCard(pattern);

        patternGrid.appendChild(card);

    });

}


// ================================
// Create Pattern Card
// ================================

function createPatternCard(pattern) {

    const card = document.createElement("article");

    card.className = "pattern-card card";

    card.innerHTML = `

        <div class="pattern-card-header">

            <h3>${pattern.name}</h3>

            <span class="difficulty-badge ${pattern.difficulty.toLowerCase()}">
                ${pattern.difficulty}
            </span>

        </div>

        <p>${pattern.overview}</p>

        <div class="pattern-info">

            <span>📚 ${pattern.category}</span>

            <span>⏱ ${pattern.estimatedTime}</span>

        </div>

        <div class="progress-wrapper">

            <div class="progress-bar">

                <span style="width:${pattern.progress}%"></span>

            </div>

            <small>${pattern.progress}% Completed</small>

        </div>

        <div class="question-count">

    <strong>${pattern.totalQuestions}</strong> Questions

</div>

<div class="card-actions">

    <button class="btn btn-secondary favorite-btn">

        ⭐ Favorite

    </button>

    <button class="btn btn-primary complete-btn">

        ✔ Complete

    </button>

</div>

        <button class="btn btn-primary open-pattern">

            Learn Pattern →

        </button>

    `;

    card.querySelector(".open-pattern").addEventListener("click", () => {

        openPattern(pattern);

    });

    const favoriteButton = card.querySelector(".favorite-btn");

favoriteButton.addEventListener("click", (event) => {

    event.stopPropagation();

    let favorites = getFavoritePatterns();

    if (!favorites.includes(pattern.id)) {

        favorites.push(pattern.id);

    } else {

        favorites = favorites.filter(id => id !== pattern.id);

    }

    saveFavoritePatterns(favorites);

});

const completeButton = card.querySelector(".complete-btn");

completeButton.addEventListener("click", (event) => {

    event.stopPropagation();

    let completed = getCompletedPatterns();

    if (!completed.includes(pattern.id)) {

        completed.push(pattern.id);

    }

    saveCompletedPatterns(completed);

});
    return card;

}


// ====================================
// Open Pattern Details
// ====================================

function openPattern(pattern) {

    modalBody.innerHTML = `

        <h2>${pattern.name}</h2>

        <p class="pattern-overview">

            ${pattern.overview}

        </p>

        <div class="pattern-detail-grid">

            <div class="detail-card">

                <h3>Recognition Signals</h3>

                <ul>

                    ${pattern.recognition.map(item => `<li>${item}</li>`).join("")}

                </ul>

            </div>

            <div class="detail-card">

                <h3>When To Use</h3>

                <ul>

                    ${pattern.whenToUse.map(item => `<li>${item}</li>`).join("")}

                </ul>

            </div>

            <div class="detail-card">

                <h3>Algorithm</h3>

                <ol>

                    ${pattern.algorithm.map(item => `<li>${item}</li>`).join("")}

                </ol>

            </div>

            <div class="detail-card">

                <h3>Dry Run</h3>

                <ol>

                    ${pattern.dryRun.map(item => `<li>${item}</li>`).join("")}

                </ol>

            </div>

        </div>

        <div class="complexity-box">

            <div class="complexity-card">

                <h3>Time Complexity</h3>

                <p>${pattern.timeComplexity}</p>

            </div>

            <div class="complexity-card">

                <h3>Space Complexity</h3>

                <p>${pattern.spaceComplexity}</p>

            </div>

        </div>

        <div class="detail-card">

            <h3>Common Mistakes</h3>

            <ul>

                ${pattern.commonMistakes.map(mistake => `<li>${mistake}</li>`).join("")}

            </ul>

        </div>

        <div class="detail-card">

            <h3>Code Templates</h3>

            <div class="language-tabs">

                <button class="language-btn active" data-lang="cpp">

                    C++

                </button>

                <button class="language-btn" data-lang="java">

                    Java

                </button>

                <button class="language-btn" data-lang="python">

                    Python

                </button>

            </div>

            <pre class="code-template"><code id="templateCode">${pattern.templates.cpp}</code></pre>

        </div>
                <div class="detail-card">

            <h3>Practice Questions</h3>

            <h4>Beginner</h4>

            <ul>

                ${pattern.practiceQuestions.beginner.map(question => `

                    <li>

                        <a href="${question.link}" target="_blank">

                            ${question.title}

                        </a>

                        (${question.difficulty})

                    </li>

                `).join("")}

            </ul>

            <h4>Intermediate</h4>

            <ul>

                ${pattern.practiceQuestions.intermediate.map(question => `

                    <li>

                        <a href="${question.link}" target="_blank">

                            ${question.title}

                        </a>

                        (${question.difficulty})

                    </li>

                `).join("")}

            </ul>

            <h4>Advanced</h4>

            <ul>

                ${pattern.practiceQuestions.advanced.map(question => `

                    <li>

                        <a href="${question.link}" target="_blank">

                            ${question.title}

                        </a>

                        (${question.difficulty})

                    </li>

                `).join("")}

            </ul>

        </div>

        <div class="detail-card">

            <h3>Frequently Asked Interview Questions</h3>

            <ul>

                ${pattern.interviewQuestions.map(question => `

                    <li>${question}</li>

                `).join("")}

            </ul>

        </div>

        <div class="detail-card">

            <h3>Asked By Companies</h3>

            <div class="company-list">

                ${pattern.companies.map(company => `

                    <span class="company-chip">

                        ${company}

                    </span>

                `).join("")}

            </div>

        </div>

        <div class="detail-card">

            <h3>Resources</h3>

            <div class="resource-links">

                <a href="${pattern.resources.youtube}" target="_blank">

                    ▶ YouTube Tutorial

                </a>

                <a href="${pattern.resources.article}" target="_blank">

                    📖 Article

                </a>

                <a href="${pattern.resources.visualizer}" target="_blank">

                    📊 Visualizer

                </a>

            </div>

        </div>

    `;

    detailModal.classList.add("show");

    const languageButtons = document.querySelectorAll(".language-btn");

    const codeBox = document.getElementById("templateCode");

    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            languageButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const language = button.dataset.lang;

            codeBox.textContent = pattern.templates[language];

        });

    });

}
// ====================================
// Search & Filter Patterns
// ====================================

function filterPatterns() {

    const searchText = searchInput.value.toLowerCase().trim();

    const difficulty = difficultyFilter.value;

    const category = categoryFilter.value;

    currentPatterns = patterns.filter(pattern => {

        const matchesSearch =
            pattern.name.toLowerCase().includes(searchText);

        const matchesDifficulty =
            difficulty === "All" ||
            pattern.difficulty === difficulty;

        const matchesCategory =
            category === "All" ||
            pattern.category === category;

        return (
            matchesSearch &&
            matchesDifficulty &&
            matchesCategory
        );

    });

    renderPatternCards(currentPatterns);

}
// ====================================
// Local Storage Helpers
// ====================================

function getCompletedPatterns() {
    return JSON.parse(localStorage.getItem("completedPatterns")) || [];
}

function getFavoritePatterns() {
    return JSON.parse(localStorage.getItem("favoritePatterns")) || [];
}

function saveCompletedPatterns(list) {
    localStorage.setItem("completedPatterns", JSON.stringify(list));
}

function saveFavoritePatterns(list) {
    localStorage.setItem("favoritePatterns", JSON.stringify(list));
}


// ====================================
// Event Listeners
// ====================================

searchInput.addEventListener("input", filterPatterns);

difficultyFilter.addEventListener("change", filterPatterns);

categoryFilter.addEventListener("change", filterPatterns);



// ====================================
// Close Modal
// ====================================

closeModal.addEventListener("click", () => {

    detailModal.classList.remove("show");

});



window.addEventListener("click", (event) => {

    if (event.target === detailModal) {

        detailModal.classList.remove("show");

    }

});



// ====================================
// Initial Page Load
// ====================================

renderPatternCards(patterns);