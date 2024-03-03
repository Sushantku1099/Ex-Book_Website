document.getElementById('f1').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error_message').classList.remove('hidden');
    }
});