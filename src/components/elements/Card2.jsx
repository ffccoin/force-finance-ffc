import React from "react";

const Card2 = ({ title, text, number }) => {
  return (
    <div>
      <div className="relative flex flex-col max-w-7xl lg:max-w-96 lg:flex-row ">
        <div className="lg:mr-auto mb-4 lg:mb-0">
          <div className="h-[137px] gap-10 rounded-[20px] bg-neutral p-3 px-6">
            <p className="mt-2 font-neue-machina-bold text-[21.33px]">
              {title}
            </p>
            <p className="mt-2 text-base text-neutralLight">{text}</p>
          </div>
        </div>

        <div className="absolute xl:right-[-38px] top-[-24px]  lg:right-[-8px] right-[-10px] flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary1 text-[21.33px]">
          <p className="text-center font-neue-machina-bold text-neutral">
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
