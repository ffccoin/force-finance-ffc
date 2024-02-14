"use client";

import { Menu } from "@headlessui/react";

const HeaderDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>{menuIcon}</Menu.Button>
      <Menu.Items className="absolute right-0 top-7 flex w-[150px] flex-col border border-neutralLight p-3">
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/">
              Home
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/about-us">
              About Us
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/about-us">
              Our Team
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/about-us">
              Portfolio
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/about-us">
              Blog
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/about-us">
              Contact
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

const menuIcon = (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16576 4.05908H21.4783C21.9098 4.05908 22.2595 3.70933 22.2595 3.27783V1.32471C22.2595 0.893213 21.9098 0.543457 21.4783 0.543457H1.16576C0.734262 0.543457 0.384506 0.893213 0.384506 1.32471V3.27783C0.384506 3.70933 0.734262 4.05908 1.16576 4.05908ZM1.16576 11.8716H21.4783C21.9098 11.8716 22.2595 11.5218 22.2595 11.0903V9.13721C22.2595 8.70571 21.9098 8.35596 21.4783 8.35596H1.16576C0.734262 8.35596 0.384506 8.70571 0.384506 9.13721V11.0903C0.384506 11.5218 0.734262 11.8716 1.16576 11.8716ZM1.16576 19.6841H21.4783C21.9098 19.6841 22.2595 19.3343 22.2595 18.9028V16.9497C22.2595 16.5182 21.9098 16.1685 21.4783 16.1685H1.16576C0.734262 16.1685 0.384506 16.5182 0.384506 16.9497V18.9028C0.384506 19.3343 0.734262 19.6841 1.16576 19.6841Z"
      fill="white"
    />
  </svg>
);

export default HeaderDropdown;
