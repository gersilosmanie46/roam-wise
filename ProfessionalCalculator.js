/* 
   Filename: ProfessionalCalculator.js
   Content: Complex and sophisticated calculator using JavaScript
*/

// Utility function to perform basic arithmetic operations
function performOperation(operator, operand1, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      throw new Error('Invalid operator');
  }
}

// Function to evaluate complex mathematical expressions
function evaluateExpression(expression) {
  let expressionStack = [];
  let operatorStack = [];

  const operatorsPriority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  const processOperator = () => {
    const operator = operatorStack.pop();
    const operand2 = expressionStack.pop();
    const operand1 = expressionStack.pop();

    const result = performOperation(operator, operand1, operand2);
    expressionStack.push(result);
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === '(') {
      operatorStack.push('(');
    } else if (char === ')') {
      while (operatorStack[operatorStack.length - 1] !== '(') {
        processOperator();
      }
      operatorStack.pop();
    } else if (operatorsPriority[char]) {
      while (
        operatorStack[operatorStack.length - 1] &&
        operatorsPriority[char] <= operatorsPriority[operatorStack[operatorStack.length - 1]]
      ) {
        processOperator();
      }
      operatorStack.push(char);
    } else {
      let number = '';
      while (!isNaN(parseFloat(expression[i])) && expression[i] !== ' ') {
        number += expression[i];
        i++;
      }
      i--;

      expressionStack.push(parseFloat(number));
    }
  }

  while (operatorStack.length > 0) {
    processOperator();
  }

  if (expressionStack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return expressionStack[0];
}

// Example usage
const expression = '((3 + 5 * 2) / 3) - 1';
const result = evaluateExpression(expression);
console.log(`Result: ${result}`);