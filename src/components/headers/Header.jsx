"use client";

import { useRouter } from "next/navigation";
import Button from "../buttons/Button";
import HeaderDropdown from "../dropdowns/HeaderDropdown";
import HeaderSidebar from "../headers/header-sidebar/HeaderSidebar";
import { Menu, Transition } from "@headlessui/react";
import MovingBar from "./moving-bar/MovingBar";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

// framer motion import
import { AnimatePresence, motion } from "framer-motion";

const Header = ({ coins }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className="fixed top-0 z-50 w-full bg-neutralDark"
          initial={{ y: -120 }}
          animate={{ y: 0 }}
          exit={{ y: -120 }}
          transition={{ duration: 0.8 }}
        >
          <MovingBar coins={coins} />
          <div className="z-50 grid place-items-center bg-transparent px-5">
            {/* Small screen size */}
            <div className="flex h-[58px] w-full items-center justify-between px-3 md:hidden">
              {/* <div className="flex items-end md:col-span-3 lg:col-span-3 lg:gap-x-2">
            {logo}
            <h1 className="lg:text-xl lg:leading-6 xl:text-2xl">
              FORCE FINANCE
            </h1>
          </div> */}
              <Image
                src="/logos/header-logo.svg"
                loading="eager"
                width={250}
                height={32}
              />

              <HeaderSidebar />
            </div>
            {/* Medium and larger screen size */}
            <div className="hidden h-[78px] w-full max-w-7xl grid-cols-12 place-items-center md:grid">
              <nav className="flex w-full items-center gap-x-2 md:col-span-6 lg:col-span-5 lg:gap-x-4">
                <motion.div className="relative overflow-hidden font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]">
                  <motion.button
                    key="submenu"
                    whileHover={{
                      borderBottomColor: "#CBFB45",
                      borderBottomWidth: "1px",
                    }}
                    className="h-8 font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]"
                    onClick={() => router.push("/")}
                  >
                    Home
                  </motion.button>
                  {/* <motion.div
                key="submenu"
                className="absolute top-0 h-[2px] w-full bg-primary1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.5 }}
              /> */}
                </motion.div>
                <button
                  className="flex h-8 items-center  gap-x-1  border  border-transparent font-apfel-grotezk text-xs hover:border-b-primary1 lg:text-xs xl:text-[15px]"
                  onClick={() => router.push("/about-us")}
                >
                  About
                </button>
                <button
                  className="flex h-8 items-center  gap-x-1  border  border-transparent font-apfel-grotezk text-xs hover:border-b-primary1 lg:text-xs xl:text-[15px]"
                  onClick={() => router.push("/our-services")}
                >
                  Services
                </button>
                <Menu
                  as="div"
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Menu.Button className=" flex h-8 items-center gap-x-1 border border-transparent bg-transparent font-apfel-grotezk text-xs outline-none hover:border-b-primary1 lg:text-xs xl:text-[15px]">
                    Docs
                    <div className="mt-1">{chevronDown}</div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    show={isDropdownOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-1  top-11 z-30 flex w-[232px] flex-col items-start gap-y-1 rounded-md border border-primary1 bg-[#161617] bg-opacity-90 py-1  pl-1 text-neutralLight ">
                      <Menu.Item className="mt-2  w-full py-1 pl-6  hover:border-l-4   hover:border-l-primary1  hover:bg-neutral hover:text-primary1">
                        <a href="/whitepaper.pdf" className=" ">
                          Whitepaper
                        </a>
                      </Menu.Item>
                      <Menu.Item className="mb-4 w-full  py-1  pl-6 hover:border-l-4  hover:border-l-primary1 hover:bg-neutral hover:text-primary1">
                        <a
                          href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/"
                          className=" "
                        >
                          Lightpaper
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  onClick={() => router.push("/#Section7")}
                  className="flex  h-8  items-center gap-x-1 border  border-transparent font-apfel-grotezk text-xs hover:border-b-primary1 lg:text-xs xl:text-[15px]"
                >
                  Roadmap
                </button>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="flex  h-8  items-center gap-x-1 border  border-transparent font-apfel-grotezk text-xs hover:border-b-primary1 lg:text-xs xl:text-[15px]"
                >
                  Contact
                </button>
              </nav>
              <div className="flex items-end md:col-span-3 lg:col-span-3 lg:gap-x-2">
                {logo}
                <h1 className="lg:text-xl xl:text-2xl xl:leading-6">
                  FORCE FINANCE
                </h1>
              </div>
              <div className="flex w-full items-center justify-end gap-x-2 md:col-span-3 lg:col-span-4 xl:gap-x-2">
                <button className="md:text-xs lg:px-4 lg:text-sm xl:text-base">
                  Sign up
                </button>
                <Button
                  size="small"
                  title="Login"
                  dontAnimate
                  className="px-2 py-1 text-xs lg:px-4 lg:py-3 lg:text-sm xl:px-[25px] xl:text-base"
                />
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

const chevronDown = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.875 3.75L5 6.875L8.125 3.75"
      stroke="#898990"
      strokeWidth="0.625"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const logo = (
  <svg
    width="39"
    height="32"
    viewBox="0 0 39 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.283 10.0314C29.7203 7.05272 27.2018 4.68575 24.1321 3.31067C21.0623 1.93558 17.6194 1.63219 14.3565 2.44923C11.0935 3.26627 8.19992 5.15632 6.1404 7.81578C4.08088 10.4752 2.97501 13.7498 3.00043 17.1133C3.02584 20.4769 4.18107 23.7343 6.28053 26.3624C8.38 28.9904 11.3019 30.8365 14.5768 31.6042C17.8517 32.3718 21.2896 32.0164 24.3382 30.5951C27.3869 29.1738 29.8693 26.769 31.3868 23.7671L24.2426 20.1557C23.5349 21.5555 22.3773 22.6769 20.9557 23.3397C19.534 24.0025 17.9308 24.1682 16.4037 23.8103C14.8765 23.4523 13.514 22.5914 12.5349 21.3659C11.5559 20.1404 11.0172 18.6214 11.0053 17.0528C10.9935 15.4843 11.5092 13.9573 12.4696 12.7172C13.43 11.477 14.7794 10.5956 16.3009 10.2146C17.8225 9.83362 19.428 9.9751 20.8595 10.6163C22.291 11.2576 23.4655 12.3613 24.1942 13.7504L31.283 10.0314Z"
      fill="#CBFB45"
    />
    <rect x="33" y="6" width="3" height="3" fill="#CBFB45" />
    <rect x="36" y="1" width="3" height="3" fill="#CBFB45" />
    <rect x="30" width="3" height="3" fill="#CBFB45" />
    <rect y="16" width="18" height="2" fill="#CBFB45" />
  </svg>
);

const bucketIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79202 20 4.92829 19.2112 4.83464 18.1811L4 9Z"
      stroke="#F3F3F3"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11"
      stroke="#F3F3F3"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Header;
