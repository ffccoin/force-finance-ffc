"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Section10 = () => {
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
    <div className="bg-primary mt-16 grid h-auto items-center justify-center rounded-lg ">
      <div className="sm: mt-10 flex flex-col px-4 pl-8 md:flex-row md:gap-8 lg:justify-end lg:gap-0">
        <motion.div
          className="flex max-w-[38.7rem] flex-col md:max-w-[36.7rem]  lg:max-w-[36.7rem]"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <h3 className="lg:[37.96px] text-wrap font-neue-machina-bold text-xl uppercase leading-[42.64px] md:text-3xl">
            Access all your favorite assets effortlessly
          </h3>

          <p className=" mt-8 text-wrap text-[16px] leading-[24px] text-neutralLight">
            Empower yourself to manage your cryptocurrencies, NFTs, and other
            digital assets with complete control, privacy, and security, all
            from the convenience of your own device.
          </p>
          <div className="mt-6 max-w-[38rem] ">
            <Image
              src="/homepage/line2.svg"
              alt="Arrow"
              width={413}
              height={1}
            />
          </div>
          <p className="mt-6 text-neutralLight">
            Wondering what tokens is supported?
          </p>
          <span className="mt-2 flex text-center ">
            <Link href="https://app.forcefinancecoin.com/tokens">
              <p className=" cursor-pointer font-neue-machina-bold text-primary1  hover:border-b hover:border-primary1 ">
                See all tokens
              </p>
            </Link>
            <div className=" flex justify-center text-center">
              <Image
                src="/homepage/arrowHead.svg"
                alt="Arrow"
                width={16}
                height={10}
              />
            </div>
          </span>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-end"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <motion.div
            className="mt-8 max-w-[38rem] md:max-w-[30rem] lg:max-w-[38rem]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/homepage/sideIcon.svg"
              alt="Arrow"
              width={643}
              height={489}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section10;
