import Image from "next/image";


const ServicesFAQs = () => {
  return (
    <div className="mt-2 grid place-items-center bg-primary2">
      <div className="mt-12 grid max-w-[130rem] gap-x-20 px-6  sm:grid-cols-1 sm:px-16 lg:grid-cols-2  lg:px-8">
        <div className="w-full">
          <div className="border-t-[1px] border-white">
            <p className="my-[2.1rem] font-neue-machina-bold text-[16px] sm:text-[18px] sm:leading-[24px]">
              How does FFC Coin ensure security?
            </p>
            <div className="border-t-[1px] border-neutralLight">
              <p className="my-[2.1rem] font-neue-machina-bold text-[16px] sm:text-[18px] sm:leading-[24px]">
                What are the benefits of using FFC Coin?
              </p>
            </div>{" "}
            <div className="border-t-[1px] border-neutralLight">
              <p className="my-[2.1rem] font-neue-machina-bold text-[16px] sm:text-[18px] sm:leading-[24px]">
                How can I get started with FFC Coin?
              </p>
            </div>
            <div className="lg:border-t-[1px]  lg:border-white">
              {/* Additional content */}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="border-t-[1px] border-primary1">
            <p className="mt-[2.1rem]  font-neue-machina-bold text-[16px] text-primary1 sm:text-[18px] sm:leading-[24px]">
              What is Force Finance Coin (FFC Coin)?{" "}
            </p>
            <p className="mb-[1.1rem] mt-[0.8rem] text-wrap text-[16px] leading-[24px] text-neutralLight lg:max-w-[34.5rem]">
              Force Finance Coin (FFC Coin) is a decentralized finance (DeFi)
              platform built on blockchain technology, dedicated to
              revolutionizing the traditional financial landscape. It serves as
              a medium of exchange within the ecosystem, facilitating
              transactions and governance.
            </p>
            <div className="border-t-[1px] border-neutralLight">
              <p className="my-[2.1rem] font-neue-machina-bold text-[16px] sm:text-[18px] sm:leading-[24px]">
                What are the passive income opportunities available?
              </p>
            </div>{" "}
            <div className="border-t-[1px] border-neutralLight">
              <p className="my-[2.1rem] font-neue-machina-bold text-[16px] sm:text-[18px] sm:leading-[24px]">
                What are the passive income opportunities available?{" "}
              </p>
            </div>
            <div className="border-t-[1px] border-white"></div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex w-full  flex-wrap justify-center gap-1 px-10">
        <p className="text-center font-neue-machina-light text-base ">
          Haven’t got your answer?{" "}
        </p>
        <p className="text-center font-neue-machina-bold text-primary1">
          Contact our support now
        </p>
      </div>
    </div>
  );
};

export default ServicesFAQs;
