let apple = {
    taste:"sweet",
    color:"red",

}
//another way for OOPs
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

//new keyword
let mango=new Fruit("Sweet","Yellow")
let orange=new Fruit("sour","orange")


//Class Keyword (EcmaScript 2015)
//class declaration
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}
// class expresstion
let FruitClass2 = class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }}

let Kiwi= new FruitClass("Sour","Green");
let Kiwi2= new FruitClass2("Sour","Green");


