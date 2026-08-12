import nodemailer from "nodemailer";

let transporter = null;

const getTransporter = () => {
  if (transporter) return transporter;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
};

export const sendContactNotification = async ({ name, email, message }) => {
  const t = getTransporter();

  // Email isn't configured yet — skip silently, the message is already saved to MongoDB.
  if (!t) {
    console.warn("EMAIL_USER/EMAIL_PASS not set — skipping email notification.");
    return;
  }

  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;

  await t.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });
};
