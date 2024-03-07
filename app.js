// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked, the game.html page should be opened.

// Function to handle the play button click
function handlePlayButtonClick() {
    // Redirect to the game page
    window.location.href = 'game.html';
}

// Attach the handlePlayButtonClick function to the play button
document.getElementById('play-button').addEventListener('click', handlePlayButtonClick);
