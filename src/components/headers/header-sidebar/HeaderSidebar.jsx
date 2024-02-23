"use client";
import { Fragment, useEffect, useState } from "react";

import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";


const HeaderSidebar = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleImageClick = () => {
    setSidebarVisibility(!isSidebarVisible);
  };
  const chevronDown = (
    <svg
      className={`transform transition-transform ${
        subMenuOpen ? "rotate-180" : "rotate-0"
      }`}
      width="34"
      height="34"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div>
      <Image
        className="  pl-4"
        src="/homepage/sidebar.svg"
        width={40}
        height={32}
        onClick={handleImageClick}
      />

      {isSidebarVisible && (
        <div className="yourSidebar z-50 grid place-items-center bg-transparent px-5">
          {/* Small screen size */}
          <div className="fixed inset-0 z-40">
            <div
              className="fixed inset-0 bg-[rgba(0,0,0,0.75)] backdrop-brightness-200"
              onClick={handleImageClick}
            ></div>

            <div className="relative z-10 flex h-full max-w-[85%] flex-col bg-[#161617]">
              <div className="flex max-w-full justify-between pl-2 pr-10  sm:px-8">
                <Image
                  className="mt-11 pl-4"
                  src="/logos/header-logo.svg"
                  width={250}
                  height={32}
                  loading="eager"
                />
                <Image
                  src="/homepage/cross-30.svg"
                  className="mt-11"
                  width={30}
                  height={36}
                  loading="eager"
                  onClick={handleImageClick}
                />
              </div>
              <div className="flex-1 select-none overflow-y-auto">
                <div className=" mt-11 justify-between px-8 hover:text-primary1 sm:pl-14 sm:pr-10">
                  <a href="/" className=" ">
                    Home
                  </a>
                </div>
                <div className="mt-4 px-8 hover:text-primary1 sm:pl-14  sm:pr-10">
                  <a href="/" className=" ">
                    About
                  </a>
                </div>
                <div className="mt-4 px-8 hover:text-primary1 sm:pl-14  sm:pr-10">
                  <a href="/" className=" ">
                    Service
                  </a>
                </div>
                <div className="  group mt-4 flex justify-between px-8 hover:text-primary1 sm:pl-14 sm:pr-10">
                  <a href="/" className=" ">
                    Docs
                  </a>
                  <div
                    className="group-hover:stroke-primary1 "
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                  >
                    {chevronDown}
                  </div>
                </div>
                {subMenuOpen && (
  <Transition
    as={Fragment}
    show={subMenuOpen}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <div>
      <div className="mb-6 w-full px-8 text-neutralLight sm:pl-24 sm:pr-10">
        <div className="justify-between hover:text-primary1">
          <a href="/" className="">
            White
          </a>
        </div>
        <div className="mt-2 justify-between hover:text-primary1">
          <a href="/" className="">
            Light
          </a>
        </div>
      </div>
    </div>
  </Transition>
)}
               

                <div className=" mt-2 justify-between px-8 hover:text-primary1 sm:pl-14 sm:pr-10">
                  <a href="/" className=" ">
                    Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderSidebar;
