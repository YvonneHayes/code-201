document.addEventListener('DOMContentLoaded', function() {
  var elNavSite = document.getElementById('nav-site');
  var elHome = document.getElementById('content-home');
  var elHomeStoreHours = document.getElementsByClassName('store-hours');
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

  function createLocationTable(store, elStoreHours) {
    var elHomeH2 = createEl('h2', store.locationName);
    var elHomeTable = createEl('table', '', {name: 'class', value: 'u-full-width'});
    var elHomeThead = createEl('thead');
    var elHomeTheadTr = createEl('tr');
    var elHomeTheadThDay = createEl('th', 'Day');
    var elHomeTheadThHours = createEl('th', 'Hours');
    var elHomeTbody = createEl('tbody');
    elStoreHours.appendChild(elHomeH2);
    elStoreHours.appendChild(elHomeTable);
    elHomeTable.appendChild(elHomeThead);
    elHomeTable.appendChild(elHomeTbody);
    elHomeThead.appendChild(elHomeTheadTr);
    elHomeTheadTr.appendChild(elHomeTheadThDay);
    elHomeTheadTr.appendChild(elHomeTheadThHours);

    var locationClass = store.locationName.replace(' ', '-').toLowerCase();
    var elSalesDiv = createEl('div', '', {name: 'class', value: 'location location--' + locationClass});
    var elSalesH2 = createEl('h2', store.locationName);
    var elSalesTable = createEl('table', '', {name: 'class', value: 'u-full-width'});
    var elSalesThead = createEl('thead');
    var elSalesTheadTr = createEl('tr');
    var elSalesTheadThDay = createEl('th', 'Day');
    var elSalesTheadThTime = createEl('th', 'Time');
    var elSalesTheadThPizzas = createEl('th', 'Pizzas Sold');
    var elSalesTheadThDeliveries = createEl('th', 'Delivery Runs');
    var elSalesTheadThDrivers = createEl('th', 'Drivers Recommended');
    var elSalesTbody = createEl('tbody');

    elSales.appendChild(elSalesDiv);
    elSalesDiv.appendChild(elSalesH2);
    elSalesDiv.appendChild(elSalesTable);
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
      var pizzasDayCount = 0;

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

        var minMax = store.getMinAndMax(time);

        // Pizzas Sold
        var pizzasSold = generateRandomNumber(minMax.minPizza, minMax.maxPizza);
        var elTdPizzasSold = createEl('td', pizzasSold);

        elSalesTbodyTr.appendChild(elTdPizzasSold);

        // Add pizzas sold for the day to weekly count
        pizzasDayCount += pizzasSold;
        store.pizzasSoldWeek += pizzasSold;

        // Delivery Runs
        var deliveryRuns = generateRandomNumber(minMax.minDelivery, minMax.maxDelivery);

        // Keep looping until number of delivery runs is less than or equal to number of pizzas sold
        if (deliveryRuns > pizzasSold) {
          var keepGenerating = false;

          while (keepGenerating) {
            deliveryRuns = generateRandomNumber(minMax.minDelivery, minMax.minDelivery);

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

      store.pizzasSoldDay.push(pizzasDayCount);
    }

    var pizzaOdysseysText = store.createOdysseysText();
    var elPOdysseys = createEl('p', pizzaOdysseysText);
    elStoreHours.appendChild(elPOdysseys);

    var pizzasSoldText = store.createPizzasSoldText();
    var elPPizzasSold = createEl('p', pizzasSoldText);
    elSalesDiv.appendChild(elPPizzasSold);
  }

  createLocationTable(storeBeaverton, elHomeStoreHours[0]);
  createLocationTable(storeHillsboro, elHomeStoreHours[1]);
  createLocationTable(storeDowntown, elHomeStoreHours[2]);
  createLocationTable(storeNorthEast, elHomeStoreHours[3]);
  createLocationTable(storeClackamas, elHomeStoreHours[4]);
  createLocationTable(storeAirport, elHomeStoreHours[5]);

  var elLocationAllDiv = document.getElementsByClassName('location--all')[0];
  var elLocationAllH2 = createEl('h2', 'Overall');
  var elLocationAllTable = createEl('table', '', {name: 'class', value: 'u-full-width'});
  var elLocationAllThead = createEl('thead');
  var elLocationAllTheadTr = createEl('tr');
  var elLocationAllThDay = createEl('th', 'Day');
  var elLocationAllThPizzas = createEl('th', 'Pizzas Sold');
  var elLocationAllTbody = createEl('tbody');

  elLocationAllDiv.appendChild(elLocationAllH2);
  elLocationAllDiv.appendChild(elLocationAllTable);
  elLocationAllTable.appendChild(elLocationAllThead);
  elLocationAllThead.appendChild(elLocationAllTheadTr);
  elLocationAllTheadTr.appendChild(elLocationAllThDay);
  elLocationAllTheadTr.appendChild(elLocationAllThPizzas);
  elLocationAllTable.appendChild(elLocationAllTbody);

  var overallPizzasSoldWeek = 0;

  for (var i = 0; i < days.length; i++) {
    var overallPizzasSoldDay = storeBeaverton.pizzasSoldDay[i] + storeHillsboro.pizzasSoldDay[i] + storeDowntown.pizzasSoldDay[i] + storeNorthEast.pizzasSoldDay[i] + storeClackamas.pizzasSoldDay[i] + storeAirport.pizzasSoldDay[i];
    var elLocationAllTbodyTr = createEl('tr');
    var elLocationAllTbodyTdDay = createEl('td', days[i]);
    var elLocationAllTbodyTdPizzas = createEl('td', overallPizzasSoldDay);

    elLocationAllTbody.appendChild(elLocationAllTbodyTr);
    elLocationAllTbodyTr.appendChild(elLocationAllTbodyTdDay);
    elLocationAllTbodyTr.appendChild(elLocationAllTbodyTdPizzas);

    overallPizzasSoldWeek += overallPizzasSoldDay;
  }

  var elPOverallPizzasSoldWeek = createEl('p', 'An overall total of ' + overallPizzasSoldWeek + ' pizzas sold this week.');
  elLocationAllDiv.appendChild(elPOverallPizzasSoldWeek);

  elNavSite.addEventListener('click', function (e) {
    var dataTarget = e.target.getAttribute('data-target');
    var dataTargetStr = dataTarget.substr(1); // Takes out first character "." or "#"
    var elTitle = document.getElementsByTagName('title')[0];
    var elH1 = document.getElementsByTagName('h1')[0];

    if (dataTargetStr == 'content--home') {
      // Update title and h1 tags
      elTitle.textContent = textTitle;
      elH1.textContent = textTitle;

      // Switch background image by class
      addClass('bg-image', 'bg-image--01');
      removeClass('bg-image', 'bg-image--02');

      // Show content for sales
      addClass('content--home', 'show');
      removeClass('content--sales-data', 'show');
    } else {
      // Update title and h1 tags
      titleText = 'Sales Data';
      elTitle.textContent = titleText;
      elH1.textContent = titleText;

      // Switch background image by class
      addClass('bg-image', 'bg-image--02');
      removeClass('bg-image', 'bg-image--01');

      // Show content for sales
      addClass('content--sales-data', 'show');
      removeClass('content--home', 'show');

      var els = document.getElementsByClassName('location');

      for (var i = 0; i < els.length; i++) {
        if ((dataTargetStr == 'content--sales-data' && i == 0) || (els[i].classList[0] == 'location' && els[i].classList[1] == dataTargetStr)) {
          addClass(els[i].className, 'show');
        } else {
          removeClass(els[i].className, 'show');
        }
      }
    }

    e.preventDefault();
  }, false);
});
