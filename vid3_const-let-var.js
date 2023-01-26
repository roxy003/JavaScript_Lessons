console.log("Difference between var, let, const");

//var a = 45;
//var a="p";
/*
var is globally scoped. var can be updated and redeclared. So it create bugs sometimes. 
Nowadays you don't use var... 
*/

let b = "harry";
//console.log(b);
b = 65;
console.log(b);
/*
let is block scoped. let can be updated but cannot be redeclared.
eg: let a = 65;
let a ="harry"; //this is wrong you are redeclaring the identifier.
a= "harry"; //Instead you can write like this. Here you are trying to update the value of identifier.

*/

const author = "harry";
//author = 5; //throws an error because constant cannot be changed.
const harry = 5; //you always need to initialize (add = <value>) const during declaration.

/*  
const cannot be changed(updated) or redeclare throughout the code.
const must be initialized during declaration.   eg: const b   ;     ----you cannot leave the value blank...    
(var and let can be left undeclared.)    
*/

let c = null;
let d = undefined;
{
  let c = "this";
  console.log(c);
}
console.log(c);
