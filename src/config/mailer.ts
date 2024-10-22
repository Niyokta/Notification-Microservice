import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';


console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, 
  secure: false,
  auth: {
      user: process.env.EMAIL_USER , // Your email
      pass: process.env.EMAIL_PASS // Your password
  },
  debug: true,
});
export const sendEmail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER ,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

