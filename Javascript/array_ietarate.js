const numbers = [45, 67,45,78,56,56];
function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-----------")

}
numbers.forEach(myFunction)

console.log("-------------------------")

const numbers1 = [45, 67,45,78,56,56];
function myFunction1(value){
    // console.log(value);
    // console.log(index);
    // console.log(array);
    // console.log("-----------")
    return value * 2;

}
const newNumber = numbers1.map(myFunction1)
console.log(newNumber)




console.log("----------fiter----------")
const numbers2 = [45, 67,45,78,56,56];
function myFunction2(value, index, array){
    // console.log(value);
    // console.log(index);
    // console.log(array);
    // console.log("-----------")
    return value > 50;

}
const newNumber2 = numbers2.filter(myFunction2)
console.log(newNumber2)


console.log("----------reduce----------")
const numbers3 = [45, 67,45,78,56,56];
function myFunction2(total,value){
    // console.log(value);
    // console.log(index);
    // console.log(array);
    // console.log("-----------")
    return total + value;

}
const newNumber3 = numbers3.reduce(myFunction2)
console.log(newNumber3)