// Importing functions from other files
const { greet } = require("./greet");
const { add, subtract } = require("./math");

// Using imported functions
console.log(greet("World")); // Output: Hello, World!
console.log(`2 + 3 = ${add(2, 3)}`); // Output: 2 + 3 = 5
console.log(`5 - 2 = ${subtract(5, 2)}`); // Output: 5 - 2 = 3
