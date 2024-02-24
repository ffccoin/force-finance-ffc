import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Calculator from "./Calculator";

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
    <div className="bg-primary px-4 mt-16 grid h-auto items-center justify-center rounded-lg">
      <div className="flex max-w-7xl flex-wrap gap-28 px-4 sm:px-8 md:px-12 lg:flex-row xl:gap-96 ">
        <div className="flex  flex-col lg:ml-auto lg:w-[24.438rem]">
          <h3 className="text-wrap font-neue-machina-bold text-xl md:text-3xl	 ">
            TRY CRYPTO COIN CONVERTER
          </h3>
          <p className=" mt-8 text-wrap text-neutralLight">
            Instantly convert between your local currency and over 40
            cryptocurrencies to capitalize on price movements.
          </p>
          <div className="mt-8 w-[145px]">
            <Button className=" " width="fit" title="Learn more" size="small" />
          </div>
        </div>
        <Calculator coins={data} />
      </div>
      <div className="mt-28 flex max-w-7xl flex-wrap justify-between  px-12 md:flex-row ">
        <div className="flex  flex-col md:max-w-[27.438rem] ">
          <h3 className="text-wrap font-neue-machina-bold text-xl md:text-3xl	 ">
            HOW TO GET STARTED
          </h3>
          <p className=" mt-8 text-wrap text-neutralLight">
            Embarking on your cryptocurrency investment journey doesn't have to
            be daunting. Follow these simple steps to get started:
          </p>
        </div>
        <div className="flex w-full flex-wrap  justify-center md:w-[12.438rem] lg:justify-end ">
          <div className="mt-8 w-full md:w-[200px] ">
            <SecondaryButton
              className="mt-auto  w-full "
              title="Get Started"
              size="small"
              icon={
                <Image
                  src="/homepage/arrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
