// ========================================
// Pattern Prep Dashboard
// ========================================
// Temporary data
// Later replace this with API responses
const defaultDashboardData = {
    user: {
        name: "Guest",
        level: "Beginner",
        streak: 0,
        progress: 0
    },
    statistics: {
        patternsCompleted: 0,
        questionsSolved: 0,
        assessmentScore: 0,
        interviewAttempts: 0,
        recognitionScore: 0
    },
    recommendation: {
        pattern: "Arrays",
        description: "Start with arrays and foundational patterns to build a strong base before moving to harder topics.",
        progress: 0,
        completedQuestions: 0,
        totalQuestions: 10
    }
};

const getActiveUser = () => {
    try {
        const stored = JSON.parse(localStorage.getItem('pattern-prep-user') || 'null');
        if (stored && stored.name) {
            return {
                ...defaultDashboardData.user,
                ...stored
            };
        }
        return { ...defaultDashboardData.user, name: 'Guest' };
    } catch (error) {
        return { ...defaultDashboardData.user, name: 'Guest' };
    }
};

// ========================================
// Helper
// ========================================
function setText(id, value){
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

// ========================================
// Load User
// ========================================
function loadUser(){
    const activeUser = getActiveUser();
    const userName = activeUser.name || 'Guest';
    const level = activeUser.level || defaultDashboardData.user.level;
    const streak = Number(activeUser.streak || 0);
    const progress = Number(activeUser.progress || 0);

    setText("welcome-user", `Hello, ${userName}`);
    setText("learning-level", `You are currently at ${level} level. Keep learning consistently.`);
    setText("current-level", level);
    setText("current-streak", `${streak} Days 🔥`);
    setText("overall-progress", `${progress}%`);
}

// ========================================
// Statistics
// ========================================
function loadStatistics(){
    const storedUser = JSON.parse(localStorage.getItem('pattern-prep-user') || '{}');
    const stats = {
        patternsCompleted: Number(storedUser.patternsCompleted || 0),
        questionsSolved: Number(storedUser.questionsSolved || 0),
        assessmentScore: Number(storedUser.assessmentScore || 0),
        interviewAttempts: Number(storedUser.interviewAttempts || 0),
        recognitionScore: Number(storedUser.recognitionScore || 0)
    };

    setText("patterns-completed", stats.patternsCompleted);
    setText("questions-solved", stats.questionsSolved);
    setText("assessment-score", `${stats.assessmentScore}%`);
    setText("interview-attempts", stats.interviewAttempts);
    setText("recognition-score", `${stats.recognitionScore}%`);
}

// ========================================
// Recommendation
// ========================================
function loadRecommendation(){
    const recommendation = {
        pattern: "Arrays",
        description: "Start with arrays and foundational patterns to build a strong base before moving to harder topics.",
        progress: 0,
        completedQuestions: 0,
        totalQuestions: 10
    };

    setText("recommended-pattern", recommendation.pattern);
    setText("recommendation-description", recommendation.description);
    setText("progress-text", `${recommendation.completedQuestions} / ${recommendation.totalQuestions} Questions Completed`);
    document.getElementById("pattern-progress").style.width = `${recommendation.progress}%`;
}

// ========================================
// Dashboard Initialization
// ========================================
function loadDashboard(){
    loadUser();
    loadStatistics();
    loadRecommendation();
}

document.addEventListener("DOMContentLoaded", loadDashboard);