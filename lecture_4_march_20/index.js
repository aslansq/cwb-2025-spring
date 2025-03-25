// HOMEWORK:
// * Task 1 - Make it so that the grades are in range from 0 to 5
// * Task 2 - Make it so that calculateScore() calculates average, sum and product (*) of the grades

document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
  var grade1 = Number(document.getElementById('grade1').value);
  var grade2 = Number(document.getElementById('grade2').value);
  var grade3 = Number(document.getElementById('grade3').value);
  
  var sum = grade1 + grade2 + grade3;
  var product = grade1 * grade2 * grade3;
  var average = sum / 3;
  
  document.getElementById('result').innerHTML =
    "<br>Sum: " + sum + "</br>" +
    "<br>Product: " + product + "</br>" +
    "<br>Average: " + average + "</br>";
}

