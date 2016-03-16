/*! about.js */

// Define questions for the user
var questions = [
  {
    'question': 'Do I have about 3 years of experience as a developer?',
    'response': {
      'y': 'Nice, you did your math correctly when you read my experience.',
      'n': 'Nope, I worked at WebLively for 3 years and 2 months.'
    }
  },
  {
    'question': 'Do I know version control?',
    'response': {
      'y': 'Yes, you\'re right! You saw Git under my list of skills.',
      'n': 'No, I have a bit of experience using Git.'
    }
  },
  {
    'question': 'Am I good with JavaScript?',
    'response': {
      'y': 'Nah, that\'s why I\'m here at Code Fellows.',
      'n': 'Yup, one of my goals is to write JavaScript.'
    }
  }
];

// Function to create a prompt for user's input
function promptUser(text, response) {
  var userResponse;

  while (!userResponse) {
    userResponse = prompt(text).trim();
    console.log('User Response: ' + userResponse);

    if (response) {
      if (userResponse === 'y' || userResponse === 'yes') {
        alert(response['y']);
      } else if (userResponse === 'n' || userResponse === 'no') {
        alert(response['n']);
      } else {
        alert('Whoops, enter "yes" or "no" for the question.');
      }
    }
  }

  return userResponse;
}

// Get the user's name
var nameQuestion = 'Welcome! What is your name?';
console.log(nameQuestion);
var userName = promptUser(nameQuestion);

alert('Hi, ' + userName + '! I will asking you a couple of questions about me. Just simply answer with a yes or no.');

for (var i = 0; i < questions.length; i++) {
  promptUser(questions[i]['question'], questions[i]['response']);
}
