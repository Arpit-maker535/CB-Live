//higher order funtion that takes or returns function

function outer(arg1){
    let var1=10;
    function inner(arg2){
    let var2=20;
console.log(arg1,var1,arg2,var2)
    }
    return inner;

}

let x = outer("param1");

//tpye of x= function
// x = innter

// works as line 14, line 18, line 5

x('param2');


///// A closure is a function having access to the parent scope, even after the parent function has closed

//all scopes that were present at birth of innerfuntion, it will be accessible till its death.

// infinitely nestable

// if same variable in inner and outser scope, inner will print

//arguments keyword only contain of the function

