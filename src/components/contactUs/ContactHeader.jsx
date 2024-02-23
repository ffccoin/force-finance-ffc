

export default function ContactHeader() {
  return (
    <div className="mt-14 px-4 flex flex-col content-center items-center justify-center">
      <p className="font-neue-machina-bold text-[28px] md:text-[56px] font-[800px] leading-[75.75px] text-neutralLighter">
        CONTACT US
      </p>
      <p className="w-auto mx-4 md:mx-0 md:w-[625px] text-center font-apfel-grotezk text-[16px] font-[400px] leading-[24px] text-neutralLight">
        Reach Out to Us: Whether you have questions, feedback, or partnership
        inquiries, we're here to assist you. Contact FFC Coin today and let's
        explore the future of finance together
      </p>
      <div className="flex my-16">
        <div className="cursor-pointer">
          <img
            src={"/contactpage/telegram.svg"}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="ml-4 cursor-pointer">
          <img
            src={"/contactpage/twitter.svg"}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="ml-4 cursor-pointer">
          <img
            src={"/contactpage/facebook.svg"}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="ml-4 cursor-pointer">
          <img
            src={"/contactpage/youtube.svg"}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="ml-4 cursor-pointer">
          <img
            src={"/contactpage/discord.svg"}
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
