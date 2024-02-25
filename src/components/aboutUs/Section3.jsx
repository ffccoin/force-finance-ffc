import Header from "./Header";
import Header2 from "./Header2";
import Thumbnail from "./Thumbnail";
import Image from "next/image";

export default function Section3() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('aboutpage/backgroundB.svg')" }}
        className={`mb-10  relative flex h-full w-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-8 pt-6`}
      >
        <div className="absolute  left-0 top-0">
        <Image
    width={428}
    height={349}
    src="aboutpage/corner.svg"
    alt="iconframe"
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
    alt="iconframe"
  />
          
        </div>
        <div style={{
          backgroundImage: `linear-gradient(to top,50%, #2c1c49 50%,, transparent)`,
        }} className="flex w-screen  gap-5 sm:px-8 px-5 h-full  lg:flex-nowrap flex-wrap">
          <Thumbnail text={"Transactions per second"} val={"5425"} />
          <Thumbnail text={"Total Transactions"} val={"60M+"} />
          <Thumbnail text={"Gass Fees"} val={"$0.002"} />
          <Thumbnail text={"Transaction Validator"} val={"1500+"} />
        </div>
      </div>
      </div>


  );
}
