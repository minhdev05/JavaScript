// Calculations with floats are sometimes inaccurate
// When working with money:
//    1. Do the calculation in cents. 1 dollar = 100 cents
//    2. Convert back to dollars
// Math.round() is used to round to nearest integer

// 2a
console.log(10 + 3 * 8 + 5);

// 2b
console.log((10 + 3 * 8 + 5) / 3);

// 2c
console.log((1850 + 750 * 2) / 100);

// 2d
console.log(((1850 + 750 * 2) * 0.1) / 100);

// 2e
console.log(((1850 + 750 * 2) * 0.2) / 100);

// 2f
console.log((1899 + 1090 * 2 + 2095) / 100);

// 2g
console.log((1899 + 1090 * 2 + 2095 + 998) / 100);

// 2h
console.log(Math.round((1899 + 1090 * 2 + 2095 + 998) * 0.1) / 100);

// 2i
console.log(
  (1899 +
    1090 * 2 +
    2095 +
    998 +
    Math.round((1899 + 1090 * 2 + 2095 + 998) * 0.1)) /
    100
);

// 2j
console.log(Math.floor(2.8));

// 2k
console.log(Math.ceil(2.2));

// 2l convert 25 degree C -> F
console.log((25 * 9) / 5 + 32);

// 2m convert 86 degree F -> C
console.log(((86 - 32) * 5) / 9);

// 2n convert -5 degree C to F
console.log((-5 * 9) / 5 + 32);
