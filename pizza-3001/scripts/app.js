var exports = {};

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var storeBeaverton = {
  locationName: 'Beaverton',
  dayHours: [
    { timeStart: 8, timeEnd: 17 },
    { timeStart: 8, timeEnd: 17 },
    { timeStart: 8, timeEnd: 17 },
    { timeStart: 8, timeEnd: 17 },
    { timeStart: 8, timeEnd: 17 },
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 0, timeEnd: 0 }
  ]
};

var storeHillsboro = {
  locationName: 'Hillsboro',
  dayHours: [
    { timeStart: 10, timeEnd: 23 },
    { timeStart: 10, timeEnd: 23 },
    { timeStart: 10, timeEnd: 23 },
    { timeStart: 10, timeEnd: 23 },
    { timeStart: 10, timeEnd: 23 },
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 0, timeEnd: 0 }
  ]
};

var storeDowntown = {
  locationName: 'Downtown',
  dayHours: [
    { timeStart: 8, timeEnd: 15 },
    { timeStart: 8, timeEnd: 15 },
    { timeStart: 8, timeEnd: 15 },
    { timeStart: 8, timeEnd: 15 },
    { timeStart: 8, timeEnd: 15 },
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 0, timeEnd: 0 }
  ]
};

var storeNorthEast = {
  locationName: 'NorthEast',
  dayHours: [
    { timeStart: 8, timeEnd: 14 },
    { timeStart: 8, timeEnd: 14 },
    { timeStart: 8, timeEnd: 14 },
    { timeStart: 8, timeEnd: 14 },
    { timeStart: 8, timeEnd: 14 },
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 0, timeEnd: 0 }
  ]
};

var storeClackamas = {
  locationName: 'Clackamas',
  dayHours: [
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 9, timeEnd: 18 },
    { timeStart: 9, timeEnd: 18 },
    { timeStart: 9, timeEnd: 18 },
    { timeStart: 9, timeEnd: 18 },
    { timeStart: 9, timeEnd: 15 },
    { timeStart: 0, timeEnd: 0 }
  ]
};

var storeAirport = {
  locationName: 'Airport',
  dayHours: [
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 10, timeEnd: 21 },
    { timeStart: 10, timeEnd: 21 },
    { timeStart: 10, timeEnd: 21 },
    { timeStart: 0, timeEnd: 0 },
    { timeStart: 0, timeEnd: 0 }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  var currentPage = document.body.className.split(' ')[1];
  var elMain = document.getElementsByTagName('main')[0];
  var elHome = document.getElementById('home');
  var elSales = document.getElementById('sales-data');
  var textTitle = 'Pizza 3001';

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

  function createTable() {
    var elTable = createEl('table');
    var elThead = createEl('thead');
    var elTbody = createEl('tbody');

    elTable.appendChild(elThead);
    elTable.appendChild(elTbody);

    return elTable;
  }

  function createTr(textArr) {
    var elTr = createEl('tr');

    for (var i = 0; i < textArr.length; i++) {
      var elTh = createEl('th', textArr.i);
      elTr.appendChild(elTh);
    }

    return elTr;
  }

  function createLocationTable(store) {
    var pizzaOdysseys = 'happy Pizza Odysseys this week for ' + store.locationName + '!';
    var pizzasSoldWeek = 0;

    var elHomeH2 = createEl('h2', store.locationName);
    var elHomeTable = createEl('table');
    var elHomeThead = createEl('thead');
    var elHomeTheadTr = createEl('tr');
    var elHomeTheadThDay = createEl('th', 'Day');
    var elHomeTheadThHours = createEl('th', 'Hours');
    var elHomeTbody = createEl('tbody');

    elHome.appendChild(elHomeH2);
    elHome.appendChild(elHomeTable);
    elHomeTable.appendChild(elHomeThead);
    elHomeTable.appendChild(elHomeTbody);
    elHomeThead.appendChild(elHomeTheadTr);
    elHomeTheadTr.appendChild(elHomeTheadThDay);
    elHomeTheadTr.appendChild(elHomeTheadThHours);

    var elH2 = createEl('h2', store.locationName);
    var elSalesTable = createEl('table');
    var elSalesThead = createEl('thead');
    var elSalesTheadTr = createEl('tr');
    var elSalesTheadThDay = createEl('th', 'Day');
    var elSalesTheadThTime = createEl('th', 'Time');
    var elSalesTheadThPizzas = createEl('th', 'Pizzas Sold');
    var elSalesTheadThDeliveries = createEl('th', 'Delivery Runs');
    var elSalesTheadThDrivers = createEl('th', 'Drivers Recommended');
    var elSalesTbody = createEl('tbody');

    elSales.appendChild(elH2);
    elSales.appendChild(elSalesTable);
    elSalesTable.appendChild(elSalesThead);
    elSalesTable.appendChild(elSalesTbody);
    elSalesThead.appendChild(elSalesTheadTr);
    elSalesTheadTr.appendChild(elSalesTheadThDay);
    elSalesTheadTr.appendChild(elSalesTheadThTime);
    elSalesTheadTr.appendChild(elSalesTheadThPizzas);
    elSalesTheadTr.appendChild(elSalesTheadThDeliveries);
    elSalesTheadTr.appendChild(elSalesTheadThDrivers);

    for (var i = 0; i < store.dayHours.length; i++) {
      var dayName = days[i];
      var time = store.dayHours[i].timeStart;
      var hoursLength = store.dayHours[i].timeEnd - store.dayHours[i].timeStart;
      var hoursStatus = 'Closed';

      // There's a start time and end time for hours, convert to a readable 12 hour clock
      if (store.dayHours[i].timeStart !== 0 && store.dayHours[i].timeEnd !== 0) {
        hoursStatus = convertNumberTo12Hour(store.dayHours[i].timeStart);
        hoursStatus += ' - ' + convertNumberTo12Hour(store.dayHours[i].timeEnd);
      }

      // Time ends at 1am or 2am
      if (store.dayHours[i].timeEnd > 0 && store.dayHours[i].timeEnd < 3) {
        hoursLength = (24 - store.dayHours[i].timeStart) + store.dayHours[i].timeEnd;
      }

      var elHomeTbodyTr = createEl('tr');
      var elHomeTbodyTdDay = createEl('td', dayName);
      var elComeTbodyTdHours = createEl('td', hoursStatus);

      elHomeTbody.appendChild(elHomeTbodyTr);
      elHomeTbodyTr.appendChild(elHomeTbodyTdDay);
      elHomeTbodyTr.appendChild(elComeTbodyTdHours);

      for (var ii = 0; ii < hoursLength; ii++) {
        var timeHour = convertNumberTo12Hour(time);
        var elSalesTbodyTr = createEl('tr');
        var elSalesTbodyTdHour = createEl('td', timeHour);

        elSalesTbody.appendChild(elSalesTbodyTr);

        if (ii === 0) {
          var elSalesTbodyTdDayAttribute = {
            name: 'rowspan',
            value: hoursLength
          };
          var elSalesTbodyTdDay = createEl('td', dayName, elSalesTbodyTdDayAttribute);

          elSalesTbodyTr.appendChild(elSalesTbodyTdDay);
        }

        elSalesTbodyTr.appendChild(elSalesTbodyTdHour);

        var minMax = getMinAndMax(time);

        // Pizzas Sold
        var pizzasSold = generateRandomNumber(minMax.pizzaMin, minMax.pizzaMax);
        var elTdPizzasSold = createEl('td', pizzasSold);

        elSalesTbodyTr.appendChild(elTdPizzasSold);

        // Add pizzas sold for the day to weekly count
        pizzasSoldWeek += pizzasSold;

        // Delivery Runs
        var deliveryRuns = generateRandomNumber(minMax.deliveryMin, minMax.deliveryMax);

        // Keep looping until number of delivery runs is less than or equal to number of pizzas sold
        if (deliveryRuns > pizzasSold) {
          var keepGenerating = false;

          while (keepGenerating) {
            deliveryRuns = generateRandomNumber(minMax.deliveryMin, minMax.deliveryMax);

            if (deliveryRuns <= pizzasSold) {
              keepGenerating = true;
            }
          }
        }

        var elSalesTdDeliveryRuns = createEl('td', deliveryRuns);
        elSalesTbodyTr.appendChild(elSalesTdDeliveryRuns);

        // Drivers Recommended
        var driversRecommended = getDrivers(deliveryRuns);
        var elSalesTbodyTdDriversRecommended = createEl('td', driversRecommended);

        elSalesTbodyTr.appendChild(elSalesTbodyTdDriversRecommended);

        time++;
      }
    }

    pizzaOdysseys = pizzasSoldWeek + ' ' + pizzaOdysseys;
    var elPOdysseys = createEl('p', pizzaOdysseys);
    elHome.appendChild(elPOdysseys);
  }

  createLocationTable(storeBeaverton);
  createLocationTable(storeHillsboro);
  createLocationTable(storeDowntown);
  createLocationTable(storeNorthEast);
  createLocationTable(storeClackamas);
  createLocationTable(storeAirport);

  var navSite = document.getElementById('nav-site');

  navSite.addEventListener('click', function (e) {
    var idName = e.target.getAttribute('href').replace('#', '');
    var elTitle = document.getElementsByTagName('title')[0];
    var elH1 = document.getElementsByTagName('h1')[0];

    switch (idName) {
      case 'home':
        elTitle.textContent = textTitle;
        elH1.textContent = textTitle;

        addClass('home', 'show');
        removeClass('sales-data', 'show');

        break;
      case 'sales-data':
        titleText = 'Sales Data';

        elTitle.textContent = titleText;
        elH1.textContent = titleText;

        addClass('sales-data', 'show');
        removeClass('home', 'show');

        break;
    }

    e.preventDefault();
  }, false);
});
