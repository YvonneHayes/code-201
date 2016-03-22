/*! app.js */

var exports = {};

var problems = [
  {
    functionName: 'sum',
    functionParameters: [1, 6],
    question: 'Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.'
  },
  {
    functionName: 'multiply',
    functionParameters: [2, 9],
    question: 'Write a function called multiply() that takes in two numbers as arguments and then returns the product of those numbers.'
  },
  {
    functionName: 'sumAndMultiply',
    functionParameters: [1, 2, 3],
    question: 'Write a function called sumAndMultiply() that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers.'
  },
  {
    functionName: 'sumArray',
    functionParameters: [3, 4, 5],
    question: 'Write a function called sumArray() that takes in an array of numbers as a single argument and then returns the sum of those numbers.'
  },
  {
    functionName: 'multiplyArray',
    functionParameters: [5, 6, 7],
    question: 'Write a function called multiplyArray() that takes in an array of numbers as a single argument and then returns the product of those numbers.'
  }
];

document.addEventListener('DOMContentLoaded', function() {
  var elMain = document.getElementsByTagName('main')[0];

  function createEl(elName, elText) {
    var el = document.createElement(elName);
    el.textContent = elText;
    elMain.appendChild(el);
  }

  function createProblem(problemNumber, question, functionName, functionParameters) {
    createEl('h2', 'Problem ' + (problemNumber + 1));
    createEl('p', question);
    createEl('pre', exports[problems[i].functionName]);

    var string1 = 'Calling ' + functionName + '() with an argument of ';
    var string2 = functionName + '() returned ';

    switch (functionName) {
      case 'sum':
        string1 += functionParameters[0] + ' and ' + functionParameters[1];
        string2 += sum(functionParameters[0], functionParameters[1]);
        break;
      case 'multiply':
        string1 += functionParameters[0] + ' and ' + functionParameters[1];
        string2 += multiply(functionParameters[0], functionParameters[2]);
        break;
      case 'sumAndMultiply':
        string1 += functionParameters[0] + ', ' + functionParameters[1] + ', and ' + functionParameters[2];
        string2 += '[' + sumAndMultiply(functionParameters[0], functionParameters[1], functionParameters[2]) + ']';
        break;
      case 'sumArray':
        string1 += '[' + functionParameters + ']';
        string2 += sumArray(functionParameters);
        break;
      case 'multiplyArray':
        string1 += '[' + functionParameters + ']';
        string2 += multiplyArray(functionParameters);
        break;
    }

    createEl('p', string1);
    createEl('p', string2);
  }

  for (i = 0; i < problems.length; i++) {
    createProblem(i, problems[i].question, problems[i].functionName, problems[i].functionParameters);
  }
});
