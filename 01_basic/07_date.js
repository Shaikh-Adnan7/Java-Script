const date = new Date();
// console.log(date); // Outputs: Current date and time
// console.log(date.toString()); // Outputs: Current date and time as a string
// console.log(date.toDateString()); // Outputs: Current date as a string
// console.log(date.toTimeString()); // Outputs: Current time as a string
// console.log(date.toISOString()); // Outputs: Current date and time in ISO format
// console.log(date.toLocaleDateString()); // Outputs: Current date in local format
// console.log(`date in local time string : ${date.toLocaleTimeString()}`); // Outputs: Current time in local format
// console.log(date.getUTCMinutes()); // Outputs: Current UTC minutes



let mydate = new Date(2002, 11 , 6);
console.log(mydate.toString().split("/"));

const stimestamp = new Date("2023-10-01T00:00:00Z").getTime();
console.log(stimestamp); // Outputs: Timestamp in milliseconds since January 1, 1970
const currentTimestamp = Date.now();
console.log(currentTimestamp); // Outputs: Current timestamp in milliseconds since January 1, 197

console.log(Math.fixed(Date.now()/1000)); // Outputs: Current timestamp in seconds since January 1, 1970 