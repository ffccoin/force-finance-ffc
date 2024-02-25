"use client";

import SideForm from "./SideForm";
import Button from "../buttons/Button";
import Header1 from "./Header1";
import Accordion from "../elements/Accordion";

export default function Section() {
  return (
    <div className="mb-16 flex max-w-7xl flex-col items-center justify-center p-8 md:flex-row">
      <div>
        <Header1 />
        <p className=" mb-10 mt-16 font-neue-machina-bold text-[22px] uppercase text-white">
          Getting Started
        </p>
        <Accordion
          ques={"1. What is Force Finance Coin (FFC Coin)?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <Accordion
          ques={"2. How does FFC Coin ensure security?"}
          ans={
            "FFC Coin employs robust encryption protocols and decentralized blockchain technology to safeguard transactions and user data. Through regular security audits and smart contract verification, FFC Coin ensures the highest level of security for its users. Additionally, FFC Coin implements multi-factor authentication and continuous monitoring to mitigate potential threats effectively."
          }
        />
        <Accordion
          ques={"3. What are the benefits of using FFC Coin?"}
          ans={
            "The benefits of using FFC Coin include decentralized finance opportunities, low transaction fees, and enhanced privacy. Users can access a wide range of DeFi services, enjoy fast and secure transactions, and maintain anonymity in their financial activities, fostering greater financial autonomy and flexibility."
          }
        />
        <Accordion
          ques={"4. How can I get started with FFC Coin?"}
          ans={
            "To commence your journey with FFC Coin, start by setting up a new wallet through our platform. Once your wallet is created, complete the necessary verification steps to ensure security. Then, you can participate in our Initial Coin Offering (ICO) by purchasing FFC Coins directly through our ICO sale or supported exchanges. Engage in our ICO to seize the opportunity for early investment and become part of our thriving decentralized finance (DeFi) ecosystem."
          }
        />
        <Accordion
          ques={"5. What are the passive income opportunities available?"}
          ans={
            "Passive income opportunities with FFC Coin encompass various activities within its decentralized finance (DeFi) ecosystem. Users can engage in liquidity provision, staking, yield farming, and lending to earn rewards in FFC Coins. Through these avenues, individuals can generate income while supporting the ecosystem's growth and stability. Whether by providing liquidity, staking tokens, farming yields, or participating in lending protocols, FFC Coin offers diverse pathways for users to earn passive income and maximize their financial potential."
          }
        />
        <p className="mb-10 mt-16 font-neue-machina-bold text-[22px] uppercase text-white">
          Managing Account
        </p>
        <Accordion
          ques={"1. Can I lose access to my funds?"}
          ans={
            "With the FFC Coin wallet's advanced security features and non-custodial nature, the risk of losing access to your funds is significantly reduced. However, it's crucial to securely store your wallet's private keys and recovery phrases. Losing this information could potentially result in the loss of access to your funds. Therefore, it's essential to follow best practices for safeguarding your wallet's credentials to mitigate the risk of losing access to your funds."
          }
        />
        <Accordion
          ques={"2. How to add crypto to my Wallet?"}
          ans={
            "To add cryptocurrency to your FFC Coin wallet, start by accessing your wallet interface and locating the option to deposit funds. Once there, you'll be provided with a unique receiving address specific to the cryptocurrency you wish to add. Copy this address and use it to initiate a transfer from your external wallet or exchange account. Ensure accuracy by double-checking the address before confirming the transaction. Once the blockchain network confirms the transaction, the cryptocurrency will be credited to your FFC Coin wallet, ready for use in trading, staking, or other activities within the FFC Coin ecosystem."
          }
        />
        <Accordion
          ques={"3. Adding crypto to the MetaMask Wallet extension?"}
          ans={
            <ul className="list-disc px-5">
              <li>
                Open your MetaMask extension by clicking on the MetaMask icon in
                your browser's toolbar.
              </li>
              <li>
                If you haven't already set up your MetaMask wallet, you'll need
                to create a new wallet or import an existing one.
              </li>
              <li>
                Once your wallet is set up, click on the "Assets" tab at the top
                of the MetaMask interface.
              </li>
              <li>
                In the "Assets" tab, you'll see an option to "Add Token." Click
                on this option.
              </li>
              <li>
                You'll be prompted to choose how you want to add the token. If
                you have the token address, select the "Custom Token" option.
              </li>
              <li>
                Enter the token contract address, and MetaMask will
                automatically fill in the token symbol and decimals.
              </li>
              <li>
                Click "Next," review the details, and then click "Add Tokens."
              </li>
              <li>
                The token will now appear in your MetaMask wallet under the
                "Assets" tab, and you can view your balance and transaction
                history.
              </li>
              <li>
                By following these steps, you can easily add cryptocurrency
                tokens to your MetaMask Wallet extension for easy access and
                management.
              </li>
            </ul>
          }
        />
        <Accordion
          ques={"4. How do I send and receive crypto?"}
          ans={
            <p>
              Sending cryptocurrency involves accessing your digital wallet,
              navigating to the "Send" or "Transfer" section, where you'll input
              the recipient's wallet address along with the desired amount of
              cryptocurrency. After reviewing the transaction details, including
              any applicable fees, you'll confirm the transaction to initiate
              the transfer. <br />
              <br /> Receiving cryptocurrency entails sharing your wallet's
              unique receiving address with the sender. Once they initiate the
              transfer to this address, you'll wait for the transaction to be
              confirmed on the blockchain network, at which point the
              cryptocurrency will be reflected in your wallet balance. Always
              ensure accuracy when sharing or inputting wallet addresses to
              prevent any errors in the transaction process.
            </p>
          }
        />
      </div>
      <div className="order-first flex flex-col items-center justify-center md:order-last md:ml-[-150px] lg:ml-[-60px] xl:ml-10">
        <div className="">
          <SideForm />
        </div>
        <div className="flex h-[520px] w-[320px] items-center justify-center overflow-hidden bg-[url('/faqs/sideSection.svg')] bg-cover bg-center lg:h-[665px] lg:w-[410px]">
          <Button title={"Connect Wallet"} className="" />
        </div>
      </div>
    </div>
  );
}
