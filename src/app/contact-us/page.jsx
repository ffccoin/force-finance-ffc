'use client'

import ContactHeader from "@/components/contactUs/ContactHeader";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactFooter from "@/components/contactUs/ContactFooter";

export default function page() {
  return (
    <div className="ml-32 sm:ml-0 justify-center items-center">
      <ContactHeader />
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
