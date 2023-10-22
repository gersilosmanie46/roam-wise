/*
   Filename: sophisticated_code.js
   Purpose: Demonstrating a sophisticated and complex JavaScript code
   Content: Implementation of a chatbot with natural language processing capabilities
*/

// Create an object to represent the chatbot
const chatbot = {
  name: "Sophie",
  greeting: "Hello, how can I assist you today?",
  farewell: "Goodbye, have a nice day!",
  keywords: {
    greeting: ["hello", "hi", "hey"],
    farewell: ["bye", "goodbye"],
    weather: ["weather", "temperature"],
    time: ["time", "clock"],
    joke: ["joke", "funny"],
  },
  responses: {
    greeting: [
      "Hello!",
      "Hi there!",
      "Greetings!",
      "Nice to see you.",
      "How can I help you?",
    ],
    farewell: [
      "Goodbye!",
      "Farewell!",
      "Have a great day!",
      "See you later!",
      "Take care!",
    ],
    weather: [
      "The weather is sunny today.",
      "It's quite cold outside.",
      "Expect rain showers later.",
      "A snowstorm is coming.",
      "It's perfect weather for a picnic.",
    ],
    time: () => {
      const currentTime = new Date();
      return `The current time is ${currentTime.toLocaleTimeString()}.`;
    },
    joke: () => {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!",
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
      ];
      const randomIndex = Math.floor(Math.random() * jokes.length);
      return jokes[randomIndex];
    },
  },
  processMessage: function (message) {
    message = message.toLowerCase();
    
    if (this.containsKeyword(this.keywords.greeting, message)) {
      return this.getRandomResponse(this.responses.greeting);
    } else if (this.containsKeyword(this.keywords.farewell, message)) {
      return this.getRandomResponse(this.responses.farewell);
    } else if (this.containsKeyword(this.keywords.weather, message)) {
      return this.getRandomResponse(this.responses.weather);
    } else if (this.containsKeyword(this.keywords.time, message)) {
      return this.responses.time();
    } else if (this.containsKeyword(this.keywords.joke, message)) {
      return this.responses.joke();
    } else {
      return "I'm sorry, I didn't understand what you said.";
    }
  },
  containsKeyword: function (keywordList, message) {
    return keywordList.some((keyword) => message.includes(keyword));
  },
  getRandomResponse: function (responseList) {
    const randomIndex = Math.floor(Math.random() * responseList.length);
    return responseList[randomIndex];
  },
};

// Usage example:
const userMessage = prompt(chatbot.greeting); // Display the chatbot greeting and get user input

const botResponse = chatbot.processMessage(userMessage); // Process the user input

console.log(botResponse); // Display the response from the chatbot

alert(chatbot.farewell); // Display the chatbot farewell