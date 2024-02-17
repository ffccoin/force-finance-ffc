import Image from "next/image";

const Section3 = () => {
  return (
    <div className="grid place-items-center">
      <div className="max-w-7xl">
        <Image src="/homepage/mobile.svg" width={266} height={531} alt="img" />
        <div className="flex flex-col">
          <h1 className="text-[37.9px] leading-[42.64px]">
            Web 3.0 Fusion Bridging DApp Browsing & Staking Crypto
          </h1>
          <p className="text-neutralLight">
            Experience the seamless convergence of Web 3.0 capabilities with our
            integrated DApp browser, facilitating staking, crypto transactions,
            liquidity pool farming, and cross-chain interoperability
          </p>
          <div className="flex flex-wrap">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-[37.9px] leading-[42.64px]">60M+</h1>
              <p className="">Trading Volume</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
