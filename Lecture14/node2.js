// Importing functions from other files
const { greet } = require("./greet");
const { add, subtract } = require("./math");
const fs = require("fs");

// Using imported functions
const greetingMessage = greet("World");
const additionResult = `2 + 3 = ${add(2, 3)}`;
const subtractionResult = `5 - 2 = ${subtract(5, 2)}`;

console.log(greetingMessage); // Output: Hello, World!
console.log(additionResult); // Output: 2 + 3 = 5
console.log(subtractionResult); // Output: 5 - 2 = 3

// Data to be written to the file
const data = `
${greetingMessage}
${additionResult}
${subtractionResult}
`;

//Writing data to a file
fs.writeFile("output.txt", data, (err) => {
  if (err) throw err;
  console.log("Data has been written to output.txt");
});

// const path = require("path");
// const filePath = path.join(__dirname, "output.txt");

// fs.writeFile(filePath, data, (err) => {
//   if (err) throw err;
//   console.log("Data has been written to output.txt in the same directory");
// });
