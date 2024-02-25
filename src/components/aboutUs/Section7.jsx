import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

export default function Section7() {
  return (
    <div className="bg-primary  grid  place-items-center px-8 ">
      <div className="mt-20 flex max-w-[83rem] flex-col-reverse lg:flex-row-reverse  lg:items-center lg:justify-center  lg:gap-36 xl:gap-44 ">
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2">
          <div className="flex items-center justify-center border border-solid border-[#898990] px-7 py-7	sm:px-8	 sm:py-8 xl:px-12 xl:py-12">
            <Image
              className=""
              src="/aboutPage/poolin.svg"
              width={133}
              height={27}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990] px-7  py-7	sm:px-8 sm:py-8 xl:px-12 xl:py-12">
            <Image
              className=""
              src="/aboutPage/neutrino.svg"
              width={113}
              height={26}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 xl:px-12 xl:py-12">
            <Image
              className=""
              src="/aboutPage/swop.svg"
              width={100}
              height={24}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990]   px-7	py-7 sm:px-8 sm:py-8 xl:px-12 xl:py-12">
            <Image
              className=""
              src="/aboutPage/btcex.svg"
              width={123}
              height={27}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border  border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 xl:px-12 xl:py-12">
            <Image
              className=""
              src="/aboutPage/coinbase.svg"
              width={113}
              height={24}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border  border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 xl:px-12 xl:py-12">
            <Image
              className=""
              src="/aboutPage/huobi.svg"
              width={123}
              height={27}
              alt="img"
            />
          </div>
        </div>
        <div className=" flex flex-col items-start   px-4 py-10 lg:max-w-[400px] lg:p-0">
          <h1 className=" w-full text-wrap text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            Our partners
          </h1>
          <p className="mt-4 text-wrap text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
            Meet our esteemed partners, united in our commitment to innovation,
            collaboration, and shared success.{" "}
          </p>
          <Image
            className="mt-8"
            src="/aboutPage/cerealClub.svg"
            width={262.82}
            height={80}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

const renderStat = (number, label) => (
  <div className="flex flex-col gap-y-4">
    <h1 className="text-[37.9px] leading-[42.64px]">{number}</h1>
    <p className="ml-1 md:ml-4">{label}</p>
  </div>
);
