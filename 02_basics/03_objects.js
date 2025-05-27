//singleton : make with constructor
// Object.create(Object); // This will create an empty object using the Object constructor
//object literal : make with object literal
const mySym = Symbol('Key1'); // This will create a new symbol with the description 'mySymbol'
const jsUser = {
    name: 'chintan',
    'Full Name': 'Chintan Patel',
    [mySym]: 'myKey1', // Using a symbol as a key
    age: 26,
    isStudent: false,
    email : 'patelchintan51098@gmail.com',
    hobbies: ['reading', 'coding', 'gaming'],
    address: {
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India'
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greetTwo: () => {
        console.log(`Hello, my name is ${this.name}. age is ${this.age}`);  
    }
};
// Accessing properties
// console.log(jsUser.name); // 'chintan'
// console.log(jsUser['age']); // 26
// console.log(jsUser.hobbies[0]); // 'reading'
// console.log(jsUser.address.city); // 'Ahmedabad'
// console.log(jsUser['email']); // 'patelchintan51098@gmail.com'  
// console.log(jsUser['full Name']); // 'Chintan Patel'
// console.log(jsUser[mySym]); // 'myKey1' - Accessing the symbol property
// Calling a method
console.log(jsUser.greet()); // 'Hello, my name is chintan'
console.log(jsUser.greetTwo()); // 'Hello, my name is chintan. age is 26'


// jsUser.email = 'chinta.patel@gmail.com'; // Updating the email property
// console.log(jsUser.email); 
// Object.freeze(jsUser); // Freezing the object to prevent further modifications
// // jsUser.age = 30; // This will not work, as the object is frozen
// console.log(jsUser.age); // 26 - The age property remains unchanged
// // Adding a new property
// jsUser.phone = '123-456-7890'; // This will not work, as the object is frozen
// console.log(jsUser.phone); // undefined - The phone property is not added
// // Deleting a property
// delete jsUser.isStudent; // This will not work, as the object is frozen
// console.log(jsUser.isStudent); // false - The isStudent property remains unchanged
// // Checking if a property exists
// console.log('name' in jsUser); // true - The name property exists
