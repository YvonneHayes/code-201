/*! compute.js */

// Problem 1
function sum(num1, num2) {
  var sumResult = num1 + num2;

  // console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sumResult + '.');

  return sumResult;
}

exports.sum = sum;

// Problem 2
function multiply(num1, num2) {
  var multiplyResult = num1 * num2;

  // console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + multiplyResult + '.');

  return multiplyResult;
}

exports.multiply = multiply;

// Problem 3
function sumAndMultiply(num1, num2, num3) {
  var sumResult = sum(sum(num1, num2), num3);
  // console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sumResult + '.');

  var multiplyResult = multiply(multiply(num1, num2), num3);
  // console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiplyResult + '.');

  return [sumResult, multiplyResult];
}

exports.sumAndMultiply = sumAndMultiply;

// Problem 4
function sumArray(arr) {
  // console.table(arr);

  var sumResult = 0;

  for (var i = 0; i < arr.length; i++) {
    sumResult += arr[i];
  }

  // console.log(arr.join(', ') + ' was passed in as an array of numbers, and ' + sumResult + ' is their sum.');

  return sumResult;
}

exports.sumArray = sumArray;

// Problem 5
function multiplyArray(arr) {
  // console.table(arr);

  var multiplyResult = 1;

  for (var i = 0; i < arr.length; i++) {
    multiplyResult *= arr[i];
  }

  // console.log('The numbers ' + arr.join(', ') + ' have a product of ' + multiplyResult + '.');

  return multiplyResult;
}

exports.multiplyArray = multiplyArray;
