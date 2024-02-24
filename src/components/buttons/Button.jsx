"use client";

import { motion } from "framer-motion";

const Button = ({
  size = "normal",
  width = "fit",
  outline,
  disabled = false,
  icon,
  title,
  className,
  dontAnimate,
}) => {
  return (
    <motion.button
      className={`grid place-items-center bg-primary1 font-neue-machina-bold leading-6 text-neutralDark transition-all duration-200 ease-out enabled:hover:bg-darkGreen enabled:hover:text-neutralLighter
      ${outline ? "border border-black" : ""}
      ${
        size === "small"
          ? "px-[25px] py-2.5"
          : size === "normal"
            ? "px-[25px] py-[15px]"
            : size === "medium"
              ? "px-[25px] py-[20px]"
              : size === "large"
                ? "px-[30px] py-[25px]"
                : ""
      }
        ${width === "fit" ? "w-auto" : "w-full"}
        disabled:opacity-50 ${className}
      `}
      disabled={disabled}
      initial={
        dontAnimate
          ? {}
          : {
              x: 100,
              opacity: 0,
            }
      }
      animate={
        dontAnimate
          ? {}
          : {
              x: 0,
              opacity: 1,
            }
      }
      transition={
        dontAnimate
          ? {}
          : {
              duration: 0.5,
              delay: 0,
            }
      }
    >
      <div className="flex gap-x-2.5">
        {title}
        {icon}
      </div>
    </motion.button>
  );
};

export default Button;
