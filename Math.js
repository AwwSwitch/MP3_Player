// Math = Built in object useful for arithmetics 

console.log(Math.PI);
console.log(Math.E);

// seems quite no brainer
let x = 3
let y = 2
let z = 1
//z = Math.round(x);
//z Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log(min);

// random number generator example of Math implementation
const min = 50;
const max = 100;

//let randomNum = Math.random; // between 1 to 0 ratio hmmm
let randomNum = Math.floor(Math.random() * max) + min;

console.log(randomNum);