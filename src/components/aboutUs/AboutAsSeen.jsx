import React from "react";
import Review from "./Review";

export default function AboutAsSeen() {
  return (
    <div className="w-screen grid justify-center  items-center">

    <div className="mt-32 max-w-[2454px] px-8 mr-9 ml-12 2xl:ml-[16rem] items-center">
      <div>
        <p className="mt-14 text-left font-neue-machina-bold text-[38px] uppercase text-white ">
          As seen in the press
        </p>
      </div>

      <div className="flex items-center xl:flex-nowrap  lg:flex-wrap justify-center gap-10">
        <Review
          heading={"5 Facts to Know about FFC Coin"}
          data={
            "Unveil the essential truths about FFC Coin: cutting-edge technology, multi-chain integration, financial empowerment, community focus, and transparent security."
          }
          image={"pic5"}
        />
        <Review
          heading={"Best Crypto currency to invest"}
          data={
            "Must when you thought you knew all about cryptocurrencies, markets, and finances, discover new avenues for profit with our exceptional platform and expert guidance."
          }
          image={"pic6"}
        />
        <Review
          heading={"Sercurity over money"}
          data={
            "Cryptocurrency doesn’t just bring you revenue, it’s also a fun, interesting and exciting occupation. Not to mention: topic for discussion that allows you to meet interesting people."
          }
          image={"pic7"}
        />
      </div>
      </div>
    </div>
  );
}
