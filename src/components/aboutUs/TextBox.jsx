import React from "react";

export default function TextBox({heading, text}) {
  return (
    <div>
      <div className="flex flex-col mx-4 mt-8 justify-center items-start">
        <p
          className="text-[24px]  mb-8 text-white font-neue-machina-bold"
        >
        {heading}
        </p>
        <p className="text-[16px] text-[#898990] font-apfel-grotezk">
          {text}
        </p>
      </div>
    </div>
  );
}
