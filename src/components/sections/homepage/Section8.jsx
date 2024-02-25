import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Calculator from "./Calculator";
import SubSection8_1 from "./sub-sections-8/SubSection8_1";
import SubSection8_2 from "./sub-sections-8/SubSection8_2";

const getData = async () => {
  // Define the URL and query parameters
  const url = new URL("https://api.coingecko.com/api/v3/coins/markets");
  const params = {
    ids: "bitcoin,ethereum,solana,cardano,terra-luna,polkadot",
    vs_currency: "usd", // Specify the currency
  };
  url.search = new URLSearchParams(params).toString();

  // Fetch the data
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const Section8 = async () => {
  const data = await getData();
  return (
    <div className="bg-primary mt-16 grid h-auto items-center justify-center rounded-lg px-4">
      <div className="flex max-w-7xl flex-wrap gap-28 px-4 sm:px-8 md:px-12 lg:flex-row xl:gap-96 ">
        <SubSection8_1 />
        <Calculator coins={data} />
      </div>
      <SubSection8_2 />
    </div>
  );
};

export default Section8;
