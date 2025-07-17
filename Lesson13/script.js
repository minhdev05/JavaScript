// setTimeout(function () {
//   console.log("time out");
// }, 3000);

// console.log("next line");

// setInterval(function () {
//   console.log("interval");
// }, 3000);

// const todoList = ["make dinner", "wash dishes", "watch youtube"];

// todoList.forEach(function (element, index) {
//   if (element === "wash dishes") {
//     return;
//   }
//   console.log(`${index + 1}. ${element}`);
// });

// const regularFunction = function (param, param2) {
//   console.log("Hello");
//   return 5;
// };

// const arrowFunction = (param, param2) => {
//   console.log("Hello");
//   return 5;
// };

// arrowFunction();

// const oneParam = (param) => {
//   console.log(param + 1);
// };

// oneParam(2);

// const oneLine = () => 2 + 3;
// console.log(oneLine());

// const todoList = ["make dinner", "wash dishes", "watch youtube"];

// todoList.forEach((element, index) => {
//   if (element === "wash dishes") {
//     return;
//   }

//   console.log(`${index + 1}. ${element}`);
// });

const clickBtn = document.querySelector(".click-btn");

const eventListener = () => {
  console.log("click");
};

clickBtn.addEventListener("click", eventListener);

clickBtn.removeEventListener("click", eventListener);

clickBtn.addEventListener("click", () => {
  console.log("click2");
});
