export default function TextBox({ heading, text }) {
  return (
    <div>
      <div className="mx-4 mt-8 flex flex-col items-start justify-center">
        <p className="mb-8  font-neue-machina-bold text-[24px] text-white">
          {heading}
        </p>
        <p className="font-apfel-grotezk text-[16px] text-[#898990]">{text}</p>
      </div>
    </div>
  );
}
