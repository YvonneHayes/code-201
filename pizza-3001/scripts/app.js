document.addEventListener('DOMContentLoaded', function() {
  var elNavSite = document.getElementById('nav-site');
  var elHome = document.getElementById('content-home');
  var elSales = document.getElementById('content-sales-data');

  var storeBeaverton = new Store('Beaverton', beavertonDayHours, beavertonMinMax);
  console.log('Beaverton Object', storeBeaverton);

  var storeHillsboro = new Store('Hillsboro', hillsboroDayHours, hillsboroMinMax);
  console.log('Hillsboro object: ', storeHillsboro);

  var storeDowntown = new Store('Downtown', downtownDayHours, downtownMinMax);
  console.log('Downtown Object', storeDowntown);

  var storeNorthEast = new Store('North East', northEastHours, northEastMinMax);
  console.log('North East Object', storeNorthEast);

  var storeClackamas = new Store('Clackamas', clackamasHours, clackamasMinMax);
  console.log('Clackamas Object', storeClackamas);

  var storeAirport = new Store('PDX Airport', airportHours, airportMinMax);
  console.log('PDX Airport Object', storeAirport);

  function createLocationTable(store) {
    var pizzaOdysseys = 'happy Pizza Odysseys this week for ' + store.locationName + '!';
    var pizzasSoldWeek = 0;

    var elHomeH2 = createEl('h2', store.locationName);
    var elHomeTable = createEl('table', '', {name: 'class', value: 'u-full-width'});
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
    var elSalesTable = createEl('table', '', {name: 'class', value: 'u-full-width'});
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

  elNavSite.addEventListener('click', function (e) {
    var page = e.target.getAttribute('href').replace('#', '');
    var elTitle = document.getElementsByTagName('title')[0];
    var elH1 = document.getElementsByTagName('h1')[0];

    switch (page) {
      case 'home':
        // Update title and h1 tags
        elTitle.textContent = textTitle;
        elH1.textContent = textTitle;

        // Switch background image by class
        addClass('bg-image', 'bg-image--01');
        removeClass('bg-image', 'bg-image--02');

        // Show content for sales
        addClass('content-home', 'show');
        removeClass('content-sales-data', 'show');

        break;
      case 'sales-data':
        // Update title and h1 tags
        titleText = 'Sales Data';
        elTitle.textContent = titleText;
        elH1.textContent = titleText;

        // Switch background image by class
        addClass('bg-image', 'bg-image--02');
        removeClass('bg-image', 'bg-image--01');

        // Show content for sales
        addClass('content-sales-data', 'show');
        removeClass('content-home', 'show');

        break;
    }

    e.preventDefault();
  }, false);
});
