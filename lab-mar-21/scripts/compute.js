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
function sumAndProduct(num1, num2, num3) {
  var sum = addNum(addNum(num1, num2), num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sum + '.');

  var product = multiplyNum(multiplyNum(num1, num2), num3);
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + product + '.');

  return [sum, product];
}

exports.sumAndProduct = sumAndProduct;
