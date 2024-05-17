"use client";

import { motion } from "framer-motion";

const Card2 = ({ title, text, number, delay }) => {
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
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="show"
      variants={rightToLeftVariants}
    >
      <div className="relative flex max-w-7xl flex-col lg:max-w-96 lg:flex-row">
        <div className="mb-4 lg:mb-0 lg:mr-auto">
          <div className="gap-10 rounded-[20px] bg-neutral p-3 px-4 lg:h-[137px]">
            <p className="mt-2 font-neue-machina-bold text-[21.33px]">
              {title}
            </p>
            <p className="mt-2 text-base text-neutralLight">{text}</p>
          </div>
        </div>

        <div className="absolute right-[-10px] top-[-24px]  flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary1 text-[21.33px] lg:right-[-8px] xl:right-[-38px]">
          <p className="text-center font-neue-machina-bold text-neutral">
            {number}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card2;
