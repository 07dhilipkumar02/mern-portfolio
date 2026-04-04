const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const Contact = require("../models/contactModel");

//transport
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
     await Contact.create({ name, email, msg });
       const info =  await transporter.sendMail({
      to: "Enter your email",
      from:"Enter your email",
      replyTo: email,

      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

     console.log("Mail sent:", info);

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });

  } catch (error) {
     console.log("Send Email Error:", error.response?.body || error.message || error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
}; 

module.exports = { sendEmailController };

// const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );

// const sendEmailController = async (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     if (!name || !email || !msg) {
//       return res.status(400).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }

//     const info = await transporter.sendMail({
//       to: "dhilip613@gmail.com",
//       from: "dhilip613@gmail.com",
//       replyTo: email,
//       subject: "Regarding MERN Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p><b>Name:</b> ${name}</p></li>
//           <li><p><b>Email:</b> ${email}</p></li>
//           <li><p><b>Message:</b> ${msg}</p></li>
//         </ul>
//       `,
//     });

//     console.log("Mail sent info:", info);

//     return res.status(200).send({
//       success: true,
//       message: "Your Message Sent Successfully",
//     });
//   } catch (error) {
//     console.log("Send Email Error:", error.response?.body || error.message || error);

//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//     });
//   }
// };

// module.exports = { sendEmailController };
