import React from "react";
import ContactHeader from "@/components/contactUs/ContactHeader";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactFooter from "@/components/contactUs/ContactFooter";

export default function page() {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
