import Box from "./Box";
import TextBox from "./TextBox";
import Image from "next/image";

export default function AboutFFC() {
  return (
    <div className="mt-20 grid select-none place-items-center bg-primary2">
      <div className="flex max-w-[92rem] flex-col  gap-10 px-8 md:flex-row xl:gap-24">
        <div className="flex flex-col lg:max-w-[499px] xl:max-w-[560px]">
          <p className="text-base uppercase text-primary1  md:mt-0">
            ABOUT FFC COIN
          </p>
          <div className="mt-5 flex flex-col justify-start gap-[17px]">
            <p className="line-height-[24px] max-w-md text-wrap font-neue-machina-bold text-[30px] uppercase leading-[42.00px] text-gray-100  sm:text-[33.9px] lg:text-[35.9px]">
              Empowering the Future of Finance
            </p>
            <p className=" text-wrap text-base leading-[24.00px] text-[#898990]">
              Our mission is to lead the charge in DeFi innovation, pioneering
              groundbreaking solutions that democratize access to financial
              services. By leveraging blockchain technology and fostering
              community-driven initiatives, we aim to create a decentralized
              ecosystem that prioritizes security, transparency, and user
              empowerment
            </p>
          </div>
        </div>
        <div className="max-w-full">
          <div className="flex flex-col border-t-[2px] border-[#2C2C2B]">
            <div className="ml-3  flex flex-col gap-10 pb-11 pt-11 sm:ml-5 sm:flex-row xl:ml-12">
              <div className="flex  gap-5 md:w-[158px] lg:w-[261px]">
                <p>Secure Infrastructure</p>
                <div>{circleArrow}</div>
              </div>
              <div className="flex gap-5 md:w-[158px] lg:w-[261px]">
                <p>Proactive Monitoring</p>
                <div>{circleArrow}</div>
              </div>
            </div>
            <div className="flex w-full flex-col md:gap-10 sm:gap-3 gap-10  border-t-[2px]   border-[#2C2C2B]  pb-11 pt-11 sm:flex-row">
              <div className="ml-3 flex   gap-5  sm:ml-5 md:w-[158px]  lg:w-[261px] xl:ml-12">
                <p>Multi-Layered Security </p> <div>{circleArrow}</div>
              </div>

              <div className="ml-3 flex md:gap-14 gap-[4.5rem] sm:gap-16  md:ml-1  md:w-[158px] lg:w-[261px]">
                <p>User Education </p> <div>{circleArrow}</div>
              </div>
            </div>
            <div className="border-t-[2px]   border-[#2C2C2B]"></div>
          </div>
        </div>
      </div>
      <div
        className="mt-14 flex max-w-[87rem] flex-col items-center justify-center   px-8 lg:px-10 md:mb-10 md:mt-28 md:flex-row "
        orientation="horizontal"
      >
        <TextBox
          heading={"OUR VISION"}
          text={
            "At Force Finance Coin, we envision a future where decentralized finance (DeFi) on the Ethereum blockchain empowers universal financial access. Our goal is to revolutionize traditional financial services, ensuring inclusivity, transparency, and security for all."
          }
        />
        <TextBox
          heading={"our Mission"}
          text={
            "Our mission is to democratize finance via our Ethereum-powered platform, offering diverse DeFi solutions for passive income. From car loans to real estate investment planning, we aim to empower users with accessible financial tools, enabling them to seize control of their future."
          }
        />
        <TextBox
          heading={"core value"}
          text={
            "Our core values at Force Finance Coin revolve around integrity, innovation, and inclusivity. We prioritize transparency, creativity, and accessibility to empower users and drive positive change in the decentralized finance space."
          }
        />
      </div>

      <div className="mt-14 flex items-center  justify-center gap-7 px-8 lg:mt-28">
        <div
          className="flex  flex-col items-center justify-center lg:flex-row"
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
const circleArrow = (
  <Image
    width={24}
    height={24}
    src="/aboutpage/circleArrow.svg"
    alt="iconframe"
  />
);
