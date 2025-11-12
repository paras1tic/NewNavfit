// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (for now, hardcoded username and password)
    const validUsername = 'militaryUser';  // Simulated military username
    const validPassword = 'securePassword123';  // Simulated password

    const errorMessage = document.getElementById('errorMessage');

    // Simulate login validation
    if (username === validUsername && password === validPassword) {
        // On successful login, redirect to the splash page
        window.location.href = 'splash.html';  // Redirect to splash page
    } else {
        // Show error message if login fails
        errorMessage.textContent = 'Invalid username or password.';
    }
});
