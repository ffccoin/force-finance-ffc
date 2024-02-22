"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Calculator = ({ coins }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [coinAmount, setCoinAmount] = useState("");

  const calculateCoinAmount = () => {
    const currency = coins.find((coin) => coin.id === selectedCoin);
    return currencyAmount / currency.current_price;
  };

  const calculateCurrencyAmount = () => {
    const currency = coins.find((coin) => coin.id === selectedCoin);
    return coinAmount * currency.current_price;
  };
  return (
    <div className="flex w-full flex-wrap lg:max-w-[24.438rem]">
      <div className="flex w-full flex-col flex-wrap">
        <p className="text-neutralLight">You have</p>
        <div className="flex gap-x-3">
          <input
            type="text"
            value={currencyAmount}
            onChange={(e) => (
              setCurrencyAmount(e.target.value), calculateCoinAmount()
            )}
            className="mt-3 h-8 w-full border border-transparent border-b-primary1 bg-transparent outline-none focus:border-b-primary1 focus:outline-none"
          />

          <Menu as="div" className="relative">
            <Menu.Button className="mt-3 flex h-8 max-w-fit items-center border border-transparent border-b-primary1 bg-transparent font-apfel-grotezk outline-none">
              {selectedCurrency}
              {chevronDown}
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-11 flex w-[150px] flex-col items-start gap-y-1 rounded-md border border-primary1 border-opacity-50 bg-neutralDarker bg-opacity-50 px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCurrency("USD")}
                  >
                    USD
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onCLick={() => setSelectedCurrency("PKR")}
                  >
                    PKR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCurrency("INR")}
                  >
                    INR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCurrency("EUR")}
                  >
                    EUR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCurrency("GBP")}
                  >
                    GBP
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <p className="mt-6 text-neutralLight">You get</p>
        <div className="flex gap-x-3">
          <input
            type="text"
            value={coinAmount}
            onChange={(e) => (
              setCoinAmount(e.target.value), calculateCurrencyAmount()
            )}
            className="mt-3 h-8 w-full border border-transparent border-b-primary1 bg-transparent outline-none focus:border-b-primary1 focus:outline-none"
          />
          <Menu as="div" className="relative">
            <Menu.Button className="mt-3 flex h-8 max-w-fit items-center border border-transparent border-b-primary1 bg-transparent font-apfel-grotezk outline-none">
              {selectedCoin}
              {chevronDown}
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-11 flex w-[150px] flex-col items-start gap-y-1 rounded-md border border-primary1 border-opacity-50 bg-neutralDarker bg-opacity-50 px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => {
                      setSelectedCoin("BTC");
                      calculateAmounts();
                    }}
                  >
                    BTC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCoin("ETH")}
                  >
                    ETH
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCoin("LTC")}
                  >
                    LTC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCoin("XRP")}
                  >
                    XRP
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => setSelectedCoin("BCH")}
                  >
                    BCH
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <div>
          <Image width={77} height={30} alt="img" src="/homepage/visa.svg" />
        </div>
        <div>
          <Image
            width={77}
            height={30}
            alt="img"
            src="/homepage/mastercard.svg"
          />
        </div>
        <div>
          <Image width={77} height={30} alt="img" src="/homepage/paypal.svg" />
        </div>
        <div>
          <Image
            width={77}
            height={30}
            alt="img"
            src="/homepage/discover.svg"
          />
        </div>
      </div>
    </div>
  );
};

const chevronDown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="#F3F3F3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Calculator;
