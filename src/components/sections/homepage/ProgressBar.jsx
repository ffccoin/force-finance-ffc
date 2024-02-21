const ProgressBar = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between">
        <h3 className="px-3 text-sm sm:text-base sm:leading-[18px]">$5M</h3>
        <h3 className="px-1 text-sm sm:text-base sm:leading-[18px]">$55M</h3>
      </div>
      <div className="h-[10px] w-full rounded-[5px] bg-[#3F4332] sm:h-[17px]">
        <div className="h-full w-[80%] rounded-[5px] bg-primary1"></div>
      </div>
      <div className="flex justify-between py-1 md:py-1.5">
        <span className="text-xs text-neutralLight sm:text-sm sm:leading-6">
          Softcap in 1069 days
        </span>
        <span className="text-xs text-neutralLight sm:text-sm sm:leading-6">
          Hardcap
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
