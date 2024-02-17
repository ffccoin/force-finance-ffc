import MarketTrend from "@/components/sections/homepage/MarketTrend";
import Section1 from "@/components/sections/homepage/Section1";
import Section2 from "@/components/sections/homepage/Section2";
import Section3 from "@/components/sections/homepage/Section3";
import Strip from "@/components/sections/homepage/Strip";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Strip />
      <MarketTrend />
      <Section2 />
      <Section3 />
    </main>
  );
}
