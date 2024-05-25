c=20 // GLobal Variable
var d=30; // Funtion Scope   
let e = 50 // Block Scope



function fun (){
    let a =5
    if(a==5){
        let b=10; // block
        var f = 20; //funtion
        t = 30;
        console.log("Inside",b);
    }

    console.log("Outside",f); 
}

fun();
console.log("Global",t); 

square_root(10)
square_root_2(20)

// Hoisting -> 
//Takes it to top of the code if function keyword is defined first
//function declaration
function square_root(n){
    console.log("In first Function")
    return Math.sqrt(n)
}

// console.log(square_root(4))

//gives error if called before
//function Expression

var square_root_2 = function(){
    console.log("In second Function");
    return "Something";
}

// square_root(10)
// square_root_2(20)