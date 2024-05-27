//this keyword

// if function is directly called, global scope, points window

function checkThis(){
    console.log(this)
}

//checkThis()// window

let obj={
    1:1,
    2:2,
    fun:function(){
        console.log(this)
    }
}

//if z= obj.fun then again window 