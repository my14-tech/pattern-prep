const trainerQuestions = [
  {
    id: 1,
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string, find the length of the longest substring without repeating characters.',
    options: ['Sliding Window', 'Binary Search', 'Breadth First Search', 'Heap'],
    answer: 'Sliding Window',
    explanation: 'The keywords "longest" and "substring" strongly suggest a moving window over a contiguous section of the string.',
    keywords: ['Longest', 'Substring', 'Contiguous'],
    difficulty: 'Medium'
  },
  {
    id: 2,
    title: 'Find Pair With Target Sum',
    description: 'Given a sorted array, determine whether two numbers add up to the target.',
    options: ['Two Pointers', 'Dynamic Programming', 'DFS', 'Heap'],
    answer: 'Two Pointers',
    explanation: 'A sorted array is a classic signal for moving two indices inward or outward toward a target.',
    keywords: ['Sorted Array', 'Two Values', 'Target Sum'],
    difficulty: 'Easy'
  },
  {
    id: 3,
    title: 'Search In Rotated Sorted Array',
    description: 'Search an element in a rotated sorted array in O(log n).',
    options: ['Binary Search', 'Sliding Window', 'Greedy', 'Backtracking'],
    answer: 'Binary Search',
    explanation: 'Whenever a sorted structure needs logarithmic search, binary search is the expected pattern.',
    keywords: ['Sorted', 'Log n', 'Search'],
    difficulty: 'Medium'
  },
  {
    id: 4,
    title: 'Maximum Depth Of Binary Tree',
    description: 'Return the maximum depth of a binary tree.',
    options: ['DFS', 'Sliding Window', 'Binary Search', 'Heap'],
    answer: 'DFS',
    explanation: 'Depth-first traversal naturally explores each branch and computes the tree depth recursively.',
    keywords: ['Tree', 'Depth', 'Recursive'],
    difficulty: 'Easy'
  },
  {
    id: 5,
    title: 'Merge K Sorted Lists',
    description: 'Merge k sorted linked lists into one sorted list.',
    options: ['Heap', 'Sliding Window', 'Backtracking', 'Trie'],
    answer: 'Heap',
    explanation: 'A min-heap keeps the smallest current element across all lists available at any time.',
    keywords: ['K Lists', 'Minimum', 'Priority'],
    difficulty: 'Hard'
  },
  {
    id: 6,
    title: 'Generate All Subsets',
    description: 'Generate every possible subset of an array.',
    options: ['Backtracking', 'Binary Search', 'Greedy', 'Sliding Window'],
    answer: 'Backtracking',
    explanation: 'Exploring all choices while pruning or tracking state is the core of backtracking.',
    keywords: ['Generate', 'All', 'Decision Tree'],
    difficulty: 'Medium'
  },
  {
    id: 7,
    title: 'Word Search',
    description: 'Determine whether a word exists in a 2D board.',
    options: ['DFS', 'Heap', 'Sliding Window', 'Two Pointers'],
    answer: 'DFS',
    explanation: 'DFS explores each possible path and often uses visited tracking to avoid revisiting cells.',
    keywords: ['Grid', 'Recursive', 'Explore'],
    difficulty: 'Medium'
  },
  {
    id: 8,
    title: 'House Robber',
    description: 'Find the maximum money that can be robbed without robbing adjacent houses.',
    options: ['Dynamic Programming', 'Sliding Window', 'Heap', 'Trie'],
    answer: 'Dynamic Programming',
    explanation: 'The best answer depends on the best answer for smaller subproblems, which is the standard DP pattern.',
    keywords: ['Maximum', 'Optimal', 'Previous State'],
    difficulty: 'Medium'
  }
];
