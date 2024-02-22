import Card from "@/components/elements/Card";
import Image from "next/image";

const Section6 = () => {
  return (
    <div className="mt-2 grid place-items-center mb-20 bg-primary2">
      <div className=" flex flex-col  items-center ">
        <div className=" flex flex-col items-center  md:mt-20 ">
          <p className="mt-3 text-center font-neue-machina-bold text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            TOKENOMICS
          </p>
          <span className="lg: mt-6 max-w-[61rem] text-wrap px-4 text-center text-sm text-neutralLight sm:text-base md:px-1">
            Force Finance Coin (FFC) embodies a meticulously crafted tokenomics
            model, geared for long-term sustainability and value generation.
            With a focus on fostering growth and prosperity for all
            participants, our structure is designed to adapt to evolving market
            dynamics while empowering our vibrant community to steer the
            platform's trajectory towards success.
          </span>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col  items-center justify-center gap-8 lg:flex-row ">
        <div>
          {" "}
          <Image width={350} height={350} alt="img" src="/homepage/graph.svg" />
        </div>
        <div>
          {" "}
          <Image
            width={350}
            height={350}
            alt="img"
            src="/homepage/graph2.svg"
          />
        </div>
      </div>
      <div className=" mt-8  px-4 flex flex-col sm:px-24">
        <h4 className="mr-auto flex items-center  justify-center font-neue-machina-bold text-[28.43px]  font-extrabold leading-8">
          Token Sale Stages
        </h4>
        <div className="mt-3 grid max-w-[85rem]   items-center justify-center gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card state={1} bonusPercent={13} daysLeft={"1 day only"} start={"End In: "}
            endTime={"07:08:30:15"}></Card>
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
