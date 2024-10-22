import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';

import {sendEmail} from './config/mailer';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.post('/send', (req: express.Request, res: express.Response) => {
    const {to, subject, text} = req.body;
    sendEmail(to, subject, text);
    res.send('Email sent');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

