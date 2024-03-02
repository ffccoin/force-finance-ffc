import { EmailTemplate } from "@/components/email/FaqsEmailTemplate";
import { Resend } from "resend";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { NextResponse } from "next/server";

const resend = new Resend("re_ez8NS9gr_DVKT7UyopoQGYroLrqE7M39A");

export async function POST(req, res) {
  try {
    const { name, email, message, phoneNumber } = await req.json();
    const data = await resend.emails.send({
      from: "forcefinancecoin@forcefinancecoin.com",
      to: ["info@forcefinancecoin.com"],
      subject: "FAQs",
      react: EmailTemplate({
        name,
        email,
        message,
        phoneNumber,
      }),
    });
    console.log("Data sent:", data);

    const data2 = await resend.emails.send({
      from: "forcefinancecoin@forcefinancecoin.com",
      to: [email],
      subject: "Hello", 
      react: UserEmailTemplate(),
    });
    console.log("Confirmation Email Result:", data2);


    return NextResponse.json({ message: "method allow" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
