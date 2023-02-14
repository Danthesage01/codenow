import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_APP_HOST,
    auth: {
      user: process.env.EMAIL_APP_SENDER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: `CodeNow School ${process.env.EMAIL_APP_SENDER}`, 
    to,
    subject,
    html,
  });
};
// const sendEmail = async ({ to, subject, html }) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_APP_HOST,
//     auth: {
//       user: process.env.EMAIL_APP_SENDER,
//       pass: process.env.EMAIL_APP_PASSWORD,
//     },
//   });

//   let info = transporter.sendMail(
//     {
//       from: `CodeNow School ${process.env.EMAIL_APP_SENDER}`, // sender address
//       to: "danthesage00@gmail.com", // list of receivers
//       subject: "Hello FROM CNS", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Sending Emails with Node.js</b>",
//     },
//     function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//         // do something useful
//       }
//     }
//   );
// };

export default sendEmail;
