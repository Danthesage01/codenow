import nodemailer from "nodemailer";
import { nodemailerConfig } from "./nodemailerConfig.js";

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: process.env.EMAIL_APP_SENDER,
    to,
    subject,
    html,
  });
};

export default sendEmail

