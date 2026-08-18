// ===============================
// Pattern Prep Learning Data
// ===============================

const learningPatterns = [

{
    id: 1,

    name: "Sliding Window",

    category: "Array",

    difficulty: "Easy",

    level: "Beginner",

    estimatedTime: "2-3 Days",

    totalQuestions: 18,

    progress: 0,

    overview:
        "Sliding Window is an optimization technique used for contiguous arrays and strings. Instead of checking every possible subarray, maintain a moving window that expands or shrinks according to the problem.",

    recognition: [

        "Contiguous array",

        "Substring",

        "Longest or shortest window",

        "Maximum or minimum subarray",

        "Brute force is O(n²)"

    ],

    whenToUse: [

        "Maximum Sum Subarray",

        "Longest Substring",

        "Minimum Window",

        "Fixed Size Window",

        "Variable Size Window"

    ],

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    commonMistakes: [

        "Forgetting to shrink the window",

        "Updating answer too early",

        "Incorrect frequency updates",

        "Moving wrong pointer"

    ],

    algorithm: [

        "Initialize left pointer",

        "Expand right pointer",

        "Maintain window",

        "Shrink if needed",

        "Update answer"

    ],

    dryRun: [

        "nums = [2,1,5,1,3,2]",

        "window = [2,1,5]",

        "sum = 8",

        "Slide",

        "Continue"

    ],

    templates:{

cpp:
`int left=0;

for(int right=0;right<n;right++){

    while(condition){

        left++;

    }

}`,

java:
`int left=0;

for(int right=0;right<n;right++){

    while(condition){

        left++;

    }

}`,

python:
`left=0

for right in range(len(nums)):

    while condition:

        left+=1`

    },

    practiceQuestions:{

beginner:[

{

title:"Maximum Average Subarray I",

platform:"LeetCode",

difficulty:"Easy",

link:"https://leetcode.com/problems/maximum-average-subarray-i/"

},

{

title:"Maximum Number of Vowels",

platform:"LeetCode",

difficulty:"Easy",

link:"https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/"

}

],

intermediate:[

{

title:"Longest Substring Without Repeating Characters",

platform:"LeetCode",

difficulty:"Medium",

link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"

},

{

title:"Permutation in String",

platform:"LeetCode",

difficulty:"Medium",

link:"https://leetcode.com/problems/permutation-in-string/"

}

],

advanced:[

{

title:"Minimum Window Substring",

platform:"LeetCode",

difficulty:"Hard",

link:"https://leetcode.com/problems/minimum-window-substring/"

}

]

},

interviewQuestions:[

"Longest Substring Without Repeating Characters",

"Permutation in String",

"Sliding Window Maximum",

"Minimum Window Substring"

],

companies:[

"Amazon",

"Google",

"Microsoft",

"Adobe",

"Flipkart"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=sliding+window+algorithm",

article:"https://www.geeksforgeeks.org/window-sliding-technique/",

visualizer:"https://visualgo.net/en"

}

},

{
    id:2,

    name:"Two Pointer",

    category:"Array",

    difficulty:"Easy",

    level:"Beginner",

    estimatedTime:"2 Days",

    totalQuestions:15,

    progress:0,

    overview:
        "Two Pointer uses two indices moving through an array or string to solve problems efficiently. It is useful for sorted arrays, palindrome checking, partitioning, and pair problems.",

    recognition:[

        "Sorted array",

        "Need pair",

        "Left and Right movement",

        "Palindrome",

        "Need O(n)"

    ],

    whenToUse:[

        "Two Sum II",

        "Container With Most Water",

        "Valid Palindrome",

        "Trapping Rain Water"

    ],

    timeComplexity:"O(n)",

    spaceComplexity:"O(1)",

    commonMistakes:[

        "Moving wrong pointer",

        "Infinite loop",

        "Boundary errors",

        "Ignoring duplicates"

    ],

    algorithm:[

        "Initialize left",

        "Initialize right",

        "Compare",

        "Move pointer",

        "Repeat"

    ],

    dryRun:[

        "left=0",

        "right=n-1",

        "Compare",

        "Move",

        "Repeat"

    ],

    templates:{

cpp:
`int left=0,right=n-1;

while(left<right){

}`,

java:
`int left=0,right=n-1;

while(left<right){

}`,

python:
`left,right=0,len(nums)-1

while left<right:

    pass`

    },

    practiceQuestions:{

beginner:[

{

title:"Two Sum II",

platform:"LeetCode",

difficulty:"Easy",

link:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"

}

],

intermediate:[

{

title:"Container With Most Water",

platform:"LeetCode",

difficulty:"Medium",

link:"https://leetcode.com/problems/container-with-most-water/"

}

],

advanced:[

{

title:"Trapping Rain Water",

platform:"LeetCode",

difficulty:"Hard",

link:"https://leetcode.com/problems/trapping-rain-water/"

}

]

},

interviewQuestions:[

"Two Sum II",

"Container With Most Water",

"Valid Palindrome",

"Trapping Rain Water"

],

companies:[

"Amazon",

"Google",

"Microsoft",

"Uber"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=two+pointer+algorithm",

article:"https://www.geeksforgeeks.org/two-pointers-technique/",

visualizer:"https://visualgo.net/en"

}

},
{
    id:3,

    name:"Binary Search",

    category:"Searching",

    difficulty:"Easy",

    level:"Beginner",

    estimatedTime:"2 Days",

    totalQuestions:20,

    progress:0,

    overview:
        "Binary Search repeatedly divides the search space into halves to efficiently locate an element or answer. It works whenever the data or search space is sorted or monotonic.",

    recognition:[

        "Sorted array",

        "Need O(log n)",

        "Monotonic function",

        "Search space problem",

        "Sorted list"

    ],

    whenToUse:[

        "Search in sorted array",

        "First/Last occurrence",

        "Rotated array",

        "Search Answer"

    ],

    timeComplexity:"O(log n)",

    spaceComplexity:"O(1)",

    commonMistakes:[

        "Wrong boundary",

        "Infinite loop",

        "Incorrect mid",

        "Overflow while calculating mid"

    ],

    algorithm:[

        "Initialize low and high",

        "Calculate mid",

        "Compare target",

        "Discard half",

        "Repeat"

    ],

    dryRun:[

        "low=0",

        "high=n-1",

        "mid=(low+high)/2",

        "Compare",

        "Update"

    ],

    templates:{

cpp:
`while(low<=high){

int mid=low+(high-low)/2;

}`,

java:
`while(low<=high){

int mid=low+(high-low)/2;

}`,

python:
`while low<=high:

    mid=(low+high)//2`

    },

    practiceQuestions:{

beginner:[

{

title:"Binary Search",

platform:"LeetCode",

difficulty:"Easy",

link:"https://leetcode.com/problems/binary-search/"

}

],

intermediate:[

{

title:"Search in Rotated Sorted Array",

platform:"LeetCode",

difficulty:"Medium",

link:"https://leetcode.com/problems/search-in-rotated-sorted-array/"

}

],

advanced:[

{

title:"Median of Two Sorted Arrays",

platform:"LeetCode",

difficulty:"Hard",

link:"https://leetcode.com/problems/median-of-two-sorted-arrays/"

}

]

},

interviewQuestions:[

"Binary Search",

"Search Insert Position",

"Search in Rotated Sorted Array",

"Median of Two Sorted Arrays"

],

companies:[

"Amazon",

"Google",

"Microsoft",

"Adobe"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=binary+search",

article:"https://www.geeksforgeeks.org/binary-search/",

visualizer:"https://visualgo.net/en"

}

},

{
    id:4,

    name:"Prefix Sum",

    category:"Array",

    difficulty:"Easy",

    level:"Beginner",

    estimatedTime:"1 Day",

    totalQuestions:12,

    progress:0,

    overview:
        "Prefix Sum stores cumulative sums so that range sum queries can be answered in constant time.",

    recognition:[

        "Range Sum",

        "Multiple Queries",

        "Subarray Sum",

        "Running Total"

    ],

    whenToUse:[

        "Range Queries",

        "Subarray Sum",

        "Matrix Sum",

        "Running Total"

    ],

    timeComplexity:"O(n)",

    spaceComplexity:"O(n)",

    commonMistakes:[

        "Wrong indexing",

        "Forgetting prefix[0]",

        "Boundary errors"

    ],

    algorithm:[

        "Create prefix array",

        "Store cumulative sum",

        "Answer queries"

    ],

    dryRun:[

        "[1,2,3,4]",

        "[1,3,6,10]",

        "Range(1,3)=9"

    ],

    templates:{

cpp:
`prefix[i]=prefix[i-1]+arr[i];`,

java:
`prefix[i]=prefix[i-1]+arr[i];`,

python:
`prefix[i]=prefix[i-1]+nums[i]`

    },

    practiceQuestions:{

beginner:[

{

title:"Range Sum Query",

platform:"LeetCode",

difficulty:"Easy",

link:"https://leetcode.com/problems/range-sum-query-immutable/"

}

],

intermediate:[

{

title:"Subarray Sum Equals K",

platform:"LeetCode",

difficulty:"Medium",

link:"https://leetcode.com/problems/subarray-sum-equals-k/"

}

],

advanced:[]

},

interviewQuestions:[

"Range Sum Query",

"Subarray Sum Equals K"

],

companies:[

"Google",

"Amazon",

"Adobe"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=prefix+sum",

article:"https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",

visualizer:"https://visualgo.net/en"

}

},

{
    id:5,

    name:"Hash Map",

    category:"Hashing",

    difficulty:"Easy",

    level:"Beginner",

    estimatedTime:"2 Days",

    totalQuestions:20,

    progress:0,

    overview:
        "Hash Maps provide constant-time lookup on average and are widely used for counting frequencies, grouping values, and fast searching.",

    recognition:[

        "Need fast lookup",

        "Frequency count",

        "Duplicates",

        "Unique elements",

        "Pairs"

    ],

    whenToUse:[

        "Two Sum",

        "Frequency Map",

        "Group Anagrams",

        "Top K Elements"

    ],

    timeComplexity:"O(1)",

    spaceComplexity:"O(n)",

    commonMistakes:[

        "Missing key initialization",

        "Wrong updates",

        "Duplicate handling"

    ],

    algorithm:[

        "Create HashMap",

        "Traverse",

        "Store or Update",

        "Return Answer"

    ],

    dryRun:[

        "{1:2}",

        "{2:5}",

        "Lookup"

    ],

    templates:{

cpp:
`unordered_map<int,int> mp;`,

java:
`HashMap<Integer,Integer> map=new HashMap<>();`,

python:
`freq={}`

    },

    practiceQuestions:{

beginner:[

{

title:"Two Sum",

platform:"LeetCode",

difficulty:"Easy",

link:"https://leetcode.com/problems/two-sum/"

}

],

intermediate:[

{

title:"Group Anagrams",

platform:"LeetCode",

difficulty:"Medium",

link:"https://leetcode.com/problems/group-anagrams/"

}

],

advanced:[

{

title:"LFU Cache",

platform:"LeetCode",

difficulty:"Hard",

link:"https://leetcode.com/problems/lfu-cache/"

}

]

},

interviewQuestions:[

"Two Sum",

"Group Anagrams",

"Top K Frequent Elements",

"Valid Anagram"

],

companies:[

"Amazon",

"Meta",

"Google",

"Microsoft"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=hashmap+dsa",

article:"https://www.geeksforgeeks.org/hashing-data-structure/",

visualizer:"https://visualgo.net/en"

}

},
{
    id:11,

    name:"Trees",

    category:"Tree",

    difficulty:"Medium",

    level:"Intermediate",

    estimatedTime:"3 Days",

    totalQuestions:28,

    progress:0,

    overview:
        "Tree problems involve hierarchical data structures. Most interview questions focus on DFS, BFS, recursion, traversal, height, diameter and path-based problems.",

    recognition:[
        "Binary Tree",
        "Hierarchy",
        "Root",
        "Children",
        "Traversal"
    ],

    whenToUse:[
        "Traversal",
        "Height",
        "Diameter",
        "Path Sum",
        "Lowest Common Ancestor"
    ],

    timeComplexity:"O(n)",

    spaceComplexity:"O(h)",

    commonMistakes:[
        "Wrong recursion",
        "Ignoring null node",
        "Wrong traversal order"
    ],

    algorithm:[
        "Visit node",
        "Traverse left",
        "Traverse right",
        "Return answer"
    ],

    dryRun:[
        "Root",
        "Left",
        "Right",
        "Return"
    ],

    templates:{

cpp:`void dfs(TreeNode* root){

if(!root) return;

}`,

java:`void dfs(TreeNode root){

if(root==null) return;

}`,

python:`def dfs(root):

    if not root:

        return`

    },

    practiceQuestions:{

beginner:[

{
title:"Maximum Depth of Binary Tree",
platform:"LeetCode",
difficulty:"Easy",
link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"
}

],

intermediate:[

{
title:"Binary Tree Level Order Traversal",
platform:"LeetCode",
difficulty:"Medium",
link:"https://leetcode.com/problems/binary-tree-level-order-traversal/"
}

],

advanced:[

{
title:"Binary Tree Maximum Path Sum",
platform:"LeetCode",
difficulty:"Hard",
link:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"
}

]

},

interviewQuestions:[

"Maximum Depth",

"Diameter",

"LCA",

"Path Sum"

],

companies:[

"Amazon",

"Google",

"Microsoft",

"Meta"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=binary+tree+dsa",

article:"https://www.geeksforgeeks.org/binary-tree-data-structure/",

visualizer:"https://visualgo.net/en/bst"

}

},

{
    id:12,

    name:"Binary Search Tree",

    category:"Tree",

    difficulty:"Medium",

    level:"Intermediate",

    estimatedTime:"2 Days",

    totalQuestions:16,

    progress:0,

    overview:
        "Binary Search Trees maintain sorted order. Every left child is smaller while every right child is larger.",

    recognition:[

        "Sorted Tree",

        "Search",

        "Insert",

        "Delete",

        "Successor"

    ],

    whenToUse:[

        "Search",

        "Insert",

        "Delete",

        "Kth Smallest"

    ],

    timeComplexity:"O(log n)",

    spaceComplexity:"O(h)",

    commonMistakes:[

        "Wrong subtree",

        "Ignoring BST property"

    ],

    algorithm:[

        "Compare",

        "Go Left",

        "Go Right",

        "Return"

    ],

    dryRun:[

        "10",

        "5",

        "15"

    ],

    templates:{

cpp:`if(root->val>x) root=root->left;`,

java:`if(root.val>x) root=root.left;`,

python:`if root.val>x:
    root=root.left`

    },

    practiceQuestions:{

beginner:[

{
title:"Search in BST",
platform:"LeetCode",
difficulty:"Easy",
link:"https://leetcode.com/problems/search-in-a-binary-search-tree/"
}

],

intermediate:[

{
title:"Validate BST",
platform:"LeetCode",
difficulty:"Medium",
link:"https://leetcode.com/problems/validate-binary-search-tree/"
}

],

advanced:[

{
title:"Recover BST",
platform:"LeetCode",
difficulty:"Hard",
link:"https://leetcode.com/problems/recover-binary-search-tree/"
}

]

},

interviewQuestions:[

"Validate BST",

"Kth Smallest",

"Search BST"

],

companies:[

"Google",

"Amazon",

"Microsoft"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=bst+dsa",

article:"https://www.geeksforgeeks.org/binary-search-tree-data-structure/",

visualizer:"https://visualgo.net/en/bst"

}

},

{
    id:13,

    name:"Heap / Priority Queue",

    category:"Heap",

    difficulty:"Medium",

    level:"Intermediate",

    estimatedTime:"2 Days",

    totalQuestions:18,

    progress:0,

    overview:
        "Heap efficiently maintains minimum or maximum elements and is frequently used in scheduling and Top-K problems.",

    recognition:[

        "Top K",

        "Largest",

        "Smallest",

        "Priority"

    ],

    whenToUse:[

        "K Largest",

        "K Smallest",

        "Merge K Lists",

        "Task Scheduling"

    ],

    timeComplexity:"O(log n)",

    spaceComplexity:"O(n)",

    commonMistakes:[

        "Wrong heap type",

        "Not removing top"

    ],

    algorithm:[

        "Create Heap",

        "Insert",

        "Pop",

        "Return"

    ],

    dryRun:[

        "5",

        "3",

        "8",

        "Pop"

    ],

    templates:{

cpp:`priority_queue<int> pq;`,

java:`PriorityQueue<Integer> pq=new PriorityQueue<>();`,

python:`import heapq`

    },

    practiceQuestions:{

beginner:[

{
title:"Last Stone Weight",
platform:"LeetCode",
difficulty:"Easy",
link:"https://leetcode.com/problems/last-stone-weight/"
}

],

intermediate:[

{
title:"K Closest Points",
platform:"LeetCode",
difficulty:"Medium",
link:"https://leetcode.com/problems/k-closest-points-to-origin/"
}

],

advanced:[

{
title:"Find Median from Data Stream",
platform:"LeetCode",
difficulty:"Hard",
link:"https://leetcode.com/problems/find-median-from-data-stream/"
}

]

},

interviewQuestions:[

"Top K Frequent",

"K Closest Points",

"Median Stream"

],

companies:[

"Amazon",

"Google",

"Uber"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=heap+dsa",

article:"https://www.geeksforgeeks.org/heap-data-structure/",

visualizer:"https://visualgo.net/en/heap"

}

},

{
    id:14,

    name:"Recursion",

    category:"Recursion",

    difficulty:"Medium",

    level:"Intermediate",

    estimatedTime:"2 Days",

    totalQuestions:14,

    progress:0,

    overview:
        "Recursion solves problems by breaking them into smaller versions of themselves until reaching a base case.",

    recognition:[

        "Tree",

        "DFS",

        "Divide",

        "Backtracking"

    ],

    whenToUse:[

        "Tree Traversal",

        "Factorial",

        "DFS"

    ],

    timeComplexity:"Depends",

    spaceComplexity:"O(h)",

    commonMistakes:[

        "Missing base case",

        "Infinite recursion"

    ],

    algorithm:[

        "Base Case",

        "Recursive Call",

        "Return"

    ],

    dryRun:[

        "n=3",

        "n=2",

        "n=1"

    ],

    templates:{

cpp:`void solve(){}`,

java:`void solve(){}`,

python:`def solve():`

    },

    practiceQuestions:{

beginner:[],

intermediate:[

{
title:"Pow(x,n)",
platform:"LeetCode",
difficulty:"Medium",
link:"https://leetcode.com/problems/powx-n/"
}

],

advanced:[]

},

interviewQuestions:[

"Tree DFS",

"Power Function"

],

companies:[

"Google",

"Amazon"

],

resources:{

youtube:"https://www.youtube.com/results?search_query=recursion+dsa",

article:"https://www.geeksforgeeks.org/recursion/",

visualizer:"https://visualgo.net/en"

}

},
{
    id: 15,
    name: "Backtracking",
    category: "Backtracking",
    difficulty: "Hard",
    level: "Advanced",
    estimatedTime: "4 Days",
    totalQuestions: 22,
    progress: 0,

    overview: "Backtracking systematically explores all possible solutions while pruning invalid paths.",

    recognition: [
        "Generate",
        "Combination",
        "Permutation",
        "Decision Tree"
    ],

    whenToUse: [
        "N Queens",
        "Sudoku",
        "Combination Sum",
        "Subsets"
    ],

    algorithm: [
        "Choose",
        "Explore",
        "Backtrack"
    ],

    dryRun: [
        "Choose",
        "Explore",
        "Undo"
    ],

    timeComplexity: "Exponential",
    spaceComplexity: "O(n)",

    commonMistakes: [
        "Forgetting backtrack step",
        "Wrong pruning"
    ],

    templates: {
        cpp: `void backtrack(){}`,
        java: `void backtrack(){}`,
        python: `def backtrack():`
    },

    practiceQuestions: {
        beginner: [],
        intermediate: [
            {
                title: "Combination Sum",
                platform: "LeetCode",
                difficulty: "Medium",
                link: "https://leetcode.com/problems/combination-sum/"
            }
        ],
        advanced: [
            {
                title: "N Queens",
                platform: "LeetCode",
                difficulty: "Hard",
                link: "https://leetcode.com/problems/n-queens/"
            }
        ]
    },

    interviewQuestions: [
        "Subsets",
        "Permutations",
        "N Queens",
        "Combination Sum"
    ],

    companies: [
        "Google",
        "Amazon",
        "Microsoft"
    ],

    resources: {
        youtube: "https://www.youtube.com/results?search_query=backtracking+dsa",
        article: "https://www.geeksforgeeks.org/backtracking-algorithms/",
        visualizer: "https://visualgo.net/en"
    }
}
];