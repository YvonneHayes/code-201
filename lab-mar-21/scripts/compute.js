/*! compute.js */

// Problem 1
function sum(num1, num2) {
  var result = num1 + num2;

  console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + result + '.');

  return result;
}

exports.sum = sum;

// Problem 2
function multiply(num1, num2) {
  var result = num1 * num2;

  console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + result + '.');

  return result;
}

exports.multiply = multiply;
