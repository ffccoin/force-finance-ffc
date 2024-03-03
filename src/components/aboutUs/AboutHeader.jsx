"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Calculator2 from "../sections/about-us/Calculator2";

export default function AboutHeader() {
  return (
    <motion.div
      initial={{
        backgroundPositionY: "0px",
      }}
      animate={{
        backgroundPositionY: "100px",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="grid w-full place-items-center bg-primary2 bg-[url('/aboutpage/about-bg3.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="relative flex flex-col items-center px-4">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{
            repeat: Infinity,
            duration: 2.6,
            repeatType: "reverse",
          }}
          className="absolute top-[9.3rem] hidden xl:left-[1.25rem] xl:block"
        >
          <Image
            width={116.52}
            height={116.52}
            alt="bitcoin"
            src="/aboutpage/goldenBitcoin.svg"
          />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
          className="absolute top-[15rem] hidden rotate-3 xl:left-[70.65rem] xl:block"
        >
          <Image
            width={123}
            height={123}
            alt="bitcoin"
            src="/aboutpage/greenBitcoin.svg"
          />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            repeatType: "reverse",
          }}
          className="absolute top-[26.3rem]  hidden xl:left-[8rem] xl:block"
        >
          <Image
            width={85}
            height={85}
            alt="bitcoin"
            src="/aboutpage/greenBitcoin2.svg"
          />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{
            repeat: Infinity,
            duration: 2.7,
            repeatType: "reverse",
          }}
          className="absolute top-[28rem] hidden rotate-3 xl:left-[69.65rem] xl:block"
        >
          <Image
            width={51}
            height={51}
            alt="bitcoin"
            src="/aboutpage/blueBitcoin.svg"
          />
        </motion.div>
        <div className="z-20 flex max-w-[90rem] flex-col items-center uppercase">
          <p className=" text-wrap text-center font-apfel-grotezk  text-base text-primary1 xl:mr-auto  xl:pl-[357px]">
            First order and you’ll get up to $10 in free BTC as a reward{" "}
          </p>
          <p className="line-height-[ 44px] mt-3  text-wrap text-center font-neue-machina-bold text-[30px] uppercase sm:text-[56px]   sm:leading-[75.75px] md:px-8 xl:pr-32 ">
            A Trusted and Secure Web 3.0 Financial DeFi Solution
          </p>
        </div>
        <Calculator2 />
        <div className="mt-5 flex w-[79%] flex-col items-center justify-start gap-2.5 md:w-full">
          <p className=" font-apfel-grotezk text-[16px] text-base text-[#898990]">
            We accept
          </p>
          <img
            className="h-[30px]"
            src="images/img_group9342.svg"
            alt="group9342"
          />
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
        className="mt-8 flex w-full flex-col items-center px-4  md:mt-0"
      >
        <Image
          width={891}
          height={301}
          src="/aboutpage/test.svg"
          alt="test"
        />
      </motion.div>
    </motion.div>
  );
}
