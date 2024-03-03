import Header from "./Header";
import Header2 from "./Header2";
import Thumbnail from "./Thumbnail";
import Image from "next/image";

export default function Section3() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('aboutpage/backgroundB.svg')" }}
        className={`relative  mb-10 flex h-full w-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-8 pt-6`}
      >
        <div className="absolute left-0  top-0 max-w-[170px] sm:max-w-[210px] md:max-w-[240px] lg:max-w-[290px] 2xl:max-w-full">
          <Image
            width={428}
            height={349}
            src="aboutpage/corner.svg"
            alt="corner"
            className=""
          />
        </div>

        <div className="flex flex-col">
          <Header />
          {/* <div
          style={{ backgroundImage: "url('aboutpage/body.svg')" }}
          className={`[w-400px] mb-32 mt-14 flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat md:h-[600px] md:w-[625px] lg:h-[665px]`}
        >
          <Header2 /> */}
          <Image
            width={626}
            height={667}
            src="aboutpage/body.svg"
            alt="about body"
          />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to top 50%, #2c1c49 50%,, transparent)`,
          }}
          className="flex h-full mt-24 w-screen flex-wrap gap-5 px-5  sm:px-8 lg:flex-nowrap"
        >
          <Thumbnail text={"Transactions per second"} val={"5425"} />
          <Thumbnail text={"Total Transactions"} val={"60M+"} />
          <Thumbnail text={"Gass Fees"} val={"$0.002"} />
          <Thumbnail text={"Transaction Validator"} val={"1500+"} />
        </div>
      </div>
    </div>
  );
}
