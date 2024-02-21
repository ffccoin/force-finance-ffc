import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const ServicesMobile = () => {
  return (
    <div className="mt-[-2px] grid  place-items-center bg-primary1 ">
      <div className="mt-20 flex  max-w-7xl flex-col items-center justify-center gap-x-14 lg:flex-row xl:gap-x-32">
        <div className="flex-shrink-0">
          <Image
            src="/ourServices/mobile.svg"
            width={565}
            height={478}
            alt="img"
          />
        </div>
        <div className=" flex max-w-[90vw] flex-col items-center justify-center p-14  text-primary2  lg:items-start lg:p-0">
          <h1 className=" text-wrap text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px] lg:mt-10">
            Total control with our transaction system
          </h1>
          <p className="mt-9 text-wrap text-[16px] leading-[24px]  lg:max-w-[34.5rem]">
            Simplify Your Financial Transactions: With our platform, you can
            seamlessly purchase both fiat and cryptocurrencies using your credit
            or debit card. Benefit from instant settlement, a wide range of
            asset options, and robust security measures, ensuring a convenient
            and secure experience. Enjoy global accessibility and expand your
            financial opportunities today
          </p>
          <div className="mr-auto mt-12 flex flex-col flex-wrap gap-y-3 sm:gap-y-8 md:mr-auto md:flex-row md:gap-x-28 lg:mr-0 lg:flex-row lg:gap-x-4 xl:gap-x-20">
            {renderStat("60M+", "Trading Volume")}
            {renderStat("1500+", "Liquidity Pool")}
            {renderStat("1000+", "Yield Farming")}
          </div>
          <div className="mt-11 flex w-full flex-col gap-8 pr-8 md:flex-row">
            <Button
              className="w-full bg-primary2 text-neutralLighter sm:w-auto"
              title="Go to apps"
              size="small"
            />
            <SecondaryButton
              color="primary2"
              title="Learn more"
              className={"border-primary2"}
              size="small"
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

export default ServicesMobile;
