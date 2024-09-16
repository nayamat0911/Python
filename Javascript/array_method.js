const fruits = ['mango','orange','banena','apple']
console.log(fruits)
let strr = fruits.toString()
console.log(strr)
let ajoin = fruits.join(" * ")
console.log(ajoin)
//push and pop
let kkk = fruits.pop()
console.log(fruits)
console.log(kkk)

//psuh

let jj = fruits.push("pineapple")
console.log(fruits)
console.log(jj)  // define length

//shifting
// out first elements

let sss = fruits.shift()
console.log(fruits)
// console(sss)

fruits.unshift('kokonut')
console.log(fruits)

//length
console.log(fruits.length)
console.log(fruits[3])

// deleting index

// delete fruits()
console.log(fruits[0])

//sclicing
//  let lll = fruits.slice(2, 4)
//  console.log(lll)

let vvv = fruits.slice(2,2 , "anaros", "guava")
console.log(fruits)
console.log(vvv)

//concat

let ccc = ["my", "you"]
let ddd =fruits.concat(ccc)
console.log(ddd)
console.log(fruits)