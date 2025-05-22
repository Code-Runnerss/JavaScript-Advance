// Primitive data types

// 1. string 2. number 3. boolean 4. null 5. undefined 6. symbol 7. bigint
const score = 100; // number
const scoreValue = 100.3; // number
const isLogiedIn = true; // boolean
const outSideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId); // false

const bigint = 38448952589891n;

// reference data types (non-primitive) 

// 1.array 2. object 3. function 4. date 5. regex

const heroes = ['spiderman', 'batman', 'superman']; // array
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isLoggedIn: false,
}; // object

const myFunction = function () {
  console.log('Hello world');
}; // function

const date = new Date(); // date

const regex = /hello/; // regex

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLogiedIn); // boolean
console.log(typeof outSideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol 
console.log(typeof anotherId); // symbol
console.log(typeof bigint); // bigint
console.log(typeof heroes); // object
console.log(typeof user); // object
console.log(typeof myFunction); // function
console.log(typeof date); // object
console.log(typeof regex); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol); // function
console.log(typeof BigInt); // function
console.log(typeof Array); // function
console.log(typeof Object); // function
console.log(typeof Function); // function
console.log(typeof Date); // function
console.log(typeof RegExp); // function
console.log(typeof Boolean); // function
console.log(typeof String); // function
console.log(typeof Number); // function
console.log(typeof Math); // object
console.log(typeof JSON); // object
console.log(typeof console); // object
console.log(typeof window); // object
console.log(typeof document); // object
console.log(typeof global); // object
console.log(typeof process); // object
console.log(typeof __dirname); // string
console.log(typeof __filename); // string
console.log(typeof module); // object
console.log(typeof exports); // object
console.log(typeof require); // function
console.log(typeof setTimeout); // function
console.log(typeof setInterval); // function
console.log(typeof clearTimeout); // function
console.log(typeof clearInterval); // function
console.log(typeof setImmediate); // function
console.log(typeof clearImmediate); // function
console.log(typeof queueMicrotask); // function
console.log(typeof nextTick); // function
console.log(typeof process.nextTick); // function
console.log(typeof Buffer); // function



