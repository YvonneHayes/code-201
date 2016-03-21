var assert = require('assert');
var compute = require('../scripts/compute.js');

describe('Problem 1: Sum of two numbers', function() {
  it('should add 1 and 6 to get 7', function() {
    assert(7 == compute.sum(1, 6));
  });

  it('should add 10 and 78 not get 68', function() {
    assert(68 != compute.sum(10, 78));
  });
});
