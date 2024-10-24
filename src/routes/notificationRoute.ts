
import express from 'express';
import { sendEmail } from '../config/mailer';
const notificationRoute = express.Router();

console.log('notificationRoute.js');

notificationRoute.post('/notification/send', (req: express.Request, res: express.Response) => {
   
    try{
        const {to, subject, text} = req.body;
        sendEmail(to, subject, text);
        res.send('Email sent');
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
    

});

export default notificationRoute;