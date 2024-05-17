"use client";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
import LinkedParticlesAnimation from "@/components/animations/LinkedParticlesAnimation";
import Link from "next/link";
import { ethers } from 'ethers';
import { useContext, useEffect, useState } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { Store } from "@/app/Store";

const Section1 = () => {
  const { open } = useWeb3Modal()

  const { address, chainId, isConnected } = useWeb3ModalAccount()

  const [buyAmount, setBuyAmount] = useState(0)
  const [active, setActive] = useState(0)
  const [creedToken, setCreedToken] = useState(0)

  function calculateTokens(price, pricePerToken) {

    // Convert prices to BigNumber objects to handle large numbers
    const priceBN = ethers.BigNumber.from(price?.toString())

    console.log(priceBN?.toString(), "priceBNpriceBNpriceBN")

    const pricePerTokenBN = ethers.BigNumber.from(pricePerToken?.toString())

    let final = +priceBN?.toString() / +pricePerTokenBN?.toString()

    return final;
  }
  // Example usage:
  // const pricePerToken = 0.1; // $0.1 per token
  // const userProvidedPrice = 2.5; // User provides $2.5
  // const tokens = calculateTokens(userProvidedPrice, pricePerToken);


  const { contractData, addTokenToMetamask, copyToClipboard, getSignerPresaleContract, getProviderPresaleContract, BuyWithUSDTandUSDC
    , BuyWithETH } = useContext(Store);


  const endTime = new Date();
  endTime.setDate(endTime.getDate() + 30);

  console.log(contractData, "contractDatacontractData");

  // Calculate the percentage of sold tokens
  const soldPercentage = (contractData?.raisedAmount / ((contractData?.tokenPrice / 10 ** 18) * contractData?.totalSupply)) * 100;


  useEffect(() => {
    const main = async () => {
      if (buyAmount === 0) return;

      if (active === 0) {
        setTimeout(async () => {
          try {
            let parse = ethers.utils.parseEther(buyAmount?.toString());

            console.log(parse?.toString(), "parse");

            if (parse.gt(0)) {
              let oneDollar = await getProviderPresaleContract().getLatestUSDTPrice();
              
              if (oneDollar.isZero()) {
                throw new Error("oneDollar price is zero, cannot divide by zero");
              }

              let howMuch = parse.div(oneDollar);
              let parse2 = ethers.utils.parseEther(howMuch.toString()).toString();

              setCreedToken(parse2); // Tokens in ether
            }
          } catch (error) {
            console.error("Error in timeout:", error);
          }
        }, 2000);
      } else {
        try {
          let parse2 = ethers.utils.parseEther(buyAmount?.toString());
          console.log(parse2?.toString(), "parse2");

          if (parse2.gt(0)) {
            const tokens = calculateTokens(parse2, contractData?.tokenPrice);
            let tokensss = ethers.utils.parseEther(tokens).toString();
            setCreedToken(tokensss); // Tokens in ether
          }
        } catch (error) {
          console.error("Error in else block:", error);
        }
      }
    };

    main();
  }, [buyAmount, active]);

  console.log(creedToken, "creedTokencreedTokencreedTokencreedToken")
  return (
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
            <Link href="https://app.forcefinancecoin.com">
              <Button title="Connect Wallet" />
            </Link>
            <Link href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/audits">
              <SecondaryButton title="Coin Audit" icon={rightArrow} />
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:hidden lg:flex xl:hidden">
            <Link className="w-full" href="https://app.forcefinancecoin.com">
              <Button title="Connect Wallet" size="small" width="full" />
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
          <ProgressBar />
          <div className="transactionCard-wrap-one">
            <div className="transactionCard-wrap-one-one"></div>
            <div className="transactionCard-wrap-one-two">1 Force Finance Coin = $ {ethers.utils.formatUnits(contractData?.tokenPrice, 18)}</div>
            <div className="transactionCard-wrap-one-three"></div>
          </div>
          <div className="transactionCard-wrap-two">
            <div className="buttom-border">
              <button className={`${active === 0 ? 'active' : ''}`} onClick={() => { setActive(0), setBuyAmount(0), setCreedToken(0) }}>
                <img src="/images/eth.png" alt="" />

                ETH
              </button>
            </div>
            <div className="buttom-border">
              <button className={`${active === 1 ? 'active' : ''}`} onClick={() => { setActive(1), setBuyAmount(0), setCreedToken(0) }}>
                <img src="/images/usdc.png" alt="" />
                USDC
              </button>
            </div>
            <div className="buttom-border">
              <button className={`${active === 2 ? 'active' : ''}`} onClick={() => { setActive(2), setBuyAmount(0), setCreedToken(0) }}>
                <img src="/images/usdt.png" alt="" />
                USDT
              </button>
            </div>
          </div>
          <div className="transactionCard-wrap-eight">

            <p className="p5">{active == 0 ? `ETH balance : ${Number(contractData?.ethBalance)?.toFixed(6)}` : active == 1 ? `USDC balance : ${Number(contractData?.usdcBalance)?.toFixed(6)}` : `USDT balance : ${Number(contractData?.usdtBalance)?.toFixed(6)}`}
            </p>

            <p className="p5"> Force Finance Coin balance: {Number(contractData?.creedBalance)?.toFixed(6)}</p>
          </div>
          <div className="transactionCard-wrap-three">
            <div className="transactionCard-wrap-three-left">
              <span>{active == 0 ? "Amount in ETH" : active == 1 ? "Amount in USDC" : "Amount in USDT"} </span>
              <div className="btn-icon">
                <input type="number" name="" id="" placeholder='0.0' onChange={(e) => setBuyAmount(e.target.value)} />
                {active === 0 && <img src="/images/eth.png" alt="" />}
                {active === 1 && <img src="/images/usdc.png" alt="" />}
                {active === 2 && <img src="/images/usdt.png" alt="" />}
              </div>
            </div>
            <div className="transactionCard-wrap-three-right">
              <span>Recive Force Finance Coin</span>
              <div className="btn-icon">
                <input type="number" name="" id="" placeholder='0.0' value={Number(ethers.utils.formatEther(creedToken?.toString()))?.toFixed(6)} />
                <img src="/images/creed.png" alt="" />
              </div>
            </div>
          </div>
          <div className="transactionCard-wrap-four">
            {/* <button onClick={addTokenToMetamask}>Add token in Metamask</button> */}

            {console.log(isConnected, "isConnectedisConnected")}
            {isConnected ?
              active == 0 ?
                <button onClick={() => BuyWithETH(creedToken?.toString(), buyAmount)}>Buy</button>
                : active == 1 ?
                  <button onClick={() => BuyWithUSDTandUSDC(buyAmount, creedToken?.toString(), false)}>Buy</button>
                  :
                  <button onClick={() => BuyWithUSDTandUSDC(buyAmount, creedToken?.toString(), true)}>Buy</button>
              :
              <button onClick={open}>Connect Wallet</button>
            }
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
