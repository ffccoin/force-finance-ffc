import Image from "next/image";
import React from "react";

const ServicesCertified = () => {
  return (
    <div className="mt-[-2px] grid place-items-center bg-primary1">
      <div className=" mt-16 flex max-w-7xl flex-col gap-y-[61px] px-5  text-primary2 sm:px-10 lg:mt-32">
        <div className="flex max-w-[90vw] flex-col items-center ">
          <p className="text-center font-neue-machina-bold text-2xl  uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            Certified SECURE FFC Coin WALET
          </p>
          <p className="mt-2	max-w-xl text-wrap text-center text-base">
            Your Trusted Companion for Secure Asset Management and Transactions,
            Featuring advanced encryption protocols, multi-factor
            authentication, and biometric security options
          </p>
        </div>
        <div className="mb-20  flex flex-col gap-x-[19px] gap-y-4 sm:justify-center sm:gap-y-8 md:flex-row">
          <div className="group flex w-full flex-col items-center  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/ourServices/blockChain.svg"
                width={55.98}
                height={56.01}
                alt="img"
              />
            </div>
            <div className="flex  flex-col place-items-center gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold   leading-6 sm:text-[21.33px] ">
                ETH BLOCKCHAIN
              </p>
              <span className="max-w-[18rem] text-center text-base">
                Ensuring authenticity and reliability through Ethereum
                blockchain verification.
              </span>
            </div>
          </div>
          <div className="group flex w-full flex-col items-center  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/ourServices/scalability.svg"
                width={55.98}
                height={56.01}
                alt="img"
              />
            </div>
            <div className="flex  flex-col place-items-center gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold uppercase  leading-6 sm:text-[21.33px] ">
                Scalability
              </p>
              <span className="max-w-[18rem] text-center text-base">
                Adapting to growing user needs and market demands without
                compromising performance.
              </span>
            </div>
          </div>
          <div className="group flex w-full flex-col items-center  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/ourServices/security.svg"
                width={62}
                height={49.9}
                alt="img"
              />
            </div>
            <div className="flex flex-col place-items-center gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold  uppercase leading-6 sm:text-[21.33px] ">
                Security
              </p>
              <span className="max-w-[18rem] text-center">
                Your Assets in Safe Hands, Implementing top-tier security
                measures to safeguard user assets & data.
              </span>
            </div>
          </div>
          <div className="group flex w-full flex-col items-center  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/ourServices/advancedSecurity.svg"
                width={48}
                height={62}
                alt="img"
              />
            </div>
            <div className="flex  flex-col place-items-center gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold uppercase  leading-6 sm:text-[21.33px] ">
                Advanced Security
              </p>
              <span className="max-w-[18rem] text-center">
                Protecting Your Transactions, Providing advanced security
                protocols to ensure the integrity of every transaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCertified;
