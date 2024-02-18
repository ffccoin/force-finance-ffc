import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const Card = ({ state, bonusPercent, daysLeft, start, endTime }) => {
  return (
    <div className="card group h-[232px] w-[291px] rounded-3xl bg-neutral hover:h-[242px]">
      <div className="card-content p-3">
        <h2 className="mt-4  pl-3 ">State: {state}</h2>
        <div className="flex gap-8 justify-between">
          <div>
            <p className="mt-5 pl-4 font-neue-machina-bold text-4xl font-extrabold leading-10 group-hover:text-primary1">
              {bonusPercent}%
            </p>
            <p className="font-apfel-grotezktext-[18px] mt-1  pl-4 font-normal group-hover:text-primary1">
              BONUS
            </p>
          </div>
          <div className="mt-7">
            {" "}
            <SecondaryButton
              className="mt-auto hidden group-hover:flex "
              title="Buy now"
              size="small"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between pl-4">
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
