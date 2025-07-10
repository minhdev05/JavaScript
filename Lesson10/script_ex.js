const buttonElement = document
  .querySelector("button")
  .classList.contains("js-button");

console.log(buttonElement);

// function toggle(button) {
//   const buttonElement = document.querySelector(`.js-${button}-btn`);

//   if (buttonElement.classList.contains("is-toggled")) {
//     buttonElement.classList.remove("is-toggled");
//   } else {
//     buttonElement.classList.add("is-toggled");
//   }
// }

function toggle(button) {
  if (button === "gaming") {
    switchMode("gaming", 1);
    switchMode("music", 0);
    switchMode("tech", 0);
  } else if (button === "music") {
    switchMode("gaming", 0);
    switchMode("music", 1);
    switchMode("tech", 0);
  } else {
    switchMode("gaming", 0);
    switchMode("music", 0);
    switchMode("tech", 1);
  }
}

function switchMode(button, state) {
  if (state === 0) {
    // TURN OFF
    document.querySelector(`.js-${button}-btn`).classList.remove("is-toggled");
  } else {
    // TURN ON
    document.querySelector(`.js-${button}-btn`).classList.add("is-toggled");
  }
}

function handleCostKeyDown(event) {
  if (event.key === "Enter") {
    calculate();
  }
}

function calculate() {
  let cost = Number(document.querySelector(".js-cost-input").value);
  let displayResult = document.querySelector(".result");
  if (cost < 0) {
    displayResult.classList.add("error-msg");
    displayResult.innerHTML = "Error: cost cannot be less than $0";
  } else {
    displayResult.classList.remove("error-msg");
    if (cost < 40) cost += 10;
    displayResult.innerHTML = `$${cost}`;
  }
}
