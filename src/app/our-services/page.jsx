'use client'
import React from "react";
import ServicesHeader from "@/components/ourServices/ServicesHeader";
import Section1 from "@/components/ourServices/Section1";
import ServicesExperience from "@/components/ourServices/ServicesExperience";
import ServicesMobile from "@/components/ourServices/ServicesMobile"
export default function page() {
  return (
    <div>
      <ServicesHeader />
      <Section1 />
      <ServicesExperience/>
      <ServicesMobile/>
    </div>
  );
}
