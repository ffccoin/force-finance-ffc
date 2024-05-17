import { motion } from "framer-motion";
export default function Section7() {
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
    <div className="bg-primary  grid  place-items-center px-8  md:place-items-start lg:place-items-center ">
      <div className="mt-20 flex  max-w-full flex-col-reverse lg:max-w-[83rem] lg:flex-row-reverse lg:items-center  lg:justify-center lg:gap-36  xl:ml-8 xl:gap-44 ">
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[83rem]">
          <div className="flex items-center justify-center border border-solid border-[#898990] px-7 py-7	 sm:px-8 	sm:py-8 md:px-12 md:py-20 lg:px-8 	 lg:py-8  xl:px-12 xl:py-12">
            <img
              src="/aboutpage/poolin.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990] px-7  py-7	sm:px-8  sm:py-8 md:px-12  md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <img
              src="/aboutpage/neutrino.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <img
              src="/aboutpage/swop.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990]   px-7	py-7 sm:px-8 sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <img
              src="/aboutpage/btcex.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border  border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <img
              src="/aboutpage/coinbase.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border  border-solid border-[#898990]  px-7	py-7 sm:px-8  sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <img
              src="/aboutpage/huobi.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
        </div>
        <motion.div initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}className=" flex flex-col items-start   px-4 py-10 lg:max-w-[400px] lg:p-0">
          <h1 className=" w-full text-wrap text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            Our partners
          </h1>
          <p className="mt-4 text-wrap text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
            Meet our esteemed partners, united in our commitment to innovation,
            collaboration, and shared success.{" "}
          </p>
          <img
            className="mt-8"
            src="/aboutpage/cerealClub.svg"
            width={262.82}
            height={80}
            alt="img"
          />
        </motion.div>
      </div>
    </div>
  );
}



