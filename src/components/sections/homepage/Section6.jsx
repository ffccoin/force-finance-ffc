import Card from "@/components/elements/Card";
import Image from "next/image";

const Section6 = () => {
  return (
    <div className="grid place-items-center items-center justify-center">
      <div className="mt-14 flex  max-w-7xl flex-col flex-wrap items-center  justify-center lg:flex-row">
        <div className="flex flex-col flex-wrap items-center justify-center lg:w-[62rem]">
          <h3 className="font-neue-machina-bold text-3xl font-bold leading-10">
            TOKENOMICS
          </h3>
          <div className="  hidden w-full text-neutralLight lg:flex lg:flex-wrap">
            <p className="text-base">
              Force Finance Coin (FFC) embodies a meticulously crafted
              tokenomics model, geared for long-term sustainability and value
              generation. With a focus on fostering growth and prosperity for
              all participants, our structure is designed to adapt to evolving
              market dynamics while
            </p>
            <p className="pl-40 text-base">
              empowering our vibrant community to steer the platform's
              trajectory towards success.
            </p>
          </div>
          <div className=" flex w-full flex-wrap px-2 text-neutralLight sm:px-6 lg:hidden">
            <p className="text-base">
              Force Finance Coin (FFC) embodies a meticulously crafted
              tokenomics model, geared for long-term sustainability and value
              generation. With a focus on fostering growth and prosperity for
              all participants, our structure is designed to adapt to evolving
              market dynamics while empowering our vibrant community to steer
              the platform's trajectory towards success.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col  items-center justify-center gap-8 lg:flex-row ">
        <div>
           
          <Image width={350} height={350} alt="img" src="/homepage/graph.svg" />
        </div>
        <div>
           
          <Image
            width={350}
            height={350}
            alt="img"
            src="/homepage/graph2.svg"
          />
        </div>
      </div>
      <div className=" flex max-w-7xl  pl-16 mt-8 flex-col ">
        <h4 className="font-neue-machina-bold uppercase flex lg:mr-auto  text-[28.43px] items-center justify-center  font-extrabold leading-8">
          Token Sale Stages
        </h4>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 mt-3 md:flex-row">
          <Card state={1} bonusPercent={13} daysLeft={"1 day only"}></Card>
          <Card
            state={2}
            bonusPercent={20}
            daysLeft={"1 day only"}
            start={"End In: "}
            endTime={"07:08:30:15"}
          ></Card>
          <Card
            state={3}
            bonusPercent={15}
            daysLeft={"2 weeks"}
            start={"Start In: "}
            endTime={"07:08:30:15"}
          ></Card>
          <Card
            state={4}
            bonusPercent={0}
            daysLeft={"1 month"}
            start={"Start In: "}
            endTime={"05.30.2022"}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Section6;
