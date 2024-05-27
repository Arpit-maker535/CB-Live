let arr=[1,2,3]

console.log(arr[1]);

let arr2=[1,"hello",false]
console.log(typeof arr2[2])


for(let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}

for(let val of arr2){
    console.log(val);
}

for(let index in arr2){
    console.log(index)
    console.log(arr2[index])
}

//push , pop // shift //unshift // splice


let omit = arr2.splice(2,1);
arr2.splice(0,3,"hi","ho","ha");

let arr3= arr2.concat("yoooo","hii") 
