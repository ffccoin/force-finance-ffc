import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section7 = () => {
  return (
    <div className=" mt-[-2px] grid  place-items-center bg-primary1 ">
      <div className="flex max-w-7xl flex-col">
        <div className=" mt-[3.375rem] flex flex-col text-neutral">
          <p className="text-center font-apfel-grotezk  text-base font-normal leading-6 tracking-wider text-darkGreen">
            ROADMAP
          </p>
          <h3 className="mt-[1.6rem] text-center  font-neue-machina-bold  text-4xl leading-10 tracking-normal">
            THE EVOLUTION OF FFC COIN
          </h3>
        </div>
        <div className="ml-auto mt-[4.98rem]  flex  items-center  justify-end sm:mr-auto lg:ml-32 xl:ml-48  xl:pl-24">
          <div className="h-[243px] max-w-[424px] border-l border-dashed border-darkGray sm:max-w-[300px] xl:max-w-[380px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              Design & Development
            </p>
            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              Jan-Feb 2024
            </p>
            <ul className="md:max-w-auto 3 ml-2 mt-3 flex  max-w-[380px] list-disc flex-wrap pl-6 text-primary2  xl:max-w-[315px]">
              <li className="mb-1 text-[0.85rem]   ">
                Development of core blockchain infrastructure
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Design and implementation of smart contracts for token creation,
                transactions, staking, and yield farming
              </li>
              <li className="text-[0.85rem] ">
                Creation of user-friendly wallets and interfaces
              </li>
            </ul>
          </div>

          <div className="hidden h-[243px] max-w-[300px] flex-col border-l border-dashed border-darkGray px-2 md:flex  xl:max-w-[370px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              Token Allocation & Distribution{" "}
            </p>

            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              June-July-2024{" "}
            </p>

            <ul className="ml-8  mt-3 max-w-[205px] list-disc pl-3 text-primary2">
              <li className="mb-1 text-[0.85rem]   ">
                Allocate tokens to private sale participants based on agreed
                terms.{" "}
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Implement vesting schedules and lock-up periods as per the
                agreements.
              </li>
            </ul>
          </div>
          <div className="hidden h-[243px] max-w-[300px] flex-col border-l border-dashed  border-darkGray lg:flex xl:max-w-[340px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              ICO Execution & CEX Listing
            </p>

            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              Nov-Dec 2024
            </p>

            <ul className="ml-8  mt-3 max-w-[205px] list-disc pl-3 text-primary2">
              <li className="mb-1 text-[0.85rem]   ">
                Execute the ICO launch according to the predetermined timeline
                and phases.{" "}
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Fulfill the listing requirements and comply with exchange
                regulations.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex">
          <Image width={1920} height={100} alt="img" src="/homepage/line.svg" />
        </div>

        <div className="ml-auto mt-3  flex  items-center  justify-end sm:mr-auto lg:ml-32 xl:ml-48  xl:pl-[3.2rem]">
          <div className="h-[243px] max-w-[424px] border-l border-dashed border-darkGray sm:max-w-[300px] xl:max-w-[380px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              Research & Planning{" "}
            </p>
            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              Nov-Dec 2023
            </p>
            <ul className="md:max-w-auto 3 ml-2 mt-3 flex  max-w-[380px] list-disc flex-wrap pl-6   text-primary2">
              <li className="mb-1 text-[0.85rem]   ">
                Market analysis and identification of opportunities.{" "}
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Formation of a skilled team including developers, blockchain
                experts, marketers, and legal advisors.
              </li>
              <li className="text-[0.85rem] ">
                Investigation of legal and regulatory requirements.{" "}
              </li>
            </ul>
          </div>

          <div className="hidden h-[243px] max-w-[300px] flex-col border-l border-dashed border-darkGray px-2 md:flex  xl:max-w-[370px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              Private Sale Round{" "}
            </p>

            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              April-May 2024{" "}
            </p>

            <ul className="ml-8  mt-3 list-disc  pl-3 text-primary2">
              <li className="mb-1 text-[0.85rem]   ">
                Identify and reach out to potential investors, including
                institutional investors, venture capitalists, and high-net-worth
                individuals.{" "}
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Secure funding commitments from strategic investors{" "}
              </li>
            </ul>
          </div>
          <div className="hidden h-[243px] max-w-[300px] flex-col border-l border-dashed  border-darkGray lg:flex xl:max-w-[340px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              ICO Marketing Campaign{" "}
            </p>

            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              Aug-Sep 2024
            </p>

            <ul className="ml-8  mt-3 max-w-[205px] list-disc pl-3 text-primary2">
              <li className="mb-1 text-[0.85rem]   ">
                Ramp up marketing efforts to generate interest and awareness for
                the upcoming ICO.{" "}
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Launch targeted advertising campaigns and engage influencers in
                the crypto space.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
