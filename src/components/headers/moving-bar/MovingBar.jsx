"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useGetCoinsQuery } from "@/libs/services/coins";

const MovingBar = () => {
  const { data, error, isLoading } = useGetCoinsQuery();
  const movingBarVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delay: 0.3,
      },
    },
  };

  // Bitcoin, Ethereum, Solana, Cardano, Terra, Polkadot
  const displayTicker = (number) => (
    <div
      className={`ticker-text${number === 2 ? "2" : ""} flex h-[46px] w-fit select-none items-center gap-x-16 bg-black px-5 text-neutralLight`}
    >
      {data && data[0].id === "bitcoin" && (
        <div className="flex gap-x-4">
          <Image src="/icons/bitcoin.svg" width={20} height={20} alt="bitcoin" />
          <span className="text-sm">Bitcoin</span>
          <span className="text-sm">${data[0].current_price}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {data[0].price_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      )}
      {data && data[1].id === "ethereum" && (
        <div className="flex gap-x-4">
          <Image src="/icons/ethereum.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Ethereum</span>
          <span className="text-sm">${data[1].current_price}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {data[1].price_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      )}
      {data && data[2].id === "solana" && (
        <div className="flex gap-x-4">
          <Image src="/icons/solana.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Solana</span>
          <span className="text-sm">${data[2].current_price}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {data[2].price_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      )}
      {data && data[3].id === "cardano" && (
        <div className="flex gap-x-4">
          <Image src="/icons/cardano.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Cardano</span>
          <span className="text-sm">${data[3].current_price}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {data[3].price_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      )}
      {data && data[5].id === "terra-luna" && (
        <div className="flex gap-x-4">
          <Image src="/icons/terra.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Terra</span>
          <span className="text-sm">${data[5].current_price}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {data[5].price_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      )}
      {data && data[4].id === "polkadot" && (
        <div className="flex gap-x-4">
          <Image src="/icons/polkadot.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Polkadot</span>
          <span className="text-sm">${data[4].current_price}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {data[4].price_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-screen bg-black">
      <motion.div
        className="ticker-container relative flex overflow-x-hidden"
        initial="hide"
        whileInView="show"
        exit="show"
        variants={movingBarVariants}
      >
        {displayTicker(1)}
        {displayTicker(2)}
      </motion.div>
    </div>
  );
};

const downArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12L5.88675 7H0.113249L3 12ZM2.5 0L2.5 7.5H3.5L3.5 0L2.5 0Z"
      fill="#FF4500"
    />
  </svg>
);

const upArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 0L0.113249 5H5.88675L3 0ZM2.5 12L2.5 4.5H3.5L3.5 12L2.5 12Z"
      fill="#00FF00"
    />
  </svg>
);

export default MovingBar;
