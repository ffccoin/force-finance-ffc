import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid h-[520px] w-screen bg-[url('/footer/bg.svg')] bg-cover px-8 py-10 sm:px-12 lg:px-24 lg:py-24">
      <div className="grid gap-x-20 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-y-4 lg:col-span-2 lg:gap-y-7">
          <div className="flex items-center gap-2 ">
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

          <span className="text-[15px] leading-7 text-neutralLight">
            Pioneering the Future of Finance, Empowering Individuals with
            Innovative Solutions and Endless Opportunities.
          </span>
          <div className="flex gap-x-3.5">
            <button className="hover:text-primary1">{telegramIcon}</button>
            <button className="hover:text-primary1">
              <Link href="https://twitter.com/forcefinance_">
                {twitterIcon}
              </Link>
            </button>
            <button className="hover:text-primary1">{youtubeIcon}</button>
            <button className="hover:text-primary1">
              <Link href="https://discord.gg/nwj93PTAns">{discordIcon}</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <h3 className="mb-2 text-sm uppercase">Company</h3>
          <Link
            href="/about-us"
            className="text-neutralLight hover:text-primary1"
          >
            About us
          </Link>
          <Link
            href="/our-services"
            className="text-neutralLight hover:text-primary1"
          >
            Services
          </Link>
          <Link
            href="/contact-us"
            className="text-neutralLight hover:text-primary1"
          >
            Careers
          </Link>
          <Link
            href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/information/our-team"
            className="text-neutralLight hover:text-primary1"
          >
            Teams
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <h3 className="mb-2 text-sm uppercase">Resources</h3>
          <Link
            href="/whitepaper.pdf"
            download="ffc-whitepaper"
            className="text-neutralLight hover:text-primary1"
          >
            Whitepaper
          </Link>
          <Link
            href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/"
            className="text-neutralLight hover:text-primary1"
          >
            Lightpaper
          </Link>
          <Link
            href="https://github.com/ffccoin/force-finance-ffc"
            className="text-neutralLight hover:text-primary1"
          >
            Github
          </Link>
          <Link
            href="#Section7"
            className="text-neutralLight hover:text-primary1"
          >
            Roadmap
          </Link>
          <Link
            href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/tokens/usdffc"
            className="text-neutralLight hover:text-primary1"
          >
            Documentation
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <h3 className="mb-2 text-sm uppercase">Community</h3>
          <Link
            href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/information/beta-dex-launch"
            className="text-neutralLight hover:text-primary1"
          >
            Roles
          </Link>
          <Link
            href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/our-foundations"
            className="text-neutralLight hover:text-primary1"
          >
            Ecosystem
          </Link>
          <Link href="#" className="text-neutralLight hover:text-primary1">
            Blogs
          </Link>
          <Link href="/faqs" className="text-neutralLight hover:text-primary1">
            FAQs
          </Link>
        </div>
        <div className="mb-10 flex w-[80vw] flex-col gap-y-5  overflow-hidden md:flex-row md:justify-between">
          <span className="w-fit text-nowrap text-sm text-neutralLight">
            Copyright © 2024 FFC. All Rights Reserved
          </span>
          <div className="flex flex-wrap gap-x-6">
            <Link
              href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/terms-and-condition"
              className="cursor-pointer text-nowrap text-sm text-neutralLight hover:text-primary1"
            >
              Terms of Service
            </Link>
            <Link
              href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/privacy-policy"
              className="cursor-pointer text-nowrap text-sm text-neutralLight hover:text-primary1"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://force-finance-coin.gitbook.io/force-coin-lightpaper/security/audits "
              className="cursor-pointer text-nowrap text-sm text-neutralLight hover:text-primary1"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const telegramIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.75 0.25C3.46875 0.25 0 3.71875 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12.0312 15.75 15.5 12.2812 15.5 8C15.5 3.71875 12.0312 0.25 7.75 0.25ZM11.5312 5.5625L10.2812 11.5625C10.1875 12 9.9375 12.0938 9.5625 11.9062L7.625 10.4688L6.6875 11.375C6.59375 11.4688 6.5 11.5625 6.3125 11.5625L6.4375 9.59375L10.0312 6.34375C10.1875 6.21875 10 6.125 9.78125 6.25L5.34375 9.0625L3.4375 8.46875C3.03125 8.34375 3.03125 8.03125 3.53125 7.84375L11 4.96875C11.3438 4.84375 11.6562 5.0625 11.5312 5.5625Z"
      fill="currentColor"
    />
  </svg>
);

const twitterIcon = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
      fill="currentColor"
    />
  </svg>
);

const facebookIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 8C15.75 3.71875 12.2812 0.25 8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 11.875 3.0625 15.0938 6.78125 15.6562V10.25H4.8125V8H6.78125V6.3125C6.78125 4.375 7.9375 3.28125 9.6875 3.28125C10.5625 3.28125 11.4375 3.4375 11.4375 3.4375V5.34375H10.4688C9.5 5.34375 9.1875 5.9375 9.1875 6.5625V8H11.3438L11 10.25H9.1875V15.6562C12.9062 15.0938 15.75 11.875 15.75 8Z"
      fill="currentColor"
    />
  </svg>
);

const youtubeIcon = (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1562 1.90625C16.9688 1.15625 16.375 0.5625 15.6562 0.375C14.3125 0 9 0 9 0C9 0 3.65625 0 2.3125 0.375C1.59375 0.5625 1 1.15625 0.8125 1.90625C0.4375 3.21875 0.4375 6.03125 0.4375 6.03125C0.4375 6.03125 0.4375 8.8125 0.8125 10.1562C1 10.9062 1.59375 11.4688 2.3125 11.6562C3.65625 12 9 12 9 12C9 12 14.3125 12 15.6562 11.6562C16.375 11.4688 16.9688 10.9062 17.1562 10.1562C17.5312 8.8125 17.5312 6.03125 17.5312 6.03125C17.5312 6.03125 17.5312 3.21875 17.1562 1.90625ZM7.25 8.5625V3.5L11.6875 6.03125L7.25 8.5625Z"
      fill="currentColor"
    />
  </svg>
);

const discordIcon = (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.28125 7.625C9.28125 7.125 8.90625 6.71875 8.46875 6.71875C8 6.71875 7.625 7.125 7.625 7.625C7.625 8.09375 8 8.5 8.46875 8.5C8.90625 8.5 9.28125 8.09375 9.28125 7.625ZM5.53125 6.71875C5.09375 6.71875 4.71875 7.125 4.71875 7.625C4.71875 8.09375 5.09375 8.5 5.53125 8.5C6 8.5 6.34375 8.09375 6.34375 7.625C6.375 7.125 6 6.71875 5.53125 6.71875ZM14 1.65625C14 0.75 13.25 0 12.3438 0H1.625C0.71875 0 0 0.75 0 1.65625V12.4688C0 13.4062 0.71875 14.125 1.625 14.125H10.6875L10.2812 12.6562C12.625 14.8125 11.9688 14.25 14 16V1.65625ZM11.7188 9.25C11.7188 9.25 11.0312 10.4062 9.25 10.4688C9.25 10.4688 8.96875 10.125 8.71875 9.8125C9.78125 9.53125 10.1875 8.875 10.1875 8.875C9.84375 9.09375 9.53125 9.21875 9.25 9.34375C7.53125 10.0625 5.625 9.8125 4.25 9.0625C4.25 9.03125 4.0625 8.9375 3.9375 8.84375C3.9375 8.84375 4.3125 9.5 5.34375 9.8125C5.09375 10.0938 4.8125 10.4688 4.8125 10.4688C3.03125 10.4062 2.375 9.25 2.375 9.25C2.375 6.65625 3.5 4.59375 3.5 4.59375C4.65625 3.71875 5.75 3.75 5.75 3.75L5.84375 3.84375C4.40625 4.25 3.75 4.875 3.75 4.875C3.75 4.875 3.90625 4.78125 4.21875 4.65625C6.0625 3.84375 8.28125 3.84375 10.1875 4.875C10.1875 4.875 9.5625 4.28125 8.1875 3.875L8.3125 3.75C8.3125 3.75 9.40625 3.71875 10.5625 4.59375C10.5625 4.59375 11.7188 6.65625 11.7188 9.25Z"
      fill="currentColor"
    />
  </svg>
);

export default Footer;
