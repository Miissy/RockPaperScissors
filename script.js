// Make a function that will return a random choice from the computer
function getComputerChoice() {
    // randomly return rock, paper or scissors
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}


// Write a function that plays a single round of rock, paper, scissors
// Returns a string that declares the winner of the round

const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const result = document.querySelector('#result');


let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerChoice;

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
        const playerSelection = playerChoice;
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


// Function that checks the result
function checkWinner() {
    if (playerCount || computerCount === 5) {
        if (playerCount > computerCount) {
            return 'Result: Player won!';
        } else {
            return 'Result: Computer won!';
        }
    }
};


// Add an event listener to to the buttons that call playRound function
// Returns the correct playerSelection everytime button is clicked
const btn = document.querySelectorAll('#btn');

btn.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent.toLowerCase();
    playRound();

    playerText.textContent = `Player: ${playerCount}`;
    computerText.textContent = `Computer: ${computerCount}`;

    if (playerCount === 5 || computerCount === 5) {
        if (playerCount > computerCount) {
            result.textContent = 'Result: Player won!';
        } else {
            result.textContent = 'Result: Computer won!';
        }
    }
}));