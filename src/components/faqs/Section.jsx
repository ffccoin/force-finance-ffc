"use client";

import SideForm from "./SideForm";
import Button from "../buttons/Button";
import Header1 from "./Header1";
import Accordion from "../elements/Accordion";

export default function Section() {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:flex-row mb-16">
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
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <Accordion
          ques={"3. What are the benefits of using FFC Coin?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <Accordion
          ques={"4. How can I get started with FFC Coin?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <p className="mb-10 mt-16 font-neue-machina-bold text-[22px] uppercase text-white">
          Managing Account
        </p>
        <Accordion
          ques={"1. Can I lose access to my funds?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <Accordion
          ques={"2. How to add crypto to my Wallet?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <Accordion
          ques={"3. Adding crypto to the MetaMask Wallet extension?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
        <Accordion
          ques={"4. How do I send and receive crypto?"}
          ans={
            "Force Finance Coin (FFC Coin) is a decentralized finance (DeFi) platform built on blockchain technology, dedicated to revolutionizing the traditional financial landscape. It serves as a medium of exchange within the ecosystem, facilitating transactions and governance."
          }
        />
      </div>
      <div className="md:ml-[-150px] lg:ml-[-60px] xl:ml-10 order-first flex flex-col items-center justify-center md:order-last">
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
