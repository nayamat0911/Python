const d = {
    name : "bangladesh",
    dis:64,

}
// premitive 
const s ="bangladesh";
console.log(s.length)
//slice ( start, end must be mentined)
//substring
// substr

let fruts ="apple, bannana, kawki"
let f_len=fruts.slice(6, 10)
//javascripts start index from zero
console.log(fruts)
console.log(f_len)
let f_lenee=fruts.slice(-10, -3)
console.log(f_lenee)
let zrina = fruts.replace("apple","zarina")
console.log(zrina)

//reguler expression
// uppercase to lower case
let fruts_2 = fruts.toLocaleUpperCase();
console.log(fruts_2)

let fruts_3 = fruts.toLocaleLowerCase();
console.log(fruts_3)

let fruts_4 = "jankfruts, magapi, mango, licchi"

let fruts_5 = fruts.concat(" ",fruts_4)
console.log(fruts_5)

// all string return immutable string means mute na string can't be changed only replced
 