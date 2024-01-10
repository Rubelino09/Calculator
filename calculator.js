 // Arrow functions for basic operations
 const addition = (a, b) => a + b;
 const subtraction = (a, b) => a - b;
 const multiplication = (a, b) => a * b;
 const division = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

 // Function to perform calculations
 function calculate() {
     // Get input values
     const num1 = parseFloat(document.getElementById("num1").value);
     const num2 = parseFloat(document.getElementById("num2").value);

     // Check if both inputs are valid numbers
     if (!isNaN(num1) && !isNaN(num2)) {
         // Perform calculations
         const addResult = addition(num1, num2);
         const subResult = subtraction(num1, num2);
         const mulResult = multiplication(num1, num2);
         const divResult = division(num1, num2);

         // Display results
         document.getElementById("result").innerHTML =
             `Addition: ${addResult}<br>
             Subtraction: ${subResult}<br>
             Multiplication: ${mulResult}<br>
             Division: ${divResult}`;
     } else {
         // Display error if inputs are not valid numbers
         document.getElementById("result").innerHTML = "Please enter valid numbers.";
     }
 }

 const reset = () => {
    window.location = "wow.html";
  };
  