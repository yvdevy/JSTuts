let sum=(a,b)=>a+b;
console.log(sum(7,11));
console.log("hiii");

// dynamically create a function start
let age =  18;

let welcome = (age < 18) ? () => console.log('Hello') : () => console.log("Greetings!");

welcome();

// dynamically create a function end
