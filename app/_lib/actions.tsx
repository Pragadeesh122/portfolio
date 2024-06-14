"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: any) {
  try {
    const name: string = formData.get("name");
    const email: string = formData.get("email");
    const message: string = formData.get("message");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.USER_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${process.env.USER_GMAIL}>`,
      to: process.env.USER_GMAIL,
      replyTo: email,
      subject: `${name} likes to connect with you!`,
      text: `Hey Pragadeesh,\n\n${message}\n\nFrom: ${name} (${email})`,
      html: `<p>Hey Pragadeesh,</p><p>${message}</p><p>From: ${name} (<a href="mailto:${email}">${email}</a>)</p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (err: any) {
    throw new Error(err);
  }
}
