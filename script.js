const player = prompt('Enter rock or paper or scissors');

function ucwords(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randChoice = choices[Math.floor(Math.random() * choices.length)];

  return randChoice;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;

  if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    // losing cases
    console.log("player => " + player, "computer => " + computer);
    return `You lose! ${ucwords(computer)} beats ${player}`;
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    // winning cases
    console.log("player => " + player, "computer => " + computer);
    return `You won! ${ucwords(player)} beats ${computer}`;
  } else if (player === computer) {
    // tie
    console.log("player => " + player, "computer => " + computer);
    return `Draw! You both play ${player}`;
  } else {
    // invalid inputs
    return "Please enter 'rock' or 'paper' or 'scissors'";
  }
}