export default function Thumbnail({ text, val }) {
  return (
    <div className="flex-wrap">
      <div className="m-4 mx-4 flex h-full w-[300px] items-center justify-between rounded-2xl bg-white bg-opacity-5 px-10 py-10 md:max-w-[455px]">
        <p className="my-2 font-apfel-grotezk w-[300px] text-[16px] text-[#898990]">
          {text}
        </p>
        <p className="mb-3 mt-1 font-neue-machina-bold text-[38px]  text-white">
          {val}
        </p>
      </div>
    </div>
  );
}
