import SecondaryButton from "@/components/buttons/SecondaryButton";

export default function ServicesHeader() {
  return (
    <div className=" flex flex-col content-center items-center justify-center">
      <p className="upercase text-center uppercase font-neue-machina-bold text-[35px] font-[800px] text-neutralLighter lg:text-5xl lg:leading-[76px]">
      FFC COIN Financial SERVICES      </p>
      <div className=" mt-10 items-center md:mx-0">
        <SecondaryButton
          title="Lunch Dapp"
          size="small"
          color="neutralDarker"
          className="border-none bg-primary1 text-neutralDarker"
        />
      </div>
    </div>
  );
}
