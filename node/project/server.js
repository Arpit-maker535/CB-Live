const { greet } = require("./greet.js");
const { add, subtract } = require("./math.js");
const fs = require("fs");
const path = require("path");

// console.log(greet("Nirbhay"));

// console.log("2+3 = ", add(2, 3));

// console.log("2-3 = ", subtract(2, 3));

const greetingMessage = greet("World");
const additionResult = `2+3 = ${add(2, 3, name)}`;
const subtractionResult = `2-3 = ${subtract(2, 3)}`;

const data = `
${greetingMessage}
${additionResult}
${subtractionResult}
`;

const filePath = path.join(__dirname, "output.txt");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("DATA OF FILE IS");
  console.log(data);
});
