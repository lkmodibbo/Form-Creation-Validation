document.addEventListener('DOMContentLoaded', function () {
    function validateForm() {
        const formRegister = document.getElementById('registration-form');
        const feedbackDiv = document.getElementById('form-feedback');

        formRegister.addEventListener('submit', function (event) {
            event.preventDefault();

            // Trimmed values
            const userName = document.getElementById('username').value.trim();
            const emailAddress = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Error spans
            const usernameError = document.getElementById('usernameError');
            const emaiError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');

            // Reset previous errors
            usernameError.textContent = '';
            emaiError.textContent = '';
            passwordError.textContent = '';

            // Initialize validation
            let isValid = true;
            let messages = [];

            // Username Validation
            if (userName.length < 3) {
                isValid = false;
                usernameError.textContent = 'Username must be at least 3 characters long.';
                messages.push('Username must be at least 3 characters long.');
            }

            // Email Validation (case-insensitive)
            if (!emailAddress.toLowerCase().includes('@') || !emailAddress.toLowerCase().includes('.')) {
                isValid = false;
                emaiError.textContent = 'Please enter a valid email address.';
                messages.push('Please enter a valid email address.');
            }

            // Password Validation
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
            if (!passwordPattern.test(password)) {
                passwordError.textContent = 'Password must contain letters, numbers, and special characters.';
                isValid = false;
                messages.push('Password must contain letters, numbers, and special characters.');
            }

            // ✅ Feedback Display Logic
            feedbackDiv.style.display = "block";
            if (isValid) {
                feedbackDiv.textContent = "Registration successful!";
                feedbackDiv.style.color = "#28a745";
                console.log('✅ Form submitted successfully!');
                console.log('Username:', userName);
                console.log('Email:', emailAddress);
                console.log('Password:', password);
            } else {
                feedbackDiv.innerHTML = messages.join('<br>');
                feedbackDiv.style.color = "#dc3545";
                console.error('❌ Form Validation failed');
                messages.forEach(msg => console.error(msg));
            }
        });
    }

    // Call the function
    validateForm();
});
