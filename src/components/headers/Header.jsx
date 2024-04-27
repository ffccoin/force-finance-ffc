"use client";

import { useRouter } from "next/navigation";
import Button from "../buttons/Button";
import HeaderSidebar from "../headers/header-sidebar/HeaderSidebar";
import { Menu, Transition } from "@headlessui/react";
import MovingBar from "./moving-bar/MovingBar";
import Image from "next/image";
import { Fragment, useState, useEffect } from "react";

// framer motion import
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100 && window.scrollY > lastScrollY) {
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
          transition={{ duration: 0.2 }}
        >
          <MovingBar />
          <div className="z-50 grid place-items-center bg-transparent px-5">
            {/* Small screen size */}
            <div className="flex h-[58px] w-full items-center justify-between md:hidden">
              <div className="w-[80%]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logos/force-finance-logo-svg.svg"
                    width={42}
                    height={1}
                    alt="logo"
                    className="mt-[-0.25rem]"
                  />
                  <h1 className="lg:text-xl xl:text-2xl xl:leading-6">
                    FORCE FINANCE
                  </h1>
                </div>
              </div>
              <HeaderSidebar />
            </div>
            {/* Medium and larger screen size */}
            <div className="hidden h-[78px] w-full max-w-7xl grid-cols-12 place-items-center md:grid">
              <nav className="flex w-full items-center gap-x-2 md:col-span-6 lg:col-span-5 lg:gap-x-4">
                <button
                  className="flex h-8 items-center gap-x-1 border border-transparent font-apfel-grotezk text-xs hover:border-b-primary1 lg:text-xs xl:text-[15px]"
                  onClick={() => router.push("/")}
                >
                  Home
                </button>
                <button
                  className="flex h-8 items-center gap-x-1 border border-transparent font-apfel-grotezk text-xs hover:border-b-primary1 lg:text-xs xl:text-[15px]"
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
                    <Menu.Items className="absolute left-1  top-11 z-30 flex w-[232px] flex-col items-start gap-y-1 rounded-md border border-primary1 bg-[#161617]  py-1  pl-1 text-neutralLight ">
                      <Menu.Item className="mt-2  w-full py-1 pl-6  hover:border-l-4   hover:border-l-primary1  hover:bg-neutral hover:text-primary1">
                        <Link href="/whitepaper.pdf" className=" ">
                          Whitepaper
                        </Link>
                      </Menu.Item>
                      <Menu.Item className="mb-4 w-full  py-1  pl-6 hover:border-l-4  hover:border-l-primary1 hover:bg-neutral hover:text-primary1">
                        <Link
                          href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/"
                          className=" "
                        >
                          Lightpaper
                        </Link>
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
              <div className="flex items-center gap-x-2 md:col-span-3 lg:col-span-3">
                <Image
                  src="/logos/force-finance-logo-svg.svg"
                  width={42}
                  height={1}
                  alt="logo"
                  className="mt-[-0.25rem]"
                />
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
