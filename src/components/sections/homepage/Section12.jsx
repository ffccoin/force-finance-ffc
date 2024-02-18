import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section12 = () => {
  return (
    <div className="mt-16 grid justify-center    rounded-lg bg-primary1 lg:h-[500px] lg:pl-14">
      <div className="flex max-w-7xl flex-col mt-16  gap-48 lg:flex-row">
        <div className="flex flex-col pl-4   text-neutral">
          <h1 className="text-wrap font-neue-machina-bold uppercase w-[29rem]  text-[37.9px] leading-[42.64px]">
            Unlock tomorrow's potential with FFC Coin{" "}
          </h1>
          <p className=" mt-4  text-wrap text-[16px]  w-[29rem] leading-[24px]">
            Embrace the future with FFC Coin, where innovation meets
            opportunity. Join our platform to unlock a world of limitless
            possibilities and cutting-edge technology. Don't wait any longer –
            start your journey with FFC today and experience the power of
            decentralized finance firsthand{" "}
          </p>
          
          <div className="mt-4  flex w-full flex-col gap-8 md:flex-row">
            {" "}
            <SecondaryButton title="Lunch Dapp" size="small" className="bg-neutralLighter text-neutralDarker"outline="border-black" />
          </div>
        </div>
        <div className="flex lg:mr-32 ">
          <Image
            src="/homepage/mobile2.svg"
            width={532}
            height={484}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Section12;
