// 7a + 7b
function greet(name = "there") {
  console.log(`Hello ${name}!`);
}

greet("Nhat Minh");
greet("Mai Phuong");
greet();

function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
  let result = "";
  if (unit === "C") {
    result = `${convertToFahrenheit(degrees)}F`;
  } else {
    result = `${convertToCelsius(degrees)}C`;
  }
  return result;
}

console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));

function convertLength(length, from, to) {
  let result = "";
  if (from === "km") {
    if (to === "km") result = `${length} km`;
    else if (to === "miles") result = `${length / 1.6} miles`;
    else if (to === "ft") result = `${length * 3281} ft`;
    else result = `Invalid unit: ${to}`;
  } else if (from === "miles") {
    if (to === "miles") result = `${length} miles`;
    else if (to === "km") result = `${length * 1.6} km`;
    else if (to === "ft") result = `${length * 5280} ft`;
    else result = `Invalid unit: ${to}`;
  } else if (from === "ft") {
    if (to === "ft") result = `${length} ft`;
    else if (to === "km") result = `${length / 3281} km`;
    else if (to === "miles") result = `${length / 5280} miles`;
    else result = `Invalid unit: ${to}`;
  } else {
    result = `Invalid unit: ${from}`;
  }
  return result;
}

console.log(convertLength(50, "miles", "km"));
console.log(convertLength(32, "km", "miles"));
console.log(convertLength(50, "km", "km"));
console.log(convertLength(5, "miles", "km"));
console.log(convertLength(5, "miles", "ft"));
console.log(convertLength(5, "km", "ft"));
console.log(convertLength(5, "lbs", "lbs"));
