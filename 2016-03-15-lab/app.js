/*
 * Question 1
 **/

// Function to add class to an element
function addClass(target, class_name) {
    var elTarget = document.getElementById(target);
    elTarget.className += ' ' + class_name;
}

// Function to append content to a target element
function appendContent(content, target) {
    var elTarget = document.getElementById(target);
    var elContent = document.createElement('p');
    elContent.textContent = content;
    elTarget.appendChild(elContent);
}

// Function to create a prompt for user, lowercase answer, remove "x =" in answer
function createPrompt(question) {
    // Delcare response variable
    var response = '';

    // Loop until user provides an answer, trim trailing whitespaces
    while (response == '') {
        response = prompt(question).trim();
    }

    return response;
}

// Declare variable for points
var points = 0;

// Delcare questions
var question1 = 'What is one of the order of operations?';
var question2 = 'Solve 21 + x = 37';
var question3 = 'Solve x - 9 = 2';
var question4 = 'Solve 2x + 7 = 15';
var question5 = 'Solve x/5 + 3 = 8';
var question6 = 'What is the value of 8 x 3 - 21 / 7 - 6?';

// Add questions to an element on HTML document by ID
appendContent(question1, 'question-1');
appendContent(question2, 'question-2');
appendContent(question3, 'question-3');
appendContent(question4, 'question-4');
appendContent(question5, 'question-5');
appendContent(question6, 'question-6');

// Log question to console
console.log(question1);

// Declare variable for user's response, uppercase answer
var response1 = createPrompt(question1).toUpperCase();

// Declare variable for reply to user's response (response isn't BODMAS or PEMDAS)
var reply1;

// User's response is BODMAS or PEMDAS
if (response1 == 'BODMAS' || response1 == 'PEMDAS') {
    // Assign new reply
    reply1 = 'Yes, ' + response1 + ' is one of the order of operations!';

    // Add class
    addClass('question-1', 'list__item--green');

    // Add one to points variable
    points++;
} else {
    // Assign reply variable for isn't BODMAS or PEMDAS
    reply1 = 'Sorry, ' + response1 + ' is not one of the order of operations.';

    // Add class
    addClass('question-1', 'list__item--red');
}

// Call appendContent function for showing answer
appendContent('Answer: PEMDAS or BODMAS', 'question-1');

// Alert order of operations response to user
console.log(reply1);
alert(reply1);

/*
 * Question 2
 **/
console.log(question2);

var response2 = createPrompt(question2);

var reply2;

if (response2 == 'x = 16') {
    reply2 = 'Correct, ' + response2 + '.';

    // Add class
    addClass('question-2', 'list__item--green');

    points++;
} else {
    reply2 = response2 + ' isn\'t the correct answer.';

    // Add class
    addClass('question-2', 'list__item--red');
}

appendContent('Answer: x = 16', 'question-2');

console.log(reply2);
alert(reply2);

/*
 * Question 3
 **/
console.log(question3);

var response3 = createPrompt(question3);

var reply3;

if (response3 == 'x = 11') {
    reply3 = 'Correct, ' + response3 + '.';

    // Add class
    addClass('question-3', 'list__item--green');

    points++;
} else {
    reply3 = response3 + ' isn\'t the correct answer.';

    // Add class
    addClass('question-3', 'list__item--red');
}

appendContent('Answer: x = 11', 'question-3');

console.log(reply3);
alert(reply3);

/*
 * Question 4
 **/
console.log(question4);

var response4 = createPrompt(question4, 'question-4');

var reply4 = response4 + ' isn\'t the correct answer.';

if (response4 == 'x = 4') {
    reply4 = 'Correct, ' + response4 + '.';

    // Add class
    addClass('question-4', 'list__item--green');

    points++;
} else {
    reply4 = response4 + ' isn\'t the correct answer.';

    // Add class
    addClass('question-4', 'list__item--red');
}

appendContent('Answer: x = 4', 'question-4');

console.log(reply4);
alert(reply4);

/*
 * Question 5
 **/
console.log(question5);

var response5 = createPrompt(question5);

var reply5;

if (response5 == 'x = 25') {
    reply5 = 'Correct, ' + response5 + '.';

    // Add class
    addClass('question-5', 'list__item--green');

    points++;
} else {
    reply5 = response5 + ' isn\'t the correct answer.';

    // Add class
    addClass('question-5', 'list__item--red');
}

appendContent('Answer: x = 25', 'question-5');

console.log(reply5);
alert(reply5);

/*
 * Question 6
 **/
console.log(question6);

var response6 = createPrompt(question6);

var reply6;

if (response6 == '15') {
    reply6 = 'Yup, the value is ' + response6;

    // Add class
    addClass('question-6', 'list__item--green');

    points++;
} else {
    reply6 = 'Nope, the value isn\'t ' + response6;

    // Add class
    addClass('question-6', 'list__item--red');
}

appendContent('Answer: 15', 'question-6');

console.log(reply6);
alert(reply6);

/*
 * Score
 **/
var score = 'Score: ' + points + '/6';
console.log(score);
alert(score);
appendContent(score, 'score');
