import SecondaryButton from "@/components/buttons/SecondaryButton";
import BouncingParticlesAnimation from "../animations/BouncingParticlesAnimation";

export default function ServicesHeader() {
  return (
    <div className="relative flex flex-col content-center items-center justify-center">
      {/* <BouncingParticlesAnimation /> */}
      <p className="upercase text-center font-neue-machina-bold text-[35px] font-[800px] uppercase text-neutralLighter lg:text-5xl lg:leading-[76px]">
        FFC COIN Financial SERVICES
      </p>
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
