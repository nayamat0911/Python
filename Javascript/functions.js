/// function is a block of code 
//parameter, arguments
// declaration
// callin a function or invoction , fuction call its self

//function scope
// define function
// rstrun 
function myFunction (p1,age){
    console.log('jasim is sleeping 10 pm');
    console.log(p1, age);
    return 5;
    
}

console.log("calling a function");

myFunction("karim slpeep in 11pm", 12 )
myFunction("jamal sleep in 12 pm", 13)
myFunction('Hasan sleep in 12:30pm', 10)


// function mydev(a, b){
//     return a * b;
// }
// let x = mydev(4 ,5)
// console.log(x)

// local variavle
var carNew ="BMW"
function carName(){
    let carNew ="volvo";
    console.log(carNew);
}

carName();
console.log(carNew)