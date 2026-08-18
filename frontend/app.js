const apiBase = 'http://localhost:5000/api';

const defaultPatterns = [
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    category: 'Arrays & Strings',
    difficulty: 'Beginner',
    totalQuestions: 8,
    estimatedTime: '3 Hours',
    progress: 66,
    roadmap: 'Arrays → Sliding Window → Two Pointers',
    description: 'Use a moving window when you need to track a continuous subarray or substring efficiently.',
    whenToUse: 'Best for problems that involve contiguous ranges, maximum/minimum length, or repeated window updates.',
    mistakes: 'Forgetting to shrink the window, using the wrong boundary conditions, or recomputing totals unnecessarily.',
    complexity: 'Time: O(n) | Space: O(1) for most variants.',
    resources: ['Pattern overview article', 'Visual animation', 'Practice set'],
    roadmapSteps: ['Beginner: Fixed-size windows', 'Intermediate: Variable-size windows', 'Advanced: Multi-window problems'],
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    category: 'Arrays & Sorting',
    difficulty: 'Beginner',
    totalQuestions: 10,
    estimatedTime: '2 Hours',
    progress: 42,
    roadmap: 'Arrays → Two Pointers → Binary Search',
    description: 'Use two pointers to scan from opposite ends or at different speeds.',
    whenToUse: 'Great for sorted arrays, palindromes, and pair-finding problems.',
    mistakes: 'Moving the pointers without a clear invariant or missing the sorted-array assumption.',
    complexity: 'Time: O(n) | Space: O(1)',
    resources: ['Interactive walkthrough', 'Common patterns video', 'Practice drill'],
    roadmapSteps: ['Beginner: Pair sum', 'Intermediate: Partition problems', 'Advanced: Merge-style scanning'],
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'Searching',
    difficulty: 'Intermediate',
    totalQuestions: 6,
    estimatedTime: '2 Hours',
    progress: 55,
    roadmap: 'Binary Search → Greedy → DP',
    description: 'Reduce the search space repeatedly by halving it.',
    whenToUse: 'Use it when the array is sorted and you need to find a target or boundary.',
    mistakes: 'Choosing the wrong midpoint or forgetting to handle the low/high update correctly.',
    complexity: 'Time: O(log n) | Space: O(1)',
    resources: ['Search space animation', 'Binary search cheat sheet', 'Practice list'],
    roadmapSteps: ['Beginner: Find target', 'Intermediate: Boundaries', 'Advanced: Search answers'],
  },
  {
    id: 'dfs',
    name: 'Depth First Search',
    category: 'Graphs & Trees',
    difficulty: 'Advanced',
    totalQuestions: 7,
    estimatedTime: '4 Hours',
    progress: 28,
    roadmap: 'DFS → BFS → Graph traversal',
    description: 'Traverse a tree or graph by exploring deeply before backtracking.',
    whenToUse: 'Use it for connected components, path finding, and tree traversal.',
    mistakes: 'Forgetting to mark visited nodes or causing infinite recursion.',
    complexity: 'Time: O(V + E) | Space: O(V)',
    resources: ['DFS visualization', 'Tree traversal guide', 'Interview examples'],
    roadmapSteps: ['Beginner: Recursive traversal', 'Intermediate: Path detection', 'Advanced: Connected components'],
  },
];

const defaultQuestions = [
  {
    id: 1,
    title: 'Maximum Sum Subarray of Size K',
    pattern: 'Sliding Window',
    difficulty: 'Easy',
    level: 'Beginner',
    platform: 'LeetCode',
    link: 'https://leetcode.com',
    time: '20 min',
    tags: ['arrays', 'window'],
    company: 'Amazon',
  },
  {
    id: 2,
    title: 'Pair With Target Sum',
    pattern: 'Two Pointers',
    difficulty: 'Easy',
    level: 'Beginner',
    platform: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org',
    time: '15 min',
    tags: ['arrays', 'two-pointers'],
    company: 'Microsoft',
  },
  {
    id: 3,
    title: 'Search in Rotated Sorted Array',
    pattern: 'Binary Search',
    difficulty: 'Medium',
    level: 'Intermediate',
    platform: 'LeetCode',
    link: 'https://leetcode.com',
    time: '25 min',
    tags: ['binary-search', 'array'],
    company: 'Google',
  },
  {
    id: 4,
    title: 'Number of Islands',
    pattern: 'DFS',
    difficulty: 'Medium',
    level: 'Intermediate',
    platform: 'LeetCode',
    link: 'https://leetcode.com',
    time: '30 min',
    tags: ['graph', 'dfs'],
    company: 'Meta',
  },
];

const quizQuestions = [
  {
    id: 1,
    prompt: 'When does a sliding window pattern fit best?',
    options: ['When the problem involves a contiguous range', 'When the input is always sorted', 'When recursion is required', 'When you want to brute force every pair'],
    answer: 'When the problem involves a contiguous range',
  },
  {
    id: 2,
    prompt: 'What is the main advantage of a two-pointer strategy?',
    options: ['It reduces time complexity by avoiding nested loops', 'It always guarantees the best answer', 'It avoids extra libraries', 'It requires no edge-case reasoning'],
    answer: 'It reduces time complexity by avoiding nested loops',
  },
  {
    id: 3,
    prompt: 'Which condition usually makes binary search a good fit?',
    options: ['The collection is sorted', 'The graph is dense', 'The tree is unbalanced', 'The input is random'],
    answer: 'The collection is sorted',
  },
];

const USER_STORAGE_KEY = 'pattern-prep-current-user';
const getStoredUser = () => {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    return null;
  }
};

const getProgressForUser = (userId) => {
  try {
    const stored = localStorage.getItem(`pattern-prep-progress-${userId}`);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return {};
  }
};

const normalizeProgress = (progress = {}) => ({
  solved: progress.solved || 0,
  patterns: progress.patterns || [],
  quizScore: progress.quizScore || 0,
  streak: progress.streak || 1,
});

const storedUser = getStoredUser();
const initialUserId = storedUser?.id || 'guest';

const state = {
  patterns: defaultPatterns,
  questions: defaultQuestions,
  selectedPattern: defaultPatterns[0],
  quizAnswers: {},
  interview: null,
  currentUser: storedUser || { id: initialUserId, name: 'Guest' },
  progress: normalizeProgress(getProgressForUser(initialUserId)),
};

const patternGrid = document.getElementById('pattern-grid');
const detailTitle = document.getElementById('detail-title');
const detailPills = document.getElementById('detail-pills');
const detailDescription = document.getElementById('detail-description');
const detailWhen = document.getElementById('detail-when');
const detailMistakes = document.getElementById('detail-mistakes');
const detailComplexity = document.getElementById('detail-complexity');
const detailResources = document.getElementById('detail-resources');
const detailRoadmap = document.getElementById('detail-roadmap');
const quizContainer = document.getElementById('quiz-container');
const questionsList = document.getElementById('questions-list');
const progressGrid = document.getElementById('progress-grid');
const roadmapFlow = document.getElementById('roadmap-flow');
const trainerContainer = document.getElementById('trainer-container');
const aiPanel = document.getElementById('ai-panel');
const analyticsGrid = document.getElementById('analytics-grid');
const filterPattern = document.getElementById('filter-pattern');
const filterDifficulty = document.getElementById('filter-difficulty');
const filterPlatform = document.getElementById('filter-platform');
const interviewPattern = document.getElementById('interview-pattern');
const interviewDifficulty = document.getElementById('interview-difficulty');
const interviewTime = document.getElementById('interview-time');
const interviewMode = document.getElementById('interview-mode');
const interviewPanel = document.getElementById('interview-panel');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const userEmailInput = document.getElementById('user-email');
const userPasswordInput = document.getElementById('user-password');
const registerNameInput = document.getElementById('register-name');
const registerEmailInput = document.getElementById('register-email');
const registerPasswordInput = document.getElementById('register-password');
const loginStatus = document.getElementById('login-status');
const viewPanels = Array.from(document.querySelectorAll('.view-panel'));

const showView = (viewId) => {
  const safeView = viewPanels.some((panel) => panel.id === viewId) ? viewId : 'landing';
  viewPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === safeView);
  });
  const targetPanel = document.getElementById(safeView);
  if (targetPanel) {
    targetPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.slice(1);
    if (!targetId) return;
    const targetPanel = document.getElementById(targetId);
    if (!targetPanel) return;
    event.preventDefault();
    showView(targetId);
    history.pushState({}, '', `#${targetId}`);
  });
});

window.addEventListener('hashchange', () => {
  const targetId = window.location.hash.replace('#', '') || 'landing';
  showView(targetId);
});

const initialView = window.location.hash.replace('#', '') || 'landing';
showView(initialView);
renderLoginState();

const saveProgress = () => {
  const activeUser = state.currentUser || { id: 'guest', name: 'Guest' };
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(activeUser));
  localStorage.setItem(`pattern-prep-progress-${activeUser.id}`, JSON.stringify(state.progress));
};

const renderLoginState = () => {
  if (!state.currentUser) {
    loginStatus.textContent = 'Use your account to keep progress personalized and secure.';
    return;
  }

  const displayName = state.currentUser.name || state.currentUser.id;
  loginStatus.textContent = `Signed in as ${displayName}. Your progress is saved for this account.`;
};

const handleRegister = async (event) => {
  event.preventDefault();
  const name = registerNameInput?.value?.trim();
  const email = registerEmailInput?.value?.trim();
  const password = registerPasswordInput?.value;

  if (!name || !email || !password) {
    loginStatus.textContent = 'Please complete all fields to register.';
    return;
  }

  try {
    const response = await fetch(`${apiBase}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Registration failed.');

    state.currentUser = { id: data.user.id, name: data.user.name, email: data.user.email };
    state.progress = normalizeProgress(getProgressForUser(state.currentUser.id));
    saveProgress();
    renderLoginState();
    renderProgress();
    loginStatus.textContent = `Welcome ${data.user.name}! Your account is ready.`;
  } catch (error) {
    loginStatus.textContent = error.message;
  }
};

const handleLogin = async (event) => {
  event.preventDefault();
  const email = userEmailInput?.value?.trim();
  const password = userPasswordInput?.value;

  if (!email || !password) {
    loginStatus.textContent = 'Please enter your email and password.';
    return;
  }

  try {
    const response = await fetch(`${apiBase}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Login failed.');

    state.currentUser = { id: data.user.id, name: data.user.name, email: data.user.email };
    state.progress = normalizeProgress(getProgressForUser(state.currentUser.id));
    saveProgress();
    renderLoginState();
    renderProgress();
  } catch (error) {
    loginStatus.textContent = error.message;
  }
};

if (loginForm) {
  loginForm.addEventListener('submit', handleLogin);
}

if (registerForm) {
  registerForm.addEventListener('submit', handleRegister);
}

const fetchPatterns = async () => {
  try {
    const response = await fetch(`${apiBase}/algorithms`);
    if (!response.ok) throw new Error('Unable to load patterns');
    const data = await response.json();
    if (data && data.length) {
      state.patterns = data;
    }
  } catch (error) {
    console.warn('Using local sample data:', error.message);
  }
};

const fetchQuestions = async () => {
  try {
    const response = await fetch(`${apiBase}/questions`);
    if (!response.ok) throw new Error('Unable to load questions');
    const data = await response.json();
    if (data && data.length) {
      state.questions = data.map((item) => ({
        ...item,
        title: item.title || 'Practice question',
        pattern: item.pattern || 'General',
      }));
    }
  } catch (error) {
    console.warn('Using local sample questions:', error.message);
  }
};

const renderPatterns = () => {
  patternGrid.innerHTML = '';

  state.patterns.forEach((pattern) => {
    const card = document.createElement('article');
    card.className = 'pattern-card';
    card.innerHTML = `
      <h3>${pattern.name}</h3>
      <p>${pattern.description}</p>
      <div class="pill-row">
        <span class="pill">${pattern.category}</span>
        <span class="pill">${pattern.difficulty}</span>
      </div>
      <p>${pattern.totalQuestions} questions • ${pattern.estimatedTime} estimated</p>
      <div class="progress-bar"><span style="width:${pattern.progress}%"></span></div>
      <p>${pattern.roadmap}</p>
    `;
    card.addEventListener('click', () => {
      state.selectedPattern = pattern;
      renderDetail();
      window.scrollTo({ top: document.getElementById('pattern-detail').offsetTop - 30, behavior: 'smooth' });
    });
    patternGrid.appendChild(card);
  });
};

const renderDetail = () => {
  const pattern = state.selectedPattern;
  detailTitle.textContent = pattern.name;
  detailPills.innerHTML = '';
  [pattern.category, pattern.difficulty, `${pattern.totalQuestions} questions`].forEach((item) => {
    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = item;
    detailPills.appendChild(pill);
  });
  detailDescription.textContent = pattern.description;
  detailWhen.textContent = pattern.whenToUse;
  detailMistakes.textContent = pattern.mistakes;
  detailComplexity.textContent = pattern.complexity;
  detailResources.innerHTML = '';
  pattern.resources.forEach((resource) => {
    const item = document.createElement('li');
    item.textContent = resource;
    detailResources.appendChild(item);
  });
  detailRoadmap.innerHTML = '';
  pattern.roadmapSteps.forEach((step) => {
    const item = document.createElement('li');
    item.textContent = step;
    detailRoadmap.appendChild(item);
  });
};

const renderFilters = () => {
  const patterns = [...new Set(state.questions.map((question) => question.pattern))];
  const difficulties = [...new Set(state.questions.map((question) => question.difficulty))];
  const platforms = [...new Set(state.questions.map((question) => question.platform))];

  patterns.forEach((pattern) => {
    if (!Array.from(filterPattern.options).some((option) => option.value === pattern)) {
      const option = document.createElement('option');
      option.value = pattern;
      option.textContent = pattern;
      filterPattern.appendChild(option);
    }
  });

  difficulties.forEach((difficulty) => {
    if (!Array.from(filterDifficulty.options).some((option) => option.value === difficulty)) {
      const option = document.createElement('option');
      option.value = difficulty;
      option.textContent = difficulty;
      filterDifficulty.appendChild(option);
    }
  });

  platforms.forEach((platform) => {
    if (!Array.from(filterPlatform.options).some((option) => option.value === platform)) {
      const option = document.createElement('option');
      option.value = platform;
      option.textContent = platform;
      filterPlatform.appendChild(option);
    }
  });
};

const renderQuestions = () => {
  const patternFilter = filterPattern.value;
  const difficultyFilter = filterDifficulty.value;
  const platformFilter = filterPlatform.value;

  const filtered = state.questions.filter((question) => {
    const matchesPattern = patternFilter === 'All' || question.pattern === patternFilter;
    const matchesDifficulty = difficultyFilter === 'All' || question.difficulty === difficultyFilter;
    const matchesPlatform = platformFilter === 'All' || question.platform === platformFilter;
    return matchesPattern && matchesDifficulty && matchesPlatform;
  });

  questionsList.innerHTML = '';

  filtered.forEach((question) => {
    const item = document.createElement('article');
    item.className = 'question-item';
    item.innerHTML = `
      <h3>${question.title}</h3>
      <p>${question.pattern} • ${question.difficulty} • ${question.level}</p>
      <p>Platform: ${question.platform} • Company: ${question.company} • Time: ${question.time}</p>
      <p>Tags: ${question.tags.join(', ')}</p>
      <a class="btn btn-secondary" href="${question.link}" target="_blank" rel="noreferrer">Open problem</a>
    `;
    questionsList.appendChild(item);
  });
};

const renderProgress = () => {
  progressGrid.innerHTML = '';
  const cards = [
    { title: 'Patterns Completed', value: state.progress.patterns.length, subtitle: 'Roadmap steps unlocked' },
    { title: 'Questions Solved', value: state.progress.solved, subtitle: 'Practice momentum' },
    { title: 'Current Level', value: state.progress.quizScore >= 80 ? 'Advanced' : state.progress.quizScore >= 55 ? 'Intermediate' : 'Beginner', subtitle: 'Based on latest quiz' },
    { title: 'Interview Readiness', value: `${Math.min(100, 30 + state.progress.solved * 4)}%`, subtitle: 'Strength from practice' },
  ];

  cards.forEach((card) => {
    const article = document.createElement('article');
    article.className = 'progress-card';
    article.innerHTML = `
      <h3>${card.title}</h3>
      <p class="metric">${card.value}</p>
      <p>${card.subtitle}</p>
    `;
    progressGrid.appendChild(article);
  });

  roadmapFlow.innerHTML = '';
  ['Arrays', 'Sliding Window', 'Two Pointers', 'Binary Search', 'Greedy', 'Graphs'].forEach((step) => {
    const chip = document.createElement('span');
    chip.className = 'roadmap-step';
    chip.textContent = step;
    roadmapFlow.appendChild(chip);
  });

  analyticsGrid.innerHTML = '';
  const analyticsCards = [
    { title: 'Pattern Mastery', value: `${Math.min(100, state.progress.quizScore + state.progress.solved * 2)}%`, subtitle: 'Based on quiz and solved questions' },
    { title: 'Assessment History', value: state.progress.quizScore ? '1 completed' : 'No attempts yet', subtitle: 'Adaptive evaluation history' },
    { title: 'Interview History', value: `${state.progress.solved} sessions`, subtitle: 'Mock sessions recorded' },
    { title: 'Strongest Pattern', value: state.selectedPattern.name, subtitle: 'Current focus pattern' },
  ];

  analyticsCards.forEach((card) => {
    const article = document.createElement('article');
    article.className = 'progress-card';
    article.innerHTML = `
      <h3>${card.title}</h3>
      <p class="metric">${card.value}</p>
      <p>${card.subtitle}</p>
    `;
    analyticsGrid.appendChild(article);
  });
};

const renderTrainer = () => {
  trainerContainer.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'quiz-card';
  wrapper.innerHTML = `
    <h3>Guess the pattern</h3>
    <p>Read the prompt and choose the most likely pattern.</p>
    <p><strong>Problem:</strong> Find the longest substring without repeating characters.</p>
  `;
  ['Sliding Window', 'Two Pointers', 'Binary Search', 'DFS'].forEach((pattern) => {
    const button = document.createElement('button');
    button.className = 'trainer-option';
    button.textContent = pattern;
    button.addEventListener('click', () => {
      const feedback = pattern === 'Sliding Window' ? 'Correct. This is a classic sliding window problem.' : 'Try again. The key clue is a contiguous substring with a repeated character constraint.';
      trainerContainer.innerHTML = `
        <div class="result-box">
          <h3>${feedback}</h3>
          <p>Recognition score: ${pattern === 'Sliding Window' ? '100%' : '60%'}</p>
        </div>
      `;
    });
    wrapper.appendChild(button);
  });
  trainerContainer.appendChild(wrapper);
};

const renderAiPanel = () => {
  aiPanel.innerHTML = `
    <div class="result-box">
      <h3>AI Hint Generator</h3>
      <p>Hint: Think about maintaining a moving window and tracking the last seen index of each character.</p>
      <h3>Interview Feedback</h3>
      <p>Performance summary: you recognized the right pattern quickly. Focus on improving implementation speed and edge-case handling.</p>
    </div>
  `;
};

const renderQuiz = () => {
  quizContainer.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'quiz-card';
  wrapper.innerHTML = '<h3>8–10 question assessment</h3><p>Choose the best answer for each prompt to identify your current readiness.</p>';

  quizQuestions.forEach((question) => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h4>${question.prompt}</h4>
      ${question.options.map((option) => `
        <button class="quiz-option ${state.quizAnswers[question.id] === option ? 'active' : ''}" data-question="${question.id}" data-option="${option}">${option}</button>
      `).join('')}
    `;
    wrapper.appendChild(card);
  });

  const submit = document.createElement('button');
  submit.className = 'btn btn-primary';
  submit.textContent = 'Submit Assessment';
  submit.addEventListener('click', submitQuiz);
  wrapper.appendChild(submit);

  quizContainer.appendChild(wrapper);
};

const submitQuiz = () => {
  const answered = quizQuestions.filter((question) => state.quizAnswers[question.id]);
  const correct = answered.filter((question) => state.quizAnswers[question.id] === question.answer).length;
  const score = Math.round((correct / quizQuestions.length) * 100);
  const level = score >= 80 ? 'Advanced' : score >= 55 ? 'Intermediate' : 'Beginner';
  const recommendation = score >= 80
    ? `You are ready for advanced questions in ${state.selectedPattern.name}.`
    : score >= 55
      ? `Start with medium-difficulty practice in ${state.selectedPattern.name}.`
      : `Begin with beginner practice and revisit the core pattern concepts.`;

  state.progress.quizScore = score;
  if (!state.progress.patterns.includes(state.selectedPattern.name)) {
    state.progress.patterns.push(state.selectedPattern.name);
  }
  saveProgress();
  renderProgress();

  quizContainer.innerHTML = `
    <div class="result-box">
      <h3>Assessment complete</h3>
      <p>Score: ${score}%</p>
      <p>Recommended level: ${level}</p>
      <p>${recommendation}</p>
    </div>
  `;
};

const startInterview = () => {
  const pattern = interviewPattern.value;
  const difficulty = interviewDifficulty.value;
  const time = Number(interviewTime.value);
  const mode = interviewMode.value;

  state.interview = { pattern, difficulty, time, mode, remaining: time * 60, startedAt: Date.now() };
  let countdown = setInterval(() => {
    state.interview.remaining -= 1;
    if (state.interview.remaining <= 0) {
      clearInterval(countdown);
      submitInterview();
      return;
    }
    renderInterview();
  }, 1000);

  renderInterview();
};

const renderInterview = () => {
  if (!state.interview) {
    interviewPanel.innerHTML = '<p>Start a mock interview to see your timer, prompt, and feedback.</p>';
    return;
  }

  const minutes = Math.floor(state.interview.remaining / 60);
  const seconds = state.interview.remaining % 60;
  const modeLabel = state.interview.mode === 'blind' ? 'Blind Mode' : 'Guided Mode';

  interviewPanel.innerHTML = `
    <div class="quiz-card">
      <h3>${state.interview.pattern} • ${state.interview.difficulty}</h3>
      <p>Mode: ${modeLabel}</p>
      <p>Timer: ${minutes}:${seconds.toString().padStart(2, '0')}</p>
      <p>Problem: Find the longest substring without repeating characters.</p>
      <p>Goal: Explain your approach, code the solution, and note the edge cases.</p>
      <button class="btn btn-secondary" id="show-hint">Get Hint</button>
      <button class="btn btn-primary" id="finish-interview">Submit Session</button>
    </div>
  `;

  document.getElementById('show-hint').addEventListener('click', showHint);
  document.getElementById('finish-interview').addEventListener('click', submitInterview);
};

const showHint = () => {
  if (!state.interview) return;
  const hint = state.interview.mode === 'blind'
    ? 'Think about a sliding window and track the last seen index of each character.'
    : 'You are looking for a pattern that keeps a moving window and updates it efficiently.';
  interviewPanel.innerHTML = `
    <div class="result-box">
      <h3>Hint</h3>
      <p>${hint}</p>
      <p>Optimization hint: keep the window size small and avoid repeated scanning.</p>
    </div>
  `;
};

const submitInterview = () => {
  if (!state.interview) return;
  const feedback = state.interview.mode === 'blind'
    ? 'You recognized the right pattern but should practise faster state updates under pressure.'
    : 'You handled the prompt well. Your next step is to strengthen edge-case reasoning.';

  state.progress.solved += 1;
  saveProgress();
  renderProgress();

  interviewPanel.innerHTML = `
    <div class="result-box">
      <h3>Interview Feedback</h3>
      <p>${feedback}</p>
      <p>Strong areas: pattern recognition and structure.</p>
      <p>Weak areas: faster implementation and edge-case handling.</p>
    </div>
  `;
  state.interview = null;
};

const init = async () => {
  await fetchPatterns();
  await fetchQuestions();
  renderPatterns();
  renderDetail();
  renderFilters();
  renderQuestions();
  renderProgress();
  renderTrainer();
  renderAiPanel();
  renderQuiz();
  renderInterview();

  filterPattern.addEventListener('change', renderQuestions);
  filterDifficulty.addEventListener('change', renderQuestions);
  filterPlatform.addEventListener('change', renderQuestions);
  document.getElementById('start-interview').addEventListener('click', startInterview);

  quizContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.quiz-option');
    if (!button) return;
    const { question, option } = button.dataset;
    state.quizAnswers[question] = option;
    renderQuiz();
  });
};

init();
