let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  if (value === "=") {
    calculation = eval(calculation);
  } else if (value === "Clear") {
    calculation = "";
  } else {
    calculation += value;
  }

  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".display-calculation").innerText = calculation;
}
