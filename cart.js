document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart-list');
    const totalPriceEl = document.getElementById('total-price');
    const checkoutForm = document.getElementById('checkout-form');
    const cartCountEl = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let shipments = JSON.parse(localStorage.getItem('shipments')) || [];

    function updateCart() {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <p>${item.name} - ${item.quantity} x ${item.price} MXN</p>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            `;
            cartContainer.appendChild(cartItemElement);
            total += item.quantity * item.price;
        });
        totalPriceEl.textContent = total;
        cartCountEl.textContent = cart.length;
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    document.getElementById('checkout-button').addEventListener('click', function() {
        checkoutForm.style.display = 'block';
    });

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('user-name').value;
        const phone = document.getElementById('user-phone').value;
        const email = document.getElementById('user-email').value;
        const address = document.getElementById('user-address').value;

        if (name && phone && email && address) {
            const shipment = {
                name,
                phone,
                email,
                address,
                products: cart
            };

            shipments.push(shipment);
            localStorage.setItem('shipments', JSON.stringify(shipments));

            alert('Compra realizada con éxito');
            localStorage.removeItem('cart');
            cart = [];
            updateCart();
            checkoutForm.style.display = 'none';

            // Redirigir a la página de envíos
            window.location.href = 'shipments.html';
        }
    });

    updateCart();
});
