// Get references to the box element and the reaction time display element
let box = document.getElementById('box');
let reactionTimeDisplay = document.getElementById('reaction-time');
let startTime;

// Function to get a random position for the box
function getRandomPosition() {
    let x = Math.floor(Math.random() * (window.innerWidth - box.clientWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - box.clientHeight));
    return { x, y };
}

// Function to move the box to a random position
function moveBox() {
    let { x, y } = getRandomPosition();
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    // Record the start time when the box is moved
    startTime = new Date().getTime();
}

// Event listener for the click event on the box
box.addEventListener('click', () => {
    // Record the end time when the box is clicked
    let endTime = new Date().getTime();
    // Calculate the reaction time
    let reactionTime = (endTime - startTime) / 1000;
    // Display the reaction time
    reactionTimeDisplay.textContent = `Reaction Time: ${reactionTime} seconds`;
    // Move the box to a new random position
    moveBox();
});

// Move the box to a random position for the initial setup
moveBox(); // Initial move
