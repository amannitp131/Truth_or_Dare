import express from 'express';

import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email sending endpoint
app.post('/send-email', (req, res) => {
    const { question, answer } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider
        auth: {
            user: "hellocollege143@gmail.com",
            pass: "bnnv adcu kdoq bhvp",
        },
    });

    // Email options
    const mailOptions = {
        from: 'amanmis601@gmail.com',
        to: 't6201356@gmail.com', // Your recipient email
        subject: 'Truth Game Answer',
        text: `Question: ${question}\nAnswer: ${answer}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
