document.addEventListener('DOMContentLoaded', function() {
    const userMenu = document.querySelector('.user-menu');
    const userDropdown = document.getElementById('user-dropdown');
    const usernameDisplay = document.getElementById('username-display');
    const logoutBtn = document.getElementById('logout');
    const cartCountEl = document.getElementById('cart-count');

    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountEl.textContent = totalItems;
    }

    if (user) {
        usernameDisplay.textContent = user.username;
        userMenu.style.display = 'block';
    } else {
        userMenu.style.display = 'none';
    }

    usernameDisplay.addEventListener('click', function() {
        userDropdown.classList.toggle('show');
    });

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('user');
        location.reload();
    });

    updateCartCount();
});
