// Function to redirect to main.html
function redirectToMain() {
    window.location.href = "main.html";
}

// Wait until the loading animation is complete to show the Embrace button
document.addEventListener("DOMContentLoaded", () => {
    const loadingBar = document.querySelector('.loading-bar');
    const embraceButton = document.getElementById('embraceButton');

    // After loading bar animation ends, show the Embrace button
    loadingBar.addEventListener("animationend", () => {
        embraceButton.classList.add('show'); // Make button visible with fade-in effect
    });
});
