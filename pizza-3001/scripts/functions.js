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

function getDrivers(deliveryRuns) {
  return Math.ceil(deliveryRuns / 3);
}

function addClass(targetName, classNameStr) {
  var el = removeClass(targetName, classNameStr);

  if (el.className.length) {
    el.className += ' ' + classNameStr;
  } else {
    el.className = classNameStr;
  }

  return el;
}

function removeClass(targetName, classNameStr) {
  var el = document.getElementsByClassName(targetName)[0];
  var classNames = el.className.split(' ');
  var newClassNames = [];

  for (var i = 0; i < classNames.length; i++) {
    if (classNames[i] !== classNameStr) {
      newClassNames.push(classNames[i]);
    }
  }

  el.className = newClassNames.join(' ');

  return el;
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

function Store(locationName, dayHours, minMax) {
  this.locationName = locationName;
  this.dayHours = dayHours;
  this.minMax = minMax;
  this.pizzasSoldWeek = 0;
  this.pizzasSoldDay = [];
  this.createOdysseysText = function () {
    return this.pizzasSoldWeek + ' happy Pizza Odysseys this week for ' + this.locationName + '!';
  };
  this.createPizzasSoldText = function () {
    return 'The ' + this.locationName + ' store sold ' + this.pizzasSoldWeek + ' pizzas this week.';
  };
  this.getMinAndMax = function (time) {
    switch (true) {
      case (time > 7 && time < 11):
        return this.minMax[0];
        break;
      case (time > 10 && time < 14):
        return this.minMax[1];
        break;
      case (time > 13 && time < 17):
        return this.minMax[2];
        break;
      case (time > 16 && time < 20):
        return this.minMax[3];
        break;
      case (time > 19 && time < 23):
        return this.minMax[4];
        break;
      case ((time > 0 && time < 2) || (time > 22 && time < 25)):
        return this.minMax[5];
        break;
    };
  };
}
