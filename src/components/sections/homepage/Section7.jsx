import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section4 = () => {
  return (
    <div className="mt-16 flex justify-center rounded-lg bg-primary1 h-auto  lg:h-[782px] ">
      <div className="flex flex-col ">
        <div className=" mt-[3.375rem] flex flex-col text-neutral">
          <p className="text-center font-apfel-grotezk  text-base font-normal leading-6 tracking-wider text-darkGreen">
            ROADMAP
          </p>
          <h3 className="mt-[1.6rem] text-center  font-neue-machina-bold  text-4xl leading-10 tracking-normal">
            THE EVOLUTION OF FFC COIN
          </h3>
        </div>
        <div className="mt-[4.98rem] flex  items-center  justify-end  ml-auto xl:ml-48 sm:mr-auto lg:ml-32  xl:pl-24">
          <div className="border-darkGray h-[243px] sm:w-[300px] border-l w-[424px] border-dashed xl:w-[380px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              Design & Development
            </p>
            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              Jan-Feb 2024
            </p>
            <ul className="list-disc flex flex-wrap w-[380px] md:w-auto  text-primary2 mt-3 ml-2 3 xl:w-[315px]  pl-6">
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

          
          <div className="border-darkGray hidden px-2 h-[243px] w-[300px] border-l border-dashed md:flex flex-col  xl:w-[370px] ">
          <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
          Token Allocation & Distribution            </p>
          
          <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
          June-July-2024 </p>
         
          <ul className="list-disc  text-primary2 mt-3 w-[205px] pl-3 ml-8">
              <li className="mb-1 text-[0.85rem]   ">
              Allocate tokens to private sale participants based on agreed terms.              </li>
              <li className="mb-1 text-[0.85rem] ">
              Implement vesting schedules and lock-up periods as per the agreements.
              </li>
              
            </ul>
            
            
            </div>{" "}
          <div className="border-darkGray hidden h-[243px] w-[300px] border-l border-dashed  flex-col lg:flex xl:w-[340px] ">
          <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
          ICO Execution & CEX Listing
           </p>
          
          <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
          Nov-Dec 2024</p>
         
          <ul className="list-disc  text-primary2 mt-3 w-[205px] pl-3 ml-8">
              <li className="mb-1 text-[0.85rem]   ">
              Execute the ICO launch according to the predetermined timeline and phases.              </li>
              <li className="mb-1 text-[0.85rem] ">
              Fulfill the listing requirements and comply with exchange regulations.              </li>
              
            </ul>
          </div>
        </div>
        <div className="flex mt-8"><Image
            width={1920}
            height={100}
            alt="img"
            src="/homepage/line.svg"
          /></div>
        
        <div className="mt-3 flex  items-center  justify-end  ml-auto xl:ml-48 sm:mr-auto lg:ml-32  xl:pl-[3.2rem]">
          <div className="border-darkGray h-[243px] sm:w-[300px] border-l w-[424px] border-dashed xl:w-[380px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
            Research & Planning            </p>
            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
            Nov-Dec 2023
            </p>
            <ul className="list-disc flex flex-wrap w-[380px] md:w-auto  text-primary2 mt-3 ml-2 3   pl-6">
              <li className="mb-1 text-[0.85rem]   ">
              Market analysis and identification of opportunities.              </li>
              <li className="mb-1 text-[0.85rem] ">
              Formation of a skilled team including developers, blockchain experts, marketers, and legal advisors.
              </li>
              <li className="text-[0.85rem] ">
              Investigation of legal and regulatory requirements.              </li>
            </ul>
          </div>

          
          <div className="border-darkGray hidden px-2 h-[243px] w-[300px] border-l border-dashed md:flex flex-col  xl:w-[370px] ">
          <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
          Private Sale Round            </p>
          
          <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
          April-May 2024 </p>
         
          <ul className="list-disc  text-primary2 mt-3  pl-3 ml-8">
              <li className="mb-1 text-[0.85rem]   ">
              Identify and reach out to potential investors, including institutional investors, venture capitalists, and high-net-worth individuals.              </li>
              <li className="mb-1 text-[0.85rem] ">
              Secure funding commitments from strategic investors              </li>
              
            </ul>
            
            
            </div>{" "}
          <div className="border-darkGray hidden h-[243px] w-[300px] border-l border-dashed  flex-col lg:flex xl:w-[340px] ">
          <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
          ICO Marketing Campaign           </p>
          
          <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
          Aug-Sep 2024</p>
         
          <ul className="list-disc  text-primary2 mt-3 w-[205px] pl-3 ml-8">
              <li className="mb-1 text-[0.85rem]   ">
              Ramp up marketing efforts to generate interest and awareness for the upcoming ICO.              </li>
              <li className="mb-1 text-[0.85rem] ">
              Launch targeted advertising campaigns and engage influencers in the crypto space.            </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
