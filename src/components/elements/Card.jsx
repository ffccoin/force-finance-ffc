import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const Card = ({ state, bonusPercent, daysLeft, start, endTime }) => {
  return (
    <div className=" group rounded-3xl max-w-[307.1px] h-[232px] bg-neutral hover:h-[242px]">
      <div className=" p-3">
        <h2 className="sm:mt-4 sm:text-start  text-center sm:pl-4 ">State: {state}</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-between">
          <div>
            <p className="sm:mt-5 sm:pl-3 sm:text-start  text-center font-neue-machina-bold text-xl sm:text-4xl font-extrabold leading-10 group-hover:text-primary1">
              {bonusPercent}%
            </p>
            <p className="font-apfel-grotezktext sm:text-[18px] sm:mt-1 sm:text-start  text-center  sm:pl-4 font-normal group-hover:text-primary1">
              BONUS
            </p>
          </div>
          <div className="sm:mt-7 sm:text-start flex justify-center">
             
            <SecondaryButton
              className="mt-auto hidden group-hover:flex "
              title="Buy now"
              size="small"
            />
          </div>
        </div>

        <div className="sm:mt-8  flex  justify-between sm:pl-4">
          <p className="text-neutralLight">{daysLeft}</p>
          <span className="text-sm">
            {start} <p className="text-sm">{endTime}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
