let score = '33abc';
let score2 = 33;
let score3 = null;
let score4 = NaN;
let score5 = undefined;
let ans = true;

// console.log(typeof score); // string
// console.log(typeof (score2)); // number

let valueInNumer = Number(score);
// console.log(typeof valueInNumer); // number 
// console.log(valueInNumer); // NaN 
// console.log(typeof score3); // object
// console.log(score3); // null
// console.log(typeof score4); // number
// console.log(score5); //  undefined
// console.log(typeof score5); // undefined
// console
// console.log(typeof ans); // boolean

// '33' -> 33
// '33abc' -> NaN
// 'true' -> 1 ; false -> 0

let isLoggedIn = true;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true

let isLoggedIn1 = '';
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); // false

let isLoggedIn2 = 'abc';
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // '33'
console.log(typeof stringNumber); // string