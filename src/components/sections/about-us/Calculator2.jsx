"use client";
import { motion } from "framer-motion";
import Button from "@/components/buttons/Button";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useGetCoinsQuery } from "@/libs/services/coins";

const Calculator2 = () => {
  const { data, isloading, error } = useGetCoinsQuery();
  const [coinData, setCoinData] = useState([{ bitcoin: { usd: 0 } }]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [coinAmount, setCoinAmount] = useState(null);
  const [currencyAmount, setCurrencyAmount] = useState(null);
  const blinkVariants = {
    hide: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 2,
          type: "tween",
        },
      },
    },
  };

  const fetchExchangeRate = async () => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,terra-luna,polkadot&vs_currencies=usd,cny,cad,eur,gbp`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    setCoinData(data);
  };

  // If currencyAmount changes
  const calculateCoinAmount = (amount) => {
    const exchangeRate = coinData[selectedCoin][selectedCurrency];
    setCoinAmount((amount / exchangeRate).toFixed(4));
  };

  // If coinAmount changes
  const calculateCurrencyAmount = (amount) => {
    const exchangeRate = coinData[selectedCoin][selectedCurrency];
    setCurrencyAmount((amount * exchangeRate).toFixed(4));
  };

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleCoinAmountChange = (e) => {
    calculateCurrencyAmount(e.target.value);
    setCoinAmount(e.target.value);
  };

  const handleCurrencyAmountChange = (e) => {
    calculateCoinAmount(e.target.value);
    setCurrencyAmount(e.target.value);
  };

  useEffect(() => {
    if (coinAmount === null) return;
    calculateCurrencyAmount(coinAmount);
  }, [selectedCurrency]);

  useEffect(() => {
    if (currencyAmount === null) return;
    calculateCurrencyAmount(coinAmount);
  }, [selectedCoin]);

  const [swapPlaces, setSwapPlaces] = useState(false);
  return (
    <div className="mt-10 flex flex-col items-center gap-4 md:flex-row lg:mr-28">
      <div
        className={`flex flex-col items-center gap-4 md:flex-row ${swapPlaces ? "flex-col-reverse md:flex-row-reverse" : "flex-col md:flex-row"}`}
      >
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={blinkVariants}
          className="flex max-w-72 rounded-[10px] border border-[#CBFB4533] bg-neutral p-4 lg:gap-10 "
        >
          <div className=" max-w-28 sm:max-w-32">
            <p className="text-neutralLight">
              {swapPlaces ? "You get" : "You have"}
            </p>
            <input
              type="text"
              value={coinAmount}
              onChange={handleCoinAmountChange}
              placeholder="0.00"
              className=" w-full border-transparent bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[30px] w-[30px] items-center justify-center">
              {selectedCoin === "bitcoin" ? (
                <Image
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                  width={24}
                  height={24}
                  alt="coin"
                />
              ) : selectedCoin === "ethereum" ? (
                <Image
                  src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                  width={24}
                  height={24}
                  alt="coin"
                />
              ) : selectedCoin === "solana" ? (
                <Image
                  src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756"
                  width={24}
                  height={24}
                  alt="coin"
                />
              ) : selectedCoin === "cardano" ? (
                <Image
                  src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090"
                  width={24}
                  height={24}
                  alt="coin"
                />
              ) : selectedCoin === "polkadot" ? (
                <Image
                  src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008"
                  width={20}
                  height={20}
                  alt="coin"
                />
              ) : (
                <Image
                  src="https://assets.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png?1696508486"
                  width={15}
                  height={15}
                  alt="coin"
                />
              )}
            </div>
            <Menu as="div" className="relative">
              <Menu.Button className="flex h-8 max-w-fit items-center border-transparent bg-transparent font-apfel-grotezk uppercase outline-none">
                {selectedCoin === "bitcoin"
                  ? "BTC"
                  : selectedCoin === "ethereum"
                    ? "ETH"
                    : selectedCoin === "cardano"
                      ? "ADA"
                      : selectedCoin === "polkadot"
                        ? "DOT"
                        : selectedCoin === "solana"
                          ? "SOL"
                          : "LUNa"}
                {chevronDown}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 top-11 z-30 flex w-[100px] flex-col items-start gap-y-1 rounded-md border border-[#CBFB4533] border-opacity-50 bg-neutral bg-opacity-90 px-4 py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCoinSelect("bitcoin")}
                      >
                        BTC
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCoinSelect("ethereum")}
                      >
                        ETH
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCoinSelect("cardano")}
                      >
                        ADA
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCoinSelect("polkadot")}
                      >
                        DOT
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCoinSelect("solana")}
                      >
                        SOL
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCoinSelect("terra-luna")}
                      >
                        LUNA
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </motion.div>
        <motion.button
          initial="hide"
          whileInView="show"
          exit="show"
          variants={blinkVariants}
          onClick={() => setSwapPlaces(!swapPlaces)}
        >
          <Image
            className="my-2 rotate-90  md:my-0 md:rotate-0"
            width={24}
            height={24}
            src="images/img_share.svg"
            alt="share"
          />
        </motion.button>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={blinkVariants}
          className="flex max-w-72 flex-wrap rounded-[10px] border border-[#CBFB4533] bg-neutral p-4 lg:gap-10 "
        >
          <div className=" max-w-28 sm:max-w-32">
            <p className="text-neutralLight">
              {swapPlaces ? "You have" : "You get"}
            </p>
            <input
              type="text"
              placeholder="0.00"
              onChange={handleCurrencyAmountChange}
              value={currencyAmount}
              className=" w-full border-transparent bg-transparent  outline-none"
            />
          </div>

          <div className="flex items-center justify-center ">
            <p className="text-white-A700 font-sans mr-1 flex max-h-[24px] max-w-[24px] items-center justify-center rounded-xl bg-[#7D32F9]  p-2 pb-2.5 text-center text-base">
              {selectedCurrency == "cny"
                ? "¥"
                : selectedCurrency == "eur"
                  ? "€"
                  : selectedCurrency == "usd"
                    ? "$"
                    : selectedCurrency == "cad"
                      ? "$"
                      : selectedCurrency == "gbp"
                        ? "£"
                        : ""}
            </p>
            <Menu as="div" className="relative">
              <Menu.Button className="flex h-8 max-w-fit items-center  border-transparent  bg-transparent font-apfel-grotezk uppercase outline-none">
                {selectedCurrency}
                {chevronDown}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 top-11 z-30 flex w-[100px] flex-col items-start gap-y-1 rounded-md border border-[#CBFB4533] border-opacity-50 bg-neutral px-4 py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && " text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCurrencySelect("usd")}
                      >
                        USD
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCurrencySelect("eur")}
                      >
                        EUR
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCurrencySelect("gbp")}
                      >
                        GBP
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCurrencySelect("cny")}
                      >
                        CNY
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && "text-primary1"} w-full text-start font-apfel-grotezk`}
                        onClick={() => handleCurrencySelect("cad")}
                      >
                        CAD
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </motion.div>
      </div>
      <Button
        size="small"
        title="Buy Now"
        className="px-10 text-xs  md:py-5 lg:py-5 lg:text-base xl:px-10 xl:text-base"
      />
    </div>
  );
};

const chevronDown = (
  <Image
    width={24}
    height={24}
    src="images/img_iconframe.svg"
    alt="iconframe"
  />
);

export default Calculator2;
