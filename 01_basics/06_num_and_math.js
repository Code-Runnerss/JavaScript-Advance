// const score = 400;  // Number
// const balance = new Number(100);  // Number object
// console.log(balance);  // Outputs: [Number: 100]
// console.log(score);  // Outputs: 100

// console.log(balance.toString());  // Outputs: "100"
// console.log(balance.toFixed(2));  // Outputs: "100.00" 

// let otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));  // Outputs: "23.9"
// otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));  // Outputs: "124"

// const hundered = 100000;
// console.log(hundered.toLocaleString('en-IN'));  // Outputs: "1,00,000"  

//+++++++++++++Math++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // Outputs: 4
console.log(Math.ceil(4.1));  // Outputs: 5
console.log(Math.floor(4.9));  // Outputs: 4
console.log(Math.round(4.5));  // Outputs: 5
console.log(Math.max(1, 2, 3, 4, 5));  // Outputs: 5
console.log(Math.min(1, 2, 3, 4, 5));  // Outputs: 1
console.log(Math.random());  // Outputs: A random number between 0 and 1
console.log(Math.sqrt(16));  // Outputs: 4
console.log(Math.pow(2, 3));  // Outputs: 8 (2 raised to the power of 3)
console.log(Math.PI);  // Outputs: 3.141592653589793

console.log(Math.random());  // Outputs: A random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);  // Outputs: A random integer between 1 and 10
console.log(Math.floor(Math.random() * 100) + 1);  // Outputs: A random integer between 1 and 100

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Outputs: A random integer between 10 and 20
