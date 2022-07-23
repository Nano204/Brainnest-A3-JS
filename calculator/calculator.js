//Create all funtions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  return operator(a, b);
}

function clearValues() {
  while (operationValues.length) operationValues.pop();
  actualValue = 0;
  display.innerText = 0;
  console.log(operationValues);
}

//Refence display
const display = document.getElementById("display");
const operationValues = [];
let actualValue = 0;

//Reference numpad && set event listeners for numpad
const numberButtons = Array.from(
  document.getElementById("buttonPad").querySelectorAll(".number")
);
numberButtons.map((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerText == "." && actualValue.includes(".")) return;
    actualValue = actualValue + event.target.innerText;
    display.innerText =
      display.innerText == 0
        ? event.target.innerText
        : display.innerText + event.target.innerText;
  });
});

//Reference operation buttons and set litener
const operatorButtons = Array.from(
  document.getElementById("buttonPad").querySelectorAll(".operator")
);
operatorButtons.map((button) => {
  button.addEventListener("click", (event) => {
    if (
      !operationValues.length ||
      typeof operationValues[operationValues.length - 1] == "function"
    ) {
      operationValues.push(Number(actualValue));
    }
    actualValue = 0;
    display.innerText = display.innerText + event.target.innerText;
    let operator = event.target.getAttribute("operator");
    operationValues.push(eval(operator));
  });
});

//Reference equal button and set litener
const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", (event) => {
  console.log(operationValues);
  if (typeof operationValues[operationValues.length - 1] == "function") {
    operationValues.push(Number(actualValue));
    while (operationValues.length > 1) {
      const value1 = operationValues.shift();
      const operator = operationValues.shift();
      const value2 = operationValues[0];
      operationValues[0] = operate(value1, value2, operator);
    }
    display.innerText = operationValues[0];
  }
});

//Reference clear button and set litener
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearValues);
