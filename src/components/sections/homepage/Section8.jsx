import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Calculator from "./Calculator";

const Section8 = () => {
  return (
    <div className="bg-primary mt-16 grid h-auto items-center justify-center rounded-lg">
      <div className="flex flex-wrap px-4 sm:px-8 md:px-12 gap-28 xl:gap-96 max-w-7xl lg:flex-row ">
        <div className="flex  lg:w-[24.438rem] flex-col lg:ml-auto">
          <h3 className="font-neue-machina-bold text-wrap md:text-3xl text-xl	 ">
            TRY CRYPTO COIN CONVERTER
          </h3>
          <p className=" mt-8 text-neutralLight text-wrap">
            Instantly convert between your local currency and over 40
            cryptocurrencies to capitalize on price movements.
          </p>
          <div className="mt-8 w-[145px]">
            <Button className=" " width="fit" title="Learn more" size="small" />
          </div>
        </div>
        <Calculator />
      </div>

      <div className="flex flex-wrap px-4 mt-28 justify-between  max-w-7xl md:flex-row ">
        <div className="flex  md:max-w-[27.438rem] flex-col ">

        <h3 className="font-neue-machina-bold text-wrap md:text-3xl text-xl	 ">
            HOW TO GET STARTED 
          </h3>
          <p className=" mt-8 text-neutralLight text-wrap">
            Embarking on your cryptocurrency investment journey doesn't have to
            be daunting. Follow these simple steps to get started:
          </p>
        </div>
        <div className="flex md:w-[12.438rem] w-full  flex-wrap justify-center lg:justify-end ">
          <div className="mt-8 md:w-[200px] w-full ">
            <SecondaryButton
              className="mt-auto  w-full "
              title="Get Started"
              size="small"
              icon={
                <Image
                  src="/homepage/arrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
