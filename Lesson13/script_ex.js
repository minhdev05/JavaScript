// 13a
function add() {
  console.log(2 + 3);
}

add();
add();

// 13b
function runTwice(param) {
  param();
  param();
}

runTwice(add);
runTwice(() => console.log("12b"));

// 13c + 13d
document.querySelector(".js-start-btn").addEventListener("click", () => {
  start();
});

function start() {
  document.querySelector(".start-btn").innerText = "Loading...";
  setTimeout(() => {
    document.querySelector(".start-btn").innerText = "Finished";
  }, 3000);
}

// 13e + 13f
let isClicked = false;
let timeoutId = -1;

document.querySelector(".js-add-to-cart-btn").addEventListener("click", () => {
  addToCart();
});

function addToCart() {
  const notification = document.querySelector(".notification");
  if (timeoutId != -1) {
    clearTimeout(timeoutId);
  }
  notification.innerText = "Added";
  timeoutId = setTimeout(() => {
    notification.innerText = "";
  }, 2000);
}

// 13g + 13h
let messages = 2;
document.title = "App";

document.querySelector(".js-add-msg-btn").addEventListener("click", () => {
  addMsg();
});

function addMsg() {
  messages++;
}

document.querySelector(".js-remove-msg-btn").addEventListener("click", () => {
  removeMsg();
});

function removeMsg() {
  if (messages > 0) {
    messages--;
  }
}

function renderMsg() {
  setInterval(() => {
    if (document.title === "App" && messages > 0) {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = "App";
    }
  }, 1000);
}

renderMsg();

// 13j + 13k
const multiply = (first, second) => first * second;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

// 13l
function countPositive(nums) {
  let count = 0;
  nums.forEach((element) => {
    if (element > 0) count++;
  });
  return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 13m
function addNum(array, num) {
  return array.map((element) => element + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

// 13n + 13o
function removeEgg(foods) {
  let count = 2;
  return foods.filter((food) => {
    if (food !== "egg" || count == 0) {
      return food;
    } else {
      count--;
    }
  });
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));
