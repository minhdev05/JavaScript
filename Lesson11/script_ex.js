// 11a
const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
console.log(nums);

// 11b
function getLastValue(arr) {
  return arr[arr.length - 1];
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "good"]));

// 11c
function arraySwap(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "good"]));

// 11d
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 11f
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

i = 5;
while (i >= 0) {
  console.log(i);
  i--;
}

// 11g
const arr = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  arr[i]++;
}

console.log(arr);

// 11h
function addOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

// 11i
function addNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += num;
  }
  return arr;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

// 11j
function addArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i] + arr2[i]);
  }
  return merged;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

// 11k
function countPositive(nums) {
  let count = 0;
  for (let num of nums) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 11l + 11m
function minMax(nums) {
  const result = {
    min: null,
    max: null,
  };

  for (let i = 0; i < nums.length; i++) {
    result.min = Math.min(result.min, nums[i]);
    result.max = Math.max(result.max, nums[i]);
  }

  return result;
}

console.log(minMax([]));
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

// 11n
function countWords(words) {
  const counter = {};
  for (let word of words) {
    if (!counter[word]) {
      counter[word] = 1;
    } else {
      counter[word]++;
    }
  }
  return counter;
}

console.log(countWords(["apple", "grape", "apple", "apple"]));
