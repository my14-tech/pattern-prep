const interviewCompanies = [
  {
    name: 'Amazon',
    difficulty: 'Medium',
    questionCount: 18,
    rounds: ['Online Assessment', 'Technical Round 1', 'Technical Round 2', 'Bar Raiser'],
    roadmap: ['DSA fundamentals', 'System design basics', 'Behavioral communication', 'Leadership principles'],
    topQuestions: [1, 5, 12],
    experience: 'Expect medium-to-hard DSA with emphasis on problem framing, edge cases, and communication.',
    tips: ['Practice sliding window, trees, graphs, hash maps.', 'Explain tradeoffs clearly.', 'Be ready for follow-up questions on complexity and optimization.'],
    resources: ['Amazon interview prep guide', 'LeetCode Amazon tag', 'System design overview']
  },
  {
    name: 'Google',
    difficulty: 'Hard',
    questionCount: 16,
    rounds: ['Phone Screen', 'Technical Interview', 'Googleyness', 'Leadership'],
    roadmap: ['Core arrays and strings', 'Graph traversal', 'Design thinking', 'Behavioral alignment'],
    topQuestions: [2, 8, 15],
    experience: 'Google interviews reward precise reasoning, strong communication, and calm debugging under pressure.',
    tips: ['Focus on pattern recognition and complexity.', 'Practice explaining your approach before coding.', 'Write clean, testable code and validate with examples.'],
    resources: ['Google DSA patterns', 'Mock interview guide', 'Leadership principles']
  },
  {
    name: 'Microsoft',
    difficulty: 'Medium',
    questionCount: 14,
    rounds: ['Recruiter Screen', 'Coding Round', 'Technical Discussion', 'Manager Round'],
    roadmap: ['Arrays', 'Trees', 'Graphs', 'Behavioral questions'],
    topQuestions: [3, 9, 14],
    experience: 'Expect moderately challenging algorithmic questions with additional focus on clarity and teamwork.',
    tips: ['Master BSTs, sliding window, and graph traversal.', 'Discuss tradeoffs with practical examples.', 'Prepare for design conversations and collaboration stories.'],
    resources: ['Microsoft interview resources', 'Core DSA checklist', 'Behavioral prep bank']
  },
  {
    name: 'Meta',
    difficulty: 'Hard',
    questionCount: 20,
    rounds: ['Recruiter Call', 'Coding Round', 'System Design', 'Behavioral Interview'],
    roadmap: ['Graphs', 'Dynamic programming', 'Object-oriented design', 'Communication'],
    topQuestions: [4, 10, 17],
    experience: 'Meta rounds test depth, speed, and communication around tougher algorithmic choices.',
    tips: ['Solve heap, DP, and graph questions with confidence.', 'Be comfortable with edge-case reasoning.', 'Explain your assumptions and constraints clearly.'],
    resources: ['Meta interview prep', 'Graph patterns', 'DP practice']
  },
  {
    name: 'Adobe',
    difficulty: 'Medium',
    questionCount: 12,
    rounds: ['Online Assessment', 'Technical Round', 'Managerial Round'],
    roadmap: ['Arrays', 'String matching', 'Trees', 'Problem explanations'],
    topQuestions: [6, 11, 18],
    experience: 'Adobe often blends fundamentals with a practical coding discussion and reasoned tradeoff analysis.',
    tips: ['Practice core array and tree problems.', 'Focus on concise explanations.', 'Be prepared for multiple implementation variations.'],
    resources: ['Adobe prep resources', 'String and tree patterns', 'Code review best practices']
  },
  {
    name: 'Uber',
    difficulty: 'Medium',
    questionCount: 15,
    rounds: ['Recruiter Screen', 'Coding Round', 'System Design', 'Behavioral'],
    roadmap: ['Data structures', 'Graph search', 'API reasoning', 'Communication'],
    topQuestions: [7, 13, 16],
    experience: 'Expect problem-solving under time pressure with a strong emphasis on tradeoffs and practical use cases.',
    tips: ['Practice BFS/DFS, heap, and graph problems.', 'Be ready to discuss complexity tradeoffs quickly.', 'Emphasize practical problem-solving and clarity.'],
    resources: ['Uber interview prep', 'Graph and heap practice', 'System design notes']
  },
  {
    name: 'Atlassian',
    difficulty: 'Medium',
    questionCount: 10,
    rounds: ['Coding Round', 'Behavioral', 'Team Fit'],
    roadmap: ['Arrays', 'Strings', 'Trees', 'Communication'],
    topQuestions: [1, 8, 12],
    experience: 'A mix of algorithmic fundamentals and practical communication. Clear structure matters.',
    tips: ['Keep explanations organized and concise.', 'Practice writing clean code without long detours.', 'Review teamwork and product-thinking examples.'],
    resources: ['Atlassian interview prep', 'System design basics', 'Behavioral stories']
  },
  {
    name: 'Goldman Sachs',
    difficulty: 'Hard',
    questionCount: 13,
    rounds: ['Aptitude', 'Coding', 'Technical', 'HR'],
    roadmap: ['DSA basics', 'Math reasoning', 'Problem explanation', 'Finance product context'],
    topQuestions: [5, 9, 14],
    experience: 'Strong emphasis on structured solutions, time complexity, and confidence in core patterns.',
    tips: ['Practice DP, arrays, hash maps, and tree traversals.', 'Prepare for follow-up optimization questions.', 'Explain the algorithm before you write code.'],
    resources: ['Investment banking technical prep', 'Core DSA patterns', 'Interview math practice']
  },
  {
    name: 'Flipkart',
    difficulty: 'Medium',
    questionCount: 11,
    rounds: ['Technical Screening', 'Coding Round', 'Manager Round'],
    roadmap: ['Arrays', 'Trees', 'Graph basics', 'Soft skills'],
    topQuestions: [2, 10, 13],
    experience: 'Flipskart usually tests speed, clarity, and a strong grasp of common patterns.',
    tips: ['Improve confidence with hash maps, trees, and recursion.', 'Explain edge cases calmly.', 'Revisit greedy and graph problems.'],
    resources: ['Flipkart prep recommendations', 'Problem pattern library', 'Practice roadmap']
  },
  {
    name: 'Walmart Global Tech',
    difficulty: 'Medium',
    questionCount: 17,
    rounds: ['Online Challenge', 'Technical Interview', 'Manager Interview'],
    roadmap: ['Arrays', 'Strings', 'Graph traversal', 'Leadership examples'],
    topQuestions: [3, 6, 15],
    experience: 'Expect practical DSA and strong communication with a business-oriented problem framing style.',
    tips: ['Focus on optimization and clean explanation.', 'Practice coding under a timer.', 'Prepare examples for product and decision-making questions.'],
    resources: ['Walmart engineering prep', 'Problem-solving strategy notes', 'Behavioral prep']
  }
];

const interviewFaqs = [
  { question: 'How do I prepare for Amazon DSA rounds?', pattern: 'Sliding Window', difficulty: 'Medium', company: 'Amazon', frequency: 'High' },
  { question: 'What pattern should I use for longest substring questions?', pattern: 'Sliding Window', difficulty: 'Medium', company: 'Google', frequency: 'Very High' },
  { question: 'When is binary search the right call?', pattern: 'Binary Search', difficulty: 'Medium', company: 'Microsoft', frequency: 'Medium' },
  { question: 'Which pattern helps with connected components?', pattern: 'DFS', difficulty: 'Hard', company: 'Meta', frequency: 'High' }
];

const interviewExperiences = [
  { round: 'Technical Round', duration: '60 mins', types: 'Arrays, strings, hash maps', focus: 'Pattern recognition and explanation' },
  { round: 'System Design', duration: '45 mins', types: 'Design discussion', focus: 'Tradeoffs and API design' },
  { round: 'Behavioral', duration: '30 mins', types: 'Leadership and collaboration', focus: 'STAR stories and fit review' }
];

const interviewRoadmap = [
  'Online Assessment',
  'Technical Round',
  'DSA',
  'CS Fundamentals',
  'Behavioral',
  'HR'
];
