import { EmailTemplate } from "@/components/email/EmailTemplate";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_ez8NS9gr_DVKT7UyopoQGYroLrqE7M39A");

export async function POST(req, res) {
  try {
    const { name, email, message, selectedOption, phoneNumber } =
      await req.json();

    // Send email to support
    const data = await resend.emails.send({
      from: "forcefinancecoin@forcefinancecoin.com",
      to: ["info@forcefinancecoin.com"],
      subject: "Customer Inquiry",
      react: EmailTemplate({
        name,
        email,
        message,
        selectedOption,
        phoneNumber,
      }),
    });
    console.log("Data sent:", data);

    const data2 = await resend.emails.send({
      from: "forcefinancecoin@forcefinancecoin.com",
      to: [email],
      subject: "Hello",
      react: UserEmailTemplate({ name, selectedOption }),
    });

    console.log("Confirmation Email Result:", data2);

    return NextResponse.json({ message: "method allowed" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
