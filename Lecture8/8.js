function helloSayer(time,name){
    return new Promise((resolve,reject)=>{


    let cnt = 0;
    let loopId= setInterval(()=>{
        cnt++;
        console.log("Hello", name);
        if(cnt===time){
            clearInterval(loopId)
            resolve();
        }
       
    },100)

})
}


// async function task(){
//     await helloSayer(3,"nirbhay")
//     await helloSayer(3,"Ayush")
//     await helloSayer(3,"Riya")
// }
// helloSayer(5,"xxxxxxxxxx")
// task()


async function task2(){
    await Promise.all([helloSayer(3,"nirbhay")
     ,helloSayer(3,"Ayush")
    , helloSayer(3,"Riya")])
console.log("BATCH ONE DONE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    await Promise.all([helloSayer(3,"nirbhay")
    ,helloSayer(3,"Ayush")
   , helloSayer(3,"Riya")])
}

task2()