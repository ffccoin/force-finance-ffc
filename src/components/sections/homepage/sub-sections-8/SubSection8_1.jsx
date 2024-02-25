"use client";

import Button from "@/components/buttons/Button";
import { motion } from "framer-motion";

const SubSection8_1 = () => {
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
    <motion.div
      className="flex  flex-col lg:ml-auto lg:w-[24.438rem]"
      initial="hide"
      whileInView="show"
      exit="show"
      variants={leftToRightVariants}
    >
      <h3 className="text-wrap font-neue-machina-bold text-xl md:text-3xl	 ">
        TRY CRYPTO COIN CONVERTER
      </h3>
      <p className=" mt-8 text-wrap text-neutralLight">
        Instantly convert between your local currency and over 40
        cryptocurrencies to capitalize on price movements.
      </p>
      <div className="mt-8 w-[145px]">
        <Button width="fit" title="Learn more" size="small" />
      </div>
    </motion.div>
  );
};

export default SubSection8_1;
