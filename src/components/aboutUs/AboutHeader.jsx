import Image from "next/image";
import Button from "../buttons/Button";
import { Menu, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";

export default function AboutHeader() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };
  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div className="grid place-items-center   bg-primary2">
      <div className=" relative flex flex-col items-center px-4 ">
        {/*         <Image     className="absolute top-[5.4rem] left-[15.4rem] sm:left-[20rem] md:left-[30rem] lg:left-[60rem] xl:left-[60rem]" width={51} height={51} alt="img" src="/aboutpage/bitcoin.svg" /> */}
        <Image
          className="absolute top-[0.4rem] hidden xl:left-[60rem] xl:block"
          width={51}
          height={51}
          alt="img"
          src="/aboutpage/bitcoin.svg"
        />
        <Image
          className="absolute top-[9.3rem]  hidden xl:left-[1.25rem] xl:block"
          width={116.52}
          height={116.52}
          alt="img"
          src="/aboutpage/goldenBitcoin.svg"
        />
        <Image
          className="absolute top-[15rem] hidden rotate-3 xl:left-[70.65rem] xl:block"
          width={123}
          height={123}
          alt="img"
          src="/aboutpage/greenBitcoin.svg"
        />
        <Image
          className="absolute top-[26.3rem]  hidden xl:left-[8rem] xl:block"
          width={85}
          height={85}
          alt="img"
          src="/aboutpage/greenBitcoin2.svg"
        />
        <Image
          className="absolute top-[28rem] hidden rotate-3 xl:left-[69.65rem] xl:block"
          width={51}
          height={51}
          alt="img"
          src="/aboutpage/blueBitcoin.svg"
        />

        <div className=" flex max-w-[90rem] flex-col  items-center uppercase">
          <p className=" text-wrap text-center font-apfel-grotezk  text-base text-primary1 xl:mr-auto  xl:pl-[357px]">
            First order and you’ll get up to $10 in free BTC as a reward{" "}
          </p>
          <p className="line-height-[ 44px] mt-3  text-wrap text-center font-neue-machina-bold text-[30px] uppercase sm:text-[56px]   sm:leading-[75.75px] md:px-8 xl:pr-32 ">
            A Trusted and Secure Web 3.0 Financial DeFi Solution
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4  md:flex-row lg:mr-28">
          <div className="flex max-w-72 flex-wrap rounded-[10px] border border-[#CBFB4533] bg-neutral p-4 lg:gap-10 ">
            <div className=" max-w-28 sm:max-w-32">
              <p className="text-neutralLight">You have</p>
              <input
                type="text"
                placeholder="$42.984"
                className=" w-full border-transparent bg-transparent  outline-none"
              />
            </div>

            <div className="flex items-center justify-center ">
              <p className="text-white-A700 mr-1 flex max-h-[24px] max-w-[24px] items-center justify-center rounded-xl bg-[#7D32F9] p-2 pb-2.5 text-center text-base">
                $
              </p>
              <Menu as="div" className="relative">
                <Menu.Button className="flex h-8 max-w-fit items-center  border-transparent  bg-transparent font-apfel-grotezk uppercase outline-none">
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
                            : "LUNA"}
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
          </div>
          <Image
            className="my-2 rotate-90  md:my-0 md:rotate-0"
            width={24}
            height={24}
            src="images/img_share.svg"
            alt="share"
          />
          <div className="flex max-w-72 flex-wrap rounded-[10px] border border-[#CBFB4533] bg-neutral p-4 lg:gap-10 ">
            <div className=" max-w-28 sm:max-w-32">
              <p className="text-neutralLight">You get</p>
              <input
                type="text"
                placeholder="0.95"
                className=" w-full border-transparent bg-transparent  outline-none"
              />
            </div>

            <div className="flex items-center justify-center ">
              <p className="text-white-A700 mr-1 flex max-h-[24px] max-w-[24px]  items-center justify-center rounded-xl bg-orange-600 p-2 pb-2.5 text-center text-base">
                ฿
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
                          onClick={() => handleCurrencySelect("inr")}
                        >
                          INR
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
                          onClick={() => handleCurrencySelect("pkr")}
                        >
                          PKR
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
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <Button
            size="small"
            title="Buy Now"
            className="px-10 text-xs  md:py-5 lg:py-5 lg:text-base xl:px-10 xl:text-base"
          />
        </div>
        <div className="mt-5 flex w-[79%] flex-col items-center justify-start gap-2.5 md:w-full">
          <p className=" font-apfel-grotezk text-[16px] text-base text-[#898990]">
            We accept
          </p>
          <img
            className="h-[30px]"
            src="images/img_group9342.svg"
            alt="group9342"
          />
        </div>
      </div>
      <div className="mt-8 flex w-full  flex-col items-center bg-gradient-to-b from-[#161617]  from-50% via-[#7D32F9] via-100% px-4  md:mt-20">
        <Image
          width={891}
          height={301}
          src="/aboutpage/test.svg"
          alt="iconframe"
        />
      </div>
    </div>
  );
}

const chevronDown = (
  <Image
    width={24}
    height={24}
    src="images/img_iconframe.svg"
    alt="iconframe"
  />
);
