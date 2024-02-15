const Button = ({
  size = "normal",
  width = "fit",
  outline,
  disabled = false,
  icon,
  title,
  className,
}) => {
  return (
    <button
      className={`grid place-items-center text-neutralDark enabled:hover:text-neutralLighter font-neue-machina-bold enabled:hover:bg-darkGreen leading-6 bg-primary1
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
    >
      <div className="flex gap-x-2.5">
        {title}
        {icon}
      </div>
    </button>
  );
};

export default Button;
