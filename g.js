document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    // Add your JavaScript code here
});




document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = productElement.querySelector('p').textContent;
            cart.push({ name: productName, price: productPrice });
            alert('Product added to cart!');
        });
    });
});










document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Update cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
  










    // Add event listeners to 'Add to Cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

            // Add product to cart
            cart.push({ name: productName, price: productPrice });
            updateCart();
            alert('Product added to cart!');
        });
    });

    // Checkout button (optional: add actual checkout functionality here)
    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet.');
    });
});
   












document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Update cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-from-cart';
            removeButton.addEventListener('click', () => {
                removeItemFromCart(index);
            });

            li.appendChild(removeButton);
            cartItemsContainer.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Add event listeners to 'Add to Cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

            // Add product to cart
            cart.push({ name: productName, price: productPrice });
            updateCart();
            alert('Product added to cart!');
        });
    });

    // Remove item from cart
    function removeItemFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Clear cart
    document.getElementById('clear-cart').addEventListener('click', () => {
        cart.length = 0;  // Clear the cart array
        updateCart();
    });

    // Checkout button (optional: add actual checkout functionality here)
    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet.');
    });
});













document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const searchInput = document.getElementById('search-input');
    const productGallery = document.getElementById('product-gallery');
    const products = Array.from(productGallery.getElementsByClassName('product'));

    // Update cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-from-cart';
            removeButton.addEventListener('click', () => {
                removeItemFromCart(index);
            });

            li.appendChild(removeButton);
            cartItemsContainer.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Add event listeners to 'Add to Cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

            // Add product to cart
            cart.push({ name: productName, price: productPrice });
            updateCart();
            alert('Product added to cart!');
        });
    });

    // Remove item from cart
    function removeItemFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Clear cart
    document.getElementById('clear-cart').addEventListener('click', () => {
        cart.length = 0;  // Clear the cart array
        updateCart();
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            if (productName.includes(query)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Checkout button (optional: add actual checkout functionality here)
    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet.');
    });
});
