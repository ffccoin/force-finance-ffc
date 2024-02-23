"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Strip = () => {
  return (
    <div className="grid min-h-[150px] max-w-full place-items-center overflow-x-auto">
      <motion.div
        className="relative my-10 grid w-full place-items-center"
        animate={{ x: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute bg-[url('/homepage/strip2.svg')] h-[140px] w-screen bg-cover"></div>
        <div className="absolute bg-[url('/homepage/strip1.svg')] h-[157px] w-screen bg-cover">
        </div>
        <div className="absolute flex w-full max-w-7xl -rotate-1 justify-between px-10">
          <Image src="/icons/poolin.svg" width={180} height={28} alt="icon" />
          <Image src="/icons/neutrino.svg" width={180} height={28} alt="icon" />
          <Image src="/icons/swopfi.svg" width={180} height={28} alt="icon" />
          <Image src="/icons/btcex.svg" width={180} height={28} alt="icon" />
          <Image src="/icons/coinbase.svg" width={180} height={28} alt="icon" />
          <Image
            src="/icons/huobi-global.svg"
            width={180}
            height={28}
            alt="icon"
          />
        </div>
      </motion.div>
    </div>
  );
};

const strip1 = (
  <svg
    width="1920"
    height="157"
    viewBox="0 0 1920 157"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 27L1920 0V130L0 157V27Z" fill="#CBFB45" />
  </svg>
);
const strip2 = (
  <svg
    width="1920"
    height="140"
    viewBox="0 0 1920 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1920" height="140" fill="#70833C" />
  </svg>
);

export default Strip;
