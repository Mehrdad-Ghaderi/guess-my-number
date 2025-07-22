'use strict';

let numberToGuess = Math.trunc(Math.random() * 20) + 1;

let score = document.querySelector('.score').textContent;

let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    printResult('No number received!');
  } else {
    checkNumber(guessedNumber);
  }
});

const checkNumber = number => {
  if (score > 0) {
    if (number > numberToGuess) {
      decScore();
      printResult('Too high!');
    } else if (number < numberToGuess) {
      decScore();
      printResult('Too low!');
    } else {
      setHighScore();
      printResult('Correct guess!');
      document.querySelector('.number').textContent = numberToGuess;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  } else {
    decScore();
    printResult('You lost!');
  }
};

const printResult = message => {
  document.querySelector('.message').textContent = message;
};

const decScore = function () {
  document.querySelector('.score').textContent = score--;
};

const setHighScore = function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};
