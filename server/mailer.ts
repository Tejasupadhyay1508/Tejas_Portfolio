import nodemailer from "nodemailer";
import type { ContactMessage } from "@shared/schema";

const transporter = nodemailer.createTransport({
  ...(process.env.EMAIL_SERVICE ? { service: process.env.EMAIL_SERVICE } : {}),
  ...(process.env.EMAIL_HOST ? { host: process.env.EMAIL_HOST } : {}),
  ...(process.env.EMAIL_PORT ? { port: Number(process.env.EMAIL_PORT) } : {}),
  ...(process.env.EMAIL_SECURE ? { secure: process.env.EMAIL_SECURE === "true" } : {}),
  ...(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD
    ? {
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      }
    : {}),
});

function isMailerConfigured(): boolean {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn(
      "Contact email not sent: EMAIL_USER and/or EMAIL_PASSWORD environment variables are missing.",
    );
    return false;
  }

  if (!process.env.EMAIL_TO && !process.env.EMAIL_USER) {
    console.warn(
      "Contact email not sent: EMAIL_TO is missing and EMAIL_USER cannot be used as a fallback.",
    );
    return false;
  }

  return true;
}

export async function sendContactEmail(message: ContactMessage) {
  if (!isMailerConfigured()) {
    return;
  }

  // Default to the site owner's email if EMAIL_TO is not set
  const defaultOwnerEmail = "tejasupadhyay48@gmail.com";
  const to = process.env.EMAIL_TO ?? process.env.EMAIL_USER ?? defaultOwnerEmail;

  await transporter.sendMail({
    to,
    from: process.env.EMAIL_USER,
    subject: `New portfolio inquiry from ${message.name}`,
    replyTo: message.email,
    text: createTextBody(message),
    html: createHtmlBody(message),
  });
}

function createTextBody({ name, email, message, phone }: ContactMessage): string {
  return `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n${
    phone ? `Phone: ${phone}\n` : ""
  }Message:\n${message}\n`;
}

function createHtmlBody({ name, email, message, phone }: ContactMessage): string {
  return `
    <h2>New portfolio inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;
}
