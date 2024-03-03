document.getElementById('f1').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if (!email) {
        document.getElementById('email_error').classList.remove('hidden');
        return;
    }

    // If the email is not empty, you can send a request to the server to reset the password.
    // In this example, I'm just displaying a message to simulate the server request.
    alert('An email has been sent to ' + email + ' with password reset instructions.');
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('email_error').classList.add('hidden');
});