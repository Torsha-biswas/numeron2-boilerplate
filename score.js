// Initialize the player's score
let score = 0;

// Function to create and append the score element
// function createScoreElement() {
//     const scoreBox = document.createElement('div');
//     scoreBox.id = 'score-box';
//     scoreBox.className = 'flex-centered';
    
//     const scoreSpan = document.createElement('span');
//     scoreSpan.id = 'score-board';

//     scoreBox.appendChild(document.createTextNode('Score: '));
//     scoreBox.appendChild(scoreSpan);
    
//     // Append the score element to the body
//     document.body.appendChild(scoreBox);
// }

// Function to update the score display
function updateScore() {
    document.getElementById('score-board').textContent = score;
}

// Call the createScoreElement function to create the score element
createScoreElement();

// Function to increase or decrease the score based on the result
function updateScoreBasedOnResult(isCorrect) {
    // Adjust the score based on the result
    if (isCorrect) {
        // Correct operator selected, increase the score
        score += 1; // You can adjust the increase as needed
    } else {
        // Incorrect operator selected, decrease the score
        score -= 1; // You can adjust the decrease as needed
    }

    // Update the score display
    updateScore();
}

// Function to handle the "Play Again" button click
function handlePlayAgainClick() {
    // Redirect to the game page
    window.location.href = 'game.html';
}

// Attach the handlePlayAgainClick function to the "Play Again" button
document.getElementById('play-again-button').addEventListener('click', handlePlayAgainClick);
