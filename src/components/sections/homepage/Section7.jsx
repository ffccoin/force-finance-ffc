"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section7 = () => {
  const leftToRightVariants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const rightToLeftVariants = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      id="Section7"
      className=" mt-[-2px] grid select-none  place-items-center bg-primary1 "
    >
      <div className=" flex max-w-[90rem]  flex-col items-center px-1  pl-2">
        <motion.div
          className="mt-[3.375rem] flex flex-col text-neutral"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <p className="text-center font-apfel-grotezk  text-base font-normal leading-6 tracking-wider text-darkGreen">
            ROADMAP
          </p>
          <h3 className="mt-[1.6rem] text-wrap  text-center  font-neue-machina-bold text-xl leading-10 tracking-normal sm:text-4xl">
            THE EVOLUTION OF FFC COIN
          </h3>
        </motion.div>
        <div className="  list-item text-primary1 md:hidden  ">
          {" "}
          <Slider
            dots={false}
            className="h-[253px] max-w-[300px] border-l border-dashed border-darkGray "
            infinite={true}
            speed={500}
            arrows={false}
            draggable={true}
            autoplay={true}
            autoplaySpeed={5000}
          >
            <div className="h-[253px] max-w-[424px]">
              <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
                Design & Development
              </p>
              <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
                Jan-Feb 2024
              </p>
              <ul className=" 3 ml-2 mt-3 flex  max-w-[380px] list-disc flex-wrap pl-6 text-primary2  ">
                <li className="mb-1 text-[0.85rem]   ">
                  Development of core blockchain infrastructure.
                </li>
                <li className="mb-1 text-[0.85rem] ">
                  Design and implementation of smart contracts for token
                  creation, transactions, staking, and yield farming.
                </li>
                <li className="text-[0.85rem] ">
                  Creation of user-friendly wallets and interfaces.
                </li>
              </ul>
            </div>

            <div className=" max-w-[424px]flex-col h-[253px]  px-2  ">
              <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
                Token Allocation & Distribution{" "}
              </p>

              <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
                June-July-2024{" "}
              </p>

              <ul className="ml-6  mt-3 max-w-[380px]  list-disc pl-3 text-primary2">
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
            <div className=" h-[243px]  max-w-[424px] flex-col ">
              <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
                ICO Execution & CEX Listing
              </p>

              <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
                Nov-Dec 2024
              </p>

              <ul className="ml-6  mt-3  list-disc pl-3 text-primary2">
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
          </Slider>
        </div>
        <motion.div
          className="ml-auto mt-[4.98rem] hidden items-center justify-end sm:mr-auto md:flex lg:ml-32 xl:ml-48 xl:pl-36"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <div className="h-[243px] max-w-[424px] border-l border-dashed border-darkGray sm:max-w-[300px] xl:max-w-[380px] ">
            <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
              Design & Development
            </p>
            <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
              Jan-Feb 2024
            </p>
            <ul className="md:max-w-auto 3 ml-2 mt-3 flex  max-w-[380px] list-disc flex-wrap pl-6 text-primary2  xl:max-w-[315px]">
              <li className="mb-1 text-[0.85rem]   ">
                Development of core blockchain infrastructure.
              </li>
              <li className="mb-1 text-[0.85rem] ">
                Design and implementation of smart contracts for token creation,
                transactions, staking, and yield farming.
              </li>
              <li className="text-[0.85rem] ">
                Creation of user-friendly wallets and interfaces.
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

            <ul className="ml-8  mt-3  list-disc pl-3 text-primary2">
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
        </motion.div>
        <motion.div
          className="mt-8 flex"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <Image width={1920} height={100} alt="img" src="/homepage/line.svg" />
        </motion.div>

        <div className="  list-item px-2 text-primary1 md:hidden  ">
          <Slider
            dots={false}
            className="h-auto max-w-[300px] border-l border-dashed border-darkGray "
            infinite={true}
            speed={500}
            arrows={false}
            draggable={true}
            autoplay={true}
            autoplaySpeed={5000}
          >
            <div className="h-auto max-w-[300px]  ">
              <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
                Research & Planning{" "}
              </p>
              <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
                Nov-Dec 2023
              </p>
              <ul className="md:max-w-auto 3 ml-2 mt-3 flex  max-w-[380px] list-disc flex-wrap pl-6   text-primary2">
                <li className="mb-1 text-wrap text-[0.85rem]">
                  Market analysis and identification of opportunities.{" "}
                </li>
                <li className="mb-1 text-wrap text-[0.85rem]">
                  Formation of a skilled team including developers, blockchain
                  experts, marketers, and legal advisors.
                </li>
                <li className="text-wrap text-[0.85rem]">
                  Investigation of legal and regulatory requirements.{" "}
                </li>
              </ul>
            </div>

            <div className=" h-auto max-w-[300px] flex-col  px-2  ">
              <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
                Private Sale Round{" "}
              </p>

              <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
                April-May 2024{" "}
              </p>

              <ul className="ml-8  mt-3 list-disc  pl-3 text-primary2">
                <li className="mb-1 text-wrap  text-[0.85rem] ">
                  Identify and reach out to potential investors, including
                  institutional investors, venture capitalists, and
                  high-net-worth individuals.{" "}
                </li>
                <li className="mb-1 text-wrap text-[0.85rem] ">
                  Secure funding commitments from strategic investors.{" "}
                </li>
              </ul>
            </div>
            <div className="h-[267px] max-w-[424px] flex-col lg:flex xl:max-w-[340px] ">
              <p className="ml-6 mt-[2.622rem] font-neue-machina-bold text-lg leading-6   text-primary2 ">
                ICO Marketing Campaign{" "}
              </p>

              <p className="ml-6 text-left font-apfel-grotezk text-base font-normal leading-6 tracking-normal text-darkGreen">
                Aug-Sep 2024
              </p>

              <ul className="ml-8  mt-3 list-disc pl-2 text-primary2">
                <li className="mb-1 text-wrap  text-[0.85rem] ">
                  Ramp up marketing efforts to generate interest and awareness
                  for the upcoming ICO.{" "}
                </li>
                <li className="mb-1 text-wrap text-[0.85rem] ">
                  Launch targeted advertising campaigns and engage influencers
                  in the crypto space.{" "}
                </li>
              </ul>
            </div>
          </Slider>
        </div>

        <motion.div
          className="ml-auto mt-3 hidden items-center justify-end sm:mr-auto md:flex lg:ml-32 xl:ml-48 xl:pl-[3.2rem]"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <div className="h-[267px] max-w-[424px] border-l border-dashed border-darkGray sm:max-w-[300px] xl:max-w-[380px] ">
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
                Secure funding commitments from strategic investors.{" "}
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

            <ul className="ml-8  mt-3 list-disc pl-3 text-primary2">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Section7;
