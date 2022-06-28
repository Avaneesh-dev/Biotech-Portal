const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "avanode@outlook.com",
    pass: "accept57",
  },
});

let mailDetails = {
  from: "avanode@outlook.com",
  to: "avaneesh2812@gmail.com",
  subject: "first nodemailer mail",
  text: "if this works then it shows that nodemailer is very easy to use",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("Email sent successfully");
  }
});
