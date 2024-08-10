'use strict';
let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1

const displayMessage = function (message)
{
    document.querySelector('.message').textContent = message
}



document.querySelector('.check').addEventListener("click", () =>
{
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('🚫 No Number');
    }
    else if (guess === number) {

        displayMessage('Correct Number');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.background = '#60b347'

        if (score > highScore) {
            document.querySelector('.highscore').textContent = score
        }

    }

    else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess < number ? "To Low" : "To High");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'Game Over ! ';
            score--;
            document.querySelector('.score').textContent = 0;
        }

    }

})


document.querySelector('.again').addEventListener('click', () =>
{
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?';
})



