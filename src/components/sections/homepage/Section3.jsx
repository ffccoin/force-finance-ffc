import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section3 = () => {
  return (
    <div className="mt-16 grid place-items-center">
      <div className="flex max-w-6xl flex-col px-10 items-center justify-center gap-4 lg:ml-40 lg:flex-row lg:gap-40">
        <div className="flex-shrink-0">
          <Image src="/homepage/mobile.png" width={266} height={531} alt="img" />
        </div>
        <div className="flex flex-col items-center mt-10 justify-center lg:items-start">
          <h1 className="text-wrap text-[37.9px]  uppercase leading-[42.64px] lg:mt-10">
            Web 3.0 Fusion Bridging DApp Browsing & Staking Crypto
          </h1>
          <p className="lg:max-w-[34.5rem] text-wrap mt-9 text-[16px] leading-[24px] text-neutralLight">
            Experience the seamless convergence of Web 3.0 capabilities with our
            integrated DApp browser, facilitating staking, crypto transactions,
            liquidity pool farming, and cross-chain interoperability
          </p>
          <div className="mr-auto mt-12 flex flex-col flex-wrap gap-y-3 sm:gap-y-8 md:mr-auto md:flex-row md:gap-x-28 lg:mr-0 lg:flex-row lg:gap-x-4 xl:gap-x-20">
            {renderStat("60M+", "Trading Volume")}
            {renderStat("1500+", "Liquidity Pool")}
            {renderStat("1000+", "Yield Farming")}
          </div>
          <div className="w-full pr-8 mt-11 flex flex-col gap-8 md:flex-row">
            <Button className="sm:w-auto w-full" title="Go to apps" size="small" />
            <SecondaryButton title="Learn more" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

const renderStat = (number, label) => (
  <div className="flex flex-col gap-y-4">
    <h1 className="text-[37.9px] leading-[42.64px]">{number}</h1>
    <p className="ml-1 md:ml-4">{label}</p>
  </div>
);

export default Section3;
