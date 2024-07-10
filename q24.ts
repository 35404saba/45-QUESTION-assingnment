//=24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal  to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// • Tests for equality and inequality with strings
const str1: string = "hello";
const str2: string = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
// • Tests using the lower case function
const text1: string = "hello world";
const text2: string = "hello world";
console.log(text1.toLowerCase() === text2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
const num1: number = 10;
const num2: number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// • Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// • Test whether an item is in a array
const Fruits: string[] = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
console.log(Fruits.includes("Apple"));

// • Test whether an item is not in a array
const fruits: string[] = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
console.log(Fruits.includes("apple"));
