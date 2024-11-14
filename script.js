// Function to toggle image size
function enlargeImage(imageId) {
    const image = document.getElementById(imageId);
    if (image.style.width === "150px") {
        image.style.width = "300px"; // Enlarged size
    } else {
        image.style.width = "150px"; // Default size
    }
}

// Function to prompt for the user's name and display it
function askName() {
    const name = prompt("Please enter your name:");
    if (name) {
        const displayElement = document.createElement('p');
        displayElement.textContent = `Hello, ${name}! Welcome to my portfolio.`;
        displayElement.style.color = "#ffffff"; // Set color for better contrast
        displayElement.style.marginTop = "10px";
        displayElement.classList.add('welcome-message');

        const containerDiv = document.querySelector('.profile-container');
        // Remove any existing welcome message
        const existingMessage = containerDiv.querySelector('.welcome-message');
        if (existingMessage) {
            containerDiv.removeChild(existingMessage);
        }
        containerDiv.appendChild(displayElement);
    }
}

// Function to toggle text size
function toggleTextSize() {
    document.body.classList.toggle('large-text');
}

// Function to toggle high-contrast color scheme
function toggleColorScheme() {
    document.body.classList.toggle('high-contrast');
}

// Initialize event listeners after the page loads
window.onload = function () {
    // Profile image resize functionality
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.style.width = "150px"; // Initial size
        profileImage.addEventListener('click', function () {
            enlargeImage('profileImage');
        });
    }

    // "Enter Your Name" button functionality
    const enterNameButton = document.getElementById('enterNameButton');
    if (enterNameButton) {
        enterNameButton.addEventListener('click', askName);
    }

    // "Enlarge Text" button functionality
    const enlargeTextButton = document.getElementById('enlargeTextButton');
    if (enlargeTextButton) {
        enlargeTextButton.addEventListener('click', toggleTextSize);
    }

    // "Toggle High-Contrast" button functionality
    const colorToggleButton = document.getElementById('colorToggleButton');
    if (colorToggleButton) {
        colorToggleButton.addEventListener('click', toggleColorScheme);
    }
};
