import React from "react";

export default function Review({image, heading, data}) {
  return (
    <div className="flex-wrap">
      <div className="bg-[#1E1E1F] w-full h-full max-w-[500px] m-4 rounded-lg px-10 py-10 sm:px-20 sm:py-20 flex flex-col items-start justify-center">
        <img
          className="my-3 h-[30px] w-[150px]"
          src={`/aboutpage/${image}.svg`}
          alt=""
        />
        <p className="font-neue-machina-bold text-[22px] my-2 text-white">
          {heading}
        </p>
        <p className="mb-3 mt-1 font-apfel-grotezk text-[16px] text-[#898990]">
          {data}
        </p>
        <p className="text-[16px] font-neue-machina mt-2 text-primary1">
            Read Article {'>'}
        </p>
      </div>
    </div>
  );
}
