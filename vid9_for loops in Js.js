console.log("vid9_For loop in Js"); /*

//=========Types of Loops==========
//1. For loop      2.For in loop       3.For of loop
//4.While loop     5.Do while loop

//1. ===For Loop===

/*
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

for (let i = 0; i < n; i++) {
  sum += i + 1;
  //console.log((i+1), "+")
}

console.log("sum of first " + n + " natural number is " + sum);
*/

/*
//Practice
let num = 10;
//let num2 = i + num;
for (let i = 1; i < num; i++) {
  console.log(i + num);
}

*/

// For in Loop --- is a variant of for loop
// For in loop is modern loop.  You use it when you only need keys

let obj = {
  ritika: 25,
  Shivansh: 63,
  Naina: 55,
  rutuja: 90,
  krish: 75,
};
for (let a in obj) {
  console.log("marks of " + a + " are " + obj[a]);
} // Here a is where you call the keys and obj[a] shows the value in it.. so you get the list with keys and value..
//answer eg :  marks of ritika are 25
//                  ...
//                 ...
//                 ...
//                 ...
//       ...

//For in loops also work with arrays.. Which we will discuss later...

//For of Loop ---
//works with iterable.. So it works with arrays or strings... We use for of loops to show only values
for (let b of "Harry") {
  console.log(b);
}

//i in loop .. since you used let i (i's value)it only applies in the block.. so if you write
// console.log(i) outside the very block error shows undefined
