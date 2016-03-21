var assert = require('assert');
var compute = require('../scripts/compute.js');

describe('Problem 1: sum of two numbers', function() {
  it('should add 1, 6 and equal 7', function() {
    assert(7 == compute.addNum(1, 6));
  });

  it('should add 10, 78 and not equal 68', function() {
    assert(68 != compute.addNum(10, 78));
  });
});

describe('Problem 2: product of two numbers', function () {
  it('should multiply 2, 9 and equal 18', function () {
    assert(18 == compute.multiplyNum(2, 9));
  });

  it('should multiply 7, 4 and not equal 21', function () {
    assert(21 != compute.multiplyNum(7, 4));
  });
});

describe('Problem 3: sum and product of three numbers', function () {
  var result = compute.sumAndMultiply(1, 2, 3);

  it('should add 1, 2, 3 and equal 6', function () {
    assert(6 == result[0]);
  });

  it('should add 1, 2, 3 and not equal 9', function () {
    assert(9 != result[0]);
  });

  it('should multiply 1, 2, 3 and equal 6', function () {
    assert(6 == result[1]);
  });

  it('should multiply 1, 2, 3 and not equal 12', function () {
    assert(12 != result[1]);
  });
});

describe('Problem 4: sum of an array', function () {
  it('should add 1, 2, 3 and equal 6', function () {
    assert(6 == compute.sumArray([1, 2, 3]));
  });

  it('should add 3, 4, 5 and not equal 9', function () {
    assert(2 != compute.sumArray([3, 4, 5]));
  });
});

describe('Problem 5: product of an array', function () {
  it('should add 5, 6, 7 and equal 210', function () {
    assert(210 == compute.multiplyArray([5, 6, 7]));
  });

  it('should add 7, 8, 9 and not equal 502', function () {
    assert(502 != compute.multiplyArray([7, 8, 9]));
  });
});
