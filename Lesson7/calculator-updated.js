let calculation = "";

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

  console.log(calculation);
}
