'use strict';

const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');
const thirdColor = document.querySelector('.third-color');
const fourthColor = document.querySelector(".fourth-color");
const fifthColor = document.querySelector(".fifth-color");

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
  getHex(thirdColor);
});

const getHex = (color) => {
  const hexArray = color.value.slice(1).toUpperCase().split("");
  hex.findIndex(hexArray[0]
}



const getComplimentaryColor = (color) => {

}

