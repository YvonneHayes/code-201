function convertNumberTo12Hour(number) {
  if (number <= 0 || number > 24) {
    return 'Enter a number between 0 and 25';
  }

  var string = '';
  var newNumber = number;

  if (number > 12) {
    newNumber = number - 12;
  }

  string += newNumber + ':00 ';

  if (number == 24 || number < 12) {
    string += 'AM';
  } else {
    string += 'PM';
  }

  return string;
}

function generateRandomNumber(minNumber, maxNumber) {
  var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  // console.log('The random number for a min number of ' + minNumber + ' and max number of ' + maxNumber + ' is ' + randomNumber + '.');

  return randomNumber;
}

function getMinAndMax(time) {
  switch (true) {
    // 8am-11am
    case (time > 7 && time < 11):
      return { pizzaMin: 0, pizzaMax: 4, deliveryMin: 0, deliveryMax: 4 };
      break;
    // 11am-2pm
    case (time > 10 && time < 14):
      return { pizzaMin: 0, pizzaMax: 7, deliveryMin: 0, deliveryMax: 4 };
      break;
    // 2pm-5pm
    case (time > 13 && time < 17):
      return { pizzaMin: 2, pizzaMax: 15, deliveryMin: 1, deliveryMax: 4 };
      break;
    // 5pm-8pm
    case (time > 16 && time < 20):
      return { pizzaMin: 15, pizzaMax: 35, deliveryMin: 3, deliveryMax: 8 };
      break;
    // 8pm-11pm
    case (time > 19 && time < 23):
      return { pizzaMin: 12, pizzaMax: 31, deliveryMin: 5, deliveryMax: 12 };
      break;
    // 11pm-2am
    case ((time > 0 && time < 2) || (time > 22 && time < 25)):
      return { pizzaMin: 5, pizzaMax: 20, deliveryMin: 6, deliveryMax: 11 }
      break;
  }
}

function getDrivers(deliveryRuns) {
  return Math.ceil(deliveryRuns / 3);
}

function Store(locationName, dayHours, minMax) {
  this.locationName = locationName;
  this.dayHours = dayHours;
  this.minMax = minMax;
}

function createEl(elName, elText, elAttribute) {
  var el = document.createElement(elName);

  if (elText === 0) {
    elText = elText.toString();
  }

  if (elText) {
    el.textContent = elText;
  }

  if (elAttribute) {
    el.setAttribute(elAttribute.name, elAttribute.value);
  }

  return el;
}

function addClass(idName, classNameAdd) {
  var el = document.getElementById(idName);
  var classNames = el.className.split(' ');
  var newClassNames = [];

  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i] !== classNameAdd) {
      newClassNames.push(classNames[i]);
    }
  }

  newClassNames.push(classNameAdd);

  el.className = newClassNames.join(' ');

  return newClassNames;
}

function removeClass(idName, classNameRemove) {
  var el = document.getElementById(idName);
  var classNames = el.className.split(' ');
  var newClassNames = [];

  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i] !== classNameRemove) {
      newClassNames.push(classNames[i]);
    }
  }

  el.className = newClassNames.join(' ');

  return newClassNames;
}