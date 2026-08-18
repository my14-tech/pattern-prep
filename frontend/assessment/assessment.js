const assessmentContainer = document.getElementById('assessmentContainer');

const assessmentQuestions = [
  {
    level: 'Easy',
    question: 'Which pattern best fits a problem asking for the longest contiguous substring meeting a condition?',
    options: ['Sliding Window', 'Binary Search', 'Greedy', 'Backtracking'],
    answer: 'Sliding Window',
    explanation: 'The term "contiguous substring" and the need to keep a moving range usually points to sliding window.'
  },
  {
    level: 'Easy',
    question: 'When you need to compare elements from both ends of an array while moving inward, which pattern is usually used?',
    options: ['Two Pointers', 'Hash Map', 'DFS', 'Trie'],
    answer: 'Two Pointers',
    explanation: 'Two pointers is ideal when you shrink or expand the search space from both ends of a sorted or linear structure.'
  },
  {
    level: 'Easy',
    question: 'A problem asks you to traverse a tree level by level and process each node once. Which pattern is most natural?',
    options: ['BFS', 'Binary Search', 'Dynamic Programming', 'Backtracking'],
    answer: 'BFS',
    explanation: 'Breadth-first search explores nodes by depth, which is exactly what level-order traversal needs.'
  },
  {
    level: 'Easy',
    question: 'When you need to search a sorted list in O(log n), which pattern is usually best?',
    options: ['Binary Search', 'DFS', 'Heap', 'Two Pointers'],
    answer: 'Binary Search',
    explanation: 'Binary search repeatedly cuts the search space in half when the input is sorted.'
  },
  {
    level: 'Medium',
    question: 'Which pattern is most useful when a problem needs the maximum or minimum element while processing data online?',
    options: ['Heap', 'Two Pointers', 'Greedy', 'Trie'],
    answer: 'Heap',
    explanation: 'A priority queue or heap gives efficient access to the current extreme value.'
  },
  {
    level: 'Medium',
    question: 'A problem has overlapping subproblems and an optimal substructure. Which pattern is most likely required?',
    options: ['Dynamic Programming', 'Stack', 'BFS', 'Union Find'],
    answer: 'Dynamic Programming',
    explanation: 'Dynamic programming is designed for problems that can be broken into reusable subproblems with memoization or tabulation.'
  },
  {
    level: 'Medium',
    question: 'A problem involving exploring every possible path in a tree usually suggests which pattern?',
    options: ['DFS', 'Hash Map', 'Queue', 'Prefix Sum'],
    answer: 'DFS',
    explanation: 'DFS is the standard choice when you need to explore each branch deeply before coming back.'
  },
  {
    level: 'Medium',
    question: 'Which pattern is best when you must connect components or detect cycles in an undirected graph efficiently?',
    options: ['Union Find', 'Trie', 'Greedy', 'Binary Search'],
    answer: 'Union Find',
    explanation: 'Union Find is designed to track connected components and efficiently check whether two nodes are already connected.'
  },
  {
    level: 'Hard',
    question: 'Which pattern is commonly used to generate all valid combinations or permutations when a decision must be explored recursively?',
    options: ['Backtracking', 'Sliding Window', 'Prefix Sum', 'Queue'],
    answer: 'Backtracking',
    explanation: 'Backtracking explores choices recursively and undoing them when a branch fails, making it ideal for combinatorial search.'
  },
  {
    level: 'Hard',
    question: 'When a problem asks for the best possible choice at each step without revisiting, which pattern is most likely intended?',
    options: ['Greedy', 'DFS', 'Hash Map', 'Trie'],
    answer: 'Greedy',
    explanation: 'Greedy works when choosing the locally optimal move leads to a globally optimal solution under the right conditions.'
  }
];

let assessmentIndex = 0;
let assessmentScore = 0;

const renderAssessment = () => {
  if (!assessmentContainer) return;

  if (assessmentIndex >= assessmentQuestions.length) {
    const percentage = Math.round((assessmentScore / assessmentQuestions.length) * 100);
    const recommendation = percentage >= 75
      ? 'Strong foundation. Move to harder pattern sets and mixed practice.'
      : percentage >= 50
        ? 'Solid start. Revise the patterns you missed before moving ahead.'
        : 'Begin with the fundamentals and revisit the learning module before your next attempt.';

    assessmentContainer.innerHTML = `
      <h3>Assessment complete</h3>
      <p>Score: ${assessmentScore} / ${assessmentQuestions.length}</p>
      <p>Percentage: ${percentage}%</p>
      <p>${recommendation}</p>
      <button class="btn btn-primary" id="assessmentReset">Retake assessment</button>
    `;

    const resetButton = document.getElementById('assessmentReset');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        assessmentIndex = 0;
        assessmentScore = 0;
        renderAssessment();
      });
    }

    return;
  }

  const current = assessmentQuestions[assessmentIndex];
  assessmentContainer.innerHTML = `
    <h3>Question ${assessmentIndex + 1} of ${assessmentQuestions.length}</h3>
    <p><strong>Level:</strong> ${current.level}</p>
    <p>${current.question}</p>
    <div class="feature-grid compact-feature-grid">
      ${current.options
        .map(
          (option) => `
            <button class="feature-card card assessment-option" data-answer="${option}">
              ${option}
            </button>
          `
        )
        .join('')}
    </div>
    <div id="assessmentFeedback" class="login-status"></div>
  `;

  const options = assessmentContainer.querySelectorAll('.assessment-option');
  options.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.answer;
      const isCorrect = selected === current.answer;
      assessmentScore += isCorrect ? 1 : 0;
      const feedback = document.getElementById('assessmentFeedback');
      if (feedback) {
        feedback.textContent = isCorrect
          ? `Correct — ${current.explanation}`
          : `Incorrect — ${current.explanation}`;
      }
      options.forEach((option) => {
        option.disabled = true;
        option.style.opacity = option.dataset.answer === current.answer ? '1' : '0.7';
      });
      setTimeout(() => {
        assessmentIndex += 1;
        renderAssessment();
      }, 1000);
    });
  });
};

renderAssessment();
