"use client";

import SecondaryButton from "@/components/buttons/SecondaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SubSection8_2 = () => {
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
    <div className="mt-28 flex max-w-7xl flex-wrap justify-between  px-12 md:flex-row ">
      <motion.div
        className="flex  flex-col md:max-w-[27.438rem]"
        initial="hide"
        whileInView="show"
        exit="show"
        variants={leftToRightVariants}
      >
        <h3 className="text-wrap font-neue-machina-bold text-xl md:text-3xl	 ">
          HOW TO GET STARTED
        </h3>
        <p className=" mt-8 text-wrap text-neutralLight">
          Embarking on your cryptocurrency investment journey doesn't have to be
          daunting. Follow these simple steps to get started:
        </p>
      </motion.div>
      <motion.div
        className="flex w-full flex-wrap justify-center md:w-[12.438rem] lg:justify-end"
        initial="hide"
        whileInView="show"
        exit="show"
        variants={rightToLeftVariants}
      >
        <div className="mt-8 w-full md:w-[200px] ">
          <Link href="https://app.forcefinancecoin.com">
            <SecondaryButton
              className="mt-auto  w-full "
              title="Get Started"
              size="small"
              icon={
                <Image
                  src="/homepage/arrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              }
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SubSection8_2;
