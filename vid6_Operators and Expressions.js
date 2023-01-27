//  Operators in Js

console.log("Operators in Js");

let a = 45;
let b = 4;

console.log("a + b =", a + b); //Addition
console.log("a - b =", a - b); //Subtraction
console.log("a / b =", a / b); //Division
console.log("a * b =", a * b); //Multiplication
console.log("a ** b =", a ** b); // means a to the power b so here it becomes 45*45*45*45 (because a**b)
console.log("a % b =", a % b); //shows remainder
console.log("a++ =", a++);
console.log("a-- =", a--);
console.log("--a =", --a);
console.log("a =", a);
console.log("a++ =", a++);

//Assignment operators

let assignment = 1;
assignment += 5; //same assignment as assignment = assignment + 5
console.log(assignment);

assignment -= 5; //same assignment as assignment = assignment - 5
console.log(assignment);

assignment *= 5; //same assignment as assignment = assignment * 5
console.log(assignment);

assignment /= 5; //same assignment as assignment = assignment / 5
console.log(assignment);

//Comparison Operators

let comp1 = 6;
let comp2 = "6";
let comp3 = 7;

console.log("comp1 == comp2 is", comp1 == comp2); // checks only value
console.log("comp1 != comp2 is", comp1 != comp2);
console.log("comp1 === comp2 is", comp1 === comp2); //Result would be false because === checks value and its type as well.
console.log("comp1 !== comp2 is", comp1 !== comp2); //checks both value and its type
console.log("comp1 > comp2 is", comp1 > comp3);

//Logical Operators
let x = 5;
let y = 6;

console.log(x < y && x == 5);
console.log(x > y || x == 5);
console.log(!false);
console.log(!true);

// there is also bitwise operators we will learn about it in future
