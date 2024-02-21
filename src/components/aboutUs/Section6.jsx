import Person from "./Person";
import Review from "./Review";

export default function Section6() {
  return (
    <div>
      <div className="mx-auto mt-[49px] flex w-screen max-w-[1235px] flex-col items-center justify-start gap-8 md:px-5">
        <div className="flex flex-col items-center justify-start gap-[15px]">
          <p className="text-center font-neue-machina-bold text-[37.9px] uppercase text-white sm:text-[33.9px]  md:text-[35.9px]">
            Meet Our team
          </p>
          <p className=" w-full max-w-[630px] text-center font-apfel-grotezk text-base leading-[24.00px] text-[#898990] ">
            Get to know the passionate individuals behind FFC Coin, dedicated to
            pushing the boundaries of innovation and excellence in the world of
            decentralized finance.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-20">
          <Person
            name={"Jonathan Marquis"}
            position={"Founder & Ceo"}
            image={"pic1"}
          />
          <Person
            name={"Habib Rehman"}
            position={"Blockchain  Developer"}
            image={"pic2"}
          />
          <Person
            name={"Dennis Contreras"}
            position={"Business Development"}
            image={"pic4"}
          />
          <Person
            name={"Lamar jensen"}
            position={"Investor & Partner"}
            image={"pic3"}
          />
        </div>
        <p className="mt-14 text-left font-neue-machina-bold text-[38px] uppercase text-white  lg:ml-[-600px]">
          As seen in the press
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Review
            heading={"5 Facts to Know about FFC Coin"}
            data={
              "Unveil the essential truths about FFC Coin: cutting-edge technology, multi-chain integration, financial empowerment, community focus, and transparent security."
            }
            image={"pic5"}
          />
          <Review
            heading={"Best Crypto currency to invest"}
            data={
              "Must when you thought you knew all about cryptocurrencies, markets, and finances, discover new avenues for profit with our exceptional platform and expert guidance."
            }
            image={"pic6"}
          />
          <Review
            heading={"Sercurity over money"}
            data={
              "Cryptocurrency doesn’t just bring you revenue, it’s also a fun, interesting and exciting occupation. Not to mention: topic for discussion that allows you to meet interesting people."
            }
            image={"pic7"}
          />
        </div>
      </div>
    </div>
  );
}
