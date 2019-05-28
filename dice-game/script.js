'use strict';

const diceRoll = new Audio('assets/diceRoll.mp3');

const diceObject = [{
        "path": 'assets/one.png',
        "value": 1
    },
    {
        "path": 'assets/two.png',
        "value": 2
    },
    {
        "path": 'assets/three.png',
        "value": 3
    },
    {
        "path": 'assets/four.png',
        "value": 4
    },
    {
        "path": 'assets/five.png',
        "value": 5
    },
    {
        "path": 'assets/six.png',
        "value": 6
    },
]

document.getElementById('randomDiceBtn').addEventListener('click', function randomImg() {
    const rndDiceOne = diceObject[Math.floor(Math.random() * 6)];
    const rndDiceTwo = diceObject[Math.floor(Math.random() * 6)];

    document.getElementById('dice1').src = rndDiceOne.path;
    document.getElementById('dice2').src = rndDiceTwo.path;

    document.getElementById('rndNumOne').innerText = rndDiceOne.value;
    document.getElementById('rndNumTwo').innerText = rndDiceTwo.value;

    document.getElementById('total').innerText = rndDiceOne.value + rndDiceTwo.value;

    diceRoll.currentTime = 0;
    diceRoll.play();
});