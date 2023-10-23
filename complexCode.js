/* 
Filename: complexCode.js
Content: Complex JavaScript Code Example 
*/

// Define a class named Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. I am a ${this.gender}.`);
  }
  
  greet(person) {
    console.log(`Hi ${person.name}, nice to meet you!`);
  }
}

// Define a subclass named Developer that extends the Person class
class Developer extends Person {
  constructor(name, age, gender, languages) {
    super(name, age, gender);
    this.languages = languages;
  }
  
  code() {
    console.log(`I am coding in ${this.languages.join(", ")}.`);
  }
}

// Instantiate two Person objects
const person1 = new Person("Alice", 25, "female");
const person2 = new Person("Bob", 30, "male");

// Call methods on the Person objects
person1.introduce(); // Hi, my name is Alice and I am 25 years old. I am a female.
person2.introduce(); // Hi, my name is Bob and I am 30 years old. I am a male.
person1.greet(person2); // Hi Bob, nice to meet you!
person2.greet(person1); // Hi Alice, nice to meet you!

// Instantiate a Developer object
const developer1 = new Developer("Carol", 28, "female", ["JavaScript", "Python"]);

// Call methods on the Developer object
developer1.introduce(); // Hi, my name is Carol and I am 28 years old. I am a female.
developer1.code(); // I am coding in JavaScript, Python.

// Create an array of Person objects
const people = [person1, person2, developer1];

// Iterate over the array and execute methods on each object
people.forEach(person => {
  person.introduce();
});

// Create a function to get the average age of people in the array
function getAverageAge(people) {
  let totalAge = 0;
  people.forEach(person => {
    totalAge += person.age;
  });
  return totalAge / people.length;
}

// Call the getAverageAge function
const averageAge = getAverageAge(people);
console.log(`The average age is ${averageAge.toFixed(2)}.`);

// Define a function that returns a promise after a certain delay
function delayPromise(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

// Define an async function that utilizes the delayPromise function
async function performAsyncTasks() {
  await delayPromise(2000);
  console.log("Async task 1 executed.");
  await delayPromise(3000);
  console.log("Async task 2 executed.");
}

// Call the async function
performAsyncTasks();