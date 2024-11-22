// Sample cart data
let cart = [];

// Function to add items to the cart
function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} has been added to your cart.`);
}

// MoMo payment button handler
document.getElementById('momo-payment-btn').addEventListener('click', function () {
    // Example: Calculate total price from the cart
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    // Prepare payment request object
    const paymentRequest = {
        amount: totalAmount,  // Total price to be paid
        currency: 'USD',      // Or your preferred currency
        description: 'iPhone Purchase', // Product description
        phoneNumber: prompt('Enter your phone number for MoMo payment:')  // Ask for phone number
    };

    // Simulate sending payment request to back-end (AJAX call)
    fetch('/momo-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentRequest),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Payment successful! Thank you for your purchase.');
        } else {
            alert('Payment failed! Please try again.');
        }
    })
    .catch(error => {
        console.error('Error processing payment:', error);
        alert('Payment error! Please try again later.');
    });
});
