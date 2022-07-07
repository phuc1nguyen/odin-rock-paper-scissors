function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randChoice = choices[Math.floor(Math.random() * choices.length)];

  return randChoice;
}

console.log(computerPlay());