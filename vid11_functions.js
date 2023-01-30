/*
Why we use functions?
  There will be times when you need to repeat a certain logical several/many times
  so we make a fuction of that logic. 
*/

const hello = () => {
  console.log("Hey how are you? I am toh fine");
  return;
};

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2; //return Math.round(1+ (x+y)/2) gives the round about result.. like you rounding out the result(integer)
}

const sum = (p, q) => {
  //arrow function
  return p + q;
};

let a = 1;
let b = 2;
let c = 3;
let v = hello();

console.log(v);
console.log("One plus Average of a and b is", onePlusAvg(a, b));
console.log("One plus Average of b and c is", onePlusAvg(b, c));
console.log("One plus Average of a and c is", onePlusAvg(a, c));
console.log(sum(9, 7));

//Functions are used to seperate the logic..
