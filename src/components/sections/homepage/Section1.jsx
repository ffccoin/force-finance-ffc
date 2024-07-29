"use client";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
import LinkedParticlesAnimation from "@/components/animations/LinkedParticlesAnimation";
import Link from "next/link";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalError,
} from "@web3modal/ethers5/react";
import { Store } from "@/context/Store";
import LoadingPage from "@/app/loading/page";
import { useSwitchNetwork } from "@web3modal/ethers5/react";

const Section1 = () => {
  const { open } = useWeb3Modal();
  const { connectWallet } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { switchNetwork } = useSwitchNetwork();
  const { error } = useWeb3ModalError();

  const [buyAmount, setBuyAmount] = useState("");
  const [active, setActive] = useState(0);
  const [creedToken, setCreedToken] = useState(0);

  const {
    contractData,
    loader,
    addTokenToMetamask,
    copyToClipboard,
    GetValues,
    getProviderPresaleContract,
    BuyWithUSDTandUSDC,
    networkChange,
    BuyWithETH,
  } = useContext(Store);

  const endTime = new Date();
  endTime.setDate(endTime.getDate() + 30);

  console.log(contractData, "contractDatacontractData");

  // Calculate the percentage of sold tokens
  const soldPercentage = (contractData?.raisedAmount * 100) / +contractData?.totalSupply;

  useEffect(() => {
    const main = async () => {
      if (active === 0 && buyAmount !== 0) {
        setTimeout(async () => {
          try {
            let parse = ethers.utils.parseEther(buyAmount.toString());

            console.log(parse.toString(), "parse");

            if (parse.gt(0)) {
              let oneDollar = await getProviderPresaleContract().getLatestUSDTPrice();

              console.log(oneDollar?.toString(), "oneDollaroneDollar");

              if (oneDollar.isZero()) {
                throw new Error(
                  "oneDollar price is zero, cannot divide by zero",
                );
              }

              let howMuch = parse.div(oneDollar);
              console.log(
                contractData?.tokenPrice / 10 ** 6,
                "contractData?.tokenPrice / 10**6contractData?.tokenPrice / 10**6contractData?.tokenPrice / 10**6",
              );
              let price = contractData?.tokenPrice / 10 ** 6;
              console.log(howMuch?.toString(), "howMuchhowMuch");
              let tokens = +howMuch?.toString() / +price;
              let parse2 = ethers.utils
                .parseEther(tokens?.toString())
                ?.toString();
              setCreedToken(parse2); // Tokens in ether
            }
          } catch (error) {
            console.error("Error in timeout:", error);
          }
        }, 1000);
      } else if (active !== 0 && buyAmount !== 0 && buyAmount?.length > 0) {
        try {
          if (buyAmount > 0) {
            let price = contractData?.tokenPrice / 10 ** 6;
            let tokens = +buyAmount?.toString() / +price;
            let force = ethers.utils.parseEther(tokens?.toString())?.toString();
            setCreedToken(force?.toString()); // Tokens in smallest unit
          }
        } catch (error) {
          console.error("Error in else block:", error);
        }
      } else {
        setCreedToken(0);
        setBuyAmount("");
      }
    };

    main();
  }, [buyAmount, active]);

  useEffect(() => {
    GetValues();
    networkChange();
  }, [chainId, error]);

  console.log(error, "errorerror");

  return loader ? (
    <LoadingPage />
  ) : (
    <div className="relative mt-24 flex w-full flex-wrap items-center justify-center  bg-transparent pb-20 pt-11 lg:mt-44 ">
      <LinkedParticlesAnimation />
      <div className="z-10 flex w-full max-w-7xl flex-col flex-wrap items-center justify-center gap-y-20 md:flex-row md:justify-between lg:px-8 xl:px-10">
        <div className="flex w-full flex-col gap-y-10 px-10 pt-12 md:pt-14 lg:max-w-[45%] lg:px-0 xl:gap-y-[55px]">
          <motion.h1
            className="text-[28.1px] uppercase leading-[40.6px] sm:text-[39.41px] sm:leading-[42.6px] lg:text-5xl lg:leading-[56.8px]"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            Empowering your <br /> Financial Future
          </motion.h1>
          <motion.p
            className="w-full max-w-[90%] md:leading-6 lg:max-w-[450px] xl:max-w-[585px]"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            Embracing the Forefront of Web 3.0, Pioneering the Path Forward.
            With our decentralized finance (DeFi) solutions, we sculpt a future
            where financial liberation knows no bounds.
          </motion.p>
          <div className="hidden gap-x-6 md:flex lg:hidden xl:flex">
            <Link href="/whitepaper.pdf" download="ffc-whitepaper">
              <Button title="Explore WhitePaper" />
            </Link>
            <Link href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/audits">
              <SecondaryButton title="Coin Audit" icon={rightArrow} />
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:hidden lg:flex xl:hidden">
            <Link
              className="w-full"
              href="/whitepaper.pdf"
              download="ffc-whitepaper"
            >
              <Button title="Explore WhitePaper" size="small" width="full" />
            </Link>
            <Link href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/audits">
              <SecondaryButton
                title="Coin Audit"
                icon={rightArrow}
                size="small"
                width="full"
              />
            </Link>
          </div>
        </div>
        <motion.div
          className="mx-5 flex flex-col gap-y-4 rounded-[20px] bg-[#F2F2FE1A] px-5 py-6 sm:w-full sm:max-w-[85vw] sm:px-10 sm:py-12 md:max-w-full md:gap-y-8 lg:mx-0 lg:max-h-fit lg:max-w-fit xl:max-w-[537px]"
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
          }}
        >
          <h2 className="text-center uppercase sm:text-[21.3px] md:leading-6">
            Token sale ends in:
          </h2>
          <div className="grid place-items-center">
            <CountdownTimer />
          </div>
          {/* <h2 className="py-3 leading-[22.4px] sm:text-[21.3px]">
          $19,256,432 contribution received
        </h2> */}

        <div className="transactionCard-wrap-six">
          <p>Token Address</p>
          <div className="bottom" onClick={copyToClipboard}>
            <p>
              {"0xbf05C4023E735aDb912E2cc34c0f391702efEC34".slice(0, 8)}.......
              {"0xbf05C4023E735aDb912E2cc34c0f391702efEC34".slice(-8)}
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.05775 17.5C8.55258 17.5 8.125 17.325 7.775 16.975C7.425 16.625 7.25 16.1974 7.25 15.6923V4.30775C7.25 3.80258 7.425 3.375 7.775 3.025C8.125 2.675 8.55258 2.5 9.05775 2.5H17.4423C17.9474 2.5 18.375 2.675 18.725 3.025C19.075 3.375 19.25 3.80258 19.25 4.30775V15.6923C19.25 16.1974 19.075 16.625 18.725 16.975C18.375 17.325 17.9474 17.5 17.4423 17.5H9.05775ZM9.05775 16H17.4423C17.5192 16 17.5898 15.9679 17.6538 15.9038C17.7179 15.8398 17.75 15.7692 17.75 15.6923V4.30775C17.75 4.23075 17.7179 4.16025 17.6538 4.09625C17.5898 4.03208 17.5192 4 17.4423 4H9.05775C8.98075 4 8.91025 4.03208 8.84625 4.09625C8.78208 4.16025 8.75 4.23075 8.75 4.30775V15.6923C8.75 15.7692 8.78208 15.8398 8.84625 15.9038C8.91025 15.9679 8.98075 16 9.05775 16ZM5.55775 21C5.05258 21 4.625 20.825 4.275 20.475C3.925 20.125 3.75 19.6974 3.75 19.1923V6.30775H5.25V19.1923C5.25 19.2693 5.28208 19.3398 5.34625 19.4038C5.41025 19.4679 5.48075 19.5 5.55775 19.5H15.4423V21H5.55775Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

          <ProgressBar
            contractData={contractData}
            soldPercentage={soldPercentage}
          />
          <div className="transactionCard-wrap-one">
            <div className="transactionCard-wrap-one-one"></div>
            <div className="transactionCard-wrap-one-two">
              1 $FFC = $ {ethers.utils.formatUnits(contractData?.tokenPrice, 6)}
            </div>
            <div className="transactionCard-wrap-one-three"></div>
          </div>
          <div className="transactionCard-wrap-two">
            <div className="buttom-border">
              <button
                className={`${active === 0 ? "active" : ""}`}
                onClick={() => {
                  setActive(0), setBuyAmount(""), setCreedToken(0);
                }}
              >
                <img src="/images/eth.png" alt="" />
                ETH
              </button>
            </div>
            <div className="buttom-border">
              <button
                className={`${active === 1 ? "active" : ""}`}
                onClick={() => {
                  setActive(1), setBuyAmount(""), setCreedToken(0);
                }}
              >
                <img src="/images/usdc.png" alt="" />
                USDC
              </button>
            </div>
            <div className="buttom-border">
              <button
                className={`${active === 2 ? "active" : ""}`}
                onClick={() => {
                  setActive(2), setBuyAmount(0), setCreedToken(0);
                }}
              >
                <img src="/images/usdt.png" alt="" />
                USDT
              </button>
            </div>
          </div>
          <div className="transactionCard-wrap-eight">
            <p className="p5">
              {active == 0
                ? `ETH balance : ${Number(contractData?.ethBalance)?.toFixed(6)}`
                : active == 1
                  ? `USDC balance : ${Number(contractData?.usdcBalance)?.toFixed(6)}`
                  : `USDT balance : ${Number(contractData?.usdtBalance)?.toFixed(6)}`}
            </p>

            <p className="p5">
              {" "}
              $FFC Balance: {Number(contractData?.ForceBalance)?.toFixed(6)}
            </p>
          </div>
          <div className="transactionCard-wrap-three">
            <div className="transactionCard-wrap-three-left">
              <span>
                {active == 0
                  ? "Amount in ETH"
                  : active == 1
                    ? "Amount in USDC"
                    : "Amount in USDT"}{" "}
              </span>
              <div className="btn-icon">
                <input
                  type="text"
                  value={buyAmount}
                  name=""
                  id=""
                  placeholder="0.0"
                  onChange={(e) => setBuyAmount(e.target.value)}
                />
                {active === 0 && <img src="/images/eth.png" alt="" />}
                {active === 1 && <img src="/images/usdc.png" alt="" />}
                {active === 2 && <img src="/images/usdt.png" alt="" />}
              </div>
            </div>
            <div className="transactionCard-wrap-three-right">
              <span>$FFC Coin</span>
              <div className="btn-icon">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="0.0"
                  value={Number(ethers.utils.formatEther(creedToken?.toString()))?.toFixed(6)}
                />
                <img src="/logos/force-finance-logo-svg.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="transactionCard-wrap-four">
            {isConnected ? (
              active == 0 ? (
                <button
                  disabled={loader}
                  onClick={() => BuyWithETH(creedToken?.toString(), buyAmount)}
                >
                  Buy
                </button>
              ) : active == 1 ? (
                <button
                  disabled={loader}
                  onClick={() =>
                    BuyWithUSDTandUSDC(buyAmount, creedToken?.toString(), false)
                  }
                >
                  Buy
                </button>
              ) : (
                <button
                  disabled={loader}
                  onClick={() =>
                    BuyWithUSDTandUSDC(buyAmount, creedToken?.toString(), true)
                  }
                >
                  Buy
                </button>
              )
            ) : (
              <button onClick={() => open()}> Connect Wallet </button>
            )}
            <button onClick={addTokenToMetamask}>
              {" "}
              Add token in Metamask{" "}
            </button>
          </div>

          {/* <w3m-button/> */}

          {/* <div className="hidden items-center gap-x-8 md:flex">
          <Link href="https://app.forcefinancecoin.com">
            <Button title="Buy FFC Coin" />
          </Link>
          <Link href="/whitepaper.pdf" download="ffc-whitepaper">
            <SecondaryButton title="Explore WhitePaper" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 md:hidden">
          <Link className="w-full" href="https://app.forcefinancecoin.com">
            <Button title="Buy FFC Coin" size="small" width="full" />
          </Link>
          <Link href="/whitepaper.pdf" download="ffc-whitepaper">
            <SecondaryButton
              title="Explore WhitePaper"
              size="small"
              width="full"
            />
          </Link>
        </div> */}
        </motion.div>
      </div>
    </div>
  );
};

const rightArrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19L19 12L12 5M19 12L5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Section1;
