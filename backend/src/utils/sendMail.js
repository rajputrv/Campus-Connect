const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendMail = async (to, subject, data) => {
  try {
    let config = {
      service: "gmail",

      auth: {
        user: process.env.EMAIL,
        pass: process.env.MAILPASS,
      },
    };

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Edu♾️onnect",
        link: "https://github.com/rajputrv/Campus-Connect",
      },
    });

    let response = {
      body: data,
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: process.env.EMAIL,
      to,
      subject,
      html: mail,
    };

    await transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error("❌ Error:", error.message);
      } else {
        console.log("✅ Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email", error);
    throw error;
  }
};

module.exports = { sendMail };
