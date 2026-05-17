// type conversion = change the datatype of a value to another
// (string, number, boolean)

// given the following block of code
//let age = window.prompt("How old are you ?");
//console.log(typeof(age));
//age = Number(age);
//age += 1;
//console.log(age, typeof age);

// if inout is 2, answer is 21 which is wrong, due to input being in string

let a = "pizza";
let b = "pizza";
let c = "pizza";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);