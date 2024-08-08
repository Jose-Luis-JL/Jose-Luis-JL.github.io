document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let index = 0;

    function showNextImage() {
        index = (index + 1) % carousel.children.length;
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(showNextImage, 3000);

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const loginUsername = document.getElementById('loginUsername').value;
            const loginPassword = document.getElementById('loginPassword').value;
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.username === loginUsername && user.password === loginPassword) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'principal.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('user', JSON.stringify({ username, password }));
            alert('Registro exitoso');
            window.location.href = 'login.html';
        });
    }
});
