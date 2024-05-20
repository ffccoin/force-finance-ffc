import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Button from "@/components/buttons/Button";

const HeaderSidebar = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { isConnected } = useWeb3ModalAccount();

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
    <div className="md:hidden">
      <button onClick={handleImageClick}>
        <Image
          className="w-[100%] cursor-pointer"
          src="/homepage/sidebar.svg"
          width={40}
          height={32}
          alt="sidebar"
        />
      </button>
      <AnimatePresence>
        {isSidebarVisible && (
          <motion.div
            key="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.75)] backdrop-brightness-200"
            onClick={handleImageClick}
          ></motion.div>
        )}
        {isSidebarVisible && (
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 top-0 z-[51] w-[85%] border-r-2 border-zinc-800 bg-zinc-900"
            aria-label="Sidebar"
          >
            <div className="mt-16 flex items-center justify-between pl-1 pr-4 sm:px-8 ">
              <div className="flex items-center gap-x-3 px-2">
                <Image
                  className="pl-4"
                  src="/logos/force-finance-logo-svg.svg"
                  width={50}
                  height={32}
                  alt="logo"
                />
                <h1 className="mt-1 text-lg">Force Finance</h1>
              </div>
              <button onClick={handleImageClick}>
                <Image
                  src="/homepage/cross-30.svg"
                  className=""
                  width={20}
                  height={20}
                  alt="cross"
                />
              </button>
            </div>
            <ul>
              <motion.div
                key="submenu"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{ duration: 1 }}
                className="z-[99999] mb-6 w-full pl-10 pr-4 sm:pl-16 sm:pr-5"
              >
                <div className=" mt-11 select-none justify-between hover:text-primary1 ">
                  <Link href="/" onClick={() => setSidebarVisibility(false)}>
                    Home
                  </Link>
                </div>
                <div className="mt-4  hover:text-primary1">
                  <Link
                    href="/about-us"
                    onClick={() => setSidebarVisibility(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="mt-4  hover:text-primary1 ">
                  <Link
                    href="/our-services"
                    onClick={() => setSidebarVisibility(false)}
                  >
                    Services
                  </Link>
                </div>

                <div className="  group mt-4 flex justify-between  hover:text-primary1 ">
                  <div>Docs</div>
                  <div
                    className="group-hover:stroke-primary1 "
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                  >
                    {chevronDown}
                  </div>
                </div>
                {subMenuOpen && (
                  <motion.div
                    key="submenu"
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 w-full px-8 pl-4 text-neutralLight "
                  >
                    <div className="mb-6  pl-7 text-neutralLight ">
                      <div className=" justify-between hover:text-primary1">
                        <Link
                          href="/whitepaper.pdf"
                          onClick={() => setSidebarVisibility(false)}
                        >
                          Whitepaper
                        </Link>
                      </div>
                      <div className="  mt-2 justify-between hover:text-primary1">
                        <Link
                          href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/"
                          onClick={() => setSidebarVisibility(false)}
                        >
                          Lightpaper
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div className=" mt-2 hover:text-primary1 ">
                  <Link
                    href="/#Section7"
                    onClick={() => setSidebarVisibility(false)}
                  >
                    Roadmap
                  </Link>
                </div>
                <div className="mt-4 hover:text-primary1 ">
                  <Link
                    href="/contact-us"
                    onClick={() => setSidebarVisibility(false)}
                  >
                    Contact
                  </Link>
                </div>
                {!isConnected ? (
                  <div className="my-10 flex flex-col gap-y-5">
                    <button
                      onClick={() => open()}
                      className="border-2 p-3 md:text-xs lg:px-4 lg:text-sm xl:text-base"
                    >
                      Connect Wallet
                    </button>
                    <Link href="https://app.forcefinancecoin.com">
                      <Button
                        size="small"
                        title="Launch App"
                        width="full"
                        dontAnimate
                        className="p-3"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="my-10 flex flex-col gap-y-5">
                    <button
                      onClick={() => open()}
                      className="border-2 p-3 md:text-xs lg:px-4 lg:text-sm xl:text-base"
                    >
                      Disconnect
                    </button>
                    <Link href="https://app.forcefinancecoin.com">
                      <Button
                        size="small"
                        title="Launch App"
                        width="full"
                        dontAnimate
                        className="p-3"
                      />
                    </Link>
                  </div>
                )}
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderSidebar;
