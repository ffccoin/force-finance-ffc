import { motion } from "framer-motion";

export default function Header() {

  const topToBottomVariants = {
    hide: {
      opacity: 0,
      y: -50,
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
    <motion.div initial="hide"
    whileInView="show"
    exit="show"
    variants={topToBottomVariants} className="mt-14 flex flex-col content-center items-center justify-center">
      <p className="text-center  font-neue-machina-bold text-[20px] font-[800px] sm:leading-[75.75px] text-neutralLighter md:text-[38px]">
        FFC COIN ECOSYSTEM
      </p>
      <p className="mx-4 w-auto max-w-[630px] text-center font-apfel-grotezk text-[16px] font-[400px] leading-[24px] text-neutralLight md:mx-0 md:w-[625px]">
        Empowering individuals to achieve financial freedom by providing
        accessible and secure decentralized solutions, revolutionizing the
        traditional financial landscape.
      </p>
    </motion.div>
  );
}
