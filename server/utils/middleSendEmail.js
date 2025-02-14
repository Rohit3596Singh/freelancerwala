const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with actual SMTP host
      port: 465, // Use 587 for TLS or 465 for SSL
      secure: true, // true for port 465, false for 587
      // auth: {
      //   user: "services@freelancerwala.co.in", // Your Email
      //   pass: "R3bd&)l&SoGR", // Your Password
      // },
      // auth: {
      //   user: EMAIL_USER, // Your Email
      //   pass: EMAIL_PASS, // Your Password
      // },
      auth: {
        user: "srohit3596@gmail.com", // Your Email
        pass: "dhdl ekka inbx xvyn", // Your Password
      },
    });

    const mailOptions = {
      from: '"FreelancerWala Services" <services@freelancerwala.co.in>',
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Order Confirmation Email Sent!");
  } catch (error) {
    console.error("❌ Error Sending Email:", error);
  }
};

module.exports = sendEmail;
