console.log("Conditional Expressions  - If.. else.. else if...");

let a = prompt("Hey Whats your age"); //when you answer a prompt even if you write(answer) in number
//it normally becomes a string. To make it a number you'll learn below..

//a = Number.parseInt(a); // this is the way to Converting the string to a number

/*
if (a > 20) {
  alert("You are an adult");
}
*/

/*
if (a < 0) {
  alert("This is invalid age");
} else {
  alert("This is valid age");
}
*/

/*
if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  console.log("You are a kid and you cannot think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a big kid and you can think of driving after 18");
} else {
  alert("You can drive as you are above 18");
}    */

//Ternary Operator : is a shortcut to if else statement its answer can be yes or no.
console.log("You can ", a < 18 ? "not drive" : "drive");

//HomeWork - Explore switch statement and write a basic program
