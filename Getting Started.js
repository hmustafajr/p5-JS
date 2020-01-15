1 + 1
// undefined functionName()
console.log(1+1);
console.log(5+10);
console.log(213 *63);
console.log(3312312312 + 3123135345321);
console.log(3312312312 + 3123135345321 - 10);
//variable is name that refers to a value
var bigNumber = 3312312312 + 3123135345321;
//var bigNumber = 234623467
console.log(bigNumber);
console.log(bigNumber - 10);
// can't use special charachters, spaces, var, for, etc
// study the Reserved Keywords
// semicolons after each statement, the code will still work but throw issue in the future
console.log(bigNumber); // var value stays the same
bigNumber = bigNumber -10 // no need to use var being that the variable is already defined
console.log(bigNumber);


//Data Types
//nsole.log(hello) // this will return an error because of no quotation marks
console.log('Hello') // this registers it as a string
console.log('12345') 
console.log('12345' +10); // math won't work
console.log('hello ' + 'world');

//Functions and how they work
function setup() {
  console.log('setup');//this is a funtion so when logged it will not return anything
  //anything inside will execute once
}

function draw() {
  console.log('draw');//runs /second ensure you stop this
  //anything inside will execute repeatedly
}
 //Note setup will always run before the draw function regardless of where it is placed

console.log('hello');
