const name = ' Code Runner   ';
const age = 26; 

// console.log(name + age + "Hello"); // string concatenation
console.log(`Hello  my name is ${name.toUpperCase()} and my age ${age}.`);  // template literals

const gameName = 'Cricket';

console.log(gameName.length); // length of string
console.log(gameName.toUpperCase()); // first character of string
console.log(gameName.toLowerCase()); // last character of string
console.log(gameName.charAt(0)); // first character of string  // C 
console.log(gameName.indexOf('t')); // index of first occurrence of 'C'
console.log(gameName.substring(0, 3)); // substring the string from index 0 to 3 // Cri
console.log(gameName.slice(-6, 3))

console.log(name.trim()); // remove whitespace from both sides

const url = 'https://www.google.com/search%20q=javascript';
console.log(url.replace('%20', '?')); // replace '%20' with '?'
console.log(url.replaceAll('%20', '?')); // replace all '%20' with '?'

console.log(url.includes('google')); // check if 'google' is present in the string

console.log(url.split('/')); // split the string into array of words

// console.log(gameName.length); // length of string
// console.log(gameName[0]); // first character of string
// console.log(gameName[gameName.length - 1]); // last character of string
// console.log(gameName.indexOf('C')); // index of first occurrence of 'C'
// console.log(gameName.lastIndexOf('C')); // index of last occurrence of 'C'
// console.log(gameName.slice(0, 3)); // slice the string from index 0 to 3
// console.log(gameName.slice(3)); // slice the string from index 3 to end

// console.log(gameName.substr(0, 3)); // substr the string from index 0 to 3
// console.log(gameName.replace('C', 'c')); // replace 'C' with 'c'
// console.log(gameName.replaceAll('C', 'c')); // replace all 'C' with 'c'
// console.log(gameName.toUpperCase()); // convert to uppercase
// console.log(gameName.toLowerCase()); // convert to lowercase
// console.log(gameName.trim()); // remove whitespace from both sides
// console.log(gameName.trimStart()); // remove whitespace from start
// console.log(gameName.trimEnd()); // remove whitespace from end
// console.log(gameName.charAt(0)); // get character at index 0
// console.log(gameName.charCodeAt(0)); // get ASCII value of character at index 0
// console.log(gameName.split('')); // split the string into array of characters
// console.log(gameName.split(' ')); // split the string into array of words
// console.log(gameName.split('C')); // split the string into array of strings
// console.log(gameName.split('C').join('c')); // split the string into array of strings and join with 'c'
// console.log(gameName.includes('C')); // check if 'C' is present in the string
// console.log(gameName.startsWith('C')); // check if string starts with 'C'
// console.log(gameName.endsWith('t')); // check if string ends with 't'
// console.log(gameName.repeat(3)); // repeat the string 3 times
// console.log(gameName.padStart(10, '0')); // pad the string with '0' at start
// console.log(gameName.padEnd(10, '0')); // pad the string with '0' at end
// console.log(gameName.padStart(10, '0').padEnd(15, '0')); // pad the string with '0' at start and end
// console.log(gameName.concat(' is my favorite game')); // concatenate the string with ' is my favorite game'
