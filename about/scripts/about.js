/*! about.js */

var score = 0;

// Define questions and reply to user's response
// Response Types:
// 1 - Response is string replacement using {replace}
// 2 - Response is a "yes" or "no"
// 3 - Response is a number
// 4 - Response is a state
var questions = [
  {
    'question': 'Welcome! What is your name?',
    'responses': 'Hi, {replace}! I will asking you a couple of questions about me. Just simply answer with a yes or no.',
    'response_type': 1
  },
  {
    'question': 'Do I like to eat noodles on a boat?',
    'correct_answers': ['n', 'no'],
    'responses': {
      'y': 'No, I don\'t eat noodles on a boat! But my favorite noodles are called "boat noodles."',
      'n': 'Yes, where would I find a boat to eat noodles in Portland? Well, you can try boat noodles at Pok Pok. I think it\'s the best here in Portland.'
    },
    'response_type': 2
  },
  {
    'question': 'Am I an online shopper?',
    'correct_answers': ['y', 'yes'],
    'responses': {
      'y': 'Correct, I like to find online deals and promos.',
      'n': 'Nope, I like to shop for clothing online. More selection of the brands I like online.'
    },
    'response_type': 2
  },
  {
    'question': 'Am I good with JavaScript?',
    'correct_answers': ['n', 'no'],
    'responses': {
      'y': 'Nah, that\'s why I\'m here at Code Fellows.',
      'n': 'Yup, one of my goals is to write clean JavaScript.'
    },
    'response_type': 2
  },
  {
    'question': 'Do I have 3 years of experience as a developer?',
    'correct_answers': ['y', 'yes'],
    'responses': {
      'y': 'Cool, you did the math when you saw my experience.',
      'n': 'Nope, I do have about 3 years of experience if you take a look at my experience.'
    },
    'response_type': 2
  },
  {
    'question': 'Which year was I born?',
    'correct_answers': [1990],
    'responses': {
      1990: 'Yup, I was born in 1990.'
    },
    'response_type': 3
  },
  {
    'question': 'Can you guess a state that I have traveled to for breakdance competitions besides Oregon and Washington? Use full state name, no abbreviation.',
    'correct_answers': ['arizona', 'california'],
    'responses': {
      'arizona': 'Yes, I have competed in Phoenix.',
      'california': 'Yes, I have been to a couple of competions in San Diego. I was just a spectator.'
    },
    'response_type': 4
  }
];

// Declare variable for response if you user doesn't enter a valid response
var defaultResponse = 'Whoops, enter {replace} for the question.';

// Function to create a prompt for user's input
function promptUser(question, response, responseType) {
  var userResponse = '';
  var numericResponseCount = 4;
  var newResponse = '';
  var keepAsking = false;

  // Loop until user respond with an answer
  while (keepAsking === false) {
    console.log('Question for User: ' + question);
    userResponse = prompt(question).trim().toLowerCase(); // Take out trailing whitespaces
    console.log('User Response: ' + userResponse);

    switch (responseType) {
      case 1:
        if (userResponse.length > 0) {
          newResponse = response.replace('{replace}', userResponse);

          console.log('Response to User Response: ' + newResponse);
          alert(newResponse);

          keepAsking = true;
        }

        break;
      case 2:
        if (userResponse === 'y' || userResponse === 'yes') {
          console.log('Response to User Response: ' + response['y']);
          alert(response['y']);

          keepAsking = true;
        } else if (userResponse === 'n' || userResponse === 'no') {
          console.log('Response to User Response: ' + response['n']);
          alert(response['n']);

          keepAsking = true;
        } else {
          newResponse = defaultResponse.replace('{replace}', '"yes" or "no"');

          console.log('Response to User Response: ' + newResponse);
          alert(newResponse);
        }

        break;
      case 3:
        if (numericResponseCount !== 0) {
          if (!userResponse || isNaN(userResponse)) {
            newResponse = defaultResponse.replace('{replace}', 'a number');

            console.log('Response to User Response: ' + newResponse);
            alert(newResponse);
          } else {
            if (parseInt(response[userResponse]) === 1990) {
              console.log('Response to User Response: ' + response[userResponse]);
              alert(response[userResponse]);

              keepAsking = true;
            } else {
              numericResponseCount--;

              if (numericResponseCount === 0) {
                newResponse = 'Good luck next time!';
              } else {
                newResponse = ('Nice try, you have ' + numericResponseCount + ' more chance(s).');
              }

              console.log(newResponse);
              alert(newResponse);

              if (numericResponseCount === 0) {
                keepAsking = true;
              }
            }
          }
        }
        break;
      case 4:
        if (response[userResponse]) {
          console.log('Response to User Response: ' + response[userResponse]);
          alert(response[userResponse]);
        } else {
        }

        keepAsking = true;
    }
  }

  return userResponse;
}

// Loop through the questions array of objects
for (var i = 0; i < questions.length; i++) {
  // Call promptUser function for user's response
  promptUser(questions[i]['question'], questions[i]['response'], questions[i]['response_type']);
}
