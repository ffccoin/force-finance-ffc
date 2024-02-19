"use client";

import { useRouter } from "next/navigation";
import Button from "../buttons/Button";
import HeaderDropdown from "../dropdowns/HeaderDropdown";
import MovingBar from "./moving-bar/MovingBar";
import Image from "next/image";

const Header = ({ prices }) => {
  const router = useRouter();
  return (
    <header>
      <MovingBar prices={prices} />
      <div className="z-50 grid place-items-center bg-transparent px-5">
        {/* Small screen size */}
        <div className="flex h-[58px] w-full items-center justify-between px-3 md:hidden">
          {/* <div className="flex items-end md:col-span-3 lg:col-span-3 lg:gap-x-2">
            {logo}
            <h1 className="lg:text-xl lg:leading-6 xl:text-2xl">
              FORCE FINANCE
            </h1>
          </div> */}
          <Image src="/logos/header-logo.svg" width={250} height={32} />
          <HeaderDropdown />
        </div>
        {/* Medium and larger screen size */}
        <div className="hidden h-[78px] w-full max-w-7xl grid-cols-12 place-items-center md:grid">
          <nav className="flex w-full items-center gap-x-2 md:col-span-6 lg:col-span-5 lg:gap-x-4">
            <button
              className="mr-[3px] font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]"
              onClick={() => router.push("/")}
            >
              Home
            </button>
            <button
              className="flex items-center gap-x-1 font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]"
              onClick={() => router.push("/about-us")}
            >
              About Us {chevronDown}
            </button>
            <button className="flex items-center gap-x-1 font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]">
              Our Team {chevronDown}
            </button>
            <button className="flex items-center gap-x-1 font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]">
              Portfolio {chevronDown}
            </button>
            <button className="flex items-center gap-x-1 font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]">
              Blog {chevronDown}
            </button>
            <button
              className="font-apfel-grotezk text-xs lg:text-xs xl:text-[15px]"
              onClick={() => router.push("/contact-us")}
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
            <button className="lg:px-3">{bucketIcon}</button>
            <button className="md:text-xs lg:px-4 lg:text-sm xl:text-base">
              Sign up
            </button>
            <Button
              size="small"
              title="Login"
              className="px-2 py-1 text-xs lg:px-4 lg:py-3 lg:text-sm xl:px-[25px] xl:text-base"
            />
          </div>
        </div>
      </div>
    </header>
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
