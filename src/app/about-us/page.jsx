'use client'
import React from "react";
import AboutHeader from "@/components/aboutUs/aboutHeader";
import AboutFFC from "@/components/aboutUs/AboutFFC";
import Section3 from "@/components/aboutUs/Section3";
import Section4 from "@/components/aboutUs/Section4";
import Section5 from "@/components/aboutUs/Section5";
import Section6 from "@/components/aboutUs/Section6";
import Section7 from "@/components/aboutUs/Section7";

export default function page() {
  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <AboutHeader />
      <AboutFFC />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}