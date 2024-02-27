"use client";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
import LinkedParticlesAnimation from "@/components/animations/LinkedParticlesAnimation";

const Section1 = () => {
  return (
    <div className="relative mt-24 flex w-full flex-wrap items-center justify-center  bg-transparent pb-20 pt-11 lg:mt-44 ">
      <LinkedParticlesAnimation />
      <div className="z-10 flex w-full max-w-7xl flex-col flex-wrap items-center justify-center gap-y-20 md:flex-row md:justify-between lg:px-8 xl:px-10">
        <div className="flex w-full flex-col gap-y-10 px-10 pt-12 md:pt-14 lg:max-w-[45%] lg:px-0 xl:gap-y-[55px]">
          <motion.h1
            className="text-[28.1px] uppercase leading-[40.6px] sm:text-[39.41px] sm:leading-[42.6px] lg:text-5xl lg:leading-[56.8px]"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            Empowering your <br /> Financial Future
          </motion.h1>
          <motion.p
            className="w-full max-w-[90%] md:leading-6 lg:max-w-[450px] xl:max-w-[585px]"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            Embracing the Forefront of Web 3.0, Pioneering the Path Forward.
            With our decentralized finance (DeFi) solutions, we sculpt a future
            where financial liberation knows no bounds.
          </motion.p>
          <div className="hidden gap-x-6 md:flex lg:hidden xl:flex">
            <Button title="Connect Wallet" />
            <a href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/audits">
              <SecondaryButton title="Coin Audit" icon={rightArrow} />
            </a>
          </div>
          <div className="flex flex-col gap-3 md:hidden lg:flex xl:hidden">
            <Button title="Connect Wallet" size="small" width="fit" />
            <a href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/audits">
              <SecondaryButton
                title="Coin Audit"
                icon={rightArrow}
                size="small"
                width="full"
              />
            </a>
          </div>
        </div>
        <motion.div
          className="mx-5 flex flex-col gap-y-4 rounded-[20px] bg-[#F2F2FE1A] px-5 py-6 sm:w-full sm:max-w-[85vw] sm:px-10 sm:py-12 md:max-w-full md:gap-y-8 lg:mx-0 lg:max-h-fit lg:max-w-fit xl:max-h-[534px] xl:max-w-[537px]"
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
          }}
        >
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
            <a href="/whitepaper.pdf" download="ffc-whitepaper">
              <SecondaryButton title="Explore WhitePaper" />
            </a>
          </div>
          <div className="flex flex-col gap-y-4 md:hidden">
            <Button title="Buy FFC Coin" size="small" />
            <a href="/whitepaper.pdf" download="ffc-whitepaper">
              <SecondaryButton
                title="Explore WhitePaper"
                size="small"
                width="full"
              />
            </a>
          </div>
        </motion.div>
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Section1;
