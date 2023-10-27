/*
filename: advanced_calculator.js

This code is an advanced calculator that allows for various mathematical operations. It includes functions for addition, subtraction, multiplication, division, exponentiation, factorial, square root, and finding the average of a set of numbers. The code also demonstrates the use of loops, conditionals, and error handling.

Author: John Doe
Date: September 2022
*/

// Function for addition
function add(a, b) {
  return a + b;
}

// Function for subtraction
function subtract(a, b) {
  return a - b;
}

// Function for multiplication
function multiply(a, b) {
  return a * b;
}

// Function for division
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Function for exponentiation
function exponentiate(base, exponent) {
  let result = 1;
  
  // Calculate the exponentiated value
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  
  return result;
}

// Function for factorial
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial of a negative number is not defined.");
  }
  
  let result = 1;
  
  // Calculate the factorial value
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Function for square root
function squareRoot(number) {
  if (number < 0) {
    throw new Error("Square root of a negative number is not defined.");
  }
  
  let guess = number / 2;
  const threshold = 0.0001;
  
  // Use Newton's method to approximate the square root
  while (Math.abs(guess * guess - number) > threshold) {
    guess = (guess + number / guess) / 2;
  }
  
  return guess;
}

// Function for finding the average of a set of numbers
function average(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate average of an empty set of numbers.");
  }
  
  let sum = 0;
  
  // Calculate the sum of the numbers
  for (let number of numbers) {
    sum += number;
  }
  
  return sum / numbers.length;
}

// Usage examples

// Perform addition
console.log("5 + 2 =", add(5, 2));

// Perform subtraction
console.log("5 - 2 =", subtract(5, 2));

// Perform multiplication
console.log("5 * 2 =", multiply(5, 2));

// Perform division
console.log("5 / 2 =", divide(5, 2));

// Perform exponentiation
console.log("2 ^ 5 =", exponentiate(2, 5));

// Calculate factorial
console.log("Factorial of 5 =", factorial(5));

// Calculate square root
console.log("Square root of 16 =", squareRoot(16));

// Calculate average of numbers
console.log("Average of [1, 2, 3, 4, 5] =", average([1, 2, 3, 4, 5]));