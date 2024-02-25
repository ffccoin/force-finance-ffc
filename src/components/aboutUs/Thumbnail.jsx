export default function Thumbnail({ text, val }) {
  return (
    <div className="flex-wrap w-full   ">
      <div className=" flex  h-[146px] items-center justify-between rounded-2xl 2xl:px-6 sm:px-10 px-4  lg:pl-4 lg:pr-2 bg-white bg-opacity-5  2xl:py-10 py-10">
        <p className="my-2 font-apfel-grotezk  text-[16px] text-white ">
          {text}
        </p>
        <p className=" mt-2 font-neue-machina-bold lg:text-[30px] sm:text-[38px] xl:text-[38px] text-[26px]  text-white">
          {val}
        </p>
      </div>
    </div>
  );
}
