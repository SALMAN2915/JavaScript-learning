// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));

//   const sum = num1 + num2;
//   console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));

// Check if both inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

   