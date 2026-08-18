// ======================================
// Pattern Prep - Learning Module
// ======================================

const patternCards = document.querySelectorAll(".pattern-card");
const searchInput = document.getElementById("searchPattern");

const patternTitle = document.getElementById("patternTitle");

const overview =
document.querySelectorAll(".detail-card p")[0];

const progressBar =
document.querySelector(".progress-bar span");

const progressText =
document.querySelector(".hero-copy strong");

const learningData = {

"Sliding Window":{

difficulty:"Easy",

progress:40,

overview:
"Sliding Window is used whenever a problem involves a contiguous array or substring. It optimizes brute-force solutions by expanding and shrinking a window instead of checking every possible range."

},

"Two Pointer":{

difficulty:"Easy",

progress:25,

overview:
"Two Pointer technique is useful when two indices move through an array simultaneously to reduce unnecessary work."

},

"Binary Search":{

difficulty:"Easy",

progress:0,

overview:
"Binary Search repeatedly divides the search space into halves to efficiently locate an answer."

},

"Prefix Sum":{

difficulty:"Easy",

progress:0,

overview:
"Prefix Sum helps answer multiple range sum queries efficiently."

},

"Hash Map":{

difficulty:"Easy",

progress:0,

overview:
"Hash Maps provide O(1) average lookup time and are heavily used for frequency counting."

},

"Stack":{

difficulty:"Medium",

progress:0,

overview:
"Stack follows LIFO order and is useful for expression evaluation, monotonic stack and DFS."

},

"Queue":{

difficulty:"Medium",

progress:0,

overview:
"Queue follows FIFO order and is useful in BFS and scheduling."

},

"Linked List":{

difficulty:"Medium",

progress:0,

overview:
"Linked Lists help practice pointer manipulation and dynamic memory."

},

"Trees":{

difficulty:"Medium",

progress:0,

overview:
"Tree problems involve traversals, recursion and hierarchical structures."

},

"Binary Search Tree":{

difficulty:"Medium",

progress:0,

overview:
"BST maintains ordered data allowing efficient searching."

},

"Heap / Priority Queue":{

difficulty:"Medium",

progress:0,

overview:
"Heaps efficiently retrieve the smallest or largest element."

},

"Graph":{

difficulty:"Hard",

progress:0,

overview:
"Graphs model networks and require DFS, BFS and shortest path algorithms."

},

"Backtracking":{

difficulty:"Hard",

progress:0,

overview:
"Backtracking systematically explores all possible choices."

},

"Trie":{

difficulty:"Hard",

progress:0,

overview:
"Trie stores strings efficiently for prefix searching."

},

"Dynamic Programming":{

difficulty:"Hard",

progress:0,

overview:
"Dynamic Programming breaks problems into overlapping subproblems."

}

};
// ======================================
// Load Pattern
// ======================================

function loadPattern(patternName){

const pattern = learningData[patternName];

if(!pattern) return;

patternTitle.textContent = patternName;

overview.textContent = pattern.overview;

progressBar.style.width = pattern.progress + "%";

progressText.textContent = pattern.progress + "%";

const difficultyBadge = document.querySelector(".pill");

difficultyBadge.textContent = pattern.difficulty;

}

// ======================================
// Pattern Selection
// ======================================

patternCards.forEach(card=>{

card.addEventListener("click",()=>{

patternCards.forEach(c=>{

c.classList.remove("active");

});

card.classList.add("active");

const patternName =
card.querySelector("h3").textContent;

loadPattern(patternName);

});

});

// ======================================
// Search Functionality
// ======================================

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

patternCards.forEach(card=>{

const text =
card.textContent.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

// ======================================
// Complete Pattern Button
// ======================================

const completeButton =
document.getElementById("completePattern");

if(completeButton){

completeButton.addEventListener("click",()=>{

const active =
document.querySelector(".pattern-card.active");

if(active){

active.classList.add("completed");

alert("Pattern marked as completed!");

}

});

}

// ======================================
// Next Pattern Button
// ======================================

const nextButton =
document.getElementById("nextPattern");

if(nextButton){

nextButton.addEventListener("click",()=>{

const active =
document.querySelector(".pattern-card.active");

const cards =
Array.from(patternCards);

const index =
cards.indexOf(active);

if(index<cards.length-1){

cards[index+1].click();

cards[index+1].scrollIntoView({

behavior:"smooth",

block:"center"

});

}

else{

alert("Congratulations! You completed all available patterns.");

}

});

}