const nodemailer = require("nodemailer");

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'fathonitriyoga@gmail.com', // Your Gmail address
      pass: 'bylx ugwk aaxd gccp', // Your App Password
    },
    tls: {
      rejectUnauthorized: false, // Accept unverified certificates (sometimes needed)
    },
  });

  const mailOptions = {
    from: 'fathonitriyoga@gmail.com',
    to: 'fathonitriyoga@gmail.com', // Send to yourself
    subject: "Test Email from Nodemailer",
    text: "This is a test email.",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.log("Error sending email:", error);
  }
}

sendTestEmail();
