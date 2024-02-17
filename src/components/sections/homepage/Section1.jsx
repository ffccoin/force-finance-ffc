import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import React from "react";
import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";

const Section1 = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center bg-no-repeat pt-11 pb-20  md:mt-20 bg-[url('/homepage/pattern.svg')] bg-cover md:bg-top">
      <div className="flex w-full max-w-7xl flex-col flex-wrap items-center justify-center gap-y-20 md:flex-row md:justify-between lg:px-8 xl:px-10">
        <div className="flex w-full flex-col gap-y-10 px-10 lg:px-0 md:pt-14 lg:max-w-[45%] xl:gap-y-[55px]">
          <h1 className="text-xl uppercase sm:text-4xl lg:text-3xl xl:text-5xl xl:leading-[56.8px]">
            Empowering Your <br /> Financial Future
          </h1>
          <p className="w-full max-w-[90%] text-xs sm:text-base md:leading-6 lg:max-w-[450px] xl:max-w-[585px]">
            Embracing the forefront of Web 3.0, we're pioneering the path
            forward. With our decentralized finance (DeFi) solutions, we're
            sculpting a future where financial liberation knows no bounds.
          </p>
          <div className="hidden gap-x-6 md:flex lg:hidden xl:flex">
            <Button title="Connect Wallet" />
            <SecondaryButton title="Coin Audit" icon={rightArrow} />
          </div>
          <div className="flex flex-col gap-3 md:hidden lg:flex xl:hidden">
            <Button title="Connect Wallet" size="small" width="fit" />
            <SecondaryButton
              title="Coin Audit"
              icon={rightArrow}
              size="small"
            />
          </div>
        </div>
        <div className="mx-5 flex flex-col gap-y-4 rounded-[20px] bg-[#F2F2FE1A] px-5 py-6 sm:w-full sm:max-w-[85vw] sm:px-10 sm:py-12 md:max-w-full md:gap-y-8 lg:mx-0 lg:max-h-fit lg:max-w-fit xl:max-h-[534px] xl:max-w-[537px]">
          <h2 className="text-center uppercase sm:text-[21.3px] md:leading-6">
            Token sale ends in:
          </h2>
          <div className="grid place-items-center">
            <CountdownTimer />
          </div>
          <h2 className="py-3 leading-[22.4px] sm:text-[21.3px]">
            $25,256,432 contribution received
          </h2>
          <ProgressBar />
          <div className="hidden items-center gap-x-8 md:flex">
            <Button title="Buy FFC Coin" />
            <SecondaryButton title="Explore WhitePaper" />
          </div>
          <div className="flex flex-col gap-y-4 md:hidden">
            <Button title="Buy FFC Coin" size="small" />
            <SecondaryButton title="Explore WhitePaper" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

const rightArrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19L19 12L12 5M19 12L5 12"
      stroke="#F3F3F3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Section1;
