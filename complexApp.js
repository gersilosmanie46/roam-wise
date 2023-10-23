/*
 * Filename: complexApp.js
 * Description: A complex and elaborate JavaScript application
 * Author: Your Name
 * Date: [Insert Date]
 */

// Utility function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class representing a mathematical expression
class MathExpression {
  constructor(expression) {
    this.expression = expression;
  }

  // Method to evaluate the expression
  evaluate() {
    let result = eval(this.expression);
    return result;
  }

  // Method to calculate the factorial of a number within the expression
  calculateFactorial() {
    let regex = /factorial\((\d+)\)/g;
    let match;

    while ((match = regex.exec(this.expression))) {
      let number = parseInt(match[1]);
      let factorialResult = factorial(number);
      this.expression = this.expression.replace(match[0], factorialResult);
    }
  }
}

// Sample usage of the MathExpression class
let expression = "3 + factorial(5) - 2 * factorial(3)";
let mathExpression = new MathExpression(expression);
mathExpression.calculateFactorial();
let result = mathExpression.evaluate();

console.log(result); // Output: 3 + 120 - 2 * 6 = 115