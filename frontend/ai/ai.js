const promptButtons = document.getElementById('aiPromptButtons');
const aiChat = document.getElementById('aiChat');
const aiChatInput = document.getElementById('aiChatInput');
const sendAiMessage = document.getElementById('sendAiMessage');

const mockResponses = {
  sliding: 'Think about maintaining a moving window. Keep two pointers and only expand when the condition is valid; shrink when it becomes invalid.',
  binary: 'Binary search usually works when the array is sorted and the answer space has a monotonic property. Find the invariant and decide whether the answer lives on the left or right side of mid.',
  dfs: 'DFS explores one branch deeply before backtracking. Use recursion or a stack and keep track of visited nodes to avoid cycles.',
  dp: 'Dynamic programming means reusing subproblems. Define the state clearly and ask: what does the answer depend on? Then use memoization or a table to store results.',
  greedy: 'A greedy solution works only if a local best choice preserves the correct invariant. Check whether choosing the current best option can still lead to the final optimum.',
  graph: 'Look for connected components, shortest paths, or cycles. A graph hint is usually: decide the state, traverse neighbors, and update the visited set or distance map.',
  interview: 'Practice explaining the idea before writing code. Clarify the brute force, then improve it with the correct pattern and complexity tradeoff.'
};

const prompts = [
  'Give me a hint for Sliding Window.',
  'Why is Binary Search useful here?',
  'What should I do for a DFS interview question?',
  'Help me understand DP in simple words.',
  'Give me interview advice.'
];

const getAiReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes('sliding window') || text.includes('window')) return mockResponses.sliding;
  if (text.includes('binary search') || text.includes('search')) return mockResponses.binary;
  if (text.includes('dfs') || text.includes('graph') || text.includes('tree')) return mockResponses.dfs;
  if (text.includes('dp') || text.includes('dynamic programming')) return mockResponses.dp;
  if (text.includes('greedy') || text.includes('best choice')) return mockResponses.greedy;
  if (text.includes('interview') || text.includes('prepare') || text.includes('mock')) return mockResponses.interview;
  if (text.includes('hint')) return 'Start with the invariant. What is the key value that keeps changing, and what condition tells you when to move the pointer or choose a branch?';
  if (text.includes('pattern')) return 'Look for the structure of the problem: intervals, sorted data, tree traversal, graph connectivity, or overlapping subproblems. The right pattern usually appears in the constraints.';

  return 'A good first step is to identify the pattern, simplify the problem, and reason about the constraints before coding. If you want, ask me about Sliding Window, Binary Search, DFS, DP, or interview strategy.';
};

const renderPrompts = () => {
  if (!promptButtons) return;

  promptButtons.innerHTML = prompts
    .map(
      (prompt) => `
        <button class="btn btn-secondary ai-prompt" data-prompt="${prompt}">${prompt}</button>
      `
    )
    .join('');

  promptButtons.querySelectorAll('.ai-prompt').forEach((button) => {
    button.addEventListener('click', () => {
      const prompt = button.dataset.prompt || '';
      sendPrompt(prompt);
    });
  });
};

const renderChatMessage = (role, text) => {
  if (!aiChat) return;

  const message = document.createElement('div');
  message.className = `ai-message ${role}`;
  message.innerHTML = `
    <strong>${role === 'user' ? 'You' : 'AI Mentor'}:</strong>
    <span>${text}</span>
  `;

  aiChat.appendChild(message);
  aiChat.scrollTop = aiChat.scrollHeight;
};

const sendPrompt = (text) => {
  if (!text || !text.trim()) return;

  const message = text.trim();
  renderChatMessage('user', message);

  setTimeout(() => {
    renderChatMessage('bot', getAiReply(message));
  }, 150);
};

if (sendAiMessage && aiChatInput) {
  sendAiMessage.addEventListener('click', () => {
    sendPrompt(aiChatInput.value);
    aiChatInput.value = '';
  });

  aiChatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendPrompt(aiChatInput.value);
      aiChatInput.value = '';
    }
  });
}

renderPrompts();
renderChatMessage('bot', 'Ask me about a pattern, a question, or interview prep and I will give you a focused hint without giving the full solution.');
