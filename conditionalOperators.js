// 100 Days Of Coding Challenge!

/* Day-57 Task: Read the following Articles and Code along with it:

Comparisons in JavaScript https://javascript.info/comparison

Conditional Operators: if, (? Ternary Operator) in JavaScript https://javascript.info/ifelse */

//-----------------------------------------------------------------------------------------------

// Conditional Operators: if, (? Ternary Operator) in JavaScript

/*The "if" statement:
Executes a block of code if a specified condition is true.
Example:*/

let age1 = 18;
if (age1 >= 18) {
  console.log("You are an adult.");
}

//------------------------------------------------------------------------------------------------

/*Boolean conversion:
Non-boolean values can be converted to boolean using Boolean() or !!.
Example:*/

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

//------------------------------------------------------------------------------------------------

/*The “else” clause:
Executes a block of code if the condition in the if statement is false.
Example:*/

let age2 = 16;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//------------------------------------------------------------------------------------------------

/*Several conditions: “else if”:
Allows multiple conditions to be checked in sequence.
Example:*/

let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

//------------------------------------------------------------------------------------------------

// Exercises:

/*Conditional operator ‘?’:
A shorthand for if...else statements.
Example:*/

let age3 = 20;
let message1 = age3 >= 18 ? "Adult" : "Minor";
console.log(message1); // Adult

//------------------------------------------------------------------------------------------------

/*Multiple ‘?’:
Can be used for nested conditions.
Example:*/

let age4 = 20;
let message2 =
  age4 < 3 ? "Baby" : age4 < 18 ? "Child" : age4 < 100 ? "Adult" : "Senior";
console.log(message2); // Adult

//------------------------------------------------------------------------------------------------

/*Non-traditional use of ‘?’:
Can be used for assignments and function calls.
Example:*/

let isMember = true;
let fee = isMember ? "$2.00" : "$10.00";
console.log(fee); // $2.00

//------------------------------------------------------------------------------------------------
