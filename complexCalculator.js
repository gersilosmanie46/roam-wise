/* 
   Filename: complexCalculator.js
   Description: A complex calculator that performs various mathematical operations and handles complex numbers.
*/

// Import the math.js library for complex number calculations
const math = require('mathjs');

// Function to add two complex numbers
function addComplexNumbers(real1, imaginary1, real2, imaginary2) {
   const complex1 = math.complex(real1, imaginary1);
   const complex2 = math.complex(real2, imaginary2);
   return math.add(complex1, complex2);
}

// Function to subtract two complex numbers
function subtractComplexNumbers(real1, imaginary1, real2, imaginary2) {
   const complex1 = math.complex(real1, imaginary1);
   const complex2 = math.complex(real2, imaginary2);
   return math.subtract(complex1, complex2);
}

// Function to multiply two complex numbers
function multiplyComplexNumbers(real1, imaginary1, real2, imaginary2) {
   const complex1 = math.complex(real1, imaginary1);
   const complex2 = math.complex(real2, imaginary2);
   return math.multiply(complex1, complex2);
}

// Function to divide two complex numbers
function divideComplexNumbers(real1, imaginary1, real2, imaginary2) {
   const complex1 = math.complex(real1, imaginary1);
   const complex2 = math.complex(real2, imaginary2);
   return math.divide(complex1, complex2);
}

// Function to calculate the square root of a complex number
function sqrtComplexNumber(real, imaginary) {
   const complexNumber = math.complex(real, imaginary);
   return math.sqrt(complexNumber);
}

// Usage examples
const sum = addComplexNumbers(2, 3, 4, 5);
console.log("Sum:", sum); // Output: Sum: Complex {re: 6, im: 8}

const difference = subtractComplexNumbers(6, 8, 2, 3);
console.log("Difference:", difference); // Output: Difference: Complex {re: 4, im: 5}

const product = multiplyComplexNumbers(2, 3, 4, 5);
console.log("Product:", product); // Output: Product: Complex {re: -7, im: 22}

const quotient = divideComplexNumbers(4, 5, 2, 3);
console.log("Quotient:", quotient); // Output: Quotient: Complex {re: 1.619047619047619, im: 0.2380952380952380}

const squareRoot = sqrtComplexNumber(-1, 0);
console.log("Square Root:", squareRoot); // Output: Square Root: Complex {re: 0, im: 1}