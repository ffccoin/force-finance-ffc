import MarketTrend from "@/components/sections/homepage/MarketTrend";
import Section1 from "@/components/sections/homepage/Section1";
import Section2 from "@/components/sections/homepage/Section2";
import Section3 from "@/components/sections/homepage/Section3";
import Section4 from "@/components/sections/homepage/Section4";
import Section5 from "@/components/sections/homepage/Section5";
import Section6 from "@/components/sections/homepage/Section6";
import Section7 from "@/components/sections/homepage/Section7";
import Section8 from "@/components/sections/homepage/Section8";
import Section9 from "@/components/sections/homepage/Section9";
import Section10 from "@/components/sections/homepage/Section10";
import Section11 from "@/components/sections/homepage/Section11";
import Section12 from "@/components/sections/homepage/Section12";
import Strip from "@/components/sections/homepage/Strip";

export default function Home() {

  return (
    
    <main className="overflow-hidden">
      <Section1 />
      <Strip />
      <MarketTrend />
      <Section2 />
      <Section3 /> {/* mobile  */}
      <Section4 /> {/* Wallet */}
      <Section5 />
      <Section6 /> {/* TOKENOMICS */}
      <Section7 /> {/*RoadMap*/}
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 /> {/* needHelp */}
      <Section12 />
    </main>
  );
}
