const MovingBar = () => {
  return (
    <div className="flex h-[46px] select-none w-full items-center gap-x-16 overflow-x-auto bg-black px-5 text-neutralLight">
      <div className="flex gap-x-4">
        {terraIcon}
        <span className="text-sm">Terra</span>
        <span className="text-sm">$91.52303226572</span>
        <div className="flex items-center gap-x-1">
          {downArrow}
          <span className="text-sm text-white">-0.76%</span>
        </div>
      </div>
      <div className="flex gap-x-4">
        {terraIcon}
        <span className="text-sm">Terra</span>
        <span className="text-sm">$91.52303226572</span>
        <div className="flex items-center gap-x-1">
          {downArrow}
          <span className="text-sm text-white">-0.76%</span>
        </div>
      </div>
      <div className="flex gap-x-4">
        {terraIcon}
        <span className="text-sm">Terra</span>
        <span className="text-sm">$91.52303226572</span>
        <div className="flex items-center gap-x-1">
          {downArrow}
          <span className="text-sm text-white">-0.76%</span>
        </div>
      </div>
      <div className="flex gap-x-4">
        {terraIcon}
        <span className="text-sm">Terra</span>
        <span className="text-sm">$91.52303226572</span>
        <div className="flex items-center gap-x-1">
          {downArrow}
          <span className="text-sm text-white">-0.76%</span>
        </div>
      </div>
      <div className="flex gap-x-4">
        {terraIcon}
        <span className="text-sm">Terra</span>
        <span className="text-sm">$91.52303226572</span>
        <div className="flex items-center gap-x-1">
          {downArrow}
          <span className="text-sm text-white">-0.76%</span>
        </div>
      </div>
      <div className="flex gap-x-4">
        {terraIcon}
        <span className="text-sm">Terra</span>
        <span className="text-sm">$91.52303226572</span>
        <div className="flex items-center gap-x-1">
          {downArrow}
          <span className="text-sm text-white">-0.76%</span>
        </div>
      </div>
    </div>
  );
};

const terraIcon = (
  <svg
    width="27"
    height="20"
    viewBox="0 0 27 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4999 18.7275C18.3067 18.7275 22.2034 14.8201 22.2034 9.99999C22.2034 5.17991 18.3067 1.27246 13.4999 1.27246C8.69308 1.27246 4.79639 5.17991 4.79639 9.99999C4.79639 14.8201 8.69308 18.7275 13.4999 18.7275Z"
      fill="#172852"
    />
    <path
      d="M11.8071 5.17277C12.8263 4.7905 13.9734 4.78963 15.0118 5.10382C16.3634 5.52449 17.5045 6.54735 18.1006 7.83117C18.2651 8.19685 18.4227 8.57825 18.4383 8.98495C17.6785 8.54334 16.8456 8.25707 16.0109 7.99612C14.6758 7.51349 13.278 7.17835 12.0143 6.51506C11.7201 6.33876 11.345 6.1581 11.2649 5.79068C11.2327 5.47299 11.5678 5.29583 11.8071 5.17277Z"
      fill="#FFD83D"
    />
    <path
      d="M8.73046 8.26234C9.02551 7.4594 9.50942 6.71407 10.1665 6.16162C10.3336 7.5397 10.9185 8.87152 11.8846 9.87344C13.043 11.0805 14.6932 11.8214 16.3721 11.7935C17.0388 11.8144 17.6907 11.66 18.3409 11.5352C17.7012 13.8532 15.1676 15.3919 12.8202 15.0218C11.4033 14.8403 10.0952 13.9989 9.30576 12.8111C8.41539 11.4985 8.19084 9.75562 8.73046 8.26234Z"
      fill="#FFD83D"
    />
    <path
      d="M16.011 7.99622C16.8457 8.25717 17.6786 8.54343 18.4384 8.98504L18.4897 9.0121C18.5602 9.54361 18.6116 10.0856 18.5176 10.618C18.1355 10.4556 17.8257 10.1702 17.5019 9.91802C16.8787 9.39786 16.2425 8.80264 16.011 7.99622Z"
      fill="#FF6F03"
    />
  </svg>
);

const downArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12L5.88675 7H0.113249L3 12ZM2.5 0L2.5 7.5H3.5L3.5 0L2.5 0Z"
      fill="#FF4500"
    />
  </svg>
);

export default MovingBar;
