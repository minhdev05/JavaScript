// 11o + 11p + 11q
function findIndex(array, word) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findIndex(["hello", "world", "search", "good"], "search"));
console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

// 11r
function removeEgg(foods) {
  const result = [];
  for (let food of foods) {
    if (food === "egg") {
      continue;
    } else {
      result.push(food);
    }
  }
  return result;
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

// 11s
function removeEgg(foods) {
  const result = [];
  let count = 2;
  for (let food of foods) {
    if (food === "egg" && count > 0) {
      count--;
      continue;
    } else {
      result.push(food);
    }
  }
  return result;
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

// 11t + 11u
function removeEgg(foods) {
  const newFoods = foods.slice();
  const result = [];
  let count = 2;
  for (let i = newFoods.length - 1; i >= 0; i--) {
    if (newFoods[i] === "egg" && count > 0) {
      count--;
      continue;
    } else {
      result.push(newFoods[i]);
    }
  }
  return result.reverse();
}

const foods = ["egg", "apple", "egg", "egg", "ham"];
console.log(removeEgg(foods));
console.log(foods);

// 11v
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// 11w
function unique(array) {
  const result = [];
  for (let element of array) {
    if (result.length === 0 || findIndex(result, element) === -1) {
      result.push(element);
    }
  }
  return result;
}

console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));
