const RadioButton = ({ checked, setChecked, title }) => {
  const radio = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="5.5" stroke="#CBFB45" />
      {checked && <circle cx="6" cy="6" r="4" fill="#CBFB45" />}
    </svg>
  );
  return (
    <div className="flex items-center gap-x-2.5">
      <button onClick={() => setChecked(!checked)}>{radio}</button>
      <p className="text select-none">{title}</p>
    </div>
  );
};

export default RadioButton;
