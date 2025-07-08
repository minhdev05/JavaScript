// 3a + 3b + 3c
console.log("My name is" + " " + "Nhat Minh");

// 3d + 3e + 3f
console.log("Total cost: $" + (5 + 3));
console.log(`Total cost: $${3 + 5}`);
alert(`Total cost: $${3 + 5}`);

// 3g + 3h + 3i
console.log("Total cost: $" + (599 + 295) / 100);
console.log(`Total cost: $${(599 + 295) / 100}`);
alert(`Total cost: $${(599 + 295) / 100}`);

// 3j
alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`);

// 3k
console.log(`Items (${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`);
console.log(`Shipping & handling: $${(499 + 499) / 100}`);
console.log(`Total befor tax: $${(2095 * 2 + 799 * 2 + 499 + 499) / 100}`);
console.log(
  `Estimated tax (10%): $${
    Math.round((2095 * 2 + 799 * 2 + 499 + 499) * 0.1) / 100
  }`
);

console.log(
  `Order total: $${Math.round((2095 * 2 + 799 * 2 + 499 + 499) * 1.1) / 100}`
);
