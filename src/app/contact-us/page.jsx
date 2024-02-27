'use client'

import ContactHeader from "@/components/contactUs/ContactHeader";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactFooter from "@/components/contactUs/ContactFooter";

export default function page() {
  return (
    <div className="mt-40 overflow-hidden">
      <ContactHeader />
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
