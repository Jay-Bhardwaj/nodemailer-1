const nodemailer = require('nodemailer');

// Function to generate OTP
function generateOtp(length = 6) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

// Generate OTP
const otp = generateOtp();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shopclickkashish@gmail.com', // Your Gmail address
        pass: 'xdepdehulbsjfmyy' // Your Gmail password
    }
});

// Email options
const mailOptions = {
    from: '"Shopclick" <shopclickkashish@gmail.com>',
    to: 'jaybhardwaj280@gmail.com',
    subject: 'E-mail verification',
    text: `Please verify your email by entering the OTP below: ${otp}`,
    // HTML body with OTP input field
    html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Confirmation</title>
        </head>
        <body>

            <p>Hello Sir/Ma'am</p>
            <p>This email is sent to you for your email confirmation.</p>
            <p>Please enter the OTP below to verify:</p>
            <p><b>OTP: ${otp}</b></p>
            <br>
            
            

            <footer style="margin-top: 20px; padding: 10px; background-color: #f8f8f8; text-align: center;">
                <p>Thank you for choosing Shopclick!</p>
                <p>Need more help? Reply to this email or visit our <a href="https://mediafiles.botpress.cloud/c3a4c6e0-b581-4b2a-8f2b-9aadce3c1d11/webchat/bot.html">Support Center</a>.</p>
            </footer>

        </body>
        </html>
    `,

};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
