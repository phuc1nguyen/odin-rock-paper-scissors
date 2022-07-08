// Weapon types
const playerChoices = ['rock', 'paper', 'scissors'];
const computerChoices = ['rock', 'paper', 'scissors', 'secret'];
const rock = '<i class="fa-solid fa-hand-back-fist"></i>';
const paper = '<i class="fa-solid fa-hand"></i>';
const scissors = '<i class="fa-solid fa-hand-scissors"></i>';
const secret = '<i class="fa-solid fa-hand-middle-finger"></i>';

// UI elements
const playerAtk = document.querySelector('.points-you');
const computerAtk = document.querySelector('.points-computer');
const weapons = document.querySelectorAll('.choice');
const againBtn = document.querySelector('.btn-again');
const weaponChoices = document.querySelector('.weapons');
const results = document.querySelector('.results');
const resultsMsg = document.querySelector('.results-item');
const roundsLeft = document.querySelector('.rounds-left');
const playerScore = document.querySelector('.pts-1');
const computerScore = document.querySelector('.pts-2');

// Game Infos
let rounds = 5;
let playerPts = 0, computerPts = 0;
let playerPlay = '';

roundsLeft.textContent = rounds;
playerScore.textContent = playerPts;
computerScore.textContent = computerPts;

weapons.forEach(weapon => {
  weapon.addEventListener('click', () => {
    if (weapon.dataset.choice === 'rock') {
      playerAtk.innerHTML = rock;
    } else if (weapon.dataset.choice === 'paper') {
      playerAtk.innerHTML = paper;
    } else if (weapon.dataset.choice === 'scissors') {
      playerAtk.innerHTML = scissors;
    } else {
      alert("Please don't do such thing");
    }
    playerPlay = weapon.dataset.choice;
    playRound(playerPlay, computerPlay());
  })
});

function computerPlay() {
  const random = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (random === 'rock') {
    computerAtk.innerHTML = rock;
  } else if (random === 'paper') {
    computerAtk.innerHTML = paper;
  } else if (random === 'scissors') {
    computerAtk.innerHTML = scissors;
  } else {
    computerAtk.innerHTML = secret;
  }

  return random;
}

function playRound(player, computer) {
  if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    // losing cases
    console.log(player + '-' + computer);
    computerPts++;
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    // winning cases
    console.log(player + '-' + computer);
    playerPts++;
  } else if (player === computer) {
    // tying cases
    console.log(player + '-' + computer);
  } else if (computer === 'secret') {
    endGame('destroy');
  }

  updateRound();
}

function updateRound() {
  rounds--;
  roundsLeft.textContent = rounds;
  playerScore.textContent = playerPts;
  computerScore.textContent = computerPts;
  console.log(rounds);

  if (rounds === 0 && (playerPts > computerPts)) {
    endGame('won');
  } else if (rounds === 0 && (playerPts < computerPts)) {
    endGame('lost');
  }
}

function endGame(type) {
  weaponChoices.style.display = 'none';
  results.style.display = 'flex';

  if (type === 'won') {
    resultsMsg.style.color = 'lightgreen';
    resultsMsg.textContent = 'YOU WON!';
  } else if (type === 'lost') {
    resultsMsg.style.color = 'red';
    resultsMsg.textContent = 'YOU LOST!';
  } else {
    resultsMsg.style.color = 'red';
    resultsMsg.textContent = 'YOU LOST! IT\'S COMPUTER\'S SECRET WEAPON.';
  }

  againBtn.disabled = false;
  againBtn.addEventListener('click', () => {
    window.location.reload();
  });
}