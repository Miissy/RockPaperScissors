// Make a function that will return a random choice from the computer
function getComputerChoice() {
    // randomly return rock, paper or scissors
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}

// Write a function that plays a single round of rock, paper, scissors
// Returns a string that declares the winner of the round

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
        console.log('It\'s a tie!');
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock')
    ) {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
        return ++computerCount;
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
        return ++playerCount;
    }
}

function game() {
    // Call playRound function to play a round of five games
    // Keeps a counter and decides a winner at the end
    for (let i = 0; i < 5; i++) {
        const playerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerCount > computerCount) {
        console.log('Congrats! You won!');
    } else if (computerCount > playerCount) {
        console.log('Oh no... You lost :(');
    } else {
        console.log('It\'s a tie!');
    }

    console.log(`Player: ${playerCount} Computer: ${computerCount}`);
}

game();