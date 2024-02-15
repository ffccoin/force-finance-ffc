import Button from "../buttons/Button";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const [checked, setChecked] = useState(0);
  return (
    <div className=" mb-20 flex items-center justify-center bg-[url('/contactpage/background.svg')] bg-cover bg-center sm:bg-contain md:bg-cover lg:bg-contain xl:bg-cover">
      <div className="mt-4 items-center justify-center rounded-2xl bg-[#FFFFFF] bg-opacity-20 px-6 py-10">
        <form className="mx-auto flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              name="name"
              className="mb-6 h-[60px] w-[300px] rounded-md border-2 border-primary1 bg-neutral pl-4 font-apfel-grotezk text-white md:mb-4 md:mr-4"
              placeholder="Name*"
              type="text"
            />
            <input
              name="email"
              className="mb-4 h-[60px] w-[300px] rounded-md border-2 border-primary1 bg-neutral pl-4 font-apfel-grotezk text-white"
              placeholder="Email*"
              type="email"
            />
          </div>

          <Menu as="div" className="relative inline-block pb-4 text-left">
            <div>
              <Menu.Button className="inline-flex h-[60px] w-[300px] items-center justify-between rounded-md border-2 border-primary1 bg-neutral px-4 font-apfel-grotezk text-[#9ca3af] md:w-[625px] ">
                Your inquiry about
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-neutral md:w-[625px]">
                <div className="py-1">
                  {
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block rounded-md px-4 py-2 font-apfel-grotezk text-sm",
                          )}
                        >
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </a>
                      )}
                    </Menu.Item>
                  }
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <textarea
            name="message"
            className="mb-4 h-[175px] w-[300px] rounded-md border-2 border-primary1 bg-neutral pl-4 pt-4 font-apfel-grotezk text-white md:w-[625px]"
            placeholder="Message..."
          />

          <div className="ml-6 w-[300px] pb-3 pt-2 md:w-[625px]">
            <div className="flex items-center justify-start">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="h-4 w-4 rounded border-neutralDarker bg-neutral text-primary1 focus:ring-1 focus:ring-primary1"
              />
              <label
                for="link-checkbox"
                className="ms-2 font-apfel-grotezk text-[16px] font-[400] text-white"
              >
                I accept terms & conditions
              </label>
            </div>
          </div>
          <Button
            size="small"
            title="Send Message"
            className="h-[55px] w-[170px]"
          />
        </form>
      </div>
    </div>
  );
}
