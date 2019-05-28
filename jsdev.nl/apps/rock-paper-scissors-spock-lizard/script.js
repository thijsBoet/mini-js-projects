'use strict';

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const spockBtn = document.getElementById('spockBtn');
const lizardBtn = document.getElementById('lizardBtn');

const computer = document.getElementById('computer');
const iconsArray = [
        ['rock', './assets/icons/diamond.svg'],
        ['paper', './assets/icons/paper-plane.svg'],
        ['scissors', './assets/icons/scissors.svg'],
        ['spock', './assets/icons/vulcan-salute.svg'],
        ['lizard', './assets/icons/lizard.svg']
]

// function win(){
//     document.getElementsByClassName('top-row').style.backgroundColor = 'red';
//     document.getElementsByClassName('bottom-row').style.backgroundColor = 'blue';
// }

// function lose(){
//     document.getElementsByClassName('top-row').style.backgroundColor = 'blue';
//     document.getElementsByClassName('bottom-row').style.backgroundColor = 'red';
// }

// function draw(){
//     document.getElementsByClassName('top-row').style.backgroundColor = '#FFAF06';
//     document.getElementsByClassName('bottom-row').style.backgroundColor = '#FFAF06;';
// }

function randomIconRock(){
    let random = iconsArray[Math.floor(Math.random() * 5)];
    computer.src=random[1];

    switch(random[0]) {
        case 'rock':
            document.getElementById('result').innerText = 'Draw!';
            document.getElementById('message').innerText = 'Draw!';

            break;
        case 'paper':
            document.getElementById('result').innerText = 'You lose!';
            document.getElementById('message').innerText = 'Paper beats rock!';

            break;
        case 'scissors':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Rock beat scissors!';

            break;
        case 'spock':
            document.getElementById('result').innerText = 'You lose!';
            document.getElementById('message').innerText = 'Spock beats rock!';

            break;
        case 'lizard':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Rock beats lizard';

            break;
    }
}

function randomIconPaper(){
    let random = iconsArray[Math.floor(Math.random() * 5)];

    switch(random[0]) {
        case 'rock':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Paper beats rock!';
            break;
        case 'paper':
            document.getElementById('result').innerText = 'Draw!';
            document.getElementById('message').innerText = 'Draw!';
            break;
        case 'scissors':
            document.getElementById('result').innerText = 'You Lose!';
            document.getElementById('message').innerText = 'Scissors beat paper!';
            break;
        case 'spock':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Paper beats Spock!';
            break;
        case 'lizard':
            document.getElementById('result').innerText = 'You Lose!';
            document.getElementById('message').innerText = 'Lizard beats paper';
            break;
    }
    computer.src=random[1];
}

function randomIconScissors(){
    let random = iconsArray[Math.floor(Math.random() * 5)];
    computer.src=random[1];

    switch(random[0]) {
        case 'rock':
            document.getElementById('result').innerText = 'You lose!';
            document.getElementById('message').innerText = 'Rock beat scissors!';
            break;
        case 'paper':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Scissors beat paper!';
            break;
        case 'scissors':
            document.getElementById('result').innerText = 'Draw!';
            document.getElementById('message').innerText = 'Draw!';
            break;
        case 'spock':
            document.getElementById('result').innerText = 'You lose!';
            document.getElementById('message').innerText = 'Spock beats scissors!';
            break;
        case 'lizard':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Scissors beat lizard';
            break;
    }
}

function randomIconSpock(){
    let random = iconsArray[Math.floor(Math.random() * 5)];
    computer.src=random[1];

    switch(random[0]) {
        case 'rock':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Spock beats rock!';
            break;
        case 'paper':
            document.getElementById('result').innerText = 'You lose!';
            document.getElementById('message').innerText = 'Paper beats Spock!';
            break;
        case 'scissors':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Spock beat scissors!';
            break;
        case 'spock':
            document.getElementById('result').innerText = 'Draw!';
            document.getElementById('message').innerText = 'Draw!';
            break;
        case 'lizard':
            document.getElementById('result').innerText = 'You Lose!';
            document.getElementById('message').innerText = 'Lizard beats Spock';
            break;
    }
}

function randomIconLizard(){
    let random = iconsArray[Math.floor(Math.random() * 5)];
    computer.src=random[1];

    switch(random[0]) {
        case 'rock':
            document.getElementById('result').innerText = 'You Lose!';
            document.getElementById('message').innerText = 'Rock beats lizard!';
            break;
        case 'paper':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Lizard beats paper!';
            break;
        case 'scissors':
            document.getElementById('result').innerText = 'You Lose!';
            document.getElementById('message').innerText = 'Scissors beat lizard!';
            break;
        case 'spock':
            document.getElementById('result').innerText = 'You Win!';
            document.getElementById('message').innerText = 'Lizard beats Spock!';
            break;
        case 'lizard':
            document.getElementById('result').innerText = 'Draw!';
            document.getElementById('message').innerText = 'Draw!';
            break;
    }
}


rockBtn.addEventListener('click', randomIconRock, false)
paperBtn.addEventListener('click', randomIconPaper, false)
scissorsBtn.addEventListener('click', randomIconScissors, false)
spockBtn.addEventListener('click', randomIconSpock, false)
lizardBtn.addEventListener('click', randomIconLizard, false)
