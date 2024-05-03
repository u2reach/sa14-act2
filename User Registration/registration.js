document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Reset errors
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validation
        let isValid = true;

        if (usernameInput.value.length < 6) {
            usernameError.textContent = 'Username must be at least 6 characters';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Enter a valid email address';
            isValid = false;
        }

        if (passwordInput.value.length < 8 || !/[A-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters, contain at least one uppercase letter, and one number';
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Clear form fields
        }
    });
});
