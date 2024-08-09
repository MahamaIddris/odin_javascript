// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Get DOM elements
const scoreDisplay = document.getElementById('score');
const resultText = document.getElementById('resultText');
const resetButton = document.getElementById('resetButton');
const buttons = document.querySelectorAll('button[id^="rock"], button[id^="paper"], button[id^="scissors"]');

// Define the playRound function
function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    let result = '';
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'You win this round!';
        playerScore++;
    } else {
        result = 'You lose this round!';
        computerScore++;
    }
    
    // Update the result text
    resultText.textContent = `Computer chose ${computerSelection}. ${result}`;
    
    // Update the score display
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    
    // Check if there's a winner
    if (playerScore === 5) {
        resultText.textContent = 'Congratulations! You won the game!';
        disableButtons();
        showResetButton();
    } else if (computerScore === 5) {
        resultText.textContent = 'Sorry, you lost the game!';
        disableButtons();
        showResetButton();
    }
}

// Disable all buttons after game ends
function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

// Show the reset button
function showResetButton() {
    resetButton.style.display = 'block';
}

// Hide the reset button and reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    resultText.textContent = 'Make your choice!';
    resetButton.style.display = 'none';
    buttons.forEach(button => button.disabled = false);
}

// Set up event listeners
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
resetButton.addEventListener('click', resetGame);
