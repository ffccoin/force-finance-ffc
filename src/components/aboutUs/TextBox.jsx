export default function TextBox({ heading, text }) {
  return (
    <div>
      <div className="sm:mx-4 mt-8 flex flex-col items-start justify-center">
        <p className="mb-9 uppercase  font-neue-machina-bold text-[24px] text-white">
          {heading}
        </p>
        <p className="font-apfel-grotezk text-[16px] text-[#898990]">{text}</p>
      </div>
    </div>
  );
}
