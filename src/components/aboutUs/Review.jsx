export default function Review({ image, heading, data }) {
  return (
    <div className="flex-wrap">
      <div className=" flex min-h-[351px] h-full  max-w-[500px] flex-col items-start justify-center rounded-xl bg-[#1E1E1F] px-10 py-10 sm:px-20 sm:py-20">
        <img
          className="my-3 h-[30px] w-[150px]"
          src={`/aboutpage/${image}.svg`}
          alt=""
        />
        <p className="my-2 font-neue-machina-bold text-[22px] text-white">
          {heading}
        </p>
        <p className="mb-3 mt-1 font-apfel-grotezk text-[16px] text-[#898990]">
          {data}
        </p>
        <p className="mt-2 font-neue-machina text-[16px] text-primary1">
          Read Article {">"}
        </p>
      </div>
    </div>
  );
}
