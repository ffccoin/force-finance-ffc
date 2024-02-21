import Image from "next/image";


const Section2 = () => {
  return (
    <div className="mt-2 grid place-items-center  bg-primary2">
      <div className=" flex flex-col  items-center   ">
        <div className=" flex flex-col items-center  sm:max-w-[69vw] md:mt-20 ">
          <p className="mt-3 text-center font-neue-machina-bold text-2xl   uppercase sm:text-[37.9px] sm:leading-[42.64px] ">
            FAQs{" "}
          </p>
          <span className="lg: mt-6 max-w-[35rem] px-4 text-center text-base text-neutralLight md:px-1">
            Unlock the Information You Seek, Dive into Our Comprehensive
            Compilation of Frequently Asked Questions to Discover More about
            Force Finance Coin.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section2;
