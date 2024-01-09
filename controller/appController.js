// Import nodemailer
const nodemailer = require('nodemailer');
const path = require('path');
const { USER, PASS } = require('../env.js');

// Variable to store the recipient's email address
let eMail = '';

// Route handler to serve the form HTML page
const getform = (req, res) => {
  // Assuming that you're expecting the email in the request body
  eMail = req.body.email;
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
};

// Route handler to send an email
const mymailer = (req, res) => {
  // Configuration for nodemailer
  let config = {
    service: 'gmail',
    auth: {
      user: USER,
      pass: PASS
    }
  };
  const transporter = nodemailer.createTransport(config);

  // Email message options
  let message = {
    from: '"Fred Foo 👻" <yawntiri33@gmail.com.com>',
    to: eMail,
    subject: 'Hello ✔',
    text: 'Congrats, you are fully subscribed to the plan',
    html: '<b>Congrats, you are fully subscribed to the plan</b>'
  };

  // Send the email
  transporter.sendMail(message)
    .then((info) => {
      // If successful, send a response with details
      res.status(201).json({
        msg: 'successfully sent mail',
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
      });
    })
    .catch((error) => {
      // If there's an error, log it and send an error response
      console.error('Error sending mail:', error);
    });

  console.log(eMail);
};

// Route handler to handle both form submission and email sending
const callall = (req, res) => {
  getform(req, res);
  mymailer(req, res);
};

// Export the combined route handler
module.exports = { callall };
