import Accordion from "../elements/Accordion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ServicesFAQs = () => {
  const router = useRouter();

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
  return (
    <div className="mt-2 grid place-items-center bg-primary2">
      <div className="mt-12 grid max-w-7xl gap-x-20 px-6  sm:grid-cols-1 sm:px-16 lg:grid-cols-2  lg:px-8">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="w-full"
        >
          <Accordion
            ques={"How does FFC Coin ensure security?"}
            ans={
              "FFC Coin employs robust encryption protocols and decentralized blockchain technology to safeguard transactions and user data. Through regular security audits and smart contract verification, FFC Coin ensures the highest level of security for its users. Additionally, FFC Coin implements multi-factor authentication and continuous monitoring to mitigate potential threats effectively."
            }
          />
          <Accordion
            ques={"What are the benefits of using FFC Coin?"}
            ans={
              "The benefits of using FFC Coin include decentralized finance opportunities, low transaction fees, and enhanced privacy. Users can access a wide range of DeFi services, enjoy fast and secure transactions, and maintain anonymity in their financial activities, fostering greater financial autonomy and flexibility."
            }
          />
          <Accordion
            ques={"How can I get started with FFC Coin?"}
            ans={
              "To commence your journey with FFC Coin, start by setting up a new wallet through our platform. Once your wallet is created, complete the necessary verification steps to ensure security. Then, you can participate in our Initial Coin Offering (ICO) by purchasing FFC Coins directly through our ICO sale or supported exchanges. Engage in our ICO to seize the opportunity for early investment and become part of our thriving decentralized finance (DeFi) ecosystem."
            }
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="w-full"
        >
          <Accordion
            ques={"What is Force Finance Coin (FFC Coin)?"}
            ans={
              "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
            }
          />
          <Accordion
            ques={"What are the passive income opportunities available?"}
            ans={
              "Passive income opportunities with FFC Coin encompass various activities within its decentralized finance (DeFi) ecosystem. Users can engage in liquidity provision, staking, yield farming, and lending to earn rewards in FFC Coins. Through these avenues, individuals can generate income while supporting the ecosystem's growth and stability. Whether by providing liquidity, staking tokens, farming yields, or participating in lending protocols, FFC Coin offers diverse pathways for users to earn passive income and maximize their financial potential."
            }
          />

          <Accordion
            ques={"is FFC Coin available worldwide?"}
            ans={
              "Yes, FFC Coin is accessible worldwide, offering its decentralized finance solutions to users globally. Through blockchain technology, FFC Coin transcends geographical boundaries, ensuring accessibility and participation from anywhere in the world."
            }
          />
        </motion.div>
      </div>
      <div className="mt-20 flex w-full  select-none flex-wrap justify-center gap-1 px-10">
        <p className="text-center font-neue-machina-light text-base ">
          Haven’t got your answer?{" "}
        </p>
        <p
          className="cursor-pointer text-center font-neue-machina-bold text-primary1 hover:underline"
          onClick={() => router.push("/contact-us")}
        >
          Contact our support now
        </p>
      </div>
    </div>
  );
};

export default ServicesFAQs;
