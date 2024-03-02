import { EmailTemplate } from "@/components/email/EmailTemplate";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_MMc2Kf8o_NG68cZhJSBj5pPcmDUj32yc5");

export async function POST(req, res) {
  try {
    const { name, email, message, selectedOption, phoneNumber } = await req.json();

    // Send email to support
    const data = await resend.emails.send({
      from: "forcefinancecoin<onboarding@resend.dev>",
      to: ["info@forcefinancecoin.ca"],
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
      from: "forcefinancecoin<onboarding@resend.dev>",
      to: [email],
      subject: "Hello",
      react: UserEmailTemplate(),
    });

    console.log("Confirmation Email Result:", data2);

    return NextResponse.json({ message: "method allowed" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
