'use client'
import AboutFFC from "@/components/aboutUs/AboutFFC";
import Section3 from "@/components/aboutUs/Section3";
import Section4 from "@/components/aboutUs/Section4";
import Section5 from "@/components/aboutUs/Section5";
import Section6 from "@/components/aboutUs/Section6";
import Section from "@/components/sections/homepage/Section7";
// import AboutAsSeen from"@/components/aboutUs/AboutAsSeen";
import Section7 from "@/components/aboutUs/Section7";
import AboutHeader from "@/components/aboutUs/AboutHeader";

export default function page() {
  return (
    <main className="overflow-hidden w-full select-none flex flex-col mt-32">
      <AboutHeader />
      <AboutFFC />
      <Section /> 
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <AboutAsSeen/> */}
      <Section7 />
    </main>
  );
}