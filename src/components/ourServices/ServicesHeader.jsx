import SecondaryButton from "@/components/buttons/SecondaryButton";
import Link from "next/link";

export default function ServicesHeader() {
  return (
    <div className="relative z-10 flex flex-col content-center items-center justify-center">
      <p className="text-center font-neue-machina-bold text-[35px] font-[800px] uppercase text-neutralLighter lg:text-5xl lg:leading-[76px]">
        FFC COIN Financial SERVICES
      </p>
      <div className=" mt-10 items-center md:mx-0">
        <Link href="https://app.forcefinancecoin.com">
          <SecondaryButton
            title="Lunch Dapp"
            size="small"
            color="neutralDarker"
            className="border-none bg-primary1 text-neutralDarker"
          />
        </Link>
      </div>
    </div>
  );
}
