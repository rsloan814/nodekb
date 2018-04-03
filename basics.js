////////////////////////
// Logging to console
////////////////////////

///////////////////////////////////////////////////
// Lecture 6
console.log('\n---- Lecture 6 - Console Log Funcs ----\n');
console.log('Hello');
console.log(123);
console.log(true);
var greeting = 'Welcome...'
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({apple:1, bird:2, cat:3});
console.table({a:1,b:2,c:3});

console.error('This is not an error!');
console.clear();
console.warn('This a warning');

// console.time('Loop');
//   for(var i = 0; i < 100; i++){
//     console.log(i);
//   }
// console.timeEnd('Loop');
console.time('Loop');
  var i = 0;
  while(i < 10){
    console.log(i);
    i++;
  }
console.timeEnd('Loop');

// Object w/ const
const person = {
  name: 'Ryan',
  age: 36
}
console.log(person);
person.name = 'Jamie';
person.age = 34;
console.log(person);

// Array w/ const
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);

///////////////////////////////////////////////////
// Lecture 7
console.log('\n ---- Lecture 7 - Prim/Ref Types ----\n');

// PRIMITIVE TYPES
console.log('\n- PRIMITIVE TYPES typeof');

const name = 'John Doe';
console.log(typeof name);
const age = 35;
console.log(typeof age);
const hasKids = false;
console.log(typeof hasKids);
const car = null;
console.log(typeof car);
let transgender;
console.log(typeof transgender);

// REFERENCE TYPES - Objects
console.log('\n- REFERENCE TYPES typeof');
// Array
const hobbies = ['motocross', 'gaming'];
console.log(typeof hobbies);
// Object literal
const address = {
  address: '123 Main St',
  city: 'San Diego',
  state: 'CA'
}
console.log(typeof address);
// Date
const today = new Date();
console.log(today);
console.log(typeof today);

///////////////////////////////////////////////////
// Lecture 8
console.log('\n ---- Lecture 8 - Type Conversion ----\n');

let val;

// Number to string
val = 5;
val = String(5);
val = String(4+10);
// Bool to string
val = String(true);
// Date to string
val = String(new Date);
// Array to string
val = String([1,2,3,4]);

// toString()
val = (123).toString();
val = (true).toString();

// String to number
val = '5'; // error when run through .toFixed()
val = Number('5'); // ok
// Bool/null to number
val = Number(true);
val = Number(false);
val = Number(null);
// String with letters
val = Number('hello'); // NaN
// Array
val = Number([1,2,3]); // NaN

// Parse
val = parseInt('100.30');
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length); // strings only
console.log(val.toFixed(2)); // numbers [can mod values with params.  decimal->(2)]

console.log('\n- Type Coercion');

// Type coercion 
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

///////////////////////////////////////////////////
// Lecture 9
console.log('\n ---- Lecture 9 - Math Operators ----\n');

const num1 = 100;
const num2 = 40;

// Simple math with number
console.log('- Simple math with number');
let simpleMath;

simpleMath = num1 + num2;
simpleMath = num1 - num2;
simpleMath = num1 * num2;
simpleMath = num1 / num2;
simpleMath = num1 % num2
console.log(simpleMath);

console.log('\n- Math Objects');
let objectMath;
 
objectMath = Math.PI;
objectMath = Math.E;
objectMath = Math.round(2.4);
objectMath = Math.ceil(2.4);
objectMath = Math.floor(2.7);
objectMath = Math.sqrt(1024);
objectMath = Math.pow(16, 3); //(root, power)
objectMath = Math.cos(1/2);
objectMath = Math.abs(-5);
objectMath = Math.min(43,32,61,26,75,25);
objectMath = Math.max(43,32,61,26,75,25);
objectMath = Math.random();

objectMath = Math.floor(Math.random() * 100 + 1);
console.log(objectMath);

///////////////////////////////////////////////////
// Lecture 9
console.log('\n ---- Lecture 10 - String methods/concats ----\n');

const firstName = 'James';
const lastName = 'William';
const age1 = 36;
const str = 'Hello there, my name is Ryan.';
const tags = 'JavaScript,PHP,MongoDB,MySQL,C++';

// Concatenation
console.log('- Concatenation');
let concatVal;

concatVal = firstName + lastName;
concatVal = firstName + ' ' + lastName;
concatVal = 'Hi, my name is ' + firstName + ' and I am ' + age1;
console.log(concatVal);

// Append
console.log('\n- Append');
let appendVal = 'Ryan ';
appendVal += 'Sloan';
console.log(appendVal);

// Escaping
console.log('\n- Escaping');
let escapeVal = 'That\'s awesome, I can\'t wait!';
console.log(escapeVal);

// String properties and methods
console.log('\n- String properties and methods');
// Length
let string1 = firstName.length;

// concat
string1 = firstName.concat(' ', lastName);

// Case change
string1 = firstName.toUpperCase();
string1 = firstName.toLocaleLowerCase();

// string as ro array
string1 = firstName[0];

// indexOf
string1 = lastName.indexOf('l');
string1 = lastName.lastIndexOf('a');

// charAt
string1 = lastName.charAt(1);
// get last char
string1 = lastName.charAt(lastName.length - 1);

// substring
string1 = firstName.substr(1, 3);

// slice
string1 = firstName.slice(0, 4);
string1 = firstName.slice(-3);

// Split
string1 = str.split(' ');
string1 = tags.split(',');

// replace
string1 = str.replace('Ryan', 'Bob');

// includes
string1 = str.includes('Hell');
console.log(string1);





