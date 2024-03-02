import Image from "next/image";
import { motion } from "framer-motion";

const ServicesExperience = () => {
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
        duration: 0.7,
      },
    },
  };
  return (
    <div className="mt-32 sm:mt-16 grid place-items-center items-center bg-primary1 z-50 md:h-auto lg:h-[700px] lg:justify-center ">
      <div className="flex max-w-[90vw] flex-col-reverse items-center justify-between gap-8 md:justify-center  lg:flex-row">
        <motion.div
          className="flex max-w-[56rem] z-50 flex-col p-4 text-neutral md:p-6"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <h3 className=" text-wrap text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px] lg:mt-4">
            Experience the Power of Web 3 Wallets
          </h3>
          <p className=" mt-4  max-w-[34rem] text-wrap text-[16px] leading-[24px]">
            Discover the Next Generation of Wallets, Web 3 Wallets seamlessly
            integrate with decentralized applications and blockchain networks,
            offering enhanced security, multi-chain support, and user-centric
            design. Enjoy interoperability and DeFi integration, empowering you
            to navigate the digital frontier with ease and confidence.
          </p>
          <div className="mt-5 flex flex-col gap-y-5">
            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
                Seamless Integration, Connect with ease to decentralized
                applications and blockchain networks.
              </p>
            </div>

            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
                Enhanced Security, Safeguard your assets with robust encryption
                and decentralized architecture.{" "}
              </p>
            </div>

            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
                Multi-Chain Support, Access multiple blockchains and digital
                assets from a single interface.{" "}
              </p>
            </div>
            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
                DeFi Integration, Explore decentralized finance services like
                staking, yield farming, and more directly from your wallet.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-10 flex items-center justify-center lg:mr-16 z-20"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <Image
            src="/homepage/developers-transformed.png"
            width={465}
            height={428}
            alt="img"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesExperience;
