import Button from "@/components/buttons/Button";

const Section5 = () => {
  const tokenInfo = [
    { label: "Token name:", value: "FORCE FINANCE COIN" },
    { label: "Ticker Symbol:", value: "FFC" },
    { label: "Starting Price:", value: "FFC for USD 0.00007" },
    { label: "Minimum Purchase:", value: "0.1 ETH" },
    { label: "Token Type:", value: "ERC-20" },
    { label: "Max Supply:", value: "5,000,000,000" },
    { label: "Smart Contract:", value: "0xAb5801a7D398351b8bE11C439C9B" },
  ];

  return (
    <div className="grid place-items-center items-center justify-center">
      <div className="mt-14 flex flex-col gap-14 px-4 lg:max-w-7xl  lg:flex-row lg:gap-72 xl:px-0 ">
        <div className="">
          <p className="text-left font-apfel-grotezk text-base font-normal leading-6 tracking-wider text-primary1">
            ABOUT FFC COIN
          </p>
          <h3 className="mt-6 text-left font-neue-machina-bold text-3xl font-bold leading-10 tracking-normal">
            FORCE FINCE COIN (FFC)
          </h3>
          <p className="mt-6 whitespace-break-spaces text-left  font-apfel-grotezk text-base font-normal leading-6 lg:w-[28.293rem]">
            Force Finance offers users a gateway to explore the vast
            opportunities present in the DeFi landscape.
          </p>

          <p className="mt-[56.8px] flex-wrap whitespace-break-spaces text-left font-apfel-grotezk  text-base leading-6 text-neutralLight lg:w-[28.293rem]">
            Force Finance Coin (FFC) is the native token of the Force Finance
            platform, facilitating various functions such as staking,
            governance, and transactions. With a focus on utility and community
            involvement, FFC empowers users to participate in the decentralized
            finance landscape with ease and flexibility
          </p>
        </div>
        <div className="mt-8 flex w-auto flex-col flex-wrap justify-end">
          {tokenInfo.map((info, index) => (
            <div key={index} className="mb-9 flex flex-wrap gap-x-6">
              <p className="font-neue-machina-bold text-base font-extrabold  leading-6">
                {info.label}
              </p>
              <p className=" font-apfel-grotezk  text-base font-normal leading-6 text-neutralLight">
                {info.value}
              </p>
            </div>
          ))}
          <div className="mt-auto w-full md:w-fit">
            <Button title="View on EthScan" size="small" width="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
