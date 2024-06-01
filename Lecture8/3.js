//IIFE Immediately Invoked Function Expression

function sayHello(){
console.log("Hello")
}

sayHello();


(function (){
    console.log("Hello 2")
})();


(function (){
    let a = 10;
    let b = 20;
    console.log(a+b);
})();

(function (l,p,r,s){
l("Hello",p(3,4))
l("Hello",r(3,4))
l("Hello",s(3,4))
})(console.log,Math.min,Math.max,Math.pow);