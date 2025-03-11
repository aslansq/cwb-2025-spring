#  Homework Assignment: Todo List App

## Objective

Enhance the basic todo list application with search, highlighting, and toggle functionality, building on what you've learned in our first few JavaScript classes.

## Requirements

### 1. Basic Text Highlighting

- Add functionality so that when a user enters text in the task input field and clicks a new "Highlight" button:
    - Any matching text in existing tasks changes color (for example, turns red)
    - This is a one-time action (not real-time yet)

### 2. Search Functionality with Toggle

- Add a checkbox labeled "Highlight Mode" near the search input
- When the checkbox is **unchecked** (default):
    - The search input should work as a filter (only showing tasks that contain the search text)
    - Tasks that don't match should be hidden
- When the checkbox is **checked**:
    - All tasks remain visible
    - Matching text within tasks is highlighted in a different color (e.g., yellow)

### 3. Match Counter

- Add a counter below the search input that shows:
    - How many tasks are visible (when in filter mode)
    - How many text matches were found (when in highlight mode)
- Update this counter when the search results change

## Implementation Steps

1. Understand the existing code:
    - Look at how tasks are currently added to the list
    - See how the event listeners are working
2. Add a "Highlight" button next to the task input:
    - Create a function that finds and highlights text when this button is clicked
3. Add the checkbox toggle:
    - Add a checkbox to the HTML with appropriate label
    - Create an event listener for the checkbox
4. Implement the search functionality:
    - Add an event listener to the search input
    - Write separate functions for filter mode and highlight mode
    - Use the checkbox state to determine which function to call
5. Create the counter:
    - Add a paragraph element to show the count
    - Update the count based on which mode is active

## Hints

- For the checkbox, remember to use `checkbox.checked` to check its state
- You can use the `hidden` class from the existing CSS to show/hide elements
- For basic highlighting, wrapping text in a `<span style="background-color: yellow;">` can work
- Start simple! Get each piece working individually before combining them

## Code Example (to help you get started)
```
// Example event listener for the checkbox
document.querySelector("#highlight-mode").addEventListener("change", function() {
  if (this.checked) {
    // Highlight mode is ON
    highlightSearchMatches();
  } else {
    // Filter mode is ON
    filterTasksBySearch();
  }
});

// You'll need to write these functions
function highlightSearchMatches() {
  // Your code here
}

function filterTasksBySearch() {
  // Your code here
}
```

## Deliverables

- Your completed HTML file with all the new functionality
- Be prepared to explain your code in the next class