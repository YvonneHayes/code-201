var assert = require('assert');
var compute = require('../scripts/compute.js');

describe('Problem 1: sum of two numbers', function() {
  it('should add 1 and 6 to get 7', function() {
    assert(7 == compute.sum(1, 6));
  });

  it('should add 10 and 78 to not get 68', function() {
    assert(68 != compute.sum(10, 78));
  });
});

describe('Problem 2: product of two numbers', function () {
  it('should multiply 2 and 9 to get 18', function () {
    assert(18 == compute.multiply(2, 9));
  });

  it('should multiply 7 and 4 to not get 21', function () {
    assert(21 != compute.multiply(7, 4));
  });
});
