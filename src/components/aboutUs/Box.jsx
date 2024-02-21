export default function Box({ num, heading, text }) {
  return (
    <div>
      <div className="mx-4 mb-12 flex h-[218px] w-[337px] flex-col items-center justify-start gap-[30px] sm:ml-[0] md:h-auto">
        <p className="flex  h-20 w-20 items-center justify-center rounded-[50%] bg-gradient1 text-center font-neue-machina-bold text-[28.43px] uppercase text-primary1 sm:px-5 sm:text-[24.43px] md:text-[26.43px]">
          {num}
        </p>
        <div className="flex w-full flex-col items-start justify-start gap-3">
          <p className="w-full text-center font-neue-machina-bold text-[21.33px] uppercase text-gray-100 sm:text-[17.33px] md:text-[19.33px]">
            {heading}
          </p>
          <p className="max-w-[337px] text-center font-apfel-grotezk text-base leading-[24.00px] text-[#898990] md:max-w-full">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
