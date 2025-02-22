// Form validation and submission handling
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const socialBtns = document.querySelectorAll('.social-btn');
    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            try {
                // Here you would typically make an API call to your backend
                console.log('Login attempt:', { email });
                // Simulate successful login
                localStorage.setItem('user', JSON.stringify({ email }));
                window.location.href = '/';
            } catch (error) {
                console.error('Login failed:', error);
                alert('Login failed. Please try again.');
            }
        });
    }
    // Handle signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            try {
                // Here you would typically make an API call to your backend
                console.log('Signup attempt:', { name, email });
                // Simulate successful signup
                localStorage.setItem('user', JSON.stringify({ name, email }));
                window.location.href = '/';
            } catch (error) {
                console.error('Signup failed:', error);
                alert('Signup failed. Please try again.');
            }
        });
    }
    // Handle social login/signup
    socialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Here you would typically implement OAuth flow
            console.log('Social auth clicked');
            alert('Social authentication coming soon!');
        });
    });
});
// Check authentication status
function checkAuth() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
// Logout functionality
function logout() {
    localStorage.removeItem('user');
    window.location.href = '/login.html';
}