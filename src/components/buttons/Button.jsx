const Button = ({
  color = "primary",
  size = "normal",
  width = "fit",
  outline,
  disabled = false,
  icon,
  title,
}) => {
  if (color === "secondary") outline = true;
  else if (color === "secondary" && outline === false) outline = false;
  return (
    <button
      className={`grid place-items-center text-neutralDark enabled:hover:text-neutralLighter gap-x-1.5 font-neue-machina-bold enabled:hover:bg-darkGreen leading-6 ${
        color === "primary" ? "bg-primary1" : "bg-transparent"
      }
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
        disabled:opacity-50 
      `}
      disabled={disabled}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
