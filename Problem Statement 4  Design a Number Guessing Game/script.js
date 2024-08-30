// script.js

document.addEventListener('DOMContentLoaded', () => {

    // Variables to track game state
    let randomNumber = generateRandomNumber(1, 100);
    let attemptsLeft = 5;

    const userGuessInput = document.getElementById('userGuess');
    const checkButton = document.getElementById('checkButton');
    const feedbackElement = document.getElementById('feedback');
    const attemptsRemainingElement = document.getElementById('attemptsRemaining');
    const restartButton = document.getElementById('restartButton');

    // Function to generate a random number within a specified range
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to handle checking the user's guess
    checkButton.addEventListener('click', () => {
        const userGuess = parseInt(userGuessInput.value);

        // Validate user input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedbackElement.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        attemptsLeft--;

        if (userGuess === randomNumber) {
            feedbackElement.textContent = `Congratulations! You guessed the correct number in ${5 - attemptsLeft} attempts.`;
            checkButton.style.display = 'none';
            restartButton.style.display = 'block';
        } else if (userGuess > randomNumber) {
            feedbackElement.textContent = 'Your number is high';
        } else {
            feedbackElement.textContent = 'Your number is low';
        }

        // Update remaining attempts
        attemptsRemainingElement.textContent = `You have ${attemptsLeft} chances`;

        // End game if no attempts left
        if (attemptsLeft <= 0) {
            feedbackElement.textContent = `Game over! The correct number was ${randomNumber}.`;
            checkButton.style.display = 'none';
            restartButton.style.display = 'block';
        }
    });

    // Function to restart the game
    restartButton.addEventListener('click', () => {
        randomNumber = generateRandomNumber(1, 100);
        attemptsLeft = 5;
        feedbackElement.textContent = 'Your number is...';
        attemptsRemainingElement.textContent = 'You have 5 chances';
        userGuessInput.value = '';
        checkButton.style.display = 'inline-block';
        restartButton.style.display = 'none';
    });
});
