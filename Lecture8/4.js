let winner = "Nirbhay";
function changeWinner(val) {
  val = "Raj";
}
console.log("The winner is", winner);
changeWinner(winner); // pass by value is JS
console.log("Now The winner is", winner);

let winners = ["Nirbhay1", "Nirbhay2", "Nirbhay3"];
function changeWinner2(val) {
  winners[0] = "123";
  winners[1] = "123";
  winners[2] = "123";
}
console.log("The winner is", winners);
changeWinner2(winner); // pass by Reference
console.log("Now The winner is", winners);

//JS always passes by value but in case of object or array ie not primitive, array name points to x, x is refernce to array, value itself is reference in array or Object
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true

let x = 10;
let y = x; // This is a copy by value

console.log(x); // 10
console.log(y); // 10

y = 20;

console.log(x); // 10 (x remains unchanged)
console.log(y); // 20

// Shallow copy of an array with nested array
let arr1 = [1, 2, [3, 4]];
let arr2 = arr1.slice(); // or let arr2 = [...arr1];

arr2[2][0] = 10;

console.log(arr1); // [1, 2, [10, 4]] (original array is affected)
console.log(arr2); // [1, 2, [10, 4]]

// Deep copy of an array with nested array
let arr3 = [1, 2, [3, 4]];
let arr4 = JSON.parse(JSON.stringify(arr3));

arr4[2][0] = 10;

console.log(arr3); // [1, 2, [3, 4]] (original array is not affected)
console.log(arr4); // [1, 2, [10, 4]]

// Shallow copy of an object with nested object
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = Object.assign({}, obj1); // or let obj2 = { ...obj1 };

obj2.b.c = 10;

console.log(obj1); // { a: 1, b: { c: 10 } } (original object is affected)
console.log(obj2); // { a: 1, b: { c: 10 } }

// Deep copy of an object with nested object
let obj3 = { a: 1, b: { c: 2 } };
let obj4 = JSON.parse(JSON.stringify(obj3));

obj4.b.c = 10;

console.log(obj3); // { a: 1, b: { c: 2 } } (original object is not affected)
console.log(obj4); // { a: 1, b: { c: 10 } }
