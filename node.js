const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

// Simulated MoMo API credentials
const momoAPIUrl = 'https://momo-api.example.com/payment'; // Replace with MoMo's actual API endpoint
const clientID = 'YOUR_MOMO_CLIENT_ID';
const secretKey = 'YOUR_MOMO_SECRET_KEY';

app.post('/momo-payment', async (req, res) => {
    const { amount, currency, description, phoneNumber } = req.body;

    // Simulated MoMo payment request payload
    const paymentPayload = {
        clientID,
        secretKey,
        amount,
        currency,
        description,
        phoneNumber,
    };

    // Make a request to MoMo's API (replace with real API)
    try {
        const response = await fetch(momoAPIUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentPayload),
        });

        const responseData = await response.json();

        if (responseData.status === 'success') {
            // Respond with payment success status
            res.json({ status: 'success', message: 'Payment processed successfully!' });
        } else {
            // Respond with failure
            res.json({ status: 'failure', message: 'Payment failed.' });
        }
    } catch (error) {
        console.error('Error during payment processing:', error);
        res.status(500).json({ status: 'error', message: 'Payment processing error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
