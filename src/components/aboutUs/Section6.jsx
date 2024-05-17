import Person from "./Person";
import { motion } from "framer-motion";

export default function Section6() {
  const bottomToTopVariants = {
    hide: {
      opacity: 0,
      y: 90,
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
    <div>
      <div className="mx-auto mt-[49px] flex w-screen max-w-[1235px] flex-col items-center justify-start gap-8 px-8 md:px-5">
        <div className="flex flex-col items-center justify-start gap-[15px]">
          <p className="text-center font-neue-machina-bold text-[37.9px] uppercase text-white sm:text-[33.9px]  md:text-[35.9px]">
            Meet Our team
          </p>
          <p className=" w-full max-w-[630px] text-center font-apfel-grotezk text-base leading-[24.00px] text-[#898990] ">
            Get to know the passionate individuals behind FFC Coin, dedicated to
            pushing the boundaries of innovation and excellence in the world of
            decentralized finance.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-20">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
          >
            {" "}
            <Person
              name={"Jonathan Marquis"}
              position={"Founder & Ceo"}
              image={"pic1"}
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
          >
            <Person
              name={"Habib Rehman"}
              position={"Blockchain  Developer"}
              image={"pic2"}
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
          >
            <Person
              name={"Dennis Contreras"}
              position={"Business Development"}
              image={"pic4"}
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}
          >
            {" "}
            <Person
              name={"Lamar jensen"}
              position={"Investor & Partner"}
              image={"pic3"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
