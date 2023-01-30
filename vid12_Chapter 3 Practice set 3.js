let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  rishi: 40,
};

//Problem 1.
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

//Problem 2.

for (let key in marks) {
  // console.log(key);             shows the list of keys in marks object
  //console.log(marks[key]);        shows the list of key values (only values) of marks object

  console.log("The marks of " + key + " are " + marks[key]);
  //console.log( "The marks of " + Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]]        // the old way to write this code with this result without for in loop
}

//Problem 3.

let cn = 43;
let i;
while (i != cn) {
  console.log("try again");
  i = prompt("Enter a number");
}
console.log("you have entered a correct number");

//Problem 4.

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(4, 5, 6, 7));
