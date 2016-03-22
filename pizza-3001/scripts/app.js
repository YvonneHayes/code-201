var exports = {}; // Dummy declaration to let this file co-exist with test.js

var pAddFiveIn  = document.getElementById('pAddFiveIn');
var pAddFiveOut = document.getElementById('pAddFiveOut');

var arg = 10;

document.addEventListener('DOMContentLoaded', function() {
  pAddFiveIn.textContent = 'Calling addFive() with an argument of ' + arg;
  pAddFiveOut.textContent = 'addFive() returned ' + addFive(arg);
});
