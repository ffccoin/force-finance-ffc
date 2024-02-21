import Image from "next/image";
import Card2 from "@/components/elements/Card2";

const Section9 = () => {
  return (
    <div className="bg-primary mt-16 grid h-auto items-center justify-center  px-4  rounded-lg">
      <div className="mt-24 flex max-w-6xl justify-stretch lg:gap-10 gap-4 flex-col lg:flex-row ">
        <Card2
          title={"Lunch FFC Coin Dapp"}
          text={"Sign in or create an account to access the FFC Coin DApp browser."}
          number={"01"}
        />
        <Card2
          title={"Create a new wallet"}
          text={"Connect your existing MetaMask or Trust Wallet, or set up a new wallet."}
          number={"02"}
        />
        <Card2
          title={"Deposit Crypto or Fiat "}
          text={"To start earning with FFC Coin, deposit either fiat currency or cryptocurrency into your account."}
          number={"03"}
        />
      </div>
    </div>
  );
};

export default Section9;
