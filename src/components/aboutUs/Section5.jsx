import { motion } from "framer-motion";
import Link from "next/link";

export default function Section5() {
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
  const blinkVariants = {
    hide: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="items-centre flex w-screen flex-col justify-center px-8">
      <div className="flex items-center  justify-center  xl:ml-8">
        <div className=" mt-9 flex w-full max-w-[83rem] items-center  justify-center md:mt-[90px] ">
          <div className="flex w-full flex-col items-center justify-center gap-[49px]">
            <div className="flex w-full flex-col items-start justify-between sm:flex-row md:gap-5">
              <motion.p
                initial="hide"
                whileInView="show"
                exit="show"
                variants={leftToRightVariants}
                className="max-w-[600px] text-start font-neue-machina-bold text-[25.9px] uppercase leading-[42.00px] text-white md:text-[35.9px]"
              >
                Navigating the Future of DeFi Finance
              </motion.p>

              <motion.p
                initial="hide"
                whileInView="show"
                exit="show"
                variants={rightToLeftVariants}
                className="max-w-[450px] text-start  font-apfel-grotezk leading-[24.00px] text-[#898990] sm:mt-0"
              >
                Take full control of your crypto, NFTs, and more with complete
                privacy and security directly on your device.
              </motion.p>
            </div>
            <div className="grid  justify-center ">
              <div className="mb-6 flex flex-col items-center justify-center gap-8 lg:flex-row">
                <motion.div
                  initial="hide"
                  whileInView="show"
                  exit="show"
                  variants={leftToRightVariants}
                  className="flex w-full  max-w-[635px] flex-col items-center justify-center gap-[30px] rounded-[10px] bg-[#232325] px-[30px] py-10 sm:flex-row sm:px-5"
                >
                  <img
                    className="h-20 w-20"
                    src="images/img_home.svg"
                    alt="settings"
                  />
                  <div className="flex  w-full flex-col items-start justify-start gap-3">
                    <p className="w-full  text-center font-neue-machina-bold text-[21.33px] text-gray-100 sm:text-start sm:text-[17.33px] md:text-[19.33px]">
                      Cryptocurrency Transaction
                    </p>
                    <p className="text-blue_gray-400 max-w-[465px] font-apfel-grotezk text-[16px] text-base leading-[24.00px] text-[#898990] md:max-w-full">
                      <>
                        Simplify your crypto transactions with seamless sending
                        and receiving capabilities, ensuring quick and
                        hassle-free exchanges.
                      </>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial="hide"
                  whileInView="show"
                  exit="show"
                  variants={rightToLeftVariants}
                  className="flex w-full max-w-[635px] flex-col items-center justify-center gap-[30px] rounded-[10px] bg-[#232325] px-[30px] py-10 sm:flex-row sm:px-5"
                >
                  <img
                    className="h-20 w-20"
                    src="images/img_group9321.svg"
                    alt="settings"
                  />
                  <div className="flex  w-full flex-col items-start justify-start gap-3">
                    <p className="w-full text-center font-neue-machina-bold  text-[21.33px]  text-gray-100 sm:text-start sm:text-[17.33px] md:text-[19.33px]">
                      Fiat To Crypto{" "}
                    </p>
                    <p className="text-blue_gray-400 max-w-[465px] font-apfel-grotezk text-[16px] text-base leading-[24.00px] text-[#898990] md:max-w-full">
                      <>
                        Convert fiat to crypto effortlessly, unlocking the
                        potential of digital assets for your financial goals.
                      </>
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
                <motion.div
                  initial="hide"
                  whileInView="show"
                  exit="show"
                  variants={leftToRightVariants}
                  className="flex w-full max-w-[635px]  flex-col items-center justify-center gap-[30px] rounded-[10px] bg-[#232325] px-[30px] py-10 sm:flex-row sm:px-5"
                >
                  <img
                    className="h-20 w-20"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <div className="flex  w-full flex-col items-start justify-start gap-3">
                    <p className="w-full text-center font-neue-machina-bold  text-[21.33px]  text-gray-100 sm:text-start sm:text-[17.33px] md:text-[19.33px]">
                      Robust Security{" "}
                    </p>
                    <p className="text-blue_gray-400 max-w-[465px] font-apfel-grotezk text-[16px] text-base leading-[24.00px] text-[#898990] md:max-w-full">
                      <>
                        Experience high-level security protocols, ensuring your
                        assets and data remain protected at all times.{" "}
                      </>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial="hide"
                  whileInView="show"
                  exit="show"
                  variants={rightToLeftVariants}
                  className="flex w-full  max-w-[635px] flex-col items-center justify-center gap-[30px] rounded-[10px] bg-[#232325] px-[30px] py-10 sm:flex-row sm:px-5"
                >
                  <img
                    className="h-20 w-20"
                    src="images/img_settings_light_green_a200.svg"
                    alt="settings"
                  />
                  <div className="flex  w-full flex-col items-start justify-start gap-3">
                    <p className="w-full text-center font-neue-machina-bold  text-[21.33px]  text-gray-100 sm:text-start sm:text-[17.33px] md:text-[19.33px]">
                      Defi Staking
                    </p>
                    <p className="text-blue_gray-400 max-w-[465px] font-apfel-grotezk text-[16px] text-base leading-[24.00px] text-[#898990] md:max-w-full">
                      <>
                        Stake tokens to unlock exclusive rewards & actively
                        contribute to the network&#39;s growth and stability,
                        ensuring long-term profitability.
                      </>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" mb-16 mt-16 flex h-full min-h-[288px] w-full max-w-[1300px] flex-col items-center justify-between rounded-2xl bg-[url('/images/back.svg')] bg-cover bg-center bg-no-repeat px-20  sm:flex-row">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftToRightVariants}
            className="mt-4 flex flex-col items-start justify-center pb-4 sm:pr-6"
          >
            <p className="text-center font-neue-machina-bold text-[25px]  uppercase text-black sm:text-start lg:text-[38px]">
              Get started for free
            </p>

            <p
              className=" mt-3 w-full max-w-[500px] font-apfel-grotezk text-[16px] text-black
            "
            >
              Force Finance Coin integrates Ethereum and sovereign blockchains
              seamlessly, evolving into a comprehensive multi-chain system.
            </p>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={blinkVariants}
            className="flex flex-col items-center justify-center gap-4 pb-5 lg:flex-row"
          >
            <Link href="https://app.forcefinancecoin.com">
              <button
                className={`grid h-[54px] w-[148px] place-items-center bg-black font-neue-machina-bold leading-6 text-neutralDark enabled:hover:bg-darkGreen enabled:hover:text-neutralLighter`}
              >
                <div className="flex gap-x-2.5 text-white">Get Started</div>
              </button>
            </Link>
            <button
              className={`grid h-[54px] w-[148px] place-items-center border border-solid border-black font-neue-machina-bold leading-6 text-neutralDark`}
            >
              <div className="flex gap-x-2.5">Learn More</div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
