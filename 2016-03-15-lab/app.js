/*
 * Question 1
 **/

// Function to create a prompt for user, lowercase answer, remove "x =" in answer
function createPrompt(question) {
    return prompt(question).toLowerCase().replace('X = ', '');
}

var questionsDiv = '';

// Declare variable for points
var points = 0;

// Declare variable for for order of operations question
var question1 = 'What is one of the order of operations?';
console.log(question1);

var el1 = document.createElement('p');
el1.textContent = question1;
el1.

// Declare variable for user's order of operations response, uppercase answer
var response1 = createPrompt(question1).toUpperCase();

// Declare variable for order of operations reply to user (user's answer isn't BODMAS or PEMDAS)
var reply1 = 'Sorry, ' + response1 + ' is not one of the order of operations.';

// User answer is BODMAS or PEMDAS
if (response1 == 'BODMAS' || response1 == 'PEMDAS') {
    // Assign new reply
    reply1 = 'Yes, ' + response1 + ' is one of the order of operations!';

    // Add one to points variable
    points++;
}

// Alert order of operations response to user
console.log(reply1);
alert(reply1);

/*
 * Question 2
 **/
var question2 = 'Solve 21 + x = 37';
console.log(question2);

var response2 = createPrompt(question2);

var reply2 = 'Nope, x does not equal ' + response2;

if (response2 == '16') {
    reply2 = 'Yup, x equals ' + response2;

    points++;
}

console.log(reply2);
alert(reply2);

/*
 * Question 3
 **/
var question3 = 'Solve x - 9 = 72';
console.log(question3);

var response3 = createPrompt(question3);

var reply3 = 'No, x does not equal ' + response3;

if (response3 == '11') {
    reply3 = 'Correct, x equals ' + response3;

    points++;
}

console.log(reply3);
alert(reply3);

/*
 * Question 4
 **/
var question4 = 'Solve 2x + 7 = 15';
console.log(question4);

var response4 = createPrompt(question4);

var reply4 = 'Nah, x does not equal ' + response4;

if (response4 == '4') {
    reply4 = 'Yup, x equals ' + response4;

    points++;
}

console.log(reply4);
alert(reply4);

/*
 * Question 5
 **/
var question5 = 'Solve x/5 + 3 = 8';
console.log(question5);

var response5 = createPrompt(question5);

var reply5 = 'No, x does not equal ' + response5;

if (response5 == '25') {
    reply5 = 'Yes, x equals ' + response5;

    points++;
}

console.log(reply5);
alert(reply5);

 /*
  * Question 6
  **/
var question6 = 'What is the value of 8 x 3 - 21 / 7 - 6?';
console.log(question6);

var response6 = createPrompt(question6);

var reply6 = 'Nope, the value isn\'t ' + response6;

if (response6 == '15') {
    reply6 = 'Yup, the value is ' + response6;

    points++;
}

console.log(reply6);
alert(reply6);

alert();
