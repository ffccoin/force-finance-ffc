import Button from "../buttons/Button";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (name && email && isChecked) {
      // Perform form submission logic here

      // Set formSubmitted to true to display confirmation message
      setFormSubmitted(true);
    } else {
      // Display an error or required fields message
      alert("Please fill in all required fields.");
    }
  };

  const options = [
    "Technical Support",
    "Partnership Opportunities",
    "Investment Inquiries",
    "Regulatory and Community Engagement",
    "General Inquiry",
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mb-20 flex items-center justify-center bg-[url('/contactpage/background.svg')] bg-cover bg-center sm:bg-contain md:bg-cover lg:bg-contain xl:bg-cover">
      <div className="mt-4 flex items-center justify-center rounded-3xl border-[1px] border-solid border-[#FFFFFF66]  bg-[#FAFAFA2B]  px-6 py-10 backdrop-blur-[20px]">
        <form
          className="mx-auto flex w-full max-w-[800px] flex-col items-center space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col md:flex-row md:space-x-4">
            <input
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="mb-4 h-[60px] w-full rounded-md bg-neutral pl-4 font-apfel-grotezk text-white outline-none md:mb-0 md:w-[300px]"
              placeholder="Name*"
              type="text"
            />
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 h-[60px] w-full rounded-md bg-neutral pl-4 font-apfel-grotezk text-white outline-none md:w-[300px]"
              placeholder="Email*"
              required
              type="email"
              value={email}
            />
          </div>
          <Menu
            as="div"
            className="relative  inline-block pb-4 text-left outline-none"
          >
            <div className="">
              <Menu.Button className="inline-flex  h-[60px] w-full items-center justify-between rounded-md bg-neutral pl-4  pr-6 font-apfel-grotezk text-sm text-[#9ca3af] sm:text-base md:w-[625px] md:px-4 ">
                <p className="min-w-[12rem] max-w-[13rem]	 select-none text-left text-xs sm:min-w-[27rem] sm:max-w-[19rem] sm:text-base  md:min-w-24 ">
                  {selectedOption || "Your inquiry about"}
                </p>
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="sm:[300px]  absolute right-0 z-10 mt-2 w-[226px] origin-top-right rounded-md bg-neutral outline-none md:w-[625px]">
                <div className="py-1">
                  {options.map((option, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <p
                          onClick={() => handleOptionSelect(option)}
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block select-none rounded-md px-4 py-2	 font-apfel-grotezk text-sm",
                          )}
                        >
                          {option}
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <textarea
            name="message"
            className="mb-4 h-[175px] w-full rounded-md bg-neutral pl-4 pt-4 font-apfel-grotezk text-white outline-none md:w-[625px]"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="w-full md:w-[625px]">
            <div className="flex items-center justify-start">
              <input
                id="link-checkbox"
                type="checkbox"
                required
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                value=""
                className="ml-4 border outline-none "
              />
              <label
                for="link-checkbox"
                className="ms-5 select-none	 font-apfel-grotezk text-[16px] font-[400] text-white"
              >
                I accept terms & conditions
              </label>{" "}
            </div>
          </div>

          <Button
            size="small"
            type="submit"
            title="Send Message"
            className="h-[55px] w-full md:w-[170px]"
          />
          {formSubmitted && (
            <div className="mr-auto flex gap-1 pl-[0.45rem]">
              {" "}
              <Image
                src="/contactpage/tick.svg"
                width={16}
                height={3}
                alt="img"
              />
              <p className="select-none text-wrap	 text-neutralLight">
                The form was sent successfully!
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
