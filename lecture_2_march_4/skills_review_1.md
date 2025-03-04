# Skills Review #1 - Basic JavaScript Concepts

## Programming Fundamentals

1. **What is a variable in programming?**
   - A) A mathematical equation
   - B) A named container that stores data which can be changed later
   - C) A fixed value that never changes
   - D) A function that performs calculations
<br />

2. **What is the difference between a variable and a constant?**
   - A) There is no difference
   - B) A variable's value can change, while a constant's value cannot be changed after it's assigned
   - C) Variables are for numbers, constants are for text
   - D) Constants are faster than variables
<br />

3. **What is Git and why is it used in programming?**
   - A) Git is a programming language for creating websites
   - B) Git is a version control system that tracks changes to files, allowing multiple people to collaborate
   - C) Git is a JavaScript library for animations
   - D) Git is a tool that automatically fixes bugs in your code
<br />

4. **Why might a team use GitHub for a coding project?**
   - A) To host their website for free
   - B) To share and collaborate on code, track changes, and manage versions
   - C) To compile JavaScript into machine code
   - D) To test their code automatically
<br />

## Variables and Values

5. **What will be stored in the variable `greeting` after this code runs?**
   ```javascript
   let greeting = "Hello";
   greeting = "Hello World";
   ```
   - A) Hello
   - B) Hello World
   - C) undefined
   - D) Error
<br />

6. **What's the difference between `let` and `var` when declaring variables?**
   - A) There is no difference
   - B) `let` allows you to declare a variable twice, `var` doesn't
   - C) `var` has function scope, while `let` has block scope
   - D) `let` can only be used for strings
<br />

7. **How do you declare a constant in JavaScript?**
   - A) `var NAME = value;`
   - B) `constant NAME = value;`
   - C) `const NAME = value;`
   - D) `let NAME = value;`
<br />

## HTML and JavaScript Connection

8. **How is JavaScript typically connected to an HTML page?**
   - A) Using a `<javascript>` tag
   - B) Using a `<script>` tag
   - C) Using a `<js>` tag
   - D) Using a `<code>` tag
<br />

9. **What does DOM stand for?**
   - A) Document Object Model
   - B) Data Object Management
   - C) Document Orientation Method
   - D) Display Order Module
<br />

## DOM Basics

10. **How do you select an HTML element with the id="example"?**
    - A) document.findElement("example")
    - B) document.getElementById("example")
    - C) document.querySelector("example")
    - D) document.getElement("example")
<br />

11. **How do you change the text inside a paragraph with id="example"?**
    - A) document.getElementById("example").text = "New text";
    - B) document.getElementById("example").innerHTML = "New text";
    - C) document.getElementById("example").innerText = "New text";
    - D) Both B and C will work
<br />

## Data Types

12. **Which of these is NOT a basic data type in JavaScript?**
    - A) String
    - B) Boolean
    - C) Array
    - D) Number
<br />

13. **What will `typeof 42` return?**
    - A) "integer"
    - B) "number"
    - C) "value"
    - D) 42
<br />

14. **What is the result of adding a string and a number in JavaScript?**
    ```javascript
    let result = "5" + 2;
    ```
    - A) 7
    - B) "52"
    - C) Error
    - D) 52
<br />

## Functions

15. **What does this function do?**
    ```javascript
    function add(a, b) {
      return a + b;
    }
    ```
    - A) Adds a and b together and returns the result
    - B) Adds a and b together but doesn't return anything
    - C) Displays the sum of a and b on the screen
    - D) Creates a variable called "a + b"
<br />

16. **When calling a function, where do you put the parameters?**
    ```javascript
    function greet(name) {
      return "Hello, " + name;
    }
    ```
    - A) greet.name = "John";
    - B) greet("John");
    - C) greet[John];
    - D) function("John");
<br />

## Objects and Arrays

17. **How do you access the property "name" in this object?**
    ```javascript
    let person = {
      name: "John",
      age: 30
    };
    ```
    - A) person[name]
    - B) <span>person.name</span>
    - C) person("name")
    - D) person-name
<br />

18. **What will be the value of `fruits.length` after this code runs?**
    ```javascript
    let fruits = ["apple", "banana"];
    fruits.push("orange");
    ```
    - A) 2
    - B) 3
    - C) 4
    - D) undefined