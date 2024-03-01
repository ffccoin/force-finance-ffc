"use client";

import Card from "@/components/elements/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import TotalSuppliesChart from "@/components/charts/TotalSuppliesChart";
import TokenomicsChart2 from "@/components/charts/TokenomicsChart2";

const Section6 = () => {
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
        duration: 1,
      },
    },
  };

  return (
    <div className="mb-20 mt-2 grid place-items-center bg-primary2 px-4">
      <motion.div
        className=" flex flex-col items-center"
        initial="hide"
        whileInView="show"
        exit="show"
        variants={leftToRightVariants}
      >
        <div className=" flex flex-col items-center  md:mt-20 ">
          <p className="mt-3 text-center font-neue-machina-bold text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px]">
            TOKENOMICS
          </p>
          <span className="max-w-[61rem] text-wrap px-4 text-center text-sm text-neutralLight sm:text-base md:px-1 lg:mt-6">
            Force Finance Coin (FFC) embodies a meticulously crafted tokenomics
            model, geared for long-term sustainability and value generation.
            With a focus on fostering growth and prosperity for all
            participants, our structure is designed to adapt to evolving market
            dynamics while empowering our vibrant community to steer the
            platform's trajectory towards success.
          </span>
        </div>
      </motion.div>
      <motion.div
        className="grid h-full w-full max-w-7xl grid-cols-1 gap-y-5 py-20 px-20 sm:grid-cols-2 lg:grid-cols-4"
        initial="hide"
        whileInView="show"
        exit="show"
        variants={rightToLeftVariants}
      >
        <TotalSuppliesChart />
        <div className="flex flex-col justify-center gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-primary1"></div>
            <h2>15% Private Sale</h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-[#96B837]"></div>
            <h2>15% Public Sale</h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-[#6E8727]"></div>
            <h2>15% Staking Reward</h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-[#CFFA57]"></div>
            <h2>10% Partnership Funds</h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-[#DEEBBC]"></div>
            <h2>5% Team Pool</h2>
          </div>
        </div>
        <TokenomicsChart2 />
        <div className="flex flex-col justify-center gap-y-4">
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-primary1"></div>
            <h2>10% Operations</h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-[#96B837]"></div>
            <h2>5% Legal Department</h2>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 bg-[#6E8727]"></div>
            <h2>16% Team Management</h2>
          </div>
          <div className="flex items-start gap-x-3">
            <div className="mt-1 h-4 w-4 bg-[#CFFA57]"></div>
            <h2>10% Marketing & Development</h2>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mt-8 flex flex-col px-4 sm:px-24"
        initial="hide"
        whileInView="show"
        exit="show"
        variants={leftToRightVariants}
      >
        <h4 className="mb-5 mr-auto flex items-center justify-center font-neue-machina-bold text-[28.43px]  font-extrabold leading-8">
          Token Sale Stages
        </h4>
        <div className="mt-3 grid max-w-[85rem] items-center justify-center gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card
            state={1}
            bonusPercent={13}
            daysLeft={"1 day only"}
            start={"End In: "}
            endTime={"03:08:30:15"}
          ></Card>
          <Card
            state={2}
            bonusPercent={20}
            daysLeft={"1 day only"}
            start={"End In: "}
            endTime={"04:08:30:15"}
          ></Card>
          <Card
            state={3}
            bonusPercent={15}
            daysLeft={"2 weeks"}
            start={"Start In: "}
            endTime={"05:08:30:15"}
          ></Card>
          <Card
            state={4}
            bonusPercent={0}
            daysLeft={"1 month"}
            start={"Start In: "}
            endTime={"07.30.2022"}
          ></Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Section6;
