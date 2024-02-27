import Image from "next/image";
import Button from "../buttons/Button";
import { Menu, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";
import Calculator2 from "../sections/about-us/Calculator2";

export default function AboutHeader() {
  return (
    <div className="grid w-full  place-items-center  bg-primary2">
      <div className="  relative flex flex-col items-center px-4 ">
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
        <Calculator2 />
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
