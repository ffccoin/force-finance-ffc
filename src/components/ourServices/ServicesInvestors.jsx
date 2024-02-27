import Image from "next/image";
import { motion } from "framer-motion";
const ServicesInvestors = () => {
  const topToBottomVariants = {
    hide: {
      opacity: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const bottomToTopVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div className="mt-8 grid place-items-center bg-primary1">
      <div className=" flex max-w-7xl flex-col text-primary2 ">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={topToBottomVariants}
          className="mt-10 flex flex-col items-center md:mt-20 md:max-w-[90vw] "
        >
          <p className="text-center font-neue-machina-bold text-2xl  uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            Our investors
          </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-2 gap-10 px-10 md:mt-20 md:max-w-6xl md:gap-x-20  md:px-10 lg:grid-cols-4  xl:gap-36">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20 md:max-w-44 "
          >
            <Image
              className=""
              src="/ourServices/poolin.svg"
              width={123.33}
              height={27.98}
              alt="img"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20 md:max-w-44 "
          >
            <Image
              src="/ourServices/neutino.svg"
              width={180}
              height={26}
              alt="img"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20 md:max-w-44 "
          >
            <Image
              src="/ourServices/swop.svg"
              width={180}
              height={33}
              alt="img"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20 md:max-w-44 "
          >
            <Image
              src="/ourServices/smile.svg"
              width={112}
              height={36}
              alt="img"
            />
          </motion.div>
        </div>
        <div className="mb-8 mt-6 grid  grid-cols-2 items-center gap-x-12 gap-y-12 px-10  sm:gap-x-20 md:mt-20  md:max-w-6xl  lg:grid-cols-3  xl:gap-36">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20  md:col-start-1  md:max-w-44 "
          >
            <Image
              className=""
              src="/ourServices/btex.svg"
              width={180.89}
              height={36}
              alt="img"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20 md:max-w-44 "
          >
            <Image
              src="/ourServices/coinbase.svg"
              width={141}
              height={24.99}
              alt="img"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
            className="max-w-20 md:max-w-44 "
          >
            <Image
              src="/ourServices/huobi.svg"
              width={180}
              height={32}
              alt="img"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInvestors;
