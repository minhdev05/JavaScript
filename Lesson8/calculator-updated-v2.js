let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(character) {
  if (("0" <= character && character <= "9") || character === ".") {
    calculation += character;
  } else if (
    character === "+" ||
    character === "-" ||
    character === "*" ||
    character === "/"
  ) {
    calculation += ` ${character} `;
  } else if (character === "=") {
    calculation = eval(calculation);
  } else {
    calculation = "";
  }

  localStorage.setItem("calculation", JSON.stringify(calculation));
  console.log(calculation);
}
