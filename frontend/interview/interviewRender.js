const companyGrid = document.getElementById('companyGrid');
const roadmapContainer = document.getElementById('roadmapContainer');
const questionGrid = document.getElementById('questionGrid');
const experienceGrid = document.getElementById('experienceGrid');
const tipsGrid = document.getElementById('tipsGrid');
const companyCount = document.getElementById('companyCount');
const questionCount = document.getElementById('questionCount');
const experienceCount = document.getElementById('experienceCount');
const searchCompany = document.getElementById('searchCompany');
const difficultyFilter = document.getElementById('difficultyFilter');
const recommendedQuestion = document.getElementById('recommendedQuestion');

const generateAiHint = (pattern, question) => {
  const normalizedPattern = (pattern || '').toLowerCase();

  if (normalizedPattern.includes('window')) {
    return `Start by asking: "What is the current valid window?" Use a moving left/right pointer, expand when valid, and shrink when invalid. Track either counts or the last seen index to maintain the constraint.`;
  }

  if (normalizedPattern.includes('search')) {
    return `Check whether the array is sorted and whether the answer space is monotonic. Binary search works when your decision can be narrowed using mid and a clear left/right invariant.`;
  }

  if (normalizedPattern.includes('dfs') || normalizedPattern.includes('graph')) {
    return `Think in terms of traversal states. Visit a node, explore its neighbors, and backtrack only when needed. A visited set or recursion stack helps prevent cycles.`;
  }

  if (normalizedPattern.includes('dp')) {
    return `Break the problem into subproblems and define the state clearly. Ask: what does the optimal answer depend on? Then memoize or tabulate the transitions.`;
  }

  if (normalizedPattern.includes('greedy')) {
    return `Choose the locally best option only if it preserves a valid invariant. You should be able to explain why this choice never blocks a better future solution.`;
  }

  if (normalizedPattern.includes('union') || normalizedPattern.includes('find')) {
    return `Model each node as a set and keep a parent/root pointer. Union the components only when needed, and check whether two nodes already share a root.`;
  }

  if (normalizedPattern.includes('backtracking')) {
    return `Try one candidate move, recurse, and undo it if the branch fails. The real challenge is defining a valid partial state and pruning impossible choices early.`;
  }

  return `First identify the key constraint in the problem: what is changing over time, what data needs to be tracked, and what structure makes the solution efficient. Then connect that clue to the most likely pattern.`;
};

const renderRecommendedQuestion = () => {
  if (!recommendedQuestion || !interviewFaqs.length) return;

  const recommended = interviewFaqs[0];
  recommendedQuestion.innerHTML = `
    <div class="auth-card recommended-card">
      <p><strong>Question:</strong> ${recommended.question}</p>
      <p><strong>Pattern:</strong> ${recommended.pattern}</p>
      <p><strong>Difficulty:</strong> ${recommended.difficulty}</p>
      <div class="hero-actions">
        <button class="btn btn-primary" id="showInterviewAiHint">AI Hint</button>
      </div>
      <div id="interviewAiHintBox" class="hint-box"></div>
    </div>
  `;

  const hintButton = document.getElementById('showInterviewAiHint');
  const hintBox = document.getElementById('interviewAiHintBox');

  hintButton?.addEventListener('click', () => {
    if (hintBox) {
      hintBox.innerHTML = `<p><strong>AI Hint:</strong> ${generateAiHint(recommended.pattern, recommended.question)}</p>`;
    }
  });
};

const renderCompanyCards = (companies = interviewCompanies) => {
  if (!companyGrid) return;

  companyGrid.innerHTML = ''; 
  companies.forEach((company) => {
    const card = document.createElement('article');
    card.className = 'company-card';
    card.innerHTML = `
      <h3>${company.name}</h3>
      <div class="badge-row">
        <span class="badge">${company.difficulty}</span>
        <span class="badge">${company.questionCount} questions</span>
        <span class="badge">${company.rounds.length} rounds</span>
      </div>
      <p>${company.experience}</p>
      <div class="company-actions">
        <button class="btn btn-primary">Preparation plan</button>
      </div>
    `;
    card.querySelector('button').addEventListener('click', () => {
      const trend = company.roadmap.join(' → ');
      alert(`${company.name} roadmap: ${trend}`);
    });
    companyGrid.appendChild(card);
  });
};

const renderRoadmap = () => {
  if (!roadmapContainer) return;

  roadmapContainer.innerHTML = '';
  interviewRoadmap.forEach((step) => {
    const card = document.createElement('div');
    card.className = 'roadmap-card';
    card.innerHTML = `<h3>${step}</h3><p>Prepare with targeted DSA and communication practice.</p>`;
    roadmapContainer.appendChild(card);
  });
};

const renderFaqs = () => {
  if (!questionGrid) return;

  questionGrid.innerHTML = '';
  interviewFaqs.forEach((faq) => {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.innerHTML = `
      <h3>${faq.question}</h3>
      <p><strong>Pattern:</strong> ${faq.pattern}</p>
      <p><strong>Difficulty:</strong> ${faq.difficulty}</p>
      <p><strong>Company/Frequency:</strong> ${faq.company} • ${faq.frequency}</p>
      <button class="btn btn-secondary ai-hint-trigger" data-pattern="${faq.pattern}" data-question="${faq.question}">AI Hint</button>
    `;

    const hintButton = card.querySelector('.ai-hint-trigger');
    hintButton?.addEventListener('click', () => {
      const hint = generateAiHint(faq.pattern, faq.question);
      const existingHint = card.querySelector('.faq-hint-box');
      if (existingHint) existingHint.remove();

      const hintBox = document.createElement('div');
      hintBox.className = 'faq-hint-box hint-box';
      hintBox.innerHTML = `<p><strong>AI Hint:</strong> ${hint}</p>`;
      card.appendChild(hintBox);
    });

    questionGrid.appendChild(card);
  });
};

const renderExperiences = () => {
  if (!experienceGrid) return;

  experienceGrid.innerHTML = '';
  interviewExperiences.forEach((experience) => {
    const card = document.createElement('article');
    card.className = 'experience-card';
    card.innerHTML = `
      <h3>${experience.round}</h3>
      <p><strong>Duration:</strong> ${experience.duration}</p>
      <p><strong>Type of questions:</strong> ${experience.types}</p>
      <p><strong>Focus areas:</strong> ${experience.focus}</p>
    `;
    experienceGrid.appendChild(card);
  });
};

const renderTips = () => {
  if (!tipsGrid) return;

  tipsGrid.innerHTML = '';
  interviewCompanies.forEach((company) => {
    const card = document.createElement('article');
    card.className = 'tip-card';
    card.innerHTML = `
      <h3>${company.name}</h3>
      <ul>
        ${company.tips.map((tip) => `<li>${tip}</li>`).join('')}
      </ul>
    `;
    tipsGrid.appendChild(card);
  });
};

const renderInterviewStats = () => {
  if (companyCount) companyCount.textContent = String(interviewCompanies.length);
  if (questionCount) questionCount.textContent = String(interviewFaqs.length + interviewCompanies.reduce((sum, company) => sum + company.questionCount, 0));
  if (experienceCount) experienceCount.textContent = String(interviewExperiences.length);
};

const filterCompanies = () => {
  const query = (searchCompany?.value || '').trim().toLowerCase();
  const difficulty = difficultyFilter?.value || 'All';

  const filtered = interviewCompanies.filter((company) => {
    const matchesQuery = !query || company.name.toLowerCase().includes(query);
    const matchesDifficulty = difficulty === 'All' || company.difficulty === difficulty;
    return matchesQuery && matchesDifficulty;
  });

  renderCompanyCards(filtered);
};

const initInterviewPage = () => {
  renderInterviewStats();
  renderRecommendedQuestion();
  renderCompanyCards();
  renderRoadmap();
  renderFaqs();
  renderExperiences();
  renderTips();

  searchCompany?.addEventListener('input', filterCompanies);
  difficultyFilter?.addEventListener('change', filterCompanies);
};

window.addEventListener('DOMContentLoaded', initInterviewPage);
