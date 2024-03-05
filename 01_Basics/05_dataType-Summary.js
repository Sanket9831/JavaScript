//1️⃣👉🏻 Primitive

//💡 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "sanket"
const age = 25
const isYoung = 1
const outSideIndia = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false

const bigNumber = 254356575601322n

//💡 Primitive are call by value, we don't get reference, we get the copy of value

// 2️⃣ Reference (Non Primitive)

// Values reference are provided

// Array, Objects, Functions

const heros = ["Shaktiman", "maagraj", "doga"]

let myDetails = {
    name:"sanket",
    age:25,
}

const myFunction = function(){console.log("Hello World!")}

//⭐Browser Event and Objects are impo to master JS⭐//

//🌟JS is Dynamically Typed Language🌟// const score = 200

// TypeScript is Statically Typed Language.// const score:number = 200

console.log(typeof myFunction)
