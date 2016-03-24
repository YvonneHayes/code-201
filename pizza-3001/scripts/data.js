var textTitle = 'Pizza 3001';

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var beavertonDayHours = [
  { timeStart: 8, timeEnd: 17 }, // Monday
  { timeStart: 8, timeEnd: 17 }, // Tuesday
  { timeStart: 8, timeEnd: 17 }, // Wednesday
  { timeStart: 8, timeEnd: 17 }, // Thursday
  { timeStart: 8, timeEnd: 17 }, // Friday
  { timeStart: 0, timeEnd: 0  }, // Saturday
  { timeStart: 0, timeEnd: 0  }  // Sunday
];

var beavertonMinMax = [
  { minPizza: 0,  maxPizza: 4,  minDelivery: 0, maxDelivery: 0  }, // 8am-11am
  { minPizza: 0,  maxPizza: 7,  minDelivery: 0, maxDelivery: 4  }, // 11am-2pm
  { minPizza: 2,  maxPizza: 15, minDelivery: 1, maxDelivery: 4  }, // 2pm-5pm
  { minPizza: 15, maxPizza: 35, minDelivery: 3, maxDelivery: 8  }, // 5pm-8pm
  { minPizza: 12, maxPizza: 31, minDelivery: 5, maxDelivery: 12 }, // 8pm-11pm
  { minPizza: 5,  maxPizza: 20, minDelivery: 6, maxDelivery: 11 }  // 11pm-2am
];

var hillsboroDayHours = [
  { timeStart: 8, timeEnd: 17 }, // Monday
  { timeStart: 8, timeEnd: 17 }, // Tuesday
  { timeStart: 8, timeEnd: 17 }, // Wednesday
  { timeStart: 8, timeEnd: 17 }, // Thursday
  { timeStart: 8, timeEnd: 17 }, // Friday
  { timeStart: 0, timeEnd: 0  }, // Saturday
  { timeStart: 0, timeEnd: 0  }  // Sunday
];

var hillsboroMinMax = [
  { minPizza: 1,  maxPizza: 3,  minDelivery: 1, maxDelivery: 7  }, // 8am-11am
  { minPizza: 5,  maxPizza: 9,  minDelivery: 2, maxDelivery: 8  }, // 11am-2pm
  { minPizza: 2,  maxPizza: 13, minDelivery: 1, maxDelivery: 6  }, // 2pm-5pm
  { minPizza: 18, maxPizza: 32, minDelivery: 3, maxDelivery: 9  }, // 5pm-8pm
  { minPizza: 1,  maxPizza: 3,  minDelivery: 5, maxDelivery: 12 }, // 8pm-11pm
  { minPizza: 8,  maxPizza: 20, minDelivery: 6, maxDelivery: 16 }  // 11pm-2am
];

var downtownDayHours = [
  { timeStart: 8, timeEnd: 15 }, // Monday
  { timeStart: 8, timeEnd: 15 }, // Tuesday
  { timeStart: 8, timeEnd: 15 }, // Wednesday
  { timeStart: 8, timeEnd: 15 }, // Thursday
  { timeStart: 8, timeEnd: 15 }, // Friday
  { timeStart: 0, timeEnd: 0  }, // Saturday
  { timeStart: 0, timeEnd: 0  }  // Sunday
];

var downtownMinMax = [
  { minPizza: 0,  maxPizza: 4,  minDelivery: 0, maxDelivery: 4  }, // 8am-11am
  { minPizza: 0,  maxPizza: 7,  minDelivery: 0, maxDelivery: 4  }, // 11am-2pm
  { minPizza: 2,  maxPizza: 15, minDelivery: 1, maxDelivery: 4  }, // 2pm-5pm
  { minPizza: 10, maxPizza: 26, minDelivery: 4, maxDelivery: 6  }, // 5pm-8pm
  { minPizza: 8,  maxPizza: 22, minDelivery: 7, maxDelivery: 15 }, // 8pm-11pm
  { minPizza: 0,  maxPizza: 2,  minDelivery: 2, maxDelivery: 8  }  // 11pm-2am
];

var northEastHours = [
  { timeStart: 8, timeEnd: 14 }, // Monday
  { timeStart: 8, timeEnd: 14 }, // Tuesday
  { timeStart: 8, timeEnd: 14 }, // Wednesday
  { timeStart: 8, timeEnd: 14 }, // Thursday
  { timeStart: 8, timeEnd: 14 }, // Friday
  { timeStart: 0, timeEnd: 0  }, // Saturday
  { timeStart: 0, timeEnd: 0  }  // Sunday
];

var northEastMinMax = [
  { minPizza: 0,  maxPizza: 4,  minDelivery: 0,  maxDelivery: 4  }, // 8am-11am
  { minPizza: 0,  maxPizza: 7,  minDelivery: 0,  maxDelivery: 4  }, // 11am-2pm
  { minPizza: 5,  maxPizza: 15, minDelivery: 0,  maxDelivery: 4  }, // 2pm-5pm
  { minPizza: 25, maxPizza: 39, minDelivery: 13, maxDelivery: 18 }, // 5pm-8pm
  { minPizza: 22, maxPizza: 36, minDelivery: 5,  maxDelivery: 22 }, // 8pm-11pm
  { minPizza: 5,  maxPizza: 21, minDelivery: 16, maxDelivery: 31 }  // 11pm-2am
];

var clackamasHours = [
  { timeStart: 0, timeEnd: 0  }, // Monday
  { timeStart: 9, timeEnd: 18 }, // Tuesday
  { timeStart: 9, timeEnd: 18 }, // Wednesday
  { timeStart: 9, timeEnd: 18 }, // Thursday
  { timeStart: 9, timeEnd: 18 }, // Friday
  { timeStart: 9, timeEnd: 15 }, // Saturday
  { timeStart: 0, timeEnd: 0  }  // Sunday
];

var clackamasMinMax = [
  { minPizza: 2,  maxPizza: 7,  minDelivery: 3,  maxDelivery: 5  }, // 8am-11am
  { minPizza: 3,  maxPizza: 8,  minDelivery: 3,  maxDelivery: 9  }, // 11am-2pm
  { minPizza: 1,  maxPizza: 5,  minDelivery: 1,  maxDelivery: 4  }, // 2pm-5pm
  { minPizza: 5,  maxPizza: 13, minDelivery: 2,  maxDelivery: 4  }, // 5pm-8pm
  { minPizza: 22, maxPizza: 41, minDelivery: 15, maxDelivery: 42 }, // 8pm-11pm
  { minPizza: 15, maxPizza: 20, minDelivery: 6,  maxDelivery: 21 }  // 11pm-2am
];

var airportHours = [
  { timeStart: 0,  timeEnd: 0  }, // Monday
  { timeStart: 0,  timeEnd: 0  }, // Tuesday
  { timeStart: 10, timeEnd: 21 }, // Wednesday
  { timeStart: 10, timeEnd: 21 }, // Thursday
  { timeStart: 10, timeEnd: 21 }, // Friday
  { timeStart: 0,  timeEnd: 0  }, // Saturday
  { timeStart: 0,  timeEnd: 0  }  // Sunday
];

var airportMinMax = [
  { minPizza: 0, maxPizza: 4,  minDelivery: 0, maxDelivery: 4  }, // 8am-11am
  { minPizza: 0, maxPizza: 7,  minDelivery: 0, maxDelivery: 4  }, // 11am-2pm
  { minPizza: 2, maxPizza: 15, minDelivery: 1, maxDelivery: 4  }, // 2pm-5pm
  { minPizza: 6, maxPizza: 9,  minDelivery: 5, maxDelivery: 18 }, // 5pm-8pm
  { minPizza: 4, maxPizza: 8,  minDelivery: 2, maxDelivery: 5  }, // 8pm-11pm
  { minPizza: 2, maxPizza: 4,  minDelivery: 3, maxDelivery: 11 }  // 11pm-2am
];
