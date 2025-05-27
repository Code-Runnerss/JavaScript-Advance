const marvel_heroes = [ "ironman", "hulk", "thor", "captain america", "black widow" ];
const dc_heroes = [ "superman", "batman","flash", "wonder", "aquaman" ];

// marvel_heroes.push(dc_heroes); // This will not work as expected, it will add the entire dc_heroes array as a single element
// console.log(marvel_heroes); // ["ironman", "hulk", "thor", "captain america", "black widow", Array(5)]

// Instead, we want to add the elements of dc_heroes to marvel_heroes individually
const  allHeros = marvel_heroes.concat(dc_heroes); // This will not modify marvel_heroes, it returns a new array
console.log(allHeros); // ["ironman", "hulk", "thor", "captain america", "black widow", "superman", "batman", "flash", "wonder", "aquaman"]


// To add the elements of dc_heroes to marvel_heroes, we can use the spread operator
// marvel_heroes.push(...dc_heroes); // This will spread the elements of dc_heroes into marvel_heroes
// console.log(marvel_heroes); // ["ironman", "hulk", "thor", "captain america", "black widow", "superman", "batman", "flash", "wonder", "aquaman"]

// We can also use the spread operator to create a new array with elements from both arrays
const newHeroes = [...marvel_heroes, ...dc_heroes]; // This creates a new array with elements from both arrays
console.log(newHeroes); // ["ironman", "hulk", "thor", "captain america", "black widow", "superman", "batman", "flash", "wonder", "aquaman"]
// The original arrays remain unchanged
console.log(marvel_heroes); // ["ironman", "hulk", "thor", "captain america", "black widow"]
console.log(dc_heroes); // ["superman", "batman", "flash", "wonder", "aquaman"]
// We can also use the spread operator to create a new array with elements from both arrays and add a new element
const allHeroesWithNew = [...marvel_heroes, ...dc_heroes, "spiderman"]; // This creates a new array with elements from both arrays and adds "spiderman"
console.log(allHeroesWithNew); // ["ironman", "hulk", "thor", "captain america", "black widow", "superman", "batman", "flash", "wonder", "aquaman", "spiderman"]
// The original arrays remain unchanged
console.log(marvel_heroes); // ["ironman", "hulk", "thor", "captain america", "black widow"]
console.log(dc_heroes); // ["superman", "batman", "flash", "wonder", "aquaman"]

const another_array =[1, 2, 3, 4,[ 1, 2, 3], 5, 6, 7, 8, 9, [10, 11, 12, 13, 14, 15,[ 16, 17, 18]]]; // This is a nested array

// const real_another_array = another_array.flat(2); // This will flatten the array to a depth of 2
const real_another_array = another_array.flat(Infinity); // This will flatten the array to a depth of Infinity, which means it will flatten all nested arrays
console.log(real_another_array); // [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
// The original array remains unchanged

Array.isArray(real_another_array); // This will return true, as real_another_array is an array
console.log(Array.isArray(real_another_array)); // true
Array.isArray('chintan'); // This will return false, as 'chintan' is not an array
console.log(Array.isArray('chintan')); // false
console.log(Array.from('chintan')); // This will convert the string 'chintan' into an array of characters // ['c', 'h', 'i', 'n', 't', 'a', 'n']
console.log(Array.from({name:'chintan', age: 26})); // This will convert the object into an array of key-value pairs // [['name', 'chintan'], ['age', 30]]

let scores = 100;
let scores2 = 200;
let scores3 = 300;

console.log(Array.of(scores, scores2, scores3)); // This will create an array with the elements 100, 200, 300   