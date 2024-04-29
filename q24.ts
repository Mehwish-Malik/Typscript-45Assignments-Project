let cat = "cat";
let upperCase = "CAT";
let num1 = 5;
let num2 = 10;
let reFreshment = ["Chocolate" ,"Cakes"];
// Tests for equality and inequality with strings
console.log("Is cat is equal to cat?");
console.log(cat == "cat");
console.log("Is cat is not equal to cat?");
console.log(cat != "cat");
// Tests using the lower case function
console.log("Is CAT is equal to cat after converting to lowercase?");
console.log(upperCase.toLowerCase() == "cat");

console.log("Is CaT is not equal to cat after converting to lowercase?"); 
console.log(upperCase.toLowerCase() != "cat");
// Numerical tests
// Equality and Inequality
console.log("Is num1 is equal to num2?");
console.log(num1 == num2);
console.log("Is num1 is not equal to num2?");
console.log(num1 != num2);
// Greater than and Less than
console.log("Is five is greater than 2?");
console.log(num1 > 2);
console.log("Is ten is greater than Twenty?");
console.log(num2 > 20);
console.log("Is five is less than 8?");
console.log(num1 < 8);
console.log("Is ten is less than 5?");
console.log(num2 < 5);
// Greater than or equal to
console.log("Is five is greater than or equal to four?");
console.log(num1 >= 4);
console.log("Is ten is greater than or equal to five?");
console.log(num2 >= 5);
console.log("Is five is greater than  or equal to ten?");
console.log(num1 >= 10 );
console.log("Is ten is greater than or eequal to twenty?");
console.log(num2 >= 20);

// Less than or equal to
console.log("Is five is less than or equal to four?");
console.log(num1 >= 4);
console.log("Is ten is less than or equal to five?");
console.log(num2 >= 5);
console.log("Is five is less than  or equal to ten?");
console.log(num1 >= 10 );
console.log("Is ten is less than or eequal to twenty?");
console.log(num2 >= 20);

//Tests using "and" && operator
console.log("Is five is not equal to 10 and five is greater than ten?");
console.log(num1 != 10 && num1 > 10);
console.log("Is five is equal to five and five is less than four?");
console.log(num1 == 5 && num1 > 4);
console.log("Is ten is equal to ten and ten is greater than five?");
console.log(num2 == 10 && num2 > 5);
console.log("Is ten is not equal to 20 and ten is greater than twenty?");
console.log(num2 != 20 && num2 > 20);
//  using OR || operator
console.log("Is five is equal to ten or five is less than ten?");
console.log(num1 == 10 || num1 < 10);
console.log("Is ten is equal to five or ten  is greater than five?");
console.log(num2 == 5 || num2 > 5);
console.log("Is five is equal to ten or five is greater than ten? ");
console.log(num1 == 10 || num1 > 10);
console.log("Is ten is equal to five or ten  is less than five?");
console.log(num2 == 5 || num2 < 5);

// Test  an item is in a array
console.log("Is Chocolate is included in my refreshment array?");
console.log(reFreshment.includes("Chocolate"));
console.log("Is cakes is included in my refreshment array?");
console.log(reFreshment.includes("Cakes"));

// not included
console.log("Is Chocolate is not included in my refreshment array?");
console.log(!reFreshment.includes("Chocolate"));
console.log("Is Cakes is not included in my refreshment array?");
console.log(!reFreshment.includes("Cakes"));



































