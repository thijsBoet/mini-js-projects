'use strict';

const submitQuizBtn = document.getElementById("submitQuizBtn");
const displayScore = document.getElementById('score');

let score = 0;

submitQuizBtn.addEventListener('click', function(e){

    if (document.getElementById('1d').checked === true)  score++;
    if (document.getElementById('2d').checked === true)  score++;
    if (document.getElementById('3c').checked === true)  score++;
    if (document.getElementById('4b').checked === true)  score++;
    if (document.getElementById('5c').checked === true)  score++;
    if (document.getElementById('6a').checked === true)  score++;
    if (document.getElementById('7c').checked === true)  score++;
    if (document.getElementById('8a').checked === true)  score++;
    if (document.getElementById('9b').checked === true)  score++;
    if (document.getElementById('10a').checked === true) score++;

    displayScore.textContent = `You scored ${score}/10`;
    score = 0;

    e.preventDefault();
});