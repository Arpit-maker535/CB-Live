//OOPS in JS
// ALLOWS to Create Object without defining class


let bird={
    x:100,
    y:20,
    color:"Blue",
    eggs:["eggOne","eggTwo","eggThree","eggFour"],
    fly:function(){
        console.log("Bird is Flying",this.x,this.y)
    }
}

for(let i =0;i<bird.eggs.length;i++ ){
    console.log(bird.eggs[i]);
}

bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
})
bird.fly();