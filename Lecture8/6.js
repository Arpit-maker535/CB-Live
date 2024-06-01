//Async Programming
let intervalId;
let interval = 0;
function sayHello(){
    interval++;
    if(interval>5){
        clearInterval(intervalId)
    }
    console.log("Hello")
    }

    console.log("AND the Wait starts ....")

    // setTimeout(sayHello,1000)
    // setTimeout(sayHello,2000)

 intervalId = setInterval(sayHello,1000)