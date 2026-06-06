
// Create a new Date object
// How to pass data
// Date(year, month, day, hours, minutes, seconds, milliseconds)
const date = new Date(2024, 0, 1, 2, 3, 4, 5);
const date1 = new Date("2024-01-01T02:03:04.005Z");

/* 
    2024-01-01 = January 1, 2024
    T = separator between date and time
    02:03:04.005 = 02 hours, 03 minutes, 04 seconds, and 005 milliseconds
    Z = Zulu time, i.e. UTC timezone

*/


// Get the current date and time
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const dayoftheweek = date.getDay();

console.log(`Year: ${year}, Month: ${month}`);
console.log(`Day of the week: ${dayoftheweek}`); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday