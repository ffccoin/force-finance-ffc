import React from 'react'

export default function box( { num, heading, text} ) {
  return (
    <div>
      <div className="flex flex-col gap-[30px] mx-4 mb-12 h-[218px] md:h-auto items-center justify-start sm:ml-[0] w-[337px]">
              <p
                className="bg-gradient1  flex h-20 items-center justify-center sm:px-5 rounded-[50%] sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-center text-primary1 font-neue-machina-bold uppercase w-20"
              
              >
                {num}
              </p>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <p
                  className="sm:text-[17.33px] md:text-[19.33px] font-neue-machina-bold text-[21.33px] text-center text-gray-100 uppercase w-full"
                >
                  {heading}
                </p>
                <p
                  className="leading-[24.00px] font-apfel-grotezk max-w-[337px] md:max-w-full text-base text-[#898990] text-center"
                >
                  {text}
                </p>
              </div>
            </div>
    </div>
  )
}
