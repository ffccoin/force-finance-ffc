import Image from "next/image";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section10 = () => {
  return (
    <div className="bg-primary mt-16 grid h-auto items-center justify-center rounded-lg ">
      <div className="mt-10 flex flex-wrap  pl-8    md:flex-row lg:justify-end">
        <div className="flex  xl:max-w-[36.7rem] max-w-[22.7rem] flex-col ">
        <h3 className="font-neue-machina-bold text-wrap md:text-3xl text-xl	 ">
            Access all your favorite assets effortlessly 
          </h3>

          <p className=" mt-8 text-wrap text-[16px] leading-[24px] text-neutralLight">
            Empower yourself to manage your cryptocurrencies, NFTs, and other
            digital assets with complete control, privacy, and security, all
            from the convenience of your own device. 
          </p>
          <div className="mt-6 max-w-[38rem] ">
            <Image
              src="/homepage/line2.svg"
              alt="Arrow"
              width={413}
              height={1}
            />
          </div>
          <p className="mt-6 text-neutralLight">
            Wondering what tokens is supported?
          </p>
          <span className="mt-2 flex text-center ">
            <p className=" font-neue-machina-bold text-primary1 ">
              See all token
            </p>
            <div className=" flex justify-center text-center">
              <Image
                src="/homepage/arrowHead.svg"
                alt="Arrow"
                width={16}
                height={10}
              />
            </div>
          </span>
        </div>
        <div className="flex  flex-wrap justify-end ">
          <div className="mt-8 lg:max-w-[38rem] max-w-[20rem]  ">
            <Image
              src="/homepage/sideIcon.svg"
              alt="Arrow"
              width={643}
              height={489}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
