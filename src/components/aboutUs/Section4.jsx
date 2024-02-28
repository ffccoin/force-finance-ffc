import Image from "next/image";
import Button from "@/components/buttons/Button";
import { motion } from "framer-motion";

const Section4 = () => {
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
    <div className="bg-primary  grid  place-items-center px-8 md:place-items-start  lg:place-items-center">
      <div className="mt-10 flex max-w-[83rem]  flex-col justify-start  lg:flex-row-reverse  lg:items-center lg:justify-center xl:ml-8 ">
        <motion.div className="flex max-w-full flex-shrink-0 justify-center lg:max-w-[500px] lg:justify-end xl:max-w-[685px]"
          animate={{ y: [0, 40, 0] }}
          transition=
          {{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <Image
            src="/ourServices/globe.png"
            width={685}
            height={613}
            alt="img"
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className=" flex flex-col py-10   lg:max-w-[641px] lg:items-start lg:p-0"
        >
          <p className="font-apfel-grotezk uppercase text-primary1 ">
            our story
          </p>
          <h1 className=" w-full text-wrap text-xl uppercase sm:text-[37.9px] sm:leading-[42.64px] lg:mt-10">
            Your Trusted Decentralized DeFi Web 3 Financial Solution Provider{" "}
          </h1>
          <p className="mt-9 text-wrap text-[16px] leading-[24px]  lg:max-w-[34.5rem]">
            Force Finance Coin is a dynamic DeFi platform on the etherum
            blockchain, revolutionizing finance and empowering users with
            innovative solutions.
          </p>
          <p className="mt-9 text-wrap  text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
            At its core, Force Finance Coin serves as a decentralized medium of
            exchange, ensuring secure and transparent transactions. Committed to
            accessibility and security, it democratizes financial services for
            all users.
          </p>
          <p className="mt-9 text-wrap text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
            Driven by a vision of inclusivity and innovation, Force Finance Coin
            utilizes blockchain technology to offer diverse DeFi solutions. From
            decentralized exchanges to yield farming, it empowers users with a
            range of options.
          </p>
          <div className="mt-11 flex gap-8">
            <Button
              className=""
              title="Join our team"
              size="small"
              icon={
                <Image
                  src="/ourServices/arrowHead.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
