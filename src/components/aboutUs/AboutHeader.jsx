import Image from "next/image";
import Button from "../buttons/Button";

export default function AboutHeader() {
  return (
    <div className="grid place-items-center     bg-primary2">
      <div className=" flex flex-col items-center px-4 ">
        {/*         <Image     className="absolute top-[5.4rem] left-[15.4rem] sm:left-[20rem] md:left-[30rem] lg:left-[60rem] xl:left-[60rem]" width={51} height={51} alt="img" src="/aboutpage/bitcoin.svg" /> */}
        <Image
          className="absolute top-[5.4rem] hidden xl:left-[60rem] xl:block"
          width={51}
          height={51}
          alt="img"
          src="/aboutpage/bitcoin.svg"
        />
        <Image
          className="absolute top-[9.3rem]  hidden xl:left-[1.25rem] xl:block"
          width={116.52}
          height={116.52}
          alt="img"
          src="/aboutpage/goldenBitcoin.svg"
        />
        <Image
          className="absolute top-[15rem] hidden rotate-3 xl:left-[70.65rem] xl:block"
          width={123}
          height={123}
          alt="img"
          src="/aboutpage/greenBitcoin.svg"
        />
        <Image
          className="absolute top-[26.3rem]  hidden xl:left-[8rem] xl:block"
          width={85}
          height={85}
          alt="img"
          src="/aboutpage/greenBitcoin2.svg"
        />
        <Image
          className="absolute top-[28rem] hidden rotate-3 xl:left-[69.65rem] xl:block"
          width={51}
          height={51}
          alt="img"
          src="/aboutpage/blueBitcoin.svg"
        />

        <div className=" flex flex-col items-center  uppercase">
          <p className=" text-wrap text-center font-apfel-grotezk text-sm text-primary1 sm:text-base xl:mr-auto  xl:pl-[357px]">
            First order and you’ll get up to $10 in free BTC as a reward{" "}
          </p>
          <p className="mt-3 text-wrap text-center  font-neue-machina-bold text-xl uppercase sm:text-[56px]   sm:leading-[75.75px] md:px-8 xl:pr-32 ">
            A Trusted and Secure Web 3.0 Financial DeFi Solution
          </p>
        </div>
        <div className="mt-10 lg:mr-28 flex flex-col items-center  gap-4 md:flex-row">
          <div className="flex max-w-72 flex-wrap rounded-[10px] bg-neutral p-4 lg:gap-10 ">
            <div className=" max-w-28 sm:max-w-32">
              <p className="text-neutralLight">You have</p>
              <input
                type="text"
                placeholder="$42.984"
                className=" w-full border-transparent bg-transparent  outline-none"
              />
            </div>

            <div className="flex items-center justify-center ">
              <p className="text-white-A700 mr-1 flex max-h-[24px] max-w-[24px] items-center justify-center rounded-xl bg-[#7D32F9] p-2 pb-2.5 text-center text-base">
                $
              </p>
              <p className="text-white-A700 text-base">USD</p>
              <Image
                width={24}
                height={24}
                src="images/img_iconframe.svg"
                alt="iconframe"
              />
            </div>
          </div>
          <Image
            className="my-2 rotate-90  md:my-0 md:rotate-0"
            width={24}
            height={24}
            src="images/img_share.svg"
            alt="share"
          />
          <div className="flex max-w-72 flex-wrap rounded-[10px] bg-neutral p-4 lg:gap-10 ">
            <div className=" max-w-28 sm:max-w-32">
              <p className="text-neutralLight">You get</p>
              <input
                type="text"
                placeholder="0.95"
                className=" w-full border-transparent bg-transparent  outline-none"
              />
            </div>

            <div className="flex items-center justify-center ">
              <p className="text-white-A700 mr-1 flex max-h-[24px] max-w-[24px]  items-center justify-center rounded-xl bg-orange-600 p-2 pb-2.5 text-center text-base">
                ฿
              </p>
              <p className="text-white-A700 text-base">USD</p>
              <Image
                width={24}
                height={24}
                src="images/img_iconframe.svg"
                alt="iconframe"
              />
            </div>
          </div>
          <div
            className="my-[3px] mt-1 font-neue-machina-bold flex h-[76px] w-[155px] min-w-[154px] cursor-pointer items-center justify-center bg-primary1 text-center text-base font-extrabold text-black md:mt-0"
            shape="square"
            color="light_green_A200"
            size="lg"
            variant="fill"
          >
            Buy Now
          </div>

        </div>
        <div className="flex w-[79%] mt-5 flex-col items-center justify-start gap-2.5 md:w-full">
                  <p className=" text-base text-[#898990] font-apfel-grotezk text-[16px]">We accept</p>
                  <img
                    className="h-[30px]"
                    src="images/img_group9342.svg"
                    alt="group9342"
                  />
                </div> 
      </div>
      <div className="md:mt-20 mt-8 bg-gradient-to-b from-[#161617] from-50% via-[#7D32F9] via-100%  w-full flex flex-col items-center ">

      <Image
                width={891}
                height={301}
                src="/aboutpage/test.svg"
                alt="iconframe"
              />
         </div>
         </div>

  );
}


