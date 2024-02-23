"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Calculator = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [coinAmount, setCoinAmount] = useState(0);
  const [coinToCurrencyRate, setCoinToCurrencyRate] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(false);

  const fetchExchangeRate = async () => {
    try {
      // Fetching the exchange rate of Bitcoin in terms of USD from CoinGecko API
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin}&vs_currencies=${selectedCurrency}`,
      );
      const btcToUsd = response.data.bitcoin.usd; // Accessing the BTC to USD rate
      setCoinToCurrencyRate(btcToUsd);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const convertCoinToCurrency = () => {
    const usd = coinAmount * coinToCurrencyRate;
    setCurrencyAmount(usd);
  };

  const convertCurrencyToCoin = () => {
    const btc = currencyAmount / coinToCurrencyRate;
    setCoinAmount(btc);
  };
  if (coinToCurrencyRate === 0) {
    fetchExchangeRate();
  }

  const handleCoinSelect = (coin) => {
    setInputDisabled(true);
    setSelectedCoin(coin);
    fetchExchangeRate().then(() => {
      setInputDisabled(false);
    });
  };

  const handleCurrencySelect = (currency) => {
    setInputDisabled(true);
    setSelectedCurrency(currency);
    fetchExchangeRate().then(() => {
      setInputDisabled(false);
    });
  };

  useEffect(() => {
    if (coinToCurrencyRate !== 0) {
      convertCoinToCurrency();
    }
  }, [coinAmount]);

  useEffect(() => {
    if (coinToCurrencyRate !== 0) {
      convertCurrencyToCoin();
    }
  }, [currencyAmount]);

  return (
    <div className="flex w-full flex-wrap lg:max-w-[24.438rem]">
      <div className="flex w-full flex-col flex-wrap">
        <p className="text-neutralLight">You have</p>
        <div className="flex gap-x-3">
          <input
            type="text"
            value={currencyAmount}
            onChange={(e) => setCurrencyAmount(e.target.value)}
            className="mt-3 h-8 w-full border border-transparent border-b-primary1 bg-transparent outline-none focus:border-b-primary1 focus:outline-none"
            disabled={inputDisabled}
          />
          <Menu as="div" className="relative">
            <Menu.Button className="mt-3 flex h-8 max-w-fit items-center border border-transparent border-b-primary1 bg-transparent font-apfel-grotezk uppercase outline-none">
              {selectedCurrency}
              {chevronDown}
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-11 flex w-[150px] flex-col items-start gap-y-1 rounded-md border border-primary1 border-opacity-50 bg-neutralDarker bg-opacity-50 px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("usd")}
                  >
                    USD
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onCLick={() => handleCurrencySelect("pkr")}
                  >
                    PKR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("inr")}
                  >
                    INR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("eur")}
                  >
                    EUR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("gbp")}
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
            onChange={(e) => setCoinAmount(e.target.value)}
            className="mt-3 h-8 w-full border border-transparent border-b-primary1 bg-transparent outline-none focus:border-b-primary1 focus:outline-none"
            disabled={inputDisabled}
          />
          <Menu as="div" className="relative">
            <Menu.Button className="mt-3 flex h-8 max-w-fit items-center border border-transparent border-b-primary1 bg-transparent font-apfel-grotezk outline-none">
              {selectedCoin === "bitcoin"
                ? "BTC"
                : selectedCoin === "ethereum"
                  ? "ETH"
                  : selectedCoin === "litecoin"
                    ? "LTC"
                    : selectedCoin === "ripple"
                      ? "XRP"
                      : "BCH"}
              {chevronDown}
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-11 flex w-[150px] flex-col items-start gap-y-1 rounded-md border border-primary1 border-opacity-50 bg-neutralDarker bg-opacity-50 px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("bitcoin")}
                  >
                    BTC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("ethereum")}
                  >
                    ETH
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("litecoin")}
                  >
                    LTC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("ripple")}
                  >
                    XRP
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("bitcoin-cash")}
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
