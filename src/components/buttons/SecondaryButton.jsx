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
    <button
      className={`${className} grid place-items-center text-${color} border-${color} enabled:hover:text-neutralDarker font-neue-machina-bold enabled:hover:bg-neutralLighter leading-6
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
          disabled:opacity-50 
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

export default SecondaryButton;
