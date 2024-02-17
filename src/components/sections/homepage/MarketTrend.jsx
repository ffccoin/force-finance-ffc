import Image from "next/image";
import React from "react";

const MarketTrend = () => {
  return (
    <div className="grid place-items-center py-28">
      <div className="flex w-full max-w-7xl flex-col items-center gap-y-7 px-5 sm:px-10">
        <div className="flex justify-between">
          <h1 className="text-[37.9px] leading-[42.64px]">MARKET TREND</h1>
          <div className="flex items-center text-primary1">
            <h4>View more markets</h4>
            {chevronRight}
          </div>
        </div>
        <div class="relative w-[84vw] overflow-auto shadow-md sm:w-full sm:rounded-lg">
          <table class="w-full text-left rtl:text-right dark:text-gray-400">
            <thead class="h-[58px] bg-tableRowColor text-white">
              <tr>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  #
                </th>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  Last Price
                </th>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  24th Change
                </th>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  Chart
                </th>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  Market Cap
                </th>
                <th scope="col" class="px-6 py-3 font-neue-machina-bold">
                  Trade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[58px] even:bg-tableRowColor">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-neutralLight"
                >
                  1
                </th>
                <td class="flex items-center gap-x-3.5 px-6 py-4 text-neutralLight">
                  <Image src="/icons/bitcoin.svg" width={36} height={36} />
                  <span>Bitcoin BTC</span>
                </td>
                <td class="px-6 py-4 text-neutralLight">$38513.19</td>
                <td class="px-6 text-white">
                  <div className="flex items-center gap-x-1">
                    {arrowDown}
                    <span>-1.43%</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <Image src="/homepage/red-chart.svg" width={67} height={20} />
                </td>
                <td class="px-6 py-4">$773,816M</td>
                <td class="px-6 py-4">
                  <button className="grid h-[34px] w-[92px] place-items-center rounded-[10px] border border-primary1">
                    <h4 className="text-white">Buy</h4>
                  </button>
                </td>
              </tr>
              <tr class="h-[58px] even:bg-tableRowColor">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-neutralLight"
                >
                  2
                </th>
                <td class="flex items-center gap-x-3.5 px-6 py-4 text-neutralLight">
                  <Image src="/icons/ethereum.svg" width={36} height={36} />
                  <span>Ethereum ETH</span>
                </td>
                <td class="px-6 py-4 text-neutralLight">$2755</td>
                <td class="px-6 text-white">
                  <div className="flex items-center gap-x-1">
                    {arrowUp}
                    <span>+4.33%</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <Image
                    src="/homepage/yellow-chart.svg"
                    width={67}
                    height={20}
                  />
                </td>
                <td class="px-6 py-4">$330,499M</td>
                <td class="px-6 py-4">
                  <button className="grid h-[34px] w-[92px] place-items-center rounded-[10px] border border-primary1">
                    <h4 className="text-white">Buy</h4>
                  </button>
                </td>
              </tr>
              <tr class="h-[58px] even:bg-tableRowColor">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-neutralLight"
                >
                  3
                </th>
                <td class="flex items-center gap-x-3.5 px-6 py-4 text-neutralLight">
                  <Image src="/icons/cardano.svg" width={36} height={36} />
                  <span>Cardano ADC</span>
                </td>
                <td class="px-6 py-4 text-neutralLight">$0.844</td>
                <td class="px-6 text-white">
                  <div className="flex items-center gap-x-1">
                    {arrowUp}
                    <span>+5.63%</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <Image
                    src="/homepage/yellow-chart.svg"
                    width={67}
                    height={20}
                  />
                </td>
                <td class="px-6 py-4">$28,443M</td>
                <td class="px-6 py-4">
                  <button className="grid h-[34px] w-[92px] place-items-center rounded-[10px] border border-primary1">
                    <h4 className="text-white">Buy</h4>
                  </button>
                </td>
              </tr>
              <tr class="h-[58px] even:bg-tableRowColor">
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-neutralLight"
                >
                  4
                </th>
                <td class="flex items-center gap-x-3.5 px-6 py-4 text-neutralLight">
                  <Image src="/icons/solana.svg" width={36} height={36} />
                  <span>Solana SOL</span>
                </td>
                <td class="px-6 py-4 text-neutralLight">$87.08</td>
                <td class="px-6 text-white">
                  <div className="flex items-center gap-x-1">
                    {arrowUp}
                    <span>+5.16%</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <Image
                    src="/homepage/yellow-chart.svg"
                    width={67}
                    height={20}
                  />
                </td>
                <td class="px-6 py-4">$27,888.67M</td>
                <td class="px-6 py-4">
                  <button className="grid h-[34px] w-[92px] place-items-center rounded-[10px] border border-primary1">
                    <h4 className="text-white">Buy</h4>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>
          <span className="font-neue-machina-bold text-primary1 underline">
            Sign up
          </span>{" "}
          now to build your own portfolio for free!
        </h5>
      </div>
    </div>
  );
};

const chevronRight = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3L11 8L6 13"
      stroke="#CBFB45"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const arrowDown = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12L5.88675 7H0.113249L3 12ZM2.5 0L2.5 7.5H3.5L3.5 0L2.5 0Z"
      fill="#FF4500"
    />
  </svg>
);

const arrowUp = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 0L0.113249 5H5.88675L3 0ZM3.5 12L3.5 4.5H2.5L2.5 12H3.5Z"
      fill="#CBFB45"
    />
  </svg>
);

export default MarketTrend;
