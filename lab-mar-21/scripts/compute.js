/*! compute.js */

// Problem 1
function sum(num1, num2) {
  var result = num1 + num2;

  // console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + result + '.');

  return result;
}

exports.sum = sum;

// Problem 2
function multiply(num1, num2) {
  var result = num1 * num2;

  // console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + result + '.');

  return result;
}

exports.multiply = multiply;

// Problem 3
function sumAndMultiply(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sum + '.');

  var product = num1 * num2 * num3;
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.');

  return [sum, product];
}

exports.sumAndMultiply = sumAndMultiply;
