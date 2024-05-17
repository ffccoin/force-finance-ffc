import Card2 from "@/components/elements/Card2";

const Section9 = () => {
  return (
    <div className="bg-primary mt-16 grid h-auto items-center justify-center rounded-lg px-8">
      <div className="mt-24 flex max-w-6xl flex-col justify-stretch gap-4 lg:flex-row lg:gap-10 ">
        <Card2
          title={"Launch FFC Coin Dapp"}
          text={
            "Sign in or create an account to access the FFC Coin DApp browser."
          }
          number={"01"}
          delay={0}
        />
        <Card2
          title={"Create a new wallet"}
          text={
            "Connect your existing MetaMask or Trust Wallet, or set up a new wallet."
          }
          number={"02"}
          delay={0.5}
        />
        <Card2
          title={"Deposit Crypto or Fiat "}
          text={
            "To start earning with FFC Coin, deposit either fiat currency or cryptocurrency into your account."
          }
          number={"03"}
          delay={1}
        />
      </div>
    </div>
  );
};

export default Section9;
