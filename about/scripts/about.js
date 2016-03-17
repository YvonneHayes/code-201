/*! about.js */

// Define questions and reply to user's response
var questions = [
  {
    'question': 'Welcome! What is your name?',
    'response': 'Hi, {replace}! I will asking you a couple of questions about me. Just simply answer with a yes or no.'
  },
  {
    'question': 'Do I like to eat noodles on a boat?',
    'response': {
      'y': 'No, I don\'t eat noodles on a boat! But my favorite noodles are called "boat noodles."',
      'n': 'Yes, where would I find a boat to eat noodles in Portland? Well, you can try boat noodles at Pok Pok. I think it\'s the best here in Portland.'
    }
  },
  {
    'question': 'Am I an online shopper?',
    'response': {
      'y': 'Correct, I like to find online deals and promos.',
      'n': 'Nope, I like to shop for clothing online. More selection of the brands I like online.'
    }
  },
  {
    'question': 'Am I good with JavaScript?',
    'response': {
      'y': 'Nah, that\'s why I\'m here at Code Fellows.',
      'n': 'Yup, one of my goals is to write clean JavaScript.'
    }
  },
  {
    'question': 'Do I have 3 years of experience as a developer?',
    'response': {
      'y': 'Cool, you did the math when you saw my experience.',
      'n': 'Nope, I do have about 3 years of experience if you take a look at my experience.'
    }
  }
];

// Function to create a prompt for user's input
function promptUser(text, response) {
  var userResponse;

  // Loop until user respond with an answer
  while (!userResponse) {
    userResponse = prompt(text).trim(); // Take out trailing whitespaces
    console.log('User Response: ' + userResponse);

    // Response is an object, it's an yes or no question
    if (typeof response === 'object') {
      if (userResponse === 'y' || userResponse === 'yes') {
        alert(response['y']);
      } else if (userResponse === 'n' || userResponse === 'no') {
        alert(response['n']);
      } else {
        alert('Whoops, enter "yes" or "no" for the question.');
      }
    } else {
      if (userResponse.length > 0) {
        alert(response.replace('{replace}', userResponse));
      }
    }
  }

  return userResponse;
}

// Loop through the questions array of objects
for (var i = 0; i < questions.length; i++) {
  // Call promptUser function for user's response
  promptUser(questions[i]['question'], questions[i]['response']);
}
