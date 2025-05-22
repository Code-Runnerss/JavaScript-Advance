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

// +++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) vs heap(non-primitive)
// stack is used for storing primitive data types and function calls
// heap is used for storing non-primitive data types like objects and arrays
// stack is faster than heap
// stack is a LIFO (last in first out) data structure
// heap is a dynamic memory allocation data structure
// stack has a fixed size
// heap has a variable size
// stack is used for static memory allocation
// heap is used for dynamic memory allocation
// stack is used for storing function calls and local variables
// heap is used for storing objects and arrays

let myYoutubeName = 'Code Runner';
let myYoutubeName2 = myYoutubeName; // copy by value
myYoutubeName2 = 'Code Runner 2'; // change the value of myYoutubeName2
console.log(myYoutubeName); // Code Runner
console.log(myYoutubeName2); // Code Runner 2
// myYoutubeName is not affected by the change in myYoutubeName2

let myYoutubeChannel = {
  name: 'Code Runner',
  subs: 2600,
  videos: ['video1', 'video2'],
};
let myYoutubeChannel2 = myYoutubeChannel; // copy by reference
myYoutubeChannel2.name = 'Code Runner 2'; // change the value of myYoutubeChannel2
console.log(myYoutubeChannel); // { name: 'Code Runner 2', subs: 1000, videos: [ 'video1', 'video2' ] }
console.log(myYoutubeChannel2); // { name: 'Code Runner 2', subs: 1000, videos: [ 'video1', 'video2' ] }
// myYoutubeChannel is affected by the change in myYoutubeChannel2
// because they are pointing to the same object in memory


// to create a copy of an object, we can use the spread operator or Object.assign
let myYoutubeChannel3 = { ...myYoutubeChannel }; // copy by value
myYoutubeChannel3.name = 'Code Runner 3'; // change the value of myYoutubeChannel3
console.log(myYoutubeChannel); // { name: 'Code Runner 2', subs: 1000, videos: [ 'video1', 'video2' ] }
console.log(myYoutubeChannel3); // { name: 'Code Runner 3', subs: 1000, videos: [ 'video1', 'video2' ] }
// myYoutubeChannel is not affected by the change in myYoutubeChannel3
// because they are pointing to different objects in memory


// to create a copy of an array, we can use the spread operator or Array.from
let myYoutubeVideos = ['video1', 'video2', 'video3'];
let myYoutubeVideos2 = [...myYoutubeVideos]; // copy by value
myYoutubeVideos2[0] = 'video4'; // change the value of myYoutubeVideos2
console.log(myYoutubeVideos); // [ 'video1', 'video2', 'video3' ]
console.log(myYoutubeVideos2); // [ 'video4', 'video2', 'video3' ]
// myYoutubeVideos is not affected by the change in myYoutubeVideos2
// because they are pointing to different arrays in memory
// to create a copy of an object, we can use the spread operator or Object.assign



