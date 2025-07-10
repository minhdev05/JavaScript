// 8a + 8b + 8c
const basketball = {
  price: 2095,
};
console.log(basketball);

basketball.price += 500;
console.log(basketball);

basketball["delivery-time"] = "3days";
console.log(basketball);

function comparePrice(product1, product2) {
  if (product1.price < product2.price) return product1;
  else return product2;
}

// 8d
const product1 = {
  name: "Laptop",
  price: 10000000,
};

const product2 = {
  name: "TV",
  price: 20000000,
};

console.log(comparePrice(product1, product2));

// 8e
function isSameProduct(product1, product2) {
  if (product1.name === product2.name && product1.price === product2.price)
    return true;
  else return false;
}

const product3 = {
  name: "T-shirt",
  price: 300000,
};

const product4 = {
  name: "T-shirt",
  price: 300000,
};

console.log(isSameProduct(product1, product2));
console.log(isSameProduct(product3, product4));

// 8f + 8g
console.log("MINH".toLowerCase());
console.log("minh".repeat(3));
