export const nodemailerConfig = {
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL_APP_SENDER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
};
