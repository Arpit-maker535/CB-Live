// Array Methods
let fruits = ["apple", "banana", "cherry"];

// Adding elements
fruits.push("date"); // Adds to the end
fruits.unshift("apricot"); // Adds to the beginning

// Removing elements
fruits.pop(); // Removes from the end
fruits.shift(); // Removes from the beginning

// Accessing elements
console.log(fruits[0]); // "apple"

// Finding elements
console.log(fruits.indexOf("banana")); // 1

// Checking if an element exists
console.log(fruits.includes("cherry")); // true

// Iterating over elements
fruits.forEach(fruit => console.log(fruit));

// Mapping to a new array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// Filtering elements
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["banana"]

// Reducing an array to a single value
let fruitString = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log(fruitString); // "apple, banana, cherry"

// Sorting elements
fruits.sort(); // Alphabetical order
console.log(fruits); // ["apple", "banana", "cherry"]

// Reversing elements
fruits.reverse();
console.log(fruits); // ["cherry", "banana", "apple"]

// Splicing (adding/removing elements)
fruits.splice(1, 1, "blueberry"); // Removes 1 element at index 1 and adds "blueberry"
console.log(fruits); // ["cherry", "blueberry", "apple"]

// Slicing (creating a new array)
let slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits); // ["blueberry"]

// String Methods
let str = "Hello, World!";

// Finding the length of a string
console.log(str.length); // 13

// Accessing characters
console.log(str[0]); // "H"

// Finding the index of a substring
console.log(str.indexOf("World")); // 7

// Checking if a string contains a substring
console.log(str.includes("Hello")); // true

// Extracting substrings
console.log(str.slice(7, 12)); // "World"
console.log(str.substring(7, 12)); // "World"
console.log(str.substr(7, 5)); // "World"

// Converting case
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"

// Replacing substrings
let newStr = str.replace("World", "JavaScript");
console.log(newStr); // "Hello, JavaScript!"

// Splitting a string
let words = str.split(" ");
console.log(words); // ["Hello,", "World!"]

// Trimming whitespace
let paddedStr = "   padded   ";
console.log(paddedStr.trim()); // "padded"

// Number (Integer) Methods
let num = 12345.6789;

// Converting to string
console.log(num.toString()); // "12345.6789"

// Fixing the number of decimals
console.log(num.toFixed(2)); // "12345.68"

// Converting to exponential notation
console.log(num.toExponential(2)); // "1.23e+4"

// Converting to a fixed number of significant digits
console.log(num.toPrecision(4)); // "1.235e+4"

// Parsing strings to integers and floats
let intStr = "123";
let floatStr = "123.45";

console.log(parseInt(intStr)); // 123
console.log(parseFloat(floatStr)); // 123.45

// Checking if a value is an integer
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.45)); // false

// Checking if a value is NaN (Not-a-Number)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false

// Maximum and minimum safe integers
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
