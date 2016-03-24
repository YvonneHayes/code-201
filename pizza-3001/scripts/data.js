var textTitle = 'Pizza 3001';

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var beavertonDayHours = [
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 0, timeEnd: 0 }
];

var beavertonMinMax = [
  { minPizza: 0, maxPizza: 4, minDelivery: 0, maxDelivery: 0 },
  { minPizza: 0, maxPizza: 7, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 2, maxPizza: 15, minDelivery: 1, maxDelivery: 4 },
  { minPizza: 15, maxPizza: 35, minDelivery: 3, maxDelivery: 8 },
  { minPizza: 12, maxPizza: 31, minDelivery: 5, maxDelivery: 12 },
  { minPizza: 5, maxPizza: 20, minDelivery: 6, maxDelivery: 11 }
];

var hillsboroDayHours = [
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 8, timeEnd: 17 },
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 0, timeEnd: 0 }
];

var hillsboroMinMax = [
  { minPizza: 1, maxPizza: 3, minDelivery: 1, maxDelivery: 7 },
  { minPizza: 5, maxPizza: 9, minDelivery: 2, maxDelivery: 8 },
  { minPizza: 2, maxPizza: 13, minDelivery: 1, maxDelivery: 6 },
  { minPizza: 18, maxPizza: 32, minDelivery: 3, maxDelivery: 9 },
  { minPizza: 1, maxPizza: 3, minDelivery: 5, maxDelivery: 12 },
  { minPizza: 8, maxPizza: 20, minDelivery: 6, maxDelivery: 16 }
];

var downtownDayHours = [
  { timeStart: 8, timeEnd: 15 },
  { timeStart: 8, timeEnd: 15 },
  { timeStart: 8, timeEnd: 15 },
  { timeStart: 8, timeEnd: 15 },
  { timeStart: 8, timeEnd: 15 },
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 0, timeEnd: 0 }
];

var downtownMinMax = [
  { minPizza: 0, maxPizza: 4, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 0, maxPizza: 7, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 2, maxPizza: 15, minDelivery: 1, maxDelivery: 4 },
  { minPizza: 10, maxPizza: 26, minDelivery: 4, maxDelivery: 6 },
  { minPizza: 8, maxPizza: 22, minDelivery: 7, maxDelivery: 15 },
  { minPizza: 0, maxPizza: 2, minDelivery: 2, maxDelivery: 8 }
];

var northEastHours = [
  { timeStart: 8, timeEnd: 14 },
  { timeStart: 8, timeEnd: 14 },
  { timeStart: 8, timeEnd: 14 },
  { timeStart: 8, timeEnd: 14 },
  { timeStart: 8, timeEnd: 14 },
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 0, timeEnd: 0 }
];

var northEastMinMax = [
  { minPizza: 0, maxPizza: 4, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 0, maxPizza: 7, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 5, maxPizza: 15, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 25, maxPizza: 39, minDelivery: 13, maxDelivery: 18 },
  { minPizza: 22, maxPizza: 36, minDelivery: 5, maxDelivery: 22 },
  { minPizza: 5, maxPizza: 21, minDelivery: 16, maxDelivery: 31 }
];

var clackamasHours = [
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 9, timeEnd: 18 },
  { timeStart: 9, timeEnd: 18 },
  { timeStart: 9, timeEnd: 18 },
  { timeStart: 9, timeEnd: 18 },
  { timeStart: 9, timeEnd: 15 },
  { timeStart: 0, timeEnd: 0 }
];

var clackamasMinMax = [
  { minPizza: 2, maxPizza: 7, minDelivery: 3, maxDelivery: 5 },
  { minPizza: 3, maxPizza: 8, minDelivery: 3, maxDelivery: 9 },
  { minPizza: 1, maxPizza: 5, minDelivery: 1, maxDelivery: 4 },
  { minPizza: 5, maxPizza: 13, minDelivery: 2, maxDelivery: 4 },
  { minPizza: 22, maxPizza: 41, minDelivery: 15, maxDelivery: 42 },
  { minPizza: 15, maxPizza: 20, minDelivery: 6, maxDelivery: 21 }
];

var airportHours = [
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 10, timeEnd: 21 },
  { timeStart: 10, timeEnd: 21 },
  { timeStart: 10, timeEnd: 21 },
  { timeStart: 0, timeEnd: 0 },
  { timeStart: 0, timeEnd: 0 }
];

var airportMinMax = [
  { minPizza: 0, maxPizza: 4, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 0, maxPizza: 7, minDelivery: 0, maxDelivery: 4 },
  { minPizza: 2, maxPizza: 15, minDelivery: 1, maxDelivery: 4 },
  { minPizza: 6, maxPizza: 9, minDelivery: 5, maxDelivery: 18 },
  { minPizza: 4, maxPizza: 8, minDelivery: 2, maxDelivery: 5 },
  { minPizza: 2, maxPizza: 4, minDelivery: 3, maxDelivery: 11 }
];
