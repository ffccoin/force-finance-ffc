import Image from "next/image";

const Section11 = () => {
  return (
    <div className="grid place-items-center">
      <div className="mt-8 flex w-[100vw] flex-col gap-y-[61px] xl:px-4 bg-cover px-8 py-10 sm:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-col gap-y-0.5 ">
          <h3 className="text-wrap font-neue-machina-bold text-xl md:text-3xl	 ">
            Need Help?
          </h3>
        </div>
        <div className="flex  flex-col gap-x-[30px] gap-y-4 sm:justify-center sm:gap-y-8 md:flex-row">
          <div className="group flex w-full  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/homepage/chat.svg"
                width={80}
                height={80}
                alt="img"
              />
            </div>
            <div className="flex w-[80%] flex-col gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold   text-[21.33px] leading-6 ">
                24/7 Chat Support
              </p>
              <span className="text-neutralLight">
                Get 24/7 chat support with our friendly customer service agents
                at your service.
              </span>
              <span className="mt-2 flex text-center ">
                <p className=" font-neue-machina-bold text-primary1 ">
                  chat now{" "}
                </p>
                <div className=" flex justify-center text-center">
                  <Image
                    src="/homepage/arrowHead.svg"
                    alt="Arrow"
                    width={16}
                    height={10}
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="group flex w-full  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/homepage/FaQs.svg"
                width={80}
                height={80}
                alt="img"
              />
            </div>
            <div className="flex w-[80%] flex-col gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold   text-[21.33px] leading-6 ">
                FAQs
              </p>
              <span className="text-neutralLight">
                View FAQs for detailed instructions on specific features.
              </span>
              <span className="mt-2 flex text-center ">
                <p className=" font-neue-machina-bold text-primary1 ">
                  Learn more
                </p>
                <div className=" flex justify-center text-center">
                  <Image
                    src="/homepage/arrowHead.svg"
                    alt="Arrow"
                    width={16}
                    height={10}
                  />
                </div>
              </span>
            </div>
          </div>{" "}
          <div className="group flex w-full  gap-y-[30px] rounded-[10px] ">
            <div className="grid h-[80px] w-[80px] place-items-center  ">
              <Image
                src="/homepage/blog.svg"
                width={80}
                height={80}
                alt="img"
              />
            </div>
            <div className="flex w-[80%] flex-col gap-x-3 gap-y-3 ">
              <p className="font-neue-machina-bold  text-[21.33px] leading-6 ">
                Blog
              </p>
              <span className="text-neutralLight">
                Stay up to date with the latest stories and commentary.{" "}
              </span>
              <span className="mt-2 flex text-center ">
                <p className=" font-neue-machina-bold text-primary1 ">
                  Learn more
                </p>
                <div className=" flex justify-center text-center">
                  <Image
                    src="/homepage/arrowHead.svg"
                    alt="Arrow"
                    width={16}
                    height={10}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
