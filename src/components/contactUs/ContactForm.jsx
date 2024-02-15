import Button from "../buttons/Button";

export default function ContactForm() {
  return (
    <div className=" bg-[url('/contactpage/background.svg')] mb-20 flex justify-center items-center bg-cover bg-center sm:bg-contain md:bg-cover lg:bg-contain xl:bg-cover">
      <div className="mt-4 bg-[#FFFFFF] py-10 rounded-2xl px-6 justify-center items-center bg-opacity-20">
        <form className="mx-auto flex justify-center items-center flex-col space-y-2">
          <div className="flex space-x-2">
            <input
              name="name"
              className="h-[60px] mb-4 mr-4 w-[300px] border-2 border-primary1 rounded-md text-white bg-neutral pl-4 font-apfel-grotezk"
              placeholder="Name*"
              type="text"
            />
            <input
              name="email"
              className="h-[60px] mb-4 w-[300px] rounded-md text-white bg-neutral border-2 border-primary1 pl-4 font-apfel-grotezk"
              placeholder="Email*"
              type="email"
            />
          </div>
          <textarea
            name="message"
            className="h-[175px] w-[625px] rounded-md text-white bg-neutral pt-4 pl-4 font-apfel-grotezk border-2 border-primary1"
            placeholder="Message..."
          />

          <Button
            size="small"
            title="Send Message"
            className="w-[170px] h-[55px]"
          />
        </form>
      </div>
    </div>
  );
}
