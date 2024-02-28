"use client";

import ServicesHeader from "@/components/ourServices/ServicesHeader";
import Section1 from "@/components/ourServices/Section1";
import Section2 from "@/components/ourServices/Section2";
import Section3 from "@/components/ourServices/Section3";
import ServicesExperience from "@/components/ourServices/ServicesExperience";
import ServicesMobile from "@/components/ourServices/ServicesMobile";
import ServicesCertified from "@/components/ourServices/ServicesCertified";
import ServicesGlobe from "@/components/ourServices/ServicesGlobe";
import ServicesInvestors from "@/components/ourServices/ServicesInvestors";
import ServicesFAQs from "@/components/ourServices/ServicesFAQs";
import BouncingParticlesAnimation from "@/components/animations/BouncingParticlesAnimation";
import ParticleWave from "@/components/animations/three-particle-waves/ThreeParticleWaves";

export default function page() {
  return (
    <div className="relative mt-48 overflow-hidden">
      <ParticleWave />
      <ServicesHeader />
      <Section1 />
      <ServicesExperience />
      <ServicesMobile />
      <ServicesCertified />
      <ServicesGlobe />
      <ServicesInvestors />
      <Section2 />
      <Section3 />
      <ServicesFAQs />
    </div>
  );
}
