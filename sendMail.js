const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

// Function to send mail
const sendMail = async () => {
  const mailOptions = {
    from: {
      name: "suprasanna",
      address: process.env.USER
    }, // sender address
    to: "smritimandana033@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    //cc:
    //bcc:
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Mail sent successfully');
  } catch (error) {
    console.error('Error sending mail:', error);
  }
}

// Call the sendMail function
sendMail();
