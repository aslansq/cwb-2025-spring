# Student Score Calculator - JavaScript Coding Exercise

## Overview

You've been provided with an HTML file for a Student Score Calculator. Your task is to implement the JavaScript functionality to make the calculator work.

## What's Provided

- An HTML file with the structure of the calculator
- CSS styling for the calculator interface
- Empty `<script>` tags where you should write your JavaScript code

## Your Task

Implement the following JavaScript functions:

1. `calculateTotalScore(grade1, grade2, grade3, operation)`
   - This function should:
     - Check if all grades are between 1 and 5
     - Perform the selected operation (+, -, or *) on the grades
     - Return the result or an error message

2. `calculateScore()`
   - This function should:
     - Get the values from the input fields
     - Get the selected operation from the radio buttons
     - Call `calculateTotalScore()` with these values
     - Display the result in the `#result` element

## Steps to Complete

1. Open the provided HTML file in a text editor.
2. Locate the `<script>` tags at the bottom of the file.
3. Implement the `calculateTotalScore()` function:
   - Add error checking for grade values
   - Use a switch statement to perform the correct operation (if you are not familiar with switch you can use if else, it is fine)
   - Return the calculated result or an error message
4. Implement the `calculateScore()` function:
   - Use `document.getElementById()` to get input values
   - Use `document.querySelector()` to get the selected operation
   - Call `calculateTotalScore()` with the retrieved values
  - Update the `innerHTML` of the `#result` element with the calculation result

## Testing Your Code

- Open the HTML file in a web browser
- Enter different grade values and select different operations
- Click the "Calculate Score" button to test your implementation
- Ensure it handles errors (like grades outside 1-5) correctly

## Hints

- Remember to parse the input values to integers

Good luck with your JavaScript implementation!