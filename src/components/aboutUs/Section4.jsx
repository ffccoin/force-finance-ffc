import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section4 = () => {
  return (
    <div className="bg-primary  px-8  grid lg:place-items-center place-items-center  md:place-items-start">
      <div className="mt-10 flex xl:ml-8  max-w-[83rem] flex-col  justify-start  lg:justify-center lg:items-center lg:flex-row-reverse ">
        <div className="xl:max-w-[685px] max-w-full lg:justify-end justify-center lg:max-w-[500px] flex flex-shrink-0">
          <Image
            src="/ourServices/globe.png"
            width={685}
            height={613}
            alt="img"
          />
        </div>
        <div className=" flex lg:max-w-[641px] flex-col   py-10 lg:items-start lg:p-0">
          <p className="text-primary1 uppercase font-apfel-grotezk ">our story</p>
          <h1 className=" text-wrap text-xl w-full uppercase sm:text-[37.9px] sm:leading-[42.64px] lg:mt-10">
          Your Trusted Decentralized DeFi Web 3 Financial Solution Provider          </h1>
          <p className="mt-9 text-wrap text-[16px] leading-[24px]  lg:max-w-[34.5rem]">
          Force Finance Coin is a dynamic DeFi platform on the etherum blockchain, revolutionizing finance and empowering users with innovative solutions.
          </p>
          <p className="mt-9 text-wrap  text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
          At its core, Force Finance Coin serves as a decentralized medium of exchange, ensuring secure and transparent transactions. Committed to accessibility and security, it democratizes financial services for all users.         
           </p>
          <p className="mt-9 text-wrap text-[16px] leading-[24px] text-neutralLight  lg:max-w-[34.5rem]">
          Driven by a vision of inclusivity and innovation, Force Finance Coin utilizes blockchain technology to offer diverse DeFi solutions. From decentralized exchanges to yield farming, it empowers users with a range of options.
          </p>
          <div className="mt-11 flex gap-8">
            <Button
              className=""
              title="Join our team"
              size="small"
              icon={
                <Image
                  src="/ourServices/arrowHead.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const renderStat = (number, label) => (
  <div className="flex flex-col gap-y-4">
    <h1 className="text-[37.9px] leading-[42.64px]">{number}</h1>
    <p className="ml-1 md:ml-4">{label}</p>
  </div>
);

export default Section4;
