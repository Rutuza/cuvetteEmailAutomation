const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const otpStore = {}; // Store OTPs temporarily for validation

// Email Setup (for Nodemailer)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Add your email
        pass: 'your-email-password'   // Add your password
    }
});

// Twilio Setup (for SMS)
const accountSid = 'your-twilio-sid';
const authToken = 'your-twilio-auth-token';
const client = new twilio(accountSid, authToken);

// Generate OTP Function
function generateOTP() {
    return crypto.randomInt(100000, 999999).toString();
}

// Send OTP via Email
app.post('/send-email-otp', (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    otpStore[email] = otp; // Store OTP for validation
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is: ${otp}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending OTP');
        }
        res.status(200).send('OTP sent successfully');
    });
});

// Send OTP via SMS (if required)
app.post('/send-sms-otp', (req, res) => {
    const { phone } = req.body;
    const otp = generateOTP();
    otpStore[phone] = otp; // Store OTP for validation

    client.messages.create({
        body: `Your OTP is: ${otp}`,
        to: `+91${phone}`, // Country code + phone number
        from: 'your-twilio-number'
    })
    .then(message => res.status(200).send('OTP sent via SMS'))
    .catch(error => res.status(500).send('Error sending SMS OTP'));
});

// Verify OTP
app.post('/verify-otp', (req, res) => {
    const { emailOrPhone, otp } = req.body;

    if (otpStore[emailOrPhone] === otp) {
        delete otpStore[emailOrPhone]; // Remove OTP after successful verification
        return res.status(200).send('OTP verified successfully');
    }

    res.status(400).send('Invalid OTP');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
