"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelector(".calculator__input");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
const numberOne = Number(calculatorInput.innerTexr);
calculatorOutput.value = add(calculatorInput.innerText, 33);
