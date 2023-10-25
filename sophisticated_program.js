/* 
   Filename: sophisticated_program.js
   Description: This code is a sophisticated program that demonstrates complex JavaScript concepts and features.
*/

// Constants
const MAX_VALUE = 100;
const MIN_VALUE = 1;

// Global variables
let counter = 0;

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static greet() {
    console.log(`Hello, I am a Person.`);
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Utility Functions
function getRandomNumber() {
  return Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
}

// Main Program
console.log("Starting the sophisticated program...");

// Loop
for (let i = 0; i < 10; i++) {
  counter++;
}

// Conditional Statements
if (counter > 5) {
  console.log("Counter is greater than 5.");
} else {
  console.log("Counter is less than or equal to 5.");
}

// Arrays and Loops
const numbers = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = getRandomNumber();
  numbers.push(randomNumber);
}
console.log(numbers);

// Objects and Functions
const person = new Person("John", 30);
person.sayHello();

// Promises and Asynchronous Programming
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function doAsyncTask() {
  await wait(2000);
  console.log("Async task completed.");
}

doAsyncTask();

// Event Listeners and DOM Manipulation
document.querySelector("#myButton").addEventListener("click", () => {
  console.log("Button is clicked!");
  document.querySelector("#myParagraph").textContent = "Button clicked!";
});

console.log("The sophisticated program has ended.");

// ... More code here ... (200+ lines)