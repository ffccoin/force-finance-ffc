import React from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Thumbnail from "./Thumbnail";

export default function Section3() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('aboutpage/backgroundB.svg')" }}
        className={`mb-10 flex h-full w-screen px-4 flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-6`}
      >
        <Header />
        <div
          style={{ backgroundImage: "url('aboutpage/body.svg')" }}
          className={`mb-32 mt-14 flex h-[400px] [w-400px] md:h-[600px] lg:h-[665px] md:w-[625px] items-center justify-center bg-cover bg-center bg-no-repeat`}
        >
          <Header2 />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Thumbnail text={"Transactions per second"} val={"5425"} />
          <Thumbnail text={"Total Transactions"} val={"60M+"} />
          <Thumbnail text={"Gass Fees"} val={"$0.002"} />
          <Thumbnail text={"Transaction Validator"} val={"1500+"} />
        </div>
      </div>
    </div>
  );
}
