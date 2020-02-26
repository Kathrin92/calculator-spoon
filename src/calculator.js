"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");

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
const numberOne = Number(calculatorInputs[5].innerText);
const numberTwo = Number(calculatorInputs[6].innerText);

function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);
  console.log("clicked");
}
calculatorResult.addEventListener("click", handleClick);

function handleResult() {
  calculatorOutput.value = "";
  console.log("cleared");
}
calculatorClear.addEventListener("click", handleResult);

//calculatorInputs[0].addEventListener("click", handleInputClick);
//calculatorInputs[1].addEventListener("click", handleInputClick);

function addInputEventListener(calculatorInput) {
  console.log("addInputEventListener", calculatorInput.innerText);
}
calculatorInputs.forEach(addInputEventListener);

function addInputEventListener(calculatorInput) {
  calculatorInput.addEventListener("click", writeValueToOutput);
  function writeValueToOutput() {
    calculatorOutput.value = calculatorInput.innerText;
  }
}
