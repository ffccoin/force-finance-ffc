"use client";

import ContactHeader from "@/components/contactUs/ContactHeader";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactFooter from "@/components/contactUs/ContactFooter";
import ParticleWave from "@/components/animations/three-particle-waves/ThreeParticleWaves";

export default function page() {
  return (
    <div className="relative mt-40 overflow-hidden">
      <ContactHeader />
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
