document.getElementById('registerForm').addEventListener('submit', function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get values from the form inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return; // Stop further execution if passwords don't match
    }

    // Retrieve existing users from local storage, if any
    const users = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users exist

    // Check if the username already exists
    if (users.find(u => u.username === username)) {
        alert('Username already exists. Please choose a different one.');
        return; // Stop further execution if username already exists
    }

    // Add new user to the array
    users.push({ username, email, password });

    // Save updated users to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Display a success message and redirect to the login page
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});