import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    console.log("Received data:", { name, email, message }); // Debug log

    // Validation
    if (!name || !email || !message) {
      console.log("Validation failed:", {
        name: !!name,
        email: !!email,
        message: !!message,
      });
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Trim whitespace
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { message: "Fields cannot be empty" },
        { status: 400 }
      );
    }

    // Use Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // bmurtifandy@gmail.com
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to your Gmail
      subject: `New Contact Form Message from ${trimmedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${trimmedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${trimmedEmail}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${trimmedMessage.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
      replyTo: trimmedEmail,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", process.env.EMAIL_USER);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
