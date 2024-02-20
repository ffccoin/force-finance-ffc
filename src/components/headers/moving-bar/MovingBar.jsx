"use client";

import { updatePrices } from "@/libs/features/coins/coinsSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MovingBar = ({ prices }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePrices(prices));
  }, [prices]);

  // Bitcoin, Ethereum, Solana, Cardano, Terra, Polkadot
  const displayTicker = (number) => (
    <div
      className={`ticker-text${number === 2 ? "2" : ""} flex h-[46px] w-fit select-none items-center gap-x-16 bg-black px-5 text-neutralLight`}
    >
      {prices && prices.bitcoin && (
        <div className="flex gap-x-4">
          <Image src="/icons/bitcoin.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Bitcoin</span>
          <span className="text-sm">${prices.bitcoin.usd}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white"></span>
          </div>
        </div>
      )}
      {prices && prices.ethereum && (
        <div className="flex gap-x-4">
          <Image src="/icons/ethereum.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Ethereum</span>
          <span className="text-sm">${prices.ethereum.usd}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white"></span>
          </div>
        </div>
      )}
      {prices && prices.solana && (
        <div className="flex gap-x-4">
          <Image src="/icons/solana.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Solana</span>
          <span className="text-sm">${prices.solana.usd}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white"></span>
          </div>
        </div>
      )}
      {prices && prices.cardano && (
        <div className="flex gap-x-4">
          <Image src="/icons/cardano.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Cardano</span>
          <span className="text-sm">${prices.cardano.usd}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white"></span>
          </div>
        </div>
      )}
      {prices && prices["terra-luna"] && (
        <div className="flex gap-x-4">
          <Image src="/icons/terra.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Terra</span>
          <span className="text-sm">${prices["terra-luna"].usd}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white"></span>
          </div>
        </div>
      )}
      {prices && prices.polkadot && (
        <div className="flex gap-x-4">
          <Image src="/icons/polkadot.svg" width={20} height={20} alt="img" />
          <span className="text-sm">Polkadot</span>
          <span className="text-sm">${prices.polkadot.usd}</span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white"></span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="ticker-container relative flex overflow-x-hidden">
      {displayTicker(1)}
      {displayTicker(2)}
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
