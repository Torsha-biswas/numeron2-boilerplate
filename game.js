// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update the displayed numbers
function updateNumbers() {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);

    // Update the HTML content of the number holders
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;

    // Return the generated numbers for scoring logic
    return { number1, number2 };
}

// Call the updateNumbers function to display initial numbers and get the generated numbers
const { number1, number2 } = updateNumbers();

// Iteration 3: Creating variables required to make the game functional

// Declare variables for number 3 and the HTML element with the ID "number3"
let number3;
const number3Element = document.getElementById('number3');

// Iteration 5: Creating a randomise function to make the game functional

// Function to randomize the operator and number3
// Iteration 5: Creating a randomise function to make the game functional

// Function to randomize the operator and number3
function randomize() {
    const operators = ['+', '-', '*', '/', '%']; // Added modulus operator (%)
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    // Call updateNumbers to get new random numbers
    updateNumbers();

    // Randomize number3 based on the operator
    switch (randomOperator) {
        case '+':
            number3 = parseInt(document.getElementById('number1').textContent) + parseInt(document.getElementById('number2').textContent);
            break;
        case '-':
            number3 = Math.abs(parseInt(document.getElementById('number1').textContent) - parseInt(document.getElementById('number2').textContent));
            break;
        case '*':
            number3 = parseInt(document.getElementById('number1').textContent) * parseInt(document.getElementById('number2').textContent);
            break;
        case '/':
            const temp = parseInt(document.getElementById('number2').textContent);
            number3 = temp !== 0 ? parseInt(document.getElementById('number1').textContent) / temp : 0;
            break;
        case '%':
            // Handle modulus operator
            const num1 = parseInt(document.getElementById('number1').textContent);
            const num2 = parseInt(document.getElementById('number2').textContent);
            number3 = num2 !== 0 ? num1 % num2 : 0;
            break;
    }

    // Update the HTML content of number3
    number3Element.textContent = number3;
}


// Call randomize function to set up the initial state
randomize();

// Iteration 6: Making the Operators (button) functional

// Iteration 6: Making the Operators (button) functional

// Function to handle button clicks
function handleButtonClick(operator) {
    // Call randomize to generate new numbers and update number3
    randomize();

    // Check if the selected operator is correct
    const result = checkResult(operator);

    // Handle the result
    handleResult(result);
}

// Function to check if the selected operator is correct
function checkResult(selectedOperator) {
    // Get the correct operator based on the current game state
    const correctOperator = getCorrectOperator();

    // Compare the selected operator with the correct operator
    return selectedOperator === correctOperator;
}

// Function to get the correct operator based on the current game state
function getCorrectOperator() {
    // Determine the correct operator based on the current numbers
    const num1 = parseInt(document.getElementById('number1').textContent);
    const num2 = parseInt(document.getElementById('number2').textContent);

    // Compare the numbers and return the correct operator
    if (num1 + num2 === number3) {
        return '+';
    } else if (Math.abs(num1 - num2) === number3) {
        return '-';
    } else if (num1 * num2 === number3) {
        return '*';
    } else if (num2 !== 0 && num1 / num2 === number3) {
        return '/';
    } else if (num2 !== 0 && num1 % num2 === number3) {
        return '%';
    }

    // If none of the conditions match, return an empty string or handle it based on your game logic
    return '';
}

// Function to handle the result and update the score
function handleResult(isCorrect) {
    // Update the score based on the result
    updateScoreBasedOnResult(isCorrect);
}


// Attach click event listeners to the buttons
document.getElementById('plus').addEventListener('click', () => handleButtonClick('+'));
document.getElementById('minus').addEventListener('click', () => handleButtonClick('-'));
document.getElementById('mul').addEventListener('click', () => handleButtonClick('*'));
document.getElementById('divide').addEventListener('click', () => handleButtonClick('/'));
document.getElementById('modulus').addEventListener('click', () => handleButtonClick('%')); // Added modulus operator

// Iteration 7: Making Timer functional
// Declare variables for the timer
let timeRemaining = 20;

// Function to update the timer display
function updateTimer() {
    document.getElementById('timer').textContent = timeRemaining;
}

// Function to handle the game over scenario
function handleGameOver() {
    // updateScore();
    // Add logic for game over scenario (e.g., redirect to game over page)
    window.location.href = 'gameover.html';
}

// Function to start the game timer
function startTimer() {
    // Update the timer display initially
    updateTimer();

    // Update the timer every second
    const timerInterval = setInterval(() => {
        timeRemaining--;

        // Update the timer display
        updateTimer();

        // Check if time has run out
        if (timeRemaining <= 0) {
            // Stop the timer
            clearInterval(timerInterval);

            // Call the function to handle the game over scenario
            handleGameOver();
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}

// Call the startTimer function to begin the game
startTimer();
