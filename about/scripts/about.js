/*! about.js */

// Declare variable to keep track of score
var score = 0;
var userName;

// Define questions, valid answers, and responses for user
// Response Types:
// 1 - Response is string replacement using {replace}
// 2 - Response is a "yes" or "no"
// 3 - Response is a number
// 4 - Response is a state
var questions = [
  {
    'question': 'Welcome! What is your name?',
    'valid_answers': [],
    'response': 'Hi, {replace}! I will asking you a couple of questions about me. Just simply answer with a yes or no.',
    'response_type': 1
  },
  {
    'question': 'Do I like to eat noodles on a boat?',
    'valid_answers': ['n', 'no'],
    'response': {
      'yes': 'No, I don\'t eat noodles on a boat! But my favorite noodles are called "boat noodles."',
      'no': 'Yes, where would I find a boat to eat noodles in Portland? Well, you can try boat noodles at Pok Pok. I think it\'s the best here in Portland.'
    },
    'response_type': 2
  },
  {
    'question': 'Am I an online shopper?',
    'valid_answers': ['y', 'yes'],
    'response': {
      'yes': 'Correct, I like to find online deals and promos.',
      'no': 'Nope, I like to shop for clothing online. More selection of the brands I like online.'
    },
    'response_type': 2
  },
  {
    'question': 'Am I good with JavaScript?',
    'valid_answers': ['n', 'no'],
    'response': {
      'yes': 'Nah, that\'s why I\'m here at Code Fellows.',
      'no': 'Yup, one of my goals is to write clean JavaScript.'
    },
    'response_type': 2
  },
  {
    'question': 'Do I have 3 years of experience as a developer?',
    'valid_answers': ['y', 'yes'],
    'response': {
      'yes': 'Cool, you did the math when you saw my experience.',
      'no': 'Nope, I do have about 3 years of experience if you take a look at my experience.'
    },
    'response_type': 2
  },
  {
    'question': 'Which year was I born?',
    'valid_answers': [1990],
    'response': {
      1990: 'Yup, I was born in 1990.'
    },
    'response_type': 3
  },
  {
    'question': 'Can you guess a state that I have traveled to for breakdance competitions besides Oregon and Washington? Use full state name, no abbreviation.',
    'valid_answers': ['arizona', 'california'],
    'response': {
      'arizona': 'Yes, I have competed in Phoenix.',
      'california': 'Yes, I have been to a couple of competions in San Diego. I was just a spectator.'
    },
    'response_type': 4
  }
];

// Declare variable for response if you user doesn't enter a valid response
var defaultResponse = 'Whoops, enter {replace} for the question.';

// Check if string is in an array
function inArray(string, array) {
  var inArray = false;

  for (i = 0; i < array.length; i++) {
    if (string === array[i]) {
      inArray = true;
      break;
    }
  }

  return inArray;
}

function appendContent(content, target) {
  // Look for an element with the provided ID
  var elTarget = document.getElementById(target);

  // Create a <p> element
  var elContent = document.createElement('p');

  // Set text for <p> element
  elContent.textContent = content;

  // Append the <p> element to the targeted element provided
  elTarget.appendChild(elContent);
}

// Function to ask a user a question
function askQuestion(questionObj) {
  var userResponse = '';
  var newResponse = ''; // Response after user answered question
  var numericResponseCount = 4;
  var keepAsking = false;

  // Loop until user respond with an answer
  while (keepAsking === false) {
    appendContent ('Question for User: ' +  questionObj.question, 'game-content' );
    userResponse = prompt(questionObj.question).trim().toLowerCase(); // Take out trailing whitespaces
    appendContent ('User Response: ' + userResponse, 'game-content' );

    switch (questionObj.response_type) {
      case 1:
        if (userResponse.length > 0) {
          userName = userResponse;
          newResponse = questionObj.response.replace('{replace}', userResponse);

          appendContent('Response to User Response: ' + newResponse, 'game-content');
          alert(newResponse);

          keepAsking = true;
        }

        break;
      case 2:
        if (userResponse === 'y' || userResponse === 'yes') {
          appendContent('Response to User Response: ' + questionObj.response.yes, 'game-content');
          alert(questionObj.response.yes);

          if (inArray(userResponse, questionObj.valid_answers) === true) {
            score++;
            appendContent('Score: ' + score, 'game-content');
          }

          keepAsking = true;
        } else if (userResponse === 'n' || userResponse === 'no') {
          appendContent('Response to User Response: ' + questionObj.response.no, 'game-content');
          alert(questionObj.response.no);

          if (inArray(userResponse, questionObj.valid_answers) === true) {
            score++;
            appendContent('Score: ' + score, 'game-content');
          }

          keepAsking = true;
        } else {
          newResponse = defaultResponse.replace('{replace}', '"yes" or "no"');

          appendContent('Response to User Response: ' + newResponse, 'game-content');
          alert(newResponse);
        }

        break;
      case 3:
        if (numericResponseCount !== 0) {
          if (!userResponse || isNaN(userResponse)) {
            newResponse = defaultResponse.replace('{replace}', 'a number');

            appendContent('Response to User Response: ' + newResponse, 'game-content');
            alert(newResponse);
          } else {
            if (parseInt(userResponse) === 1990) {
              appendContent('Response to User Response: ' + questionObj.response[1990], 'game-content');
              alert(questionObj.response[1990]);

              keepAsking = true;
              score++;
              appendContent('Score: ' + score, 'game-content');
            } else {
              numericResponseCount--;

              if (numericResponseCount === 0) {
                newResponse = 'Good luck next time!';

                keepAsking = true;
              } else {
                newResponse = 'Nice try, you have ' + numericResponseCount + ' more chance';

                if (numericResponseCount > 1) {
                  newResponse += 's';
                }

                newResponse += '.';
              }

              appendContent(newResponse, 'game-content');
              alert(newResponse);
            }
          }
        }

        break;
      case 4:
        if (userResponse.length > 0) {
          if (questionObj.response[userResponse]) {
            appendContent('Response to User Response: ' + questionObj.response[userResponse], 'game-content');
            alert(questionObj.response[userResponse]);

            score++;
            appendContent('Score: ' + score, 'game-content');
          } else {
            newResponse = 'You\'ll get it next time!';
            appendContent('Response to User Response: ' + newResponse, 'game-content');
            alert(newResponse);
          }

          keepAsking = true;
        }

        break;
    }
  }

  return userResponse;
}

// After HTML loads loop through questions array and call askQuestion for user's response
window.onload = function () {
  for (var i = 0; i < questions.length; i++) {
    askQuestion(questions[i]);
  }

  // Let user know score
  var scoreResponse = 'You got ' + score + ' out of 6 questions correct, ' + userName + '.';
  alert(scoreResponse);
  appendContent('Response to User: ' + scoreResponse, 'game-content');
}
