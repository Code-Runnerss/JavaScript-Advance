// functions are reusable blocks of code that perform a specific task

// function sayMyname(){
//     console.log('hello');
//     console.log('Chinatan Patel');
// }
// // sayMyname
// sayMyname(); // calling the function

// function addToNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// function addToNumbers(num1, num2){
//     // let result = num1 + num2; // calculate the sum of the two numbers
//     console.log('This will be executed'); // this line will be executed before the return statement
//     // return result; // return the sum
//     return num1 + num2; // return the sum directly
//     console.log('This will not be executed'); // this line will not be executed because the function returns before it
// }

// const result = addToNumbers(10, 20); // calling the function with arguments
// console.log('result:', result); // 30

// function logineMassage(username = 'User Demo'){ // default parameter value
//     // if(username == undefined){
//     //       console.log('please provide a username');
//     //     return;
//     // }
//     if(!username){ // check if username is not provided
//         console.log('please provide a username');
//         return;
//     }
//     return `Welcome ${username}, you have successfully logged in!`;
// }

// logineMassage('Chinatan Patel'); // calling the function with an argument
// console.log(logineMassage()); // calling the function without an argument, which will result in 
// "Welcome undefined, you have successfully logged in!"
// console.log(logineMassage('Chinatan Patel')); // calling the function with an argument and logging the result

// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300,400)); // calling the function with an argument and logging the result

// const user ={
//     username : 'Chinatan Patel',
//     price : 100,
// }

// function handleObject(anyObject){
//     console.log(`usrname is ${anyObject.username} , price is ${anyObject.price}`);
// }
// // handleObject(user);

// handleObject({
//     username : 'Chinatan',
//     price : 300,
// });

// const myNewArray = [200,400,100,600]

// function returnSecoundValue(getArray){
//     return getArray[1]; // return the second value of the array
// }

// console.log(returnSecoundValue(myNewArray)); // calling the function with an array and logging the result
// console.log(returnSecoundValue([100,200,300,400])); // calling the function with an array and logging the result
