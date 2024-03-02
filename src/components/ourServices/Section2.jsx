import Image from "next/image";
import { motion } from "framer-motion";

const Section2 = () => {
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
    <div className="mt-12 grid place-items-center  bg-primary2">
      <div className=" flex max-w-7xl flex-col items-center">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={topToBottomVariants}
          className=" flex flex-col items-center px-8 uppercase md:mt-20 md:max-w-[50vw] "
        >
          <p className=" text-wrap text-base text-primary1">
            FFC COIN DEFI Finance solution
          </p>
          <p className="mt-3 text-wrap text-center font-neue-machina-bold text-xl   uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            Experience the Future of Finance with FFC Coin{" "}
          </p>
        </motion.div>
        <div  className="flex flex-col gap-y-4 px-8 lg:flex-row lg:gap-x-4 xl:gap-x-0">
          <motion.div  initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants} className="group flex w-full flex-col gap-y-[30px] rounded-[10px] px-1 py-[10px] transition duration-500 ease-in-out md:py-[50px] ">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)] group-hover:bg-primary2   ">
              <Image
                src="/ourServices/server.svg"
                width={36}
                height={36}
                alt="img"
                className="group-hover:bg-primary group-hover:text-darkgreen h-9 w-9 transition-all"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 ">
                Enhanced Security{" "}
              </h1>
              <span className="text-neutralLight">
                Rest easy knowing that your assets are safeguarded by advanced
                security measures, ensuring peace of mind in every transaction.
              </span>
            </div>
          </motion.div>
          <motion.div    initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants} className="group flex w-full flex-col gap-y-[30px] rounded-[10px] px-1 py-[10px] transition duration-500 ease-in-out md:py-[50px] ">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)]  ">
              <Image
                src="/ourServices/bitcoin.svg"
                width={36}
                height={36}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 ">
                Increased Accessibility{" "}
              </h1>
              <span className="text-neutralLight">
                With FFC Coin, financial services become accessible to all,
                empowering individuals to participate in the digital economy and
                unlock new opportunities.
              </span>
            </div>
          </motion.div>
          <motion.div   initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants} className="group flex w-full flex-col gap-y-[30px] rounded-[10px] px-1 py-[10px] transition duration-500 ease-in-out md:py-[50px] ">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)]  ">
              <Image
                src="/ourServices/globalReach.svg"
                width={37}
                height={35}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 ">
                Global Reach{" "}
              </h1>
              <span className="text-neutralLight">
                Break down geographic barriers and expand your financial reach
                with FFC Coin's borderless platform, enabling seamless
                transactions and collaborations worldwide.{" "}
              </span>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-4 px-8 lg:flex-row lg:gap-x-4 xl:gap-x-0">
          <motion.div  initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}  className="group flex w-full flex-col gap-y-[30px] rounded-[10px] px-1 py-[10px] transition duration-500 ease-in-out md:py-[50px] ">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)] group-hover:bg-primary2   ">
              <Image
                src="/homepage/bitcoin-style-1.svg"
                width={36}
                height={36}
                alt="img"
                className="group-hover:bg-primary group-hover:text-darkgreen h-9 w-9 transition-all"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 ">
                Passive Income{" "}
              </h1>
              <span className="text-neutralLight">
                Explore various avenues for passive income, from staking and
                yield farming to liquidity provision, and enhance your earnings
                effortlessly.{" "}
              </span>
            </div>
          </motion.div>
          <motion.div  initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}  className="group flex w-full flex-col gap-y-[30px] rounded-[10px] px-1 py-[10px] transition duration-500 ease-in-out md:py-[50px] ">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)]  ">
              <Image
                src="/homepage/bitcoin-style-3.svg"
                width={36}
                height={36}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 ">
                Decentralized Finance{" "}
              </h1>
              <span className="text-neutralLight">
                Step into the realm of decentralized finance and unlock a world
                of innovation, transparency, and financial empowerment.{" "}
              </span>
            </div>
          </motion.div>
          <motion.div  initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomToTopVariants}  className="group flex w-full flex-col gap-y-[30px] rounded-[10px] px-1 py-[10px] transition duration-500 ease-in-out md:py-[50px] ">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)]  ">
              <Image
                src="/homepage/bitcoin-style-2.svg"
                width={37}
                height={35}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 ">
                Community Engagement{" "}
              </h1>
              <span className="text-neutralLight">
                Join a vibrant community of like-minded individuals and
                businesses, collaborating and growing together within the FFC
                Coin ecosystem.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
