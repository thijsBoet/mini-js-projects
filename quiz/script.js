'use strict';

let score=0;

function checkQuiz(){
    if (document.getElementById('1d').checked = true) {
        score++;
    }
    if (document.getElementById('2d').checked = true) {
        score++;
    }
    if (document.getElementById('3c').checked = true) {
        score++;
    }
    if (document.getElementById('4b').checked = true) {
        score++;
    }
    if (document.getElementById('5c').checked = true) {
        score++;
    }
    if (document.getElementById('6a').checked = true) {
        score++;
    }
    if (document.getElementById('7c').checked = true) {
        score++;
    }
    if (document.getElementById('8a').checked = true) {
        score++;
    }
    if (document.getElementById('9b').checked = true) {
        score++;
    }
    if (document.getElementById('10a').checked = true) {
        score++;
    }
    let parent = document.getElementById('parent');
    var child = document.getElementById("submitQuizBtn");
    parent.removeChild(child);

    document.getElementById('score').textContent = `You scored ${score}/10`;
}
document.getElementById('submitQuizBtn').addEventListener('click', checkQuiz, false);

