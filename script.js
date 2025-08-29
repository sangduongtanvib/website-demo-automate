document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    // Function to check if both fields are filled
    function checkFormValidity() {
        if (loginBtn && usernameInput && passwordInput) {
            const isValid = usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '';
            loginBtn.disabled = !isValid;
        }
    }
    
    // Initially disable button if fields are empty
    if (loginBtn) {
        checkFormValidity();
    }
    
    // Add event listeners to input fields
    if (usernameInput) {
        usernameInput.addEventListener('input', checkFormValidity);
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', checkFormValidity);
    }
    
    // Add form submit handler
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            if (username && password) {
                alert('Login attempt with username: ' + username);
                // Here you would typically send the data to your server
            }
        });
    }
});
