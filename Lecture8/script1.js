// let correct = false;

// function fakeDownloadPromise() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (correct) {
//         resolve("SUCCESS");
//       } else {
//         reject(new Error("GOT AN ERROR"));
//       }
//     }, 1000);
//   });
// }

// let downloaded = fakeDownloadPromise();
// downloaded.then((data) => console.log(data));
// downloaded.catch((err) => console.log(err));

// IIFE Immidately Invoked Funtion Expression

// function sayHello() {
//   console.log("HELLO");
// }

// sayHello();

// (function () {
//   console.log("HELLO 2");
// })();

// (function () {
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// })();

// (function (print, p, r, s) {
//   print("Hello", p(3, 4));
//   print("THERE", r(3, 4));
//   print("HIII", s(3, 4));
// })(console.log, Math.min, Math.max, Math.pow);

// Pass By value and Pass By Reference

// let winner = "Nirbhay";

// function changeWinner(val) {
//   console.log("WINNNER IN FUNCTION IS", val);
//   val = "Raj";
//   console.log("Changing value of winner to", val);
// }

// console.log("Winner is", winner);
// changeWinner(winner);
// console.log("New winner is", winner);

// IN JS EVERY PRIMITIVE TYPE IS PBV

// let winners = ["Nirbhay", "Nishant", "Vijay"];
// function changeWinners(val) {
//   val[0] = "Dheeraj";
//   val[1] = "Tanmay";
//   val[2] = "Nirbhay";
// }
// console.log("Winners are", winners);
// changeWinners(winners);
// console.log("New Winners are", winners);

// Objects or Arrays or Non Primitive tpyes are passed by refernce

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // Expected output: 42

// console.log(obj.result);
// // Expected output: true

// let x = 10;
// let y = x;

// y = 20;
// console.log(x);
// console.log(y);

///shallooooowww
// let arr1 = [1, 2, [3, 4]];
// let arr2 = arr1.slice();
// arr2[2][0] = 10;

// console.log(arr1);
// console.log(arr2);

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { ...obj1 };
// obj2.b.c = 10;
// console.log(obj1);
// console.log(obj2);

// DEEP COPY

// let arr3 = [1, 2, [3, 4]];

// let arr4 = JSON.parse(JSON.stringify(arr3));

// arr4[2][0] = 10;

// console.log(arr3);
// console.log(arr4);

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.b.c = 10;

// console.log(obj1);
// console.log(obj2);

function helloSayer(tillCount, name) {
  return new Promise((resolve, reject) => {
    let cnt = 0;
    let loopId = setInterval(() => {
      cnt++;
      console.log("HELLO", name);
      if (cnt == tillCount) {
        clearInterval(loopId);
        resolve();
      }
    }, 100);
  });
}
// helloSayer(10, "Tanmay");
// helloSayer(20, "Nishant");

// helloSayer(10, "Tanmay").then(() => {
//   helloSayer(20, "Nishant");
// });

// helloSayer(3,"nirbhay").then(()=>{
//     helloSayer(4,"raj").then(()=>{
//         helloSayer(5,"Priya").then(()=>{
//             helloSayer(5,"Garima")
//         })
//     })
// })

// helloSayer(3, "nirbhay")
//   .then(() => helloSayer(4, "raj"))
//   .then(() => helloSayer(5, "Priya"))
//   .then(() => helloSayer(5, "Garima"));

// ASYNC AWAIT

// async function task2() {
//   await helloSayer(5, "Tanmay");
//   await helloSayer(5, "Nishant");
// }

// task2();

// ALWAYS USE THIS INSTEAD OF .THEN

async function task2() {
  await Promise.all([
    helloSayer(5, "Tanmay"),
    helloSayer(5, "Ayush"),
    helloSayer(5, "Riya"),
  ]);
  console.log("DOING SOMETHING HERE Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  await Promise.all([
    helloSayer(5, "Dheeraj"),
    helloSayer(5, "Rohan"),
    helloSayer(5, "Aman"),
  ]);
}

task2();
