document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user is the admin
    if (username === 'admin' && password === 'admin') {
        alert('Welcome, Admin!');
        window.location.href = 'admin.html'; // Redirect to admin page
    } else {
        // Check if the user exists in the local storage (simulated database)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert('Welcome, ' + user.username + '!');
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert('Invalid username or password. Please register first.');
        }
    }
});