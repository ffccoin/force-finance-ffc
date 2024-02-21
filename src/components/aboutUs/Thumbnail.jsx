import React from 'react'

export default function Thumbnail({text, val}) {
  return (
    <div className="flex-wrap">
      <div className="bg-white bg-opacity-5 h-full w-[300px] mx-4 md:w-[455px] m-4 rounded-2xl flex py-10 px-10 items-center justify-between">
        <p className="font-apfel-grotezk text-[16px] my-2 text-[#898990]">
          {text}
        </p>
        <p className="mb-3 mt-1 font-neue-machina-bold text-[38px]  text-white">
          {val}
        </p>
      </div>
    </div>
  )
}
