const analyticsSummary = document.getElementById('analyticsSummary');
const patternProgressList = document.getElementById('patternProgressList');

const analyticsCards = [
  { title: 'Mastery Trend', value: 'Upward', detail: 'Consistency is helping your confidence grow.' },
  { title: 'Practice Volume', value: '24 sessions', detail: 'A steady rhythm is improving retention.' },
  { title: 'Strongest Pattern', value: 'Binary Search', detail: 'Clear confidence in search-based solutions.' },
  { title: 'Next Priority', value: 'Graph traversal', detail: 'Worth revisiting before your next mock interview.' }
];

const patternProgress = [
  { pattern: 'Sliding Window', value: 84 },
  { pattern: 'Two Pointers', value: 72 },
  { pattern: 'Binary Search', value: 88 },
  { pattern: 'Hash Map', value: 75 },
  { pattern: 'DFS', value: 60 },
  { pattern: 'Dynamic Programming', value: 45 }
];

const renderSummaryCards = () => {
  if (!analyticsSummary) return;

  analyticsSummary.innerHTML = analyticsCards
    .map(
      (card) => `
        <article class="progress-card card">
          <h3>${card.title}</h3>
          <p class="metric">${card.value}</p>
          <p>${card.detail}</p>
        </article>
      `
    )
    .join('');
};

const renderPatternProgress = () => {
  if (!patternProgressList) return;

  patternProgressList.innerHTML = patternProgress
    .map(
      (item) => `
        <div class="pattern-progress-item">
          <div class="progress-header">
            <span>${item.pattern}</span>
            <span>${item.value}%</span>
          </div>
          <div class="progress-bar">
            <span style="width: ${item.value}%"></span>
          </div>
        </div>
      `
    )
    .join('');
};

renderSummaryCards();
renderPatternProgress();
