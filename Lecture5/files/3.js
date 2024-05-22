// Sample data for loops
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// For loop
console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// ForEach loop
console.log("ForEach loop:");
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});

// For...in loop (used for objects)
console.log("For...in loop:");
for (let key in person) {
        console.log(key + ": " + person[key]);
}

// For...of loop (used for iterables like arrays)
console.log("For...of loop:");
for (let number of numbers) {
    console.log(number);
}

// While loop
console.log("While loop:");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// Do...while loop
console.log("Do...while loop:");
i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);

// Break statement
console.log("Break statement:");
for (let i = 0; i < numbers.length; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    console.log(numbers[i]);
}

// Continue statement
console.log("Continue statement:");
for (let i = 0; i < numbers.length; i++) {
    if (i === 3) {
        continue; // Skip the rest of the loop when i is 3
    }
    console.log(numbers[i]);
}

// Nested loops
console.log("Nested loops:");
for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        console.log(fruits[i] + " " + numbers[j]);
    }
}



// Example: Using map to create a new array with each element doubled
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


// Example: Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example: Using reduce to calculate the sum of the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


// Example: Using forEach to log each element to the console
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5

// Example: Using every to check if all numbers in the array are positive
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// Example: Using sort to sort the array in ascending order
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 1, 2, 3, 4, 5, 9]

// Example: Using slice to create a subarray
const subArray = numbers.slice(1, 4);
console.log(subArray); // Output: [2, 3, 4]

// Example: Using splice to remove elements and insert new ones
const splicedArray = numbers.slice(); // Create a copy of the array
splicedArray.splice(2, 1, 10, 20); // Remove 1 element at index 2 and insert 10 and 20
console.log(splicedArray); // Output: [1, 2, 10, 20, 4, 5]

// Normal Function Declaration
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Normal Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Output: 6


// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};

console.log(addArrow(2, 3)); // Output: 5

// Arrow Function with Implicit Return (single expression)
const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(2, 3)); // Output: 6

