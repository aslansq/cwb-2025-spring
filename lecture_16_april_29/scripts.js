// Your code goes here:
// 1. Load the current question and display options
// 2. Handle user's answer click
// 3. Move to next question when Next button is clicked
// 4. Show score at the end and allow restart

// Hints:
// - Use document.getElementById or querySelector
// - Loop through quizData array
// - Add/remove DOM elements dynamically
// - Use event listeners to respond to user actions


const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS"],
    answer: "CSS"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>"],
    answer: "<script>"
  }
];