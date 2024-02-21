const Card2 = ({ title, text, number }) => {
  return (
    <div>
      <div className="relative flex max-w-7xl flex-col lg:max-w-96 lg:flex-row">
        <div className="mb-4 lg:mb-0 lg:mr-auto">
          <div className="lg:h-[137px] gap-10 rounded-[20px] bg-neutral p-3 px-6">
            <p className="mt-2 font-neue-machina-bold text-[21.33px]">
              {title}
            </p>
            <p className="mt-2 text-base text-neutralLight">{text}</p>
          </div>
        </div>

        <div className="absolute right-[-10px] top-[-24px]  flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary1 text-[21.33px] lg:right-[-8px] xl:right-[-38px]">
          <p className="text-center font-neue-machina-bold text-neutral">
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
