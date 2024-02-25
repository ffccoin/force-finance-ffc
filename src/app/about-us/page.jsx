'use client'
import AboutFFC from "@/components/aboutUs/AboutFFC";
import Section3 from "@/components/aboutUs/Section3";
import Section4 from "@/components/aboutUs/Section4";
import Section5 from "@/components/aboutUs/Section5";
import Section6 from "@/components/aboutUs/Section6";
import Section from "@/components/sections/homepage/Section7";

// import Section7 from "@/components/aboutUs/Section7";
import AboutHeader from "@/components/aboutUs/AboutHeader";

export default function page() {
  return (
    <div className="flex mt-32 flex-col w-screen items-center justify-center">
      <AboutHeader />
      <AboutFFC />
      <Section /> 
      <Section3 />
      {/* <Section4 /> */}
      {/* <Section5 />
      <Section6 />
      <Section7 /> */}
    </div>
  );
}