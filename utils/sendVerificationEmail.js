import sendEmail from "./sendEmail.js";

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;

  const message = `<p>Click this link to confirm your email: <a href="${verifyEmail}">Verify Email</a></p>`;


  return sendEmail({
    to: email,
    subject: "Email Confirmation",
    html: `<h4>Hello, ${name}</h4>
  ${message}
  `,
  });
};

export default sendVerificationEmail;
