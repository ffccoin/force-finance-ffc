import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const Card = ({ state, bonusPercent, daysLeft, start, endTime }) => {
  return (
    <div className="group max-w-[250px] w-[85vw] rounded-3xl max-h-[242px] bg-neutral p-4 transition-all duration-300 ease-in-out hover:scale-105 sm:min-w-[271.5px]">
      <h2 className="sm:mt-4 sm:pl-4">State: {state}</h2>
      <div className="flex flex-col justify-between sm:flex-row">
        <div>
          <p className="font-neue-machina-bold text-xl font-extrabold leading-10 group-hover:text-primary1 sm:mt-5 sm:pl-3 sm:text-4xl">
            {bonusPercent}%
          </p>
          <p className="font-apfel-grotezktext font-normal group-hover:text-primary1 sm:mt-1 sm:pl-4 sm:text-[18px]">
            BONUS
          </p>
        </div>
        <div className="flex sm:justify-center py-5 sm:mt-7 sm:text-start">
          <SecondaryButton
            className="mt-auto hidden group-hover:flex "
            title="Buy now"
            size="small"
          />
        </div>
      </div>

      <div className="flex  justify-between gap-1 sm:mt-8 sm:pl-4">
        <p className="text-neutralLight">{daysLeft}</p>
        <span className="text-sm">
          {start} <p className="text-sm">{endTime}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
