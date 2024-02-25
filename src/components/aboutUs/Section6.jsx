import Person from "./Person";

export default function Section6() {
  return (
    <div>
      <div className="mx-auto mt-[49px] px-8 flex w-screen max-w-[1235px] flex-col items-center justify-start gap-8 md:px-5">
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
      </div>
    </div>
  );
}
