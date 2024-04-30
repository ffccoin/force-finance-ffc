import { formatCurrency, formatNumber } from "@/utils/formatters";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await axios.get("https://www.forcefinancecoin.com/api/tokens");
  if (!res.status === 200) {
    return [];
  }
  return res.data;
};

const MarketTrend = async () => {
  const data = await getData();

  return (
    <div className="grid place-items-center py-28">
      <div className="flex w-full max-w-7xl flex-col items-center gap-y-7 px-5 sm:px-10">
        <div className="flex w-full justify-between px-6">
          <h1 className="text-[37.9px] leading-[42.64px]">MARKET TREND</h1>
          <div className="flex items-center text-primary1">
            <button>
              <Link href="https://app.forcefinancecoin.com/tokens">
                <h4>View more markets</h4>
              </Link>
            </button>
            {chevronRight}
          </div>
        </div>
        <div className="relative w-[80vw] overflow-auto shadow-md sm:rounded-lg xl:w-full">
          <table className="w-full text-left rtl:text-right dark:text-gray-400">
            <thead className="h-[58px] bg-[#1E1E1F] text-white">
              <tr>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  #
                </th>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  Last Price
                </th>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  24th Change
                </th>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  Chart
                </th>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  Market Cap
                </th>
                <th scope="col" className="px-6 py-3 font-neue-machina-bold">
                  Trade
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((coin, index) => (
                <tr className="h-[58px] even:bg-[#1E1E1F]" key={index}>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-neutralLight"
                  >
                    {index + 1}
                  </th>
                  <td className="flex items-center gap-x-3.5 px-6 py-4 text-neutralLight">
                    <Link
                      href={`https://app.forcefinancecoin.com/tokens/${coin.id}`}
                    >
                      <Image src={coin.logoUrl} width={36} height={36} />
                    </Link>
                    <Link
                      href={`https://app.forcefinancecoin.com/tokens/${coin.id}`}
                    >
                      {coin.name}{" "}
                      <span className="uppercase">{coin.symbol}</span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-neutralLight">
                    {formatCurrency(coin.quote.USD.price)}
                  </td>
                  <td className="px-6 text-white">
                    <div className="flex items-center gap-x-1">
                      {coin.quote.USD.percent_change_24h > 0
                        ? arrowUp
                        : arrowDown}
                      <span>
                        {formatNumber(coin.quote.USD.percent_change_24h)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      src={
                        coin.quote.USD.percent_change_24h > 0
                          ? "/homepage/yellow-chart.svg"
                          : "/homepage/red-chart.svg"
                      }
                      width={67}
                      height={20}
                    />
                  </td>
                  <td className="px-6 py-4">
                    {formatCurrency(coin.quote.USD.market_cap)}
                  </td>
                  <td className="px-6 py-4">
                    <Link href="https://app.forcefinancecoin.com">
                      <button className="grid h-[34px] w-[92px] place-items-center rounded-[10px] border border-primary1">
                        <h4 className="text-white">Buy</h4>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className="mx-6 self-start">
          <Link href="https://app.forcefinancecoin.com">
            <span className="font-neue-machina-bold text-primary1 underline">
              Sign up
            </span>{" "}
          </Link>
          now to build your own portfolio for free!
        </h1>
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
