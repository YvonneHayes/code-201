var assert = require('assert');
var compute = require('../scripts/compute.js');

describe('Problem 1: sum of two numbers', function() {
  it('should add 1 and 6 to get 7', function() {
    assert(7 == compute.addNum(1, 6));
  });

  it('should add 10 and 78 to not get 68', function() {
    assert(68 != compute.addNum(10, 78));
  });
});

describe('Problem 2: product of two numbers', function () {
  it('should multiply 2 and 9 to get 18', function () {
    assert(18 == compute.multiplyNum(2, 9));
  });

  it('should multiply 7 and 4 to not get 21', function () {
    assert(21 != compute.multiplyNum(7, 4));
  });
});

describe('Problem 3: sum and product of three numbers', function () {
  var result = compute.sumAndProduct(1, 2, 3);

  it('should add 1, 2, and 3 to get 6', function () {
    assert(6 == result[0]);
  });

  it('should add 1, 2, and 3 to not get 9', function () {
    assert(9 != result[0]);
  });

  it('should multiply 1, 2, and 3 to get 6', function () {
    assert(6 == result[1]);
  });

  it('should multiply 1, 2, and 3 to not get 12', function () {
    assert(12 != result[1]);
  });
});
