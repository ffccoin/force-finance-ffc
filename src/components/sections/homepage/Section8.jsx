import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section8 = () => {
  return (
    <div className="bg-primary mt-16 grid h-auto items-center justify-center rounded-lg ">
      <div className="flex flex-wrap justify-center gap-28 xl:gap-96 max-w-7xl lg:flex-row lg:justify-end">
        <div className="flex  w-[24.438rem] flex-col lg:ml-auto">
          <h3 className="font-neue-machina-bold text-3xl	 ">
            TRY CRYPTO COIN CONVERTER
          </h3>
          <p className=" mt-8 text-neutralLight">
            Instantly convert between your local currency and over 40
            cryptocurrencies to capitalize on price movements.
          </p>
          <div className="mt-8 w-[145px]">
            <Button className=" " width="fit" title="Learn more" size="small" />
          </div>
        </div>
        <div className="flex w-[24.438rem] flex-wrap ">
          <div className="flex flex-col flex-wrap ">
            <p className="text-neutralLight">You have</p>
            <input
              type="text"
              placeholder="$42.984"
              className="mt-3 h-8 w-[400px] border  border-transparent border-b-primary1 bg-transparent px-3 outline-none focus:border-b-primary1 focus:outline-none"
            />

            <p className="mt-6 text-neutralLight">You get</p>
            <input
              type="text"
              placeholder="0.95"
              className="mt-3 h-8 w-[400px] border  border-transparent border-b-primary1 bg-transparent px-3 outline-none focus:border-b-primary1 focus:outline-none"
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <div>
              <Image
                width={77}
                height={30}
                alt="img"
                src="/homepage/visa.svg"
              />
            </div>
            <div>
              <Image
                width={77}
                height={30}
                alt="img"
                src="/homepage/mastercard.svg"
              />
            </div>
            <div>
              <Image
                width={77}
                height={30}
                alt="img"
                src="/homepage/paypal.svg"
              />
            </div>
            <div>
              <Image
                width={77}
                height={30}
                alt="img"
                src="/homepage/discover.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap justify-center  gap-28 xl:gap-96  lg:flex-row lg:justify-end">
        <div className="flex  w-[24.438rem] flex-col lg:ml-auto">
          <h3 className="font-neue-machina-bold text-3xl	 ">
            HOW TO GET STARTED 
          </h3>
          <p className=" mt-8 text-neutralLight">
            Embarking on your cryptocurrency investment journey doesn't have to
            be daunting. Follow these simple steps to get started:
          </p>
        </div>
        <div className="flex md:w-[24.438rem] w-full  flex-wrap justify-center lg:justify-end ">
          <div className="mt-8 md:w-[200px] w-full ">
            <SecondaryButton
              className="mt-auto  group-hover:flex "
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
