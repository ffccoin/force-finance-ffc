'use client'
import React from "react";
import ServicesHeader from "@/components/ourServices/ServicesHeader";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactFooter from "@/components/contactUs/ContactFooter";

export default function page() {
  return (
    <div>
      <ServicesHeader />
      <ContactForm />
    </div>
  );
}
