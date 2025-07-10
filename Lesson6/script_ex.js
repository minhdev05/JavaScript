// 6a + 6b + 6c
let hour = Math.floor(Math.random() * 24);
let name = "Nhat Minh";
let message = "";
console.log(`Current hour: ${hour}`);

if (6 <= hour && hour <= 12) {
  message = `Good morning ${name}!`;
} else if (13 <= hour && hour <= 17) {
  message = `Good afternoon ${name}!`;
} else {
  message = `Good night ${name}!`;
}

console.log(message);

// 6d + 6e
let age = Math.floor(Math.random() * 100) + 1;
const isHoliday = true;
console.log(`Age: ${age}`);

if (isHoliday && (age <= 6 || age >= 65)) {
  console.log("Discount");
} else {
  console.log("No discount");
}

// 6f -> 6j
let randomNumber = Math.random();
let result = "";
let guess = "heads";

if (randomNumber < 0.5) {
  result = "heads";
} else {
  result = "tails";
}

console.log(`Guess: ${guess}`);
console.log(`Result: ${result}`);
guess === result ? console.log("You win") : console.log("You lose!");

// 6k + 6l
let cartQuantity = 0;
let maxQuantity = 10;
