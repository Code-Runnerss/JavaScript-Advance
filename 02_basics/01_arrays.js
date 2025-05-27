// arrays 

const myArr = [0,1, 2, 3, 4,5];
// const myHeroes = ['Batman', 'Superman', 'Wonder', 'Flash', 'Aquaman'];

// const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]); // 1

// // Array methods

// myArr.push(6); // Adds 6 to the end of the array
// console.log(myArr); // [1, 2, 3, 4, 5, 6]
// myArr.pop(); // Removes the last element (6)
// console.log(myArr); // [1, 2, 3, 4, 5]  
// myArr.unshift(0); // Adds 0 to the beginning of the array
// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// myArr.shift(); // Removes the first element (0)
// console.log(myArr); // [1, 2, 3, 4, 5]

// console.log(myArr.includes(3)); // true, checks if 3 is in the array
// console.log(myArr.indexOf(3)); // 2, returns the index of 3 in the array

// const newArr3 = myArr.join()
// console.log(myArr); // [1, 2, 3, 4, 5], original array remains unchanged
// console.log(newArr3); // "1,2,3,4,5", joins the array elements into a string
// console.log(typeof newArr3); // "string", the result is a string

//slice , splice 

console.log('A',myArr);

const myn1 = myArr.slice(1, 3); // Returns a new array with elements from index 1 to 2

console.log(myn1); // [2, 3], elements from index 1 to 2
console.log('B',myArr); // [1, 2, 3, 4, 5], original array remains unchanged

const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1 and returns them
console.log('C',myArr); // [1, 5], original array is modified
console.log(myn2); // [2, 3, 4], elements removed from the original array