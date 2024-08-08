document.addEventListener('DOMContentLoaded', function() {
    const productList = [
        { name: "Tortillas", price: 15, description: "Tortillas frescas hechas diariamente." },
        { name: "Tostadas", price: 10, description: "Tostadas crujientes perfectas para cualquier comida." },
        // Agrega más productos aquí según sea necesario
    ];

    const productContainer = document.getElementById('product-list');
    const cartCountEl = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountEl.textContent = totalItems;
    }

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
        const existingItemIndex = cart.findIndex(item => item.name === product.name);
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push(cartItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    updateCartCount();
});
