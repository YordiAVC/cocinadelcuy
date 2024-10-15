// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

// Initialize Express app
const app = express();

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/sendemail', [
    
    // Validate email
    body('email').isEmail().withMessage('Invalid email address'),

    // Validate other fields (optional)
    body('name').trim().isLength({ min: 1 }).withMessage('Name is required'),
    body('message').trim().isLength({ min: 1 }).withMessage('Message is required')
], (req, res) => {
    // Check for errors from express-validator
    console.log('send email');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Create transporter object capable of sending email using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'email-smtp.eu-central-1.amazonaws.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'AKIAWOFC6TOQGSQ4DIEI', // replace with your SMTP username
            pass: 'BCSiAFXBQ3wiX0YmfhdIKY7VmhKN2K+XNKd0TwauwTaa', // replace with your SMTP password
        }
    });

    // Setup email data with unicode symbols
    let mailOptions = {
        from: 'letsbet.ninja@gmail.com', // sender address
        to: 'christopher.rauh@gmail.com,josue.david.moron.81@gmail.com', // list of receivers
        subject: 'Contact form submission from ' + req.body.name, // Subject line
        text: req.body.message, // plain text body
        html: '<b>Name:</b> ' + req.body.name + '<br><b>Email:</b> ' + req.body.email + '<br><b>Message:</b> ' + req.body.message // html body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.redirect('/');
    });

    // Send response to client
    //res.send('Email has been sent');
    res.redirect('/');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
