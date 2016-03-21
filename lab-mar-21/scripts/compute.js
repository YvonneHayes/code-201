/*! compute.js */

// Problem 1
function addNum(num1, num2) {
  var sum = num1 + num2;

  // console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum + '.');

  return sum;
}

exports.addNum = addNum;

// Problem 2
function multiplyNum(num1, num2) {
  var product = num1 * num2;

  // console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + product + '.');

  return product;
}

exports.multiplyNum = multiplyNum;

// Problem 3
function sumAndMultiply(num1, num2, num3) {
  var sum = addNum(addNum(num1, num2), num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sum + '.');

  var product = multiplyNum(multiplyNum(num1, num2), num3);
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.');

  return [sum, product];
}

exports.sumAndMultiply = sumAndMultiply;

// Problem 4
function sumArray(arr) {
  // console.table(arr);

  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(arr.join(', ') + ' was passed in as an array of numbers, and ' + sum + ' is their sum.');

  return sum;
}

exports.sumArray = sumArray;

// Problem 5
function multiplyArray(arr) {
  // console.table(arr);

  var product = 1;

  for (i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  console.log('The numbers ' + arr.join(', ') + ' have a product of ' + product + '.');

  return product;
}

exports.multiplyArray = multiplyArray;
