import Image from "next/image";

export default function Section7() {
  return (
    <div className="bg-primary  grid  place-items-center px-8  md:place-items-start lg:place-items-center ">
      <div className="mt-20 flex  max-w-full flex-col-reverse lg:max-w-[83rem] lg:flex-row-reverse lg:items-center  lg:justify-center lg:gap-36  xl:ml-8 xl:gap-44 ">
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2 md:max-w-[83rem]">
          <div className="flex items-center justify-center border border-solid border-[#898990] px-7 py-7	 sm:px-8 	sm:py-8 md:px-12 md:py-20 lg:px-8 	 lg:py-8  xl:px-12 xl:py-12">
            <Image
              src="/aboutPage/poolin.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990] px-7  py-7	sm:px-8  sm:py-8 md:px-12  md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <Image
              src="/aboutPage/neutrino.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <Image
              src="/aboutPage/swop.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border border-solid border-[#898990]   px-7	py-7 sm:px-8 sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <Image
              src="/aboutPage/btcex.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border  border-solid border-[#898990]  px-7	py-7 sm:px-8 sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <Image
              src="/aboutPage/coinbase.svg"
              width={183}
              height={33}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center border  border-solid border-[#898990]  px-7	py-7 sm:px-8  sm:py-8 md:px-12 md:py-20 lg:px-8 lg:py-8 xl:px-12 	 xl:py-12">
            <Image
              src="/aboutPage/huobi.svg"
              width={183}
              height={33}
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
