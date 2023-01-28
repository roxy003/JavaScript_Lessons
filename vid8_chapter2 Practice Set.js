console.log("Chapter 2 Prctice Set");

//1.
/*
let age = prompt("What is your age");
age = Number(parseInt)

if (age >= 10 && age <= 20) {
  console.log("your age lies between 10 and 20");
} else {
  console.log("your age doesn't lie between 10 and 20");
}
*/

//2.
/*
let age = prompt("What is your age");

switch (age) {
  case "12":
    console.log("your age is 12");
    break;
  case "13":
    console.log("your age is 13");
    break;
  case "14":
    console.log("your age is 14");
  case "15":
    console.log("your age is 15");
    break;
  default:
    console.log("your age is not special");
}

*/

//3.
/*
let number1 = prompt("Enter any number ");
//number1=Number(parseInt)

if (number1 % 2 == 0 && number1 % 3 == 0) {
  console.log("This number can be divided by 2 and 3");
} else {
  console.log("This number cannot be divided by 2 and 3");
}
*/

//4.
/*
let number2 = prompt("Enter any number ");
number2 = Number(parseInt);

if (number2 % 2 == 0 || number2 % 3 == 0) {
  console.log("This number can be divided by 2 or 3");
} else {
  console.log("This number cannot be divided by 2 or 3");
}

*/

//5.
/*===Find an answer to why this does not work.. where is the error
let urage = prompt("Type ur age");
urage = Number(parseInt);

console.log(urage > 18 ? "drive" : "not drive");
*/
let urage = 19;
let a = urage > 18 ? "you can drive" : "you cannot drive";
console.log(a);
