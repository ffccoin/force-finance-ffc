import Box from "./Box";
import TextBox from "./TextBox";
import Image from "next/image";

export default function AboutFFC() {
  return (
    <div className="mt-20 grid place-items-center bg-primary2">
      <div className="flex max-w-[92rem] flex-col md:flex-row">
        <div className="flex max-w-[560px] flex-col">
          <p className="mt-[250px] text-base uppercase text-primary1  md:mt-0">
            ABOUT FFC COIN
          </p>
          <div className="flex flex-col justify-start gap-[17px]">
            <p className="line-height-[24px] max-w-md text-wrap font-neue-machina-bold text-[30px] uppercase leading-[42.00px] text-gray-100  sm:text-[33.9px] lg:text-[35.9px]">
              Empowering the Future of Finance
            </p>
            <p className=" w-full text-wrap text-base leading-[24.00px] text-[#898990]">
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
            <div className="flex flex-col pb-11 pt-11 sm:flex-row">
              <div className="flex gap-5 ">
                <p>Secure Infrastructure</p>
                <div>{circleArrow}</div>
              </div>
              <div className="flex gap-5">
                <p>Proactive Monitoring</p>
                <div>{circleArrow}</div>
              </div>
            </div>
            <div className="flex w-full flex-col border-t-[2px]  border-[#2C2C2B] pt-11 sm:flex-row">
              <div className="flex gap-5">
                <p>Multi-Layered Security </p> <div>{circleArrow}</div>
              </div>

              <div className="flex gap-5 ">
                <p>User Education </p> <div>{circleArrow}</div>
              </div>
            </div>
          </div>
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
