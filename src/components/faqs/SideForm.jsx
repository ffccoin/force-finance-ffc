import Button from "../buttons/Button";

export default function ContactForm() {
  return (
    <div className=" flex items-center justify-center">
      <div className="mt-4 items-center justify-center rounded-2xl px-6 py-10">
        <form className="mx-auto flex flex-col items-center justify-center space-y-2">
          <input
            name="name"
            className="mb-4 h-[60px] w-[320px] lg:w-[413px]  rounded-md bg-neutral pl-4 font-apfel-grotezk text-white "
            placeholder="Name*"
            type="text"
          />
          <input
            name="email"
            className="mb-4 h-[60px] w-[320px] lg:w-[413px] rounded-md  bg-neutral pl-4 font-apfel-grotezk text-white"
            placeholder="Email*"
            type="email"
          />
          <div className="py-4">
            <textarea
              name="message"
              className=" h-[175px] w-[320px] lg:w-[413px] rounded-md bg-neutral  pl-4 pt-4 font-apfel-grotezk text-white"
              placeholder="Message..."
            />
          </div>
          <button
            className={`grid place-items-center h-[55px] w-[320px] lg:w-[413px] bg-primary1 font-neue-machina-bold leading-6 text-neutralDark enabled:hover:bg-darkGreen enabled:hover:text-neutralLighter
      `}
          >
            <div className="flex gap-x-2.5">Send a Message</div>
          </button>
        </form>
      </div>
    </div>
  );
}
