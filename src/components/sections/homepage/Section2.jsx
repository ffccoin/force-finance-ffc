import Image from "next/image";

const Section2 = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex max-w-7xl flex-col items-center gap-y-[61px] px-5 sm:px-10">
        <div className="flex flex-col gap-y-0.5">
          <h1 className="text-center text-2xl uppercase sm:text-[37.9px] sm:leading-[42.64px]">
            Empower Your Finances with FFC COIN
          </h1>
          <span className="text-center text-sm text-neutralLight sm:text-base">
            Empowering Financial Independence and Prosperity with Force Finance
            Coin Your Gateway to a Liberated Financial Future
          </span>
        </div>
        <div className="flex flex-col gap-x-[30px] gap-y-4 md:flex-row">
          <div className="group flex w-full flex-col gap-y-[30px] rounded-[10px] bg-neutral px-[20px] py-[25px] transition duration-500 ease-in-out hover:bg-primary1 lg:px-[40px] lg:py-[50px]">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)] group-hover:bg-primary2 ">
              <Image
                src="/homepage/bitcoin-style-1.svg"
                width={37}
                height={35}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3 ">
              <h1 className="text-[21.33px] uppercase leading-6 group-hover:text-primary2 ">
                Passive Income
              </h1>
              <span className="text-neutralLight">
                Stake your FFC holdings to secure the network, validate
                transactions, and earn passive income in the form of staking
                rewards.
              </span>
            </div>
          </div>
          <div className="group flex w-full flex-col gap-y-[30px] rounded-[10px] bg-neutral px-[20px] py-[25px] transition duration-500 ease-in-out hover:bg-primary1 lg:px-[40px] lg:py-[50px]">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)] group-hover:bg-primary2 ">
              <Image
                src="/homepage/bitcoin-style-2.svg"
                width={37}
                height={35}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-[21.33px]  uppercase leading-6 group-hover:text-primary2 ">
                Yield Farming
              </h1>
              <span className="text-neutralLight">
                Maximize your returns by participating in yield farming
                protocols supported by Force Finance Coin.
              </span>
            </div>
          </div>
          <div className="group flex w-full flex-col gap-y-[30px] rounded-[10px] bg-neutral px-[20px] py-[25px] transition duration-500 ease-in-out hover:bg-primary1 lg:px-[40px] lg:py-[50px]">
            <div className="grid h-[80px] w-[80px] place-items-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.00)_21.35%,rgba(203,251,69,0.08)_100%)] group-hover:bg-primary2 ">
              <Image
                src="/homepage/bitcoin-style-3.svg"
                width={37}
                height={35}
                alt="img"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <h1 className="text-[21.33px] uppercase leading-6 group-hover:text-primary2 ">
                Decentralized Loans
              </h1>
              <span className="text-neutralLight">
                Seamlessly borrow or lend funds directly through Force Finance
                Coin, eliminating the need for intermediaries.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
