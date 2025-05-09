// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL,
      subject: `Contact Form: ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
