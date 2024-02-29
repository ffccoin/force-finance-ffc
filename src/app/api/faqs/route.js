import { EmailTemplate } from "@/components/email/FaqsEmailTemplate";
import { Resend } from "resend";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { NextResponse } from "next/server";

const resend = new Resend("re_MMc2Kf8o_NG68cZhJSBj5pPcmDUj32yc5");

export async function POST(req, res) {
  try {
    const { name, email, message, phoneNumber } = await req.json();
    const data = await resend.emails.send({
      from: "forcefinancecoin<onboarding@resend.dev>",
      to: ["info@forcefinancecoin.ca"],
      subject: "FAQs",
      react: EmailTemplate({
        name,
        email,
        message,
        phoneNumber,
      }),
    });
    console.log("Confirmation Email Result:", data);

    const data2 = await resend.emails.send({
      from: "forcefinancecoin<onboarding@resend.dev>",
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
