"use client";

import { motion } from "framer-motion";

const SecondaryButton = ({
  color = "white",
  size = "normal",
  width = "fit",
  outline = true,
  disabled = false,
  icon,
  title,
  className,
}) => {
  return (
    <motion.button
      className={`grid place-items-center text-${color} border-${color} font-neue-machina-bold leading-6 transition-all ease-out duration-200 enabled:hover:bg-neutralLighter enabled:hover:text-neutralDarker
        ${outline ? "border" : ""}
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
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0,
      }}
    >
      <div className="flex gap-x-2.5">
        {title}
        {icon}
      </div>
    </motion.button>
  );
};

export default SecondaryButton;
