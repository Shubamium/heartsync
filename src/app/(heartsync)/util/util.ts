"use server";

import nodemailer from "nodemailer";
const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_U,
    pass: process.env.SMTP_P,
  },
});

export const submitForm = async (formData: FormData) => {
  const fd = Object.fromEntries(formData.entries());
  console.log(fd);
  const senderEmail = fd["email"];
  const mail = await mailer.sendMail({
    from: process.env.SMTP_U,
    to: process.env.TARGET_EMAIL,
    subject: `[HeartSync Form Submission] ${fd["subject"]}`,
    replyTo: senderEmail as string,
    html: `
		<p>HeartSync Form Submission</p>
		<p>Subject: ${fd["subject"]}</p>
		<p>Name: ${fd["name"]}</p>
		<p>Email: ${fd["email"]}</p>
		<p>Message: ${fd["message"]}</p>
		`,
  });

  if (mail.accepted.length > 0) {
    return true;
  } else {
    return false;
  }
};
