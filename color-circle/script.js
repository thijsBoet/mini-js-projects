'use strict';

// const firstColor = document.querySelector('.first-color');
// const secondColor = document.querySelector('.second-color');
const thirdColor = document.querySelector('.third-color');
const thirdColorText = document.querySelector('.third-color-text')
// const fourthColor = document.querySelector(".fourth-color");
// const fifthColor = document.querySelector(".fifth-color");

let heading = document.querySelector(".heading").style.color;
let newColor = "";

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

thirdColor.addEventListener("input", function () {
  // heading.style.color = 
  newColor = getComplimentaryColor(thirdColor);
  thirdColorText.value = thirdColor.value;
  thirdColor.value = thirdColorText.value;
});



const getHexArray = (hexValue) => {
  const hexArray = hexValue.value.slice(1).toUpperCase().split("");
  return hexArray;
};

const formatHexString = (newColor) => {
  newColor.unshift("#");
  return newColor.join("");
};

const getComplimentaryColor = (hexValue) => {
  const hexArray = getHexArray(hexValue);
  const complimentary = [];
  hexArray.map((hexDigit) => {
    const index = hex.lastIndexOf(hexDigit);
    complimentary.push(hex[(index + 8) % 16]);
  });
  return formatHexString(complimentary);
};

const getTernaryColor = (hexValue) => {
  const hexArray = getHexArray(hexValue);
  const ternary = [];
  hexArray.map((hexDigit) => {
    const index = hex.lastIndexOf(hexDigit);
    ternary.push(hex[(index + 5) % 16]);
  });
  return formatHexString(ternary);
};

const validateHex = (hexString) => {
  const validateHexDigits = hexString.slice(1).toUpperCase().split("").map(hexDigit => hex.includes(hexDigit))
  return (
    validateHexDigits.every((hexDigit) => hexDigit === true) &&
    hexString[0] === "#" &&
    hexString.length === 7
  );
}

thirdColorText.value = thirdColor.value;

console.log(validateHex("#111111"))