let x =3.14
let y =3;
// precision
// not a number is a number 
// if type e number is a number 
// lergest number is a limited thats disite  

//numbers method
// new Set
// add()
// delete()
// has()
// forEach()
// size()
const mySet  = new Set()
mySet.add("a");
mySet.add("b");
mySet.add("c");
console.log(mySet)
mySet.add('d')
console.log(mySet)


const fruits = new Map([
    ['apple',500],
    ['banana',200],
    ['orange',300]
]);
console.log(fruits);


ss = fruits.get('apple')
console.log(ss)
pp = fruits.has('apple')
console.log(pp)

let a = "bangladesh"
let b = "I love"
let c = b + " " + a;
console.log(c, typeof c)

// object - array, null , date, 
// undefined- undefined, value not be assignet thats is undefined


// primitive Data = string, number, boolean, undefined
// this is can be retrun 

// complex data = function, object, 

// function is object 
// type of is operator it is not a variable , operators (+,=, -, *,/)
// console.log(Number('           '))
// console.log(parentInt(8))
// (3).toString()
// Reguler expression

// find any thinsg thats is reguler expression
// /pattern/modifiers'
// /w3schools/i

//  replace and serche
let text = "visite the W3Schools!";
let n = text.search("W3Schools")
console.log(n)
let m = text.replace('microsoft','W3School')
console.log(n)

// try , catch, throw, finally

// sili mistake
// dengurues error
try {
    adddlert('this is error')
}
catch(err){
    console.log(err)
}
// try {
 //   try the code
//}
// catch(err){

// }

// name and message. , building error
// js throw en exprestion 
// throw statemment allow you to create a custom error create by user own thinking
// throw " too big"
// throw 500

// error na hole catch e jabe na
let t = 1;

try {
    if(t =="") throw "empty"
    if(isNaN(t)) throw "not a number"
    t = Number(t);
    if(t < 5) throw "too low";
    if(t > 10) throw "too high";

}
catch(err){

}
finally{
    console.log("this is finally stage")
}
console.log("this is test")

// range eror // reference error // 

// scope 
// function scop
// block scope
{
    let yyx =2 // it's is a block scop
}
console.log(yyx)

{
    var eey= 2

}
console.log(eey)

function A(){
    let x;
}
function B(){
    let x;
}