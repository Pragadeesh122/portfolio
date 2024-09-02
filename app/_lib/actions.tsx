"use server";

import nodemailer from "nodemailer";
import {GoogleGenerativeAI} from "@google/generative-ai";

export async function sendEmail(formData: any) {
  try {
    const name: string = formData["name"];
    const email: string = formData["email"];
    const message: string = formData["message"];

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
      subject: `New Connection Request from ${name}`,
      text: `Hello Pragadeesh,

You have received a new message from ${name} (${email}):

"${message}"

Best regards,
${name}
`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <p>Hello Pragadeesh,</p>
          <p>You have received a new message from <strong>${name}</strong> (<a href="mailto:${email}" style="color: #1a0dab;">${email}</a>):</p>
          <blockquote style="border-left: 2px solid #ccc; margin: 1em 0; padding: 0.5em 1em; color: #555;">
            "${message}"
          </blockquote>
          <p>Best regards,<br>${name}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (err: any) {
    throw new Error(err.message);
  }
}

const systemPrompt = process.env.SYSTEM_PROMPT as string;

export async function generatePortfolioResponse(
  prompt: string
): Promise<string> {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({model: "gemini-pro"});

  const result = await model.generateContentStream([
    systemPrompt,
    `Human: ${prompt}`,
    "Assistant: ",
  ]);

  let fullResponse = "";
  for await (const chunk of result.stream) {
    fullResponse += chunk.text();
  }

  return fullResponse;
}
