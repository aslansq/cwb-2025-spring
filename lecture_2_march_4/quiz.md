# Quiz - Basic JavaScript Concepts

## Variables and Values

1. **What will be stored in the variable `greeting` after this code runs?**
   ```javascript
   let greeting = "Hello";
   greeting = "Hello World";
   ```
   - A) Hello
   - B) Hello World
   - C) undefined
   - D) Error
<br />
2. **What's the difference between `let` and `var` when declaring variables?**
   - A) There is no difference
   - B) `let` allows you to declare a variable twice, `var` doesn't
   - C) `var` has function scope, while `let` has block scope
   - D) `let` can only be used for strings

## DOM Basics

3. **How do you select an HTML element with the id="example"?**
   - A) document.findElement("example")
   - B) document.getElementById("example")
   - C) document.querySelector("example")
   - D) document.getElement("example")
<br />
4. **How do you change the text inside a paragraph with id="example"?**
   - A) document.getElementById("example").text = "New text";
   - B) document.getElementById("example").innerHTML = "New text";
   - C) document.getElementById("example").innerText = "New text";
   - D) Both B and C will work

## Data Types

5. **Which of these is NOT a basic data type in JavaScript?**
   - A) String
   - B) Boolean
   - C) Array
   - D) Number
<br />
6. **What will `typeof 42` return?**
   - A) "integer"
   - B) "number"
   - C) "value"
   - D) 42

## Functions

7. **What does this function do?**
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
8. **When calling a function, where do you put the parameters?**
   ```javascript
   function greet(name) {
     return "Hello, " + name;
   }
   ```
   - A) greet.name = "John";
   - B) greet("John");
   - C) greet[John];
   - D) function("John");

## Objects and Arrays

9. **How do you access the property "name" in this object?**
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
10. **What will be the value of `fruits.length` after this code runs?**
    ```javascript
    let fruits = ["apple", "banana"];
    fruits.push("orange");
    ```
    - A) 2
    - B) 3
    - C) 4
    - D) undefined