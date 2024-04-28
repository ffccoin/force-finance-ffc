"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Section12 = () => {
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

  return (
    <div className="mt-20 flex items-center justify-center bg-primary1">
      <div className="flex w-full max-w-7xl flex-col items-center px-10 md:flex-row">
        <motion.div
          className="my-20 flex flex-col gap-y-4 md:max-w-[50%]"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <h1 className="text-[38px] uppercase leading-[42.6px] text-black">
            Unlock tomorrow's potential
          </h1>
          <p className="pr-10 text-[16px] leading-[24px] text-black">
            Embrace the future with FFC Coin, where innovation meets
            opportunity. Join our platform to unlock a world of limitless
            possibilities and cutting-edge technology. Don't wait any longer –
            start your journey with FFC today and experience the power of
            decentralized finance firsthand
          </p>
          <Link href="https://app.forcefinancecoin.com">
            <button className="mt-5 w-fit bg-neutralLighter px-[25px] py-[15px] text-black transition-all duration-75 ease-out hover:border hover:border-black">
              Launch Dapp
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="h-fit w-full max-w-[80%] self-center sm:max-w-full md:h-full md:self-end"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <div className="relative flex md:h-full md:w-full">
            <Image
              className="sm:hidden md:absolute md:bottom-0 md:right-0 md:block lg:hidden"
              src="/homepage/mobile3.svg"
              width={326}
              height={564}
              alt="mobile"
              quality={100}
            />
            <Image
              className="hidden sm:block md:hidden lg:absolute lg:bottom-0 lg:right-0 lg:block"
              src="/homepage/mobile2.svg"
              width={591}
              height={492}
              alt="mobile"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section12;
