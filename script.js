const playerChoices = ['rock', 'paper', 'scissors'];
const computerChoices = ['rock', 'paper', 'scissors', 'fu'];

function ucwords(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function validatePlayerChoice(player) {
  player = player.toLowerCase();

  if (!choices.includes(player)) {
    console.log("Invalid input");
  }

  return player;
}

function computerPlay() {
  const randChoice = choices[Math.floor(Math.random() * choices.length)];

  return randChoice;
}

function playRound(player, computer) {
  if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    // losing cases
    console.log(player + '-' + computer);
    return 'computer';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    // winning cases
    console.log(player + '-' + computer);
    return 'player';
  } else if (player === computer) {
    // tie
    console.log(player + '-' + computer);
    return 'draw';
  }
}

function game() {
  let message = '';
  let playerPts = 0, computerPts = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt('Enter rock or paper or scissors');
    const validated = validatePlayerChoice(playerChoice);
    const round = playRound(validated, computerPlay());

    if (round === 'player') playerPts++;
    else if (round === 'computer') computerPts++;
    else continue;
  }

  if (playerPts > computerPts) {
    message = `You won after five games. You: ${playerPts} - Computer: ${computerPts}`;  
  } else if (playerPts < computerPts) {
    message = `You lost after five games. You: ${playerPts} - Computer: ${computerPts}`;
  } else {
    message = `Tie. You: ${playerPts} - Computer: ${computerPts}`;
  }

  console.log(message);
}

const weapons = document.querySelectorAll('.choice');

weapons.forEach(weapon => {
  weapon.addEventListener('click', () => {
    console.log(weapon.dataset.choice);
  })
});