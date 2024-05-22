// var, let, and const
var globalVar = "I am a global variable (function-scoped)";
let blockVar = "I am a block-scoped variable";
const constantVar = "I am a constant variable (block-scoped)";

// You can reassign var and let
globalVar = "New value for globalVar";
blockVar = "New value for blockVar";

// You cannot reassign const
// constantVar = "New value for constantVar"; // This will cause an error

// Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];

// Strings
let greeting = "Hello, world!";
let name = "Alice";

// Integers
let a = 10;
let b = 20;

// Functions to add and subtract
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log("Addition: " + add(a, b)); // 30
console.log("Subtraction: " + subtract(a, b)); // -10

// Different types of loops

// For loop
console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// While loop
console.log("While loop:");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// Do-while loop
console.log("Do-while loop:");
i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);

// For-of loop (for iterating over arrays)
console.log("For-of loop:");
for (let number of numbers) {
    console.log(number);
}

// For-in loop (for iterating over object properties)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log("For-in loop:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}
