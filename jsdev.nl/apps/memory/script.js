const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockboard) return;
    if(this === firstCard) return;

    this.classList.toggle('flip');
    if(!hasFlipped){
        hasFlipped = true;
        firstCard = this;

        return;
    } 
    hasFlipped = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.framework===secondCard.dataset.framework
    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));