// 100 Days Of Coding Challenge!

/* Day-57 Task: Read the following Articles and Code along with it:

Comparisons in JavaScript https://javascript.info/comparison

Conditional Operators: if, (? Ternary Operator) in JavaScript https://javascript.info/ifelse */

//-----------------------------------------------------------------------------------------------

// Comparisons in JavaScript

/* Boolean is the result:
Comparisons in JavaScript always return a boolean value (true or false).
Example:*/

console.log(5 > 3); // true
console.log(5 < 3); // false

//-----------------------------------------------------------------------------------------------

/* String comparison:
Strings are compared based on their lexicographical order (dictionary order).
Example:*/

console.log("apple" > "banana"); // false
console.log("apple" < "banana"); // true

//-----------------------------------------------------------------------------------------------

/* Comparison of different types:
When comparing values of different types, JavaScript converts them to numbers.
Example:*/

console.log("5" > 3); // true ('5' is converted to 5)
console.log("01" == 1); // true ('01' is converted to 1)

//-----------------------------------------------------------------------------------------------

/* Strict equality:
Strict equality (===) checks both value and type.
Example:*/

console.log(5 === 5); // true
console.log(5 === "5"); // false

//-----------------------------------------------------------------------------------------------

/* Comparison with null and undefined:
null and undefined are only equal to themselves and each other.
Example:*/

console.log(null == undefined); // true
console.log(null === undefined); // false

//-----------------------------------------------------------------------------------------------

// Let’s evaluate each of these expressions:

5 > 4;
Result: true;
// Explanation: 5 is greater than 4.

"apple" > "pineapple";
Result: false;
// Explanation: String comparison is based on lexicographical order.
//“apple” comes before “pineapple” in dictionary order.

"2" > "12";
Result: true;
// Explanation: When comparing strings, JavaScript compares them character by character.
// “2” is greater than “1” (the first character of “12”).

undefined == null;
Result: true;
// Explanation: In non-strict equality (==), undefined and null are considered equal.

undefined === null;
Result: false;
// Explanation: In strict equality (===), undefined and null are different types and thus not equal.

null == "\n0\n";
Result: false;
// Explanation: null is only loosely equal to undefined and not to any other value.

null === +"\n0\n";
Result: false;
// Explanation: +"\n0\n" converts to 0 (a number), and null is not strictly equal to 0.
