function helloSayer(time, name) {
  return new Promise((resolve, reject) => {
    let cnt = 0;
    let loopId = setInterval(() => {
      cnt++;
      console.log("Hello", name);
      if (cnt === time) {
        clearInterval(loopId);
        resolve();
      }
    }, 100);
  });
}

// helloSayer(3,"nirbhay")
// helloSayer(4,"Raj")

// helloSayer(3,"nirbhay").then(()=>{
//     helloSayer(4,"raj").then(()=>{
//         helloSayer(5,"Priya").then(()=>{
//             helloSayer(5,"Garima")
//         })
//     })
// })

// helloSayer(3,"nirbhay")
// .then(helloSayer(4,"Raj"))
// .then(helloSayer(5,"Garima")) // wont work

helloSayer(3, "nirbhay")
  .then(() => helloSayer(4, "raj"))
  .then(() => helloSayer(5, "Priya"))
  .then(() => helloSayer(5, "Garima"));
