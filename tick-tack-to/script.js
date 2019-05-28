"use strict";

// const zeroZero = document.getElementById("0x0");
const zeroOne = document.getElementById("0x1");
const zeroTwo = document.getElementById("0x2");

const oneZero = document.getElementById("1x0");
const oneOne = document.getElementById("1x1");
const oneTwo = document.getElementById("1x2");

const twoZero = document.getElementById("2x0");
const twoOne = document.getElementById("2x1");
const twoTwo = document.getElementById("2x2");

let playersTurn = true;

const allBoxes = [...document.querySelectorAll(".box")];

allBoxes.forEach(function (id) {
  id.addEventListener("click", function () {
    return playersTurn = !playersTurn;
  });
})


function Box(id, state){
  this.id = `document.getElementById("${id}")`;
  this.state = state;
  this.drawBox = function () {
    this.id.src = "assets/img/cross.png";
    console.log("hello")
  }
}

const zeroZero = new Box("0x0", "empty")


zeroZero.id.addEventListener("click", Box.drawBox)




let boxes = [
  [[zeroZero], [zeroOne], [zeroTwo]],
  [[oneZero], [oneOne], [oneTwo]],
  [[twoZero], [twoOne], [twoTwo]]
];




// BOX empty, cross, circle

// keep track of turn

// insert cross if turn and box empty

// hit middle box first then chose corner with most options (vertical, horizontal, diagonal)
