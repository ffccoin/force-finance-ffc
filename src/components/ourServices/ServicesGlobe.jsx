import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const ServicesGlobe = () => {
  return (
    <div className="bg-primary mt-[-2px]  grid place-items-center ">
      <div className="mt-20 flex  max-w-7xl flex-col items-center justify-center gap-x-14 lg:flex-row xl:gap-x-32">
        <div className="flex-shrink-0">
          <Image
            src="/ourServices/globe.png"
            width={558}
            height={488}
            alt="img"
          />
        </div>
        <div className=" flex max-w-[90vw] flex-col items-center justify-center p-14   lg:items-start lg:p-0">
          <p className="text-primary1 uppercase font-apfel-grotezk ">our story</p>
          <h1 className=" text-wrap text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px] lg:mt-10">
            Building the Future of Finance with FFC Coin
          </h1>
          <p className="mt-9 text-wrap text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
            Embark on our remarkable journey as we pave the way for a
            revolutionary shift in the financial landscape with FFC Coin. From
            humble beginnings to groundbreaking innovations, follow our story of
            perseverance, dedication, and relentless pursuit of excellence. Join
            us as we empower individuals worldwide with accessible, secure, and
            innovative decentralized finance solutions, shaping the future of
            finance one milestone at a time.
          </p>
          <div className="mt-11 flex w-full flex-col gap-8 pr-8 md:flex-row">
            <Button
              className="w-fullsm:w-auto"
              title="Join our team"
              size="small"
              icon={
                <Image
                  src="/ourServices/arrowHead.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const renderStat = (number, label) => (
  <div className="flex flex-col gap-y-4">
    <h1 className="text-[37.9px] leading-[42.64px]">{number}</h1>
    <p className="ml-1 md:ml-4">{label}</p>
  </div>
);

export default ServicesGlobe;
