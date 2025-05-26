// Date

let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.toString()); // String representation of the date
// console.log(myDate.toDateString()); // Date in a human-readable format
// console.log(myDate.toISOString()); // ISO format
// console.log(myDate.toLocaleString()); // Localized string representation
// console.log(myDate.toLocaleDateString()); // Localized date representation
// console.log(myDate.toLocaleTimeString()); // Localized time representation
// console.log(typeof myDate); // "object"

// let myCreateDate = new Date(2023, 0, 1); // January 1, 2023
// console.log(myCreateDate); // Date object for January 1, 2023
// console.log(myCreateDate.toDateString()); // "1"
// console.log(myCreateDate.toLocaleString()); // "1/1/2023, 12:00:00 AM"
// let myCreateDate = new Date(2023, 0, 1,5,3,0); // January 1, 2023, 05:03:00
// console.log(myCreateDate.toLocalString); // "1/1/2023, 5:03:00 AM"
// let myCreateDate = new Date("2023-01-01"); // January 1, 2023
// console.log(myCreateDate.toLocaleString()); // "1/1/2023, 12:00:00 AM"
// let myCreateDate = new Date("01-14-2023"); // January 14, 2023
// console.log(myCreateDate.toLocaleString()); // "1/14/2023, 12:00:00 AM"

// let myTimestamp = Date.now; // Current timestamp in milliseconds
// console.log(myTimestamp); // Current timestamp in milliseconds
// console.log(myCreateDate.getTime()); // Timestamp for myCreateDate

let newDate = new Date();
console.log(newDate); // Current date and time
console.log(newDate.getMonth() + 1); // Current month (0-11, where 0 is January)
console.log(newDate.getDate()); // Current day of the month (1-31)
console.log(newDate.getDay()); // Current day of the week (0-6, where 0 is Sunday)
console.log(newDate.getFullYear()); // Current year