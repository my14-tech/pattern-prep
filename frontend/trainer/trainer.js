const trainerQuestionSet = Array.isArray(window.trainerQuestions) ? window.trainerQuestions : (window.trainerQuestions = []);

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const getCurrentQuestion = () => trainerQuestionSet[currentQuestionIndex] || null;

if (!trainerQuestionSet.length) {
  console.warn('Trainer data is unavailable.');
}
