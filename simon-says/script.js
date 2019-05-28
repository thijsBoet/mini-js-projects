'use strict';

// const squares = {
  
// }

const colors = ["red", "yellow", "blue", "green"];

const red1 = document.getElementById("red1");
const yellow2 = document.getElementById("yellow2");
const blue3 = document.getElementById("blue3");
const green4 = document.getElementById("green4");

const squares = [red1, yellow2, blue3, green4];

const popUpSound = new Audio("assets/mp3/pop-up.mp3");
const gameOverSound = new Audio("assets/mp3/game-over.mp3");
const wonSound = new Audio("assets/mp3/won.mp3");

let userSeq = [];
let simonSeq = [];

let id, color, level = 0;

const getRandomNum = () => {
  const random = Math.floor(Math.random() * 4);
  return random;
}

const numOfColorsSeq = (numOfColors) => {
  for (let i = 0; i < numOfColors; i++) {
    const random = getRandomNum();
    simonSeq.push(squares[random]);
  }
}

numOfColorsSeq(4);

console.log(simonSeq);

const popUpEffect = (square) => {
  square.style.opacity = "1";
  square.style.filter = "alpha(opacity=100)";
  square.style.width = "225px";
  square.style.height = "225px";
  //popUpSound.play();
  setTimeout(function () {
    square.style.opacity = "0.75";
    square.style.filter = "alpha(opacity=75)";
    square.style.width = "200px";
    square.style.height = "200px";
  }, 500)
}

const runSimonSeq = (simonSeq) => {
  for (let i = 0; i < simonSeq.length; i++){
    setTimeout(function () {
      popUpEffect(simonSeq[i]);
      console.log(simonSeq[i]);
    }, 500);
  }
}

runSimonSeq(simonSeq);








// random sequence

// remember sequence

// compare sequence

// sequence correct => new harder sequence

// sequence incorrect => three more tries

// still incorrect game over