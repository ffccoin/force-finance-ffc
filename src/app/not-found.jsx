import GoToHomepageButton from "@/components/buttons/GoToHomepageButton";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid h-[80vh] w-screen place-items-center">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex text-[120px] tracking-[24px]">
          <h1 className="absolute -top-[3px] bottom-4 left-[10px] text-[#CBFB45]">
            404
          </h1>
          <h1 className="absolute -top-[1px] left-[7px] text-[#161617]">404</h1>
          <h1 className="absolute left-1">404</h1>
          <h1 className="text-[rgb(125,50,249)]">404</h1>
        </div>
        <h1 className="text-[37.9px] leading-[42.6px]">It's empty here</h1>
        <span className="mt-[11px] leading-[24px] text-neutralLight">
          Look like this page can't be found. Maybe it was moved or renamed.
        </span>
        <GoToHomepageButton />
      </div>
    </div>
  );
};

export default NotFound;
