const cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    let total = 0;
    for (const item of cart) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(cartItem);
        total += item.price;
    }

    const checkoutButton = document.querySelector('button');
    checkoutButton.textContent = `Checkout - Total: $${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
    } else {
        let orderSummary = 'Order Summary:\n';
        for (const item of cart) {
            orderSummary += `${item.name} - $${item.price}\n`;
        }
        orderSummary += `Total: $${calculateTotal()}`;

        alert(orderSummary);
        cart.length = 0; // Clear the cart
        updateCart();
    }
}

function calculateTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price;
    }
    return total;
}