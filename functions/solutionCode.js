/***********************/
/* Functions           */
/***********************/

// ----------------------------------------------------------------------------------------------
console.log("Exercise One");
// - Use the function to console.log the number 5 from this function.
//
// Write your code here 👇

function getNumberFive() {
  console.log(5);
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// - Complete the function named "add" which takes the two parameters, a and b, adds them
//   together and returns their sum.
// - For example, calling add(2, 4) should return a result of 6.
//
// Write your code here 👇

function add(a, b) {
  return a + b;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// - This function has one parameter, number.
//   Use a conditional (if/else) statement to complete this.
//   If the number is greater than 0, return the number
//   Otherwise, multiply the number by -1 and return it.
//
// Write your code here 👇

function absoluteValue(number) {
  if (number > 0) {
    return number;
  } else {
    return number * -1;
  }
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// - This function has two parameters, message and text.
//   Add the text to the end of the message, and then return the complete string.
//
// Write your code here 👇

function concatenate(message, text) {
  return message + text;
}

// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any unnecessary console.log()
// statements from your code (leave the tests alone).