import express from 'express';
import { createTransport } from 'nodemailer';
import { json } from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.post('/send-email', (req, res) => {
    const { fullName, emailAddress, mobileNo, emailSubject, message } = req.body;

    // Setup Nodemailer transporter
    let transporter = createTransport({
        service: 'Gmail', // or use another email service
        auth: {
            user: 'karthickrajendran.mca@gmail.com', // replace with your email
            pass: 'Karthi22@'   // replace with your email password
        }
    });

    let mailOptions = {
        from: emailAddress,
        to: 'karthickrajendran.mca@gmail.com', // your email to receive the message
        subject: emailSubject,
        text: `You have a new message from ${fullName} (${emailAddress}, ${mobileNo}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // This will print the specific error to the console
            return res.status(500).json({ success: false, error: 'Failed to send email.' });
        }
        console.log('Email sent: ' + info.response); // Success message
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
