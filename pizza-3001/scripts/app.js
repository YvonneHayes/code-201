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
  location: 'Hillsboro',
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

var storeDowntown = {
  location: 'Downtown',
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

var storeNorthEast = {
  location: 'NorthEast',
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

var storeClackamas = {
  location: 'Clackamas',
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

var storeAirport = {
  location: 'Airport',
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

document.addEventListener('DOMContentLoaded', function() {
  var currentPage = document.body.className.split(' ')[1];
  var elMain = document.getElementsByTagName('main')[0];

  var elH2 = createEl('h2', storeBeaverton.locationName);
  var elTable = createEl('table');
  var elThead = createEl('thead');
  var elTheadTr = createEl('tr');
  var elTbody = createEl('tbody');

  elMain.appendChild(elH2);
  elMain.appendChild(elTable);
  elTable.appendChild(elThead);
  elThead.appendChild(elTheadTr);
  elTable.appendChild(elTbody);

  switch (currentPage) {
    case 'page--home':
      var elTheadThDay = createEl('th', 'Day');
      var elTheadThHours = createEl('th', 'Hours');

      elTheadTr.appendChild(elTheadThDay);
      elTheadTr.appendChild(elTheadThHours);

      break;
    case 'page--sales-data':
      var elTheadThDay = createEl('th', 'Day');
      var elTheadThTime = createEl('th', 'Time');
      var elTheadThPizzas = createEl('th', 'Pizzas Sold');
      var elTheadThDeliveries = createEl('th', 'Delivery Runs');
      var elTheadThDrivers = createEl('th', 'Drivers Recommended');

      elTheadTr.appendChild(elTheadThDay);
      elTheadTr.appendChild(elTheadThTime);
      elTheadTr.appendChild(elTheadThPizzas);
      elTheadTr.appendChild(elTheadThDeliveries);
      elTheadTr.appendChild(elTheadThDrivers);

      break;
  }

  for (var i = 0; i < storeBeaverton.dayHours.length; i++) {
    switch (currentPage) {
      case 'page--home':
        var dayName = days[i];
        var hoursStatus = 'Closed';

        // There's a start time and end time for hours, so
        if (storeBeaverton.dayHours[i].timeStart !== 0 && storeBeaverton.dayHours[i].timeEnd !== 0) {
          hoursStatus = convertNumberTo12Hour(storeBeaverton.dayHours[i].timeStart);
          hoursStatus += ' - ' + convertNumberTo12Hour(storeBeaverton.dayHours[i].timeEnd);
        }

        var elTr = createEl('tr');
        var elTdDay = createEl('td', dayName);
        var elTdHours = createEl('td', hoursStatus);

        elTbody.appendChild(elTr);
        elTr.appendChild(elTdDay);
        elTr.appendChild(elTdHours);

        break;
      case 'page--sales-data':
        var dayName = days[i];
        var hoursLength = storeBeaverton.dayHours[i].timeEnd - storeBeaverton.dayHours[i].timeStart;
        var time = storeBeaverton.dayHours[i].timeStart;

        for (var ii = 0; ii < hoursLength; ii++) {
          var timeHour = convertNumberTo12Hour(time);

          var elTr = createEl('tr');
          var elTdHour = createEl('td', timeHour);

          elTbody.appendChild(elTr);

          if (ii === 0) {
            var elTdDayAttribute = {
              name: 'rowspan',
              value: hoursLength
            };
            var elTdDay = createEl('td', dayName, elTdDayAttribute);

            elTr.appendChild(elTdDay);
          }

          elTr.appendChild(elTdHour);

          var minMax = getMinAndMax(time);

          // Pizzas Sold
          var pizzasSold = generateRandomNumber(minMax.pizzaMin, minMax.pizzaMax);
          var elTdPizzasSold = createEl('td', pizzasSold);
          elTr.appendChild(elTdPizzasSold);

          // Delivery Runs
          var deliveryRuns = generateRandomNumber(minMax.deliveryMin, minMax.deliveryMax);
          var elTdDeliveryRuns = createEl('td', deliveryRuns);
          elTr.appendChild(elTdDeliveryRuns);

          // Drivers Recommended
          var driversRecommended = getDrivers(pizzasSold, deliveryRuns);
          var elTdDriversRecommended = createEl('td', pizzasSold);
          elTr.appendChild(elTdDriversRecommended);

          time++;
        }

        break;
    }
  }
});
