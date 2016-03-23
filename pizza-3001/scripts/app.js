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

  function createLocationTable(store) {
    var pizzaOdysseys = 'happy Pizza Odysseys this week!';
    var pizzasSoldWeek = 0;

    var elH2 = createEl('h2', store.locationName);
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

    for (var i = 0; i < store.dayHours.length; i++) {
      var dayName = days[i];
      var time = store.dayHours[i].timeStart;
      var hoursLength = store.dayHours[i].timeEnd - store.dayHours[i].timeStart;

      // TODO: Fix when time ends at 1am or 2am
      // if (store.dayHours[i].timeEnd > 0 && store.dayHours[i].timeEnd < 3) {
      //   var hoursLength = (24 - store.dayHours[i].timeStart) + store.dayHours[i].timeEnd;
      // } else {
      //   var hoursLength = store.dayHours[i].timeEnd - store.dayHours[i].timeStart;
      // }

      for (var ii = 0; ii < hoursLength; ii++) {
        var timeHour = convertNumberTo12Hour(time);

        var elTr = createEl('tr');
        var elTdHour = createEl('td', timeHour);

        if (currentPage == 'page--sales-data') elTbody.appendChild(elTr);

        if (ii === 0) {
          var elTdDayAttribute = {
            name: 'rowspan',
            value: hoursLength
          };
          var elTdDay = createEl('td', dayName, elTdDayAttribute);

          if (currentPage == 'page--sales-data') elTr.appendChild(elTdDay);
        }

        if (currentPage == 'page--sales-data') elTr.appendChild(elTdHour);

        var minMax = getMinAndMax(time);

        // Pizzas Sold
        var pizzasSold = generateRandomNumber(minMax.pizzaMin, minMax.pizzaMax);
        var elTdPizzasSold = createEl('td', pizzasSold);
        if (currentPage == 'page--sales-data') elTr.appendChild(elTdPizzasSold);

        pizzasSoldWeek += pizzasSold;

        // Delivery Runs
        var deliveryRuns = generateRandomNumber(minMax.deliveryMin, minMax.deliveryMax);

        // Keep looping until number of delivery runs is less than or equal to number of pizzas sold
        while (deliveryRuns > pizzasSold) {
          deliveryRuns = generateRandomNumber(minMax.deliveryMin, minMax.deliveryMax);
        }

        var elTdDeliveryRuns = createEl('td', deliveryRuns);
        if (currentPage == 'page--sales-data') elTr.appendChild(elTdDeliveryRuns);

        // Drivers Recommended
        var driversRecommended = getDrivers(deliveryRuns);
        var elTdDriversRecommended = createEl('td', driversRecommended);
        if (currentPage == 'page--sales-data') elTr.appendChild(elTdDriversRecommended);

        time++;
      }

      switch (currentPage) {
        case 'page--home':
          var hoursStatus = 'Closed';

          // There's a start time and end time for hours, so
          if (store.dayHours[i].timeStart !== 0 && store.dayHours[i].timeEnd !== 0) {
            hoursStatus = convertNumberTo12Hour(store.dayHours[i].timeStart);
            hoursStatus += ' - ' + convertNumberTo12Hour(store.dayHours[i].timeEnd);
          }

          var elTr = createEl('tr');
          var elTdDay = createEl('td', dayName);
          var elTdHours = createEl('td', hoursStatus);

          elTbody.appendChild(elTr);
          elTr.appendChild(elTdDay);
          elTr.appendChild(elTdHours);

          break;
      }
    }

    pizzaOdysseys = pizzasSoldWeek + ' ' + pizzaOdysseys;
    var elPOdysseys = createEl('p', pizzaOdysseys);
    elMain.appendChild(elPOdysseys);
  }

  createLocationTable(storeBeaverton);
  createLocationTable(storeHillsboro);
  createLocationTable(storeDowntown);
  createLocationTable(storeNorthEast);
  createLocationTable(storeClackamas);
  createLocationTable(storeAirport);
});
