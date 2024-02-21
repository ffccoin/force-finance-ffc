import React from "react";
import Button from "../buttons/Button";

export default function Section4() {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="mx-auto mt-[46px] flex  w-full max-w-[1340px] flex-col items-center justify-center md:flex-row md:gap-5 md:px-5">
        <div className="flex w-[250px] md:w-[600px] xl:w-[700px] flex-col justify-center items-start mr-0 lg:mr-14 ">
          <p className="font-apfel-grotezk flex items-center text-[16px] text-base uppercase tracking-[5.76px] text-primary1">
            WHAT IS Ffc coin?
          </p>
          <p className="mt-[33px] w-full font-neue-machina-bold3 font-[800px] uppercase leading-[42.00px] text-gray-100 text-[25.9px] lg:text-[35.9px]">
            Your Trusted Decentralized DeFi Web 3 Financial Solution Provider
          </p>
          <div className="font-apfelgrotezk mt-[17px] flex flex-col items-center justify-start gap-[15px]">
            <p className="w-[99%] font-apfel-grotezk text-[18px] text-lg leading-[24.00px] text-gray-100 sm:w-full">
              Force Finance Coin is a dynamic DeFi platform on the etherum
              blockchain, revolutionizing finance and empowering users with
              innovative solutions.
            </p>
            <div className="font-apfel-grotezk text-[16px] text-base leading-[24.00px] text-[#898990]">
              <p>
                At its core, Force Finance Coin serves as a decentralized medium
                of exchange, ensuring secure and transparent transactions.
                Committed to accessibility and security, it democratizes
                financial services for all users.
                <br />
                <br />
                Driven by a vision of inclusivity and innovation, Force Finance
                Coin utilizes blockchain technology to offer diverse DeFi
                solutions. From decentralized exchanges to yield farming, it
                empowers users with a range of options.
                <br />
                <br />
              </p>
            </div>
          </div>
          <Button title={"Lunch Dapp"} />
        </div>
        <div className="relative">
          <div className="absoluteh-[613px] md:h-[350px] lg:h-[602px] xl:w-[700px] md:w-[350px] lg:w-[600px]">
            <img
              className="absolute inset-[0] m-auto h-full w-full object-center justify-center object-cover"
              src="images/img_rectangle4994.png"
              alt="rectangle4994"
            />
          </div>
        </div>
      </div>
    </div>
  );
}