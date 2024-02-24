import Box from "./Box";
import TextBox from "./TextBox";

export default function AboutFFC() {
  return (
    <div className="w-screen mt-[-150px] mb-20">
      <div className="mt-[225px] py-4 px-8 ">
        <div className="mx-auto flex w-full max-w-[1472px] lg:px-12 flex-col items-center justify-start">
          <div className="flex w-full flex-col justify-start gap-[204px] md:gap-10">
            <div className="ml-4 flex  flex-col lg:flex-row items-start justify-between lg:ml-[0]  lg:gap-10">
              <div className="mt-[3px] lg:ml-4 flex lg:w-[38%] flex-col items-start justify-start gap-[38px] lg:mt-0 ">
                <p className="text-base uppercase mt-[250px] md:mt-0  text-primary1">
                  ABOUT FFC COIN
                </p>
                <div className="flex flex-col items-center justify-start gap-[17px]">
                  <p className="w-[84%] font-neue-machina-bold text-[37.9px] ml-[-60px] sm:ml-0 uppercase leading-[42.00px] text-gray-100 sm:w-full sm:text-[33.9px] lg:text-[35.9px]">
                    Empowering the Future of Finance
                  </p>
                  <p className=" text-base leading-[24.00px] text-[#898990]">
                    Our mission is to lead the charge in DeFi innovation,
                    pioneering groundbreaking solutions that democratize access
                    to financial services. By leveraging blockchain technology
                    and fostering community-driven initiatives, we aim to create
                    a decentralized ecosystem that prioritizes security,
                    transparency, and user empowerment
                  </p>
                </div>
              </div>
              <div className="relative h-[261px] w-full lg:max-w-[50%] ">
                <div className="absolute right-[0] top-[17%] flex w-[33%] flex-col items-center justify-start">
                  <div className="flex  flex-col items-center justify-center gap-y-[84px]">
                    <div className="flex flex-row items-center justify-start mt-4">
                      <p className="text-white-A700 text-base">
                        Proactive Monitoring
                      </p>
                      <div
                        className="flex h-9 w-9 ml-4 items-center justify-center rounded-3xl bg-[#2C2C2D]"
                        shape="circle"
                        color="gray_100_63"
                        size="xs"
                        variant="fill"
                      >
                        <img
                          className="h-4 "
                          src="images/img_arrowright.svg"
                          alt="arrowright_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-5">
                      <p className="text-white-A700 text-base">
                        User Education
                      </p>
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-3xl bg-[#2C2C2D]"
                        shape="circle"
                        color="gray_100_63"
                        size="xs"
                        variant="fill"
                      >
                        <img
                          className="h-4"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-center">
                  <hr className="h-px w-full border  border-[#2C2C2B] mt-6" />
                  <div className="mt-11 flex flex-row items-center justify-start gap-5">
                    <p className="text-white-A700 text-base">
                      Secure Infrastructure
                    </p>
                    <div
                      className="flex h-9 w-9 ml-1 items-center justify-center rounded-3xl bg-[#2C2C2D]"
                      shape="circle"
                      color="gray_100_63"
                      size="xs"
                      variant="fill"
                    >
                      <img
                        className="h-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Two"
                      />
                    </div>
                  </div>
                  <hr className="mt-[49px] h-px w-full  border  border-[#2C2C2B]" />
                  <div className="mt-[34px] flex w-auto flex-row items-center  justify-start gap-5">
                    <p className="text-white-A700 w-auto text-base">
                      Multi-Layered Security
                    </p>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-3xl bg-[#2C2C2D]"
                      shape="circle"
                      color="gray_100_63"
                      size="xs"
                      variant="fill"
                    >
                      <img
                        className="h-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Three"
                      />
                    </div>
                  </div>
                  <hr className="mt-[59px] h-px w-full border  border-[#2C2C2B]" />
                </div>
              </div>
            </div>
            <div
              className="flex mt-[-100px] md:mt-[100px] md:mb-10 flex-col items-center justify-center md:flex-row"
              orientation="horizontal"
            >
              <TextBox
                heading={"OUR VISION"}
                text={
                  "At Force Finance Coin, we envision a future where decentralized finance (DeFi) on the Ethereum blockchain empowers universal financial access. Our goal is to revolutionize traditional financial services, ensuring inclusivity, transparency, and security for all."
                }
              />
              <TextBox
                heading={"OUR VISION"}
                text={
                  "At Force Finance Coin, we envision a future where decentralized finance (DeFi) on the Ethereum blockchain empowers universal financial access. Our goal is to revolutionize traditional financial services, ensuring inclusivity, transparency, and security for all."
                }
              />
              <TextBox
                heading={"OUR VISION"}
                text={
                  "At Force Finance Coin, we envision a future where decentralized finance (DeFi) on the Ethereum blockchain empowers universal financial access. Our goal is to revolutionize traditional financial services, ensuring inclusivity, transparency, and security for all."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 flex items-center justify-center">
        <div
          className="flex flex-wrap items-center justify-center"
          orientation="horizontal"
        >
          <Box
            num={1}
            heading={"A Place to Innovate"}
            text={
              "Putting our users at the forefront, fostering collaboration and empowerment within our vibrant community."
            }
          />
          <Box
            num={2}
            heading={"A Place to Innovate"}
            text={
              "Putting our users at the forefront, fostering collaboration and empowerment within our vibrant community."
            }
          />
          <Box
            num={3}
            heading={"A Place to Innovate"}
            text={
              "Putting our users at the forefront, fostering collaboration and empowerment within our vibrant community."
            }
          />
          <Box
            num={4}
            heading={"A Place to Innovate"}
            text={
              "Putting our users at the forefront, fostering collaboration and empowerment within our vibrant community."
            }
          />
        </div>
      </div>
    </div>
  );
}
