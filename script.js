document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    
    // Login form elements
    const loginBtn = document.getElementById('login-btn');
    const loginUsernameInput = document.getElementById('login-username');
    const loginPasswordInput = document.getElementById('login-password');
    
    // Registration form elements
    const registerBtn = document.getElementById('register-btn');
    const registerUsernameInput = document.getElementById('register-username');
    const registerEmailInput = document.getElementById('register-email');
    const registerPasswordInput = document.getElementById('register-password');
    const registerConfirmPasswordInput = document.getElementById('register-confirm-password');
    
    // Function to switch between forms
    function showRegistrationForm() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
    
    function showLoginForm() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
    
    // Add event listeners for form switching
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function(e) {
            e.preventDefault();
            showRegistrationForm();
        });
    }
    
    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginForm();
        });
    }
    
    // Function to check login form validity
    function checkLoginFormValidity() {
        if (loginBtn && loginUsernameInput && loginPasswordInput) {
            const isValid = loginUsernameInput.value.trim() !== '' && loginPasswordInput.value.trim() !== '';
            loginBtn.disabled = !isValid;
        }
    }
    
    // Function to check registration form validity
    function checkRegistrationFormValidity() {
        if (registerBtn && registerUsernameInput && registerEmailInput && registerPasswordInput && registerConfirmPasswordInput) {
            const username = registerUsernameInput.value.trim();
            const email = registerEmailInput.value.trim();
            const password = registerPasswordInput.value.trim();
            const confirmPassword = registerConfirmPasswordInput.value.trim();
            
            const isValid = username !== '' && email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword;
            registerBtn.disabled = !isValid;
        }
    }
    
    // Initially disable buttons if fields are empty
    checkLoginFormValidity();
    checkRegistrationFormValidity();
    
    // Add event listeners to login form inputs
    if (loginUsernameInput) {
        loginUsernameInput.addEventListener('input', checkLoginFormValidity);
    }
    
    if (loginPasswordInput) {
        loginPasswordInput.addEventListener('input', checkLoginFormValidity);
    }
    
    // Add event listeners to registration form inputs
    if (registerUsernameInput) {
        registerUsernameInput.addEventListener('input', checkRegistrationFormValidity);
    }
    
    if (registerEmailInput) {
        registerEmailInput.addEventListener('input', checkRegistrationFormValidity);
    }
    
    if (registerPasswordInput) {
        registerPasswordInput.addEventListener('input', checkRegistrationFormValidity);
    }
    
    if (registerConfirmPasswordInput) {
        registerConfirmPasswordInput.addEventListener('input', checkRegistrationFormValidity);
    }
    
    // Add login form submit handler
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const username = loginUsernameInput.value.trim();
            const password = loginPasswordInput.value.trim();
            
            if (username && password) {
                alert('Login attempt with username: ' + username);
                // Here you would typically send the data to your server
            }
        });
    }
    
    // Add registration form submit handler
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const username = registerUsernameInput.value.trim();
            const email = registerEmailInput.value.trim();
            const password = registerPasswordInput.value.trim();
            const confirmPassword = registerConfirmPasswordInput.value.trim();
            
            if (username && email && password && confirmPassword) {
                if (password !== confirmPassword) {
                    alert('Passwords do not match!');
                    return;
                }
                
                if (password.length < 6) {
                    alert('Password must be at least 6 characters long!');
                    return;
                }
                
                alert('Registration successful for username: ' + username + ' with email: ' + email);
                // Here you would typically send the data to your server
                
                // Switch back to login form after successful registration
                showLoginForm();
                
                // Clear registration form
                registerUsernameInput.value = '';
                registerEmailInput.value = '';
                registerPasswordInput.value = '';
                registerConfirmPasswordInput.value = '';
            }
        });
    }
});
