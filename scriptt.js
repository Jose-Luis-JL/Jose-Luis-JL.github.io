document.addEventListener('DOMContentLoaded', function() {
    const productList = [
        { name: "Tortillas", price: 15, description: "Tortillas frescas hechas diariamente." },
        { name: "Tostadas", price: 10, description: "Tostadas crujientes perfectas para cualquier comida." },
    ];

    const productContainer = document.getElementById('product-list');
    const cartContainer = document.getElementById('cart-list');
    const totalPriceEl = document.getElementById('total-price');
    const cartCountEl = document.getElementById('cart-count');
    let cart = [];

    productList.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: ${product.price} MXN</p>
            <input type="number" id="quantity-${index}" value="1" min="1">
            <button onclick="addToCart(${index})">Agregar al carrito</button>
        `;
        productContainer.appendChild(productElement);
    });

    window.addToCart = function(index) {
        const quantity = parseInt(document.getElementById(`quantity-${index}`).value);
        const product = productList[index];
        const cartItem = { ...product, quantity };
        cart.push(cartItem);
        updateCart();
    };

    function updateCart() {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <p>${item.name} - ${item.price} MXN x ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            `;
            cartContainer.appendChild(cartItemElement);
            total += item.price * item.quantity;
        });
        totalPriceEl.textContent = total;
        cartCountEl.textContent = cart.length;
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    document.getElementById('checkout-button').addEventListener('click', function() {
        alert('Compra realizada exitosamente');
        // Aquí puedes añadir el código para guardar la compra en una base de datos
        const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
        purchases.push(...cart);
        localStorage.setItem('purchases', JSON.stringify(purchases));
        cart = [];
        updateCart();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    updateCarousel();
});

