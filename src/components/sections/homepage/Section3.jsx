"use client";

import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { motion } from "framer-motion";

const Section3 = () => {
  const leftToRightVariants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const rightToLeftVariants = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div className="mt-16 grid place-items-center">
      <div className="flex max-w-6xl flex-col items-center justify-center gap-4 px-10  lg:flex-row lg:gap-40">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex-shrink-0"
        >
          <Image
            src="/homepage/mobile.png"
            width={266}
            height={531}
            alt="img"
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="mt-10 flex flex-col  lg:justify-center lg:mb-10 lg:mt-0 lg:items-start"
        >
          <h1 className="text-wrap text-[37.9px] lg:max-w-[30rem]  uppercase leading-[42.64px] lg:mt-10">
            Web 3.0 Fusion Bridging DApp{" "}
          </h1>
          <p className="mt-9 text-wrap text-[16px] leading-[24px] text-neutralLight lg:max-w-[34.5rem]">
            Experience the seamless convergence of Web 3.0 capabilities with our
            integrated DApp browser, facilitating staking, crypto transactions,
            liquidity pool farming, and cross-chain interoperability.
          </p>
          <div className="mr-auto mt-12 flex flex-col flex-wrap gap-y-3 sm:gap-y-8 md:mr-auto md:flex-row md:gap-x-28 lg:mr-0 lg:flex-row lg:gap-x-4 xl:gap-x-20">
            {renderStat("60M+", "Trading Volume")}
            {renderStat("1500+", "Liquidity Pool")}
            {renderStat("1000+", "Yield Farming")}
          </div>
          <div className="mt-11 flex w-full flex-col gap-8 pr-8 md:flex-row">
            <Button
              className="w-full sm:w-auto"
              title="Go to apps"
              size="small"
            />
            <SecondaryButton title="Learn more" size="small" />
          </div>
        </motion.div>
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
