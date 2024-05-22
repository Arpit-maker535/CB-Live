// Creating different types of JSON objects

// Simple JSON object
let simpleObject = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

// JSON object with an array
let arrayObject = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "hiking", "coding"]
};

// JSON object with nested objects
let nestedObject = {
    name: "Charlie",
    age: 35,
    address: {
        street: "123 Main St",
        city: "Metropolis",
        zip: "12345"
    }
};

// JSON object with mixed types
let mixedObject = {
    name: "Dana",
    age: 40,
    married: true,
    children: null,
    pets: [
        {
            type: "dog",
            name: "Rex"
        },
        {
            type: "cat",
            name: "Whiskers"
        }
    ]
};

// JSON operations

// Converting JSON object to string
let jsonString = JSON.stringify(simpleObject);
console.log("JSON String:", jsonString);

// Converting JSON string back to object
let jsonObject = JSON.parse(jsonString);
console.log("JSON Object:", jsonObject);

// Accessing values in a JSON object
console.log("Name:", simpleObject.name); // Alice
console.log("Age:", simpleObject.age); // 25
console.log("City:", simpleObject.city); // Wonderland

// Modifying values in a JSON object
simpleObject.age = 26;
console.log("Updated Age:", simpleObject.age); // 26

// Adding new properties to a JSON object
simpleObject.country = "Wonderlandia";
console.log("Updated JSON Object:", simpleObject);

// Deleting properties from a JSON object
delete simpleObject.city;
console.log("JSON Object after deletion:", simpleObject);

// Iterating over a JSON object
for (let key in simpleObject) {
    if (simpleObject.hasOwnProperty(key)) {
        console.log(key + ": " + simpleObject[key]);
    }
}

// Working with nested JSON objects
console.log("Street:", nestedObject.address.street); // 123 Main St
console.log("City:", nestedObject.address.city); // Metropolis

// Iterating over nested JSON objects
for (let key in nestedObject.address) {
    if (nestedObject.address.hasOwnProperty(key)) {
        console.log(key + ": " + nestedObject.address[key]);
    }
}

// Working with arrays in JSON objects
arrayObject.hobbies.forEach(hobby => {
    console.log("Hobby:", hobby);
});

// Accessing nested arrays and objects in JSON
mixedObject.pets.forEach(pet => {
    console.log("Pet Type:", pet.type);
    console.log("Pet Name:", pet.name);
});


// Normal Function
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow Function
const greetArrow = (name) => {
    return "Hello, " + name + "!";
}

// Arrow Function with implicit return
const greetArrowShort = (name) => "Hello, " + name + "!";

// Example Functions with Different Return Types

// Function returning a string
function getString() {
    return "This is a string";
}

// Function returning a number
function getNumber() {
    return 42;
}

// Function returning a boolean
function getBoolean() {
    return true;
}

// Function returning an array
function getArray() {
    return [1, 2, 3, 4, 5];
}

// Function returning an object
function getObject() {
    return { key: "value" };
}

// Normal and Arrow Function Example
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Function with no return value (void function)
function logMessage(message) {
    console.log(message);
}

// Arrow function with no return value
const logMessageArrow = (message) => {
    console.log(message);
}

// Testing the functions
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greetArrow("Bob")); // "Hello, Bob!"
console.log(greetArrowShort("Charlie")); // "Hello, Charlie!"

console.log(getString()); // "This is a string"
console.log(getNumber()); // 42
console.log(getBoolean()); // true
console.log(getArray()); // [1, 2, 3, 4, 5]
console.log(getObject()); // { key: "value" }

console.log(add(5, 3)); // 8
console.log(addArrow(5, 3)); // 8

logMessage("This is a normal function log"); // Logs to console
logMessageArrow("This is an arrow function log"); // Logs to console
