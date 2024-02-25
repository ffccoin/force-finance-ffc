
import SecondaryButton from "@/components/buttons/SecondaryButton";

export default function ServicesHeader() {
  return (
    <div className="mt-14 flex flex-col content-center items-center justify-center">
      <p className="font-neue-machina-bold upercase lg:text-5xl text-[35px] text-center font-[800px] lg:leading-[76px] text-neutralLighter">
      FFC COIN SERVICES
      </p>
      <div className=" mt-10 md:mx-0 items-center">
      <SecondaryButton title="Lunch Dapp" size="small" color="neutralDarker" className="bg-primary1 border-none text-neutralDarker" />
      </div>
      
    </div>
  );
}
