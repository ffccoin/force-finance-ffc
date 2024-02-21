export default function Person({ name, position, image }) {
  return (
    <div className="flex-wrap">
      <div className="flex flex-col items-center justify-center">
        <img
          className="my-3 h-[230px] w-[23opx]"
          src={`/aboutpage/${image}.svg`}
          alt=""
        />
        <p className="font-neue-machina-bold text-[22px] uppercase text-white">
          {name}
        </p>
        <p className="mb-3 mt-1 font-apfel-grotezk text-[16px] text-[#898990]">
          {position}
        </p>
        <div className="flex gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#232325" />
            <path
              d="M16.125 26H13.2188V16.6562H16.125V26ZM14.6562 15.4062C13.75 15.4062 13 14.625 13 13.6875C13 12.7812 13.75 12.0312 14.6562 12.0312C15.5938 12.0312 16.3438 12.7812 16.3438 13.6875C16.3438 14.625 15.5938 15.4062 14.6562 15.4062ZM26.9688 26H24.0938V21.4688C24.0938 20.375 24.0625 19 22.5625 19C21.0625 19 20.8438 20.1562 20.8438 21.375V26H17.9375V16.6562H20.7188V17.9375H20.75C21.1562 17.2188 22.0938 16.4375 23.5 16.4375C26.4375 16.4375 27 18.375 27 20.875V26H26.9688Z"
              fill="#F3F3F3"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#232325" />
            <path
              d="M26.3438 16.75C26.3438 16.9062 26.3438 17.0312 26.3438 17.1875C26.3438 21.5312 23.0625 26.5 17.0312 26.5C15.1562 26.5 13.4375 25.9688 12 25.0312C12.25 25.0625 12.5 25.0938 12.7812 25.0938C14.3125 25.0938 15.7188 24.5625 16.8438 23.6875C15.4062 23.6562 14.1875 22.7188 13.7812 21.4062C14 21.4375 14.1875 21.4688 14.4062 21.4688C14.6875 21.4688 15 21.4062 15.25 21.3438C13.75 21.0312 12.625 19.7188 12.625 18.125V18.0938C13.0625 18.3438 13.5938 18.4688 14.125 18.5C13.2188 17.9062 12.6562 16.9062 12.6562 15.7812C12.6562 15.1562 12.8125 14.5938 13.0938 14.125C14.7188 16.0938 17.1562 17.4062 19.875 17.5625C19.8125 17.3125 19.7812 17.0625 19.7812 16.8125C19.7812 15 21.25 13.5312 23.0625 13.5312C24 13.5312 24.8438 13.9062 25.4688 14.5625C26.1875 14.4062 26.9062 14.125 27.5312 13.75C27.2812 14.5312 26.7812 15.1562 26.0938 15.5625C26.75 15.5 27.4062 15.3125 27.9688 15.0625C27.5312 15.7188 26.9688 16.2812 26.3438 16.75Z"
              fill="#F3F3F3"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#232325" />
            <path
              d="M20 12.25C24.2812 12.25 27.75 15.7188 27.75 20C27.75 24.2812 24.2812 27.75 20 27.75C15.7188 27.75 12.25 24.2812 12.25 20C12.25 15.7188 15.7188 12.25 20 12.25ZM23.7812 17.5625C23.9062 17.0625 23.5938 16.8438 23.25 16.9688L15.7812 19.8438C15.2812 20.0312 15.2812 20.3438 15.6875 20.4688L17.5938 21.0625L22.0312 18.25C22.25 18.125 22.4375 18.2188 22.2812 18.3438L18.6875 21.5938L18.5625 23.5625C18.75 23.5625 18.8438 23.4688 18.9375 23.375L19.875 22.4688L21.8125 23.9062C22.1875 24.0938 22.4375 24 22.5312 23.5625L23.7812 17.5625Z"
              fill="#F3F3F3"
            />
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#232325" />
            <path
              d="M17.4062 24.4375C17.4062 24.5 17.3438 24.5312 17.25 24.5312C17.1562 24.5625 17.0938 24.5 17.0938 24.4375C17.0938 24.375 17.1562 24.3125 17.25 24.3125C17.3438 24.3125 17.4062 24.375 17.4062 24.4375ZM16.4375 24.2812C16.4688 24.2188 16.5625 24.1875 16.6562 24.2188C16.75 24.25 16.7812 24.3125 16.7812 24.375C16.75 24.4375 16.6562 24.4688 16.5938 24.4375C16.5 24.4375 16.4375 24.3438 16.4375 24.2812ZM17.8438 24.25C17.9062 24.2188 18 24.2812 18 24.3438C18.0312 24.4062 17.9688 24.4375 17.875 24.4688C17.7812 24.5 17.6875 24.4688 17.6875 24.4062C17.6875 24.3125 17.75 24.25 17.8438 24.25ZM19.875 12.25C24.2188 12.25 27.75 15.5625 27.75 19.875C27.75 23.3438 25.625 26.3125 22.5 27.3438C22.0938 27.4375 21.9375 27.1875 21.9375 26.9688C21.9375 26.7188 21.9688 25.4062 21.9688 24.375C21.9688 23.625 21.7188 23.1562 21.4375 22.9062C23.1875 22.7188 25.0312 22.4688 25.0312 19.4688C25.0312 18.5938 24.7188 18.1875 24.2188 17.625C24.2812 17.4062 24.5625 16.5938 24.125 15.5C23.4688 15.2812 21.9688 16.3438 21.9688 16.3438C21.3438 16.1562 20.6875 16.0938 20 16.0938C19.3438 16.0938 18.6875 16.1562 18.0625 16.3438C18.0625 16.3438 16.5312 15.3125 15.9062 15.5C15.4688 16.5938 15.7188 17.4062 15.8125 17.625C15.3125 18.1875 15.0625 18.5938 15.0625 19.4688C15.0625 22.4688 16.8438 22.7188 18.5938 22.9062C18.3438 23.125 18.1562 23.4688 18.0938 23.9688C17.625 24.1875 16.5 24.5312 15.8125 23.3125C15.375 22.5625 14.5938 22.5 14.5938 22.5C13.8438 22.5 14.5625 23 14.5625 23C15.0625 23.2188 15.4062 24.125 15.4062 24.125C15.875 25.5312 18.0625 25.0625 18.0625 25.0625C18.0625 25.7188 18.0625 26.7812 18.0625 27C18.0625 27.1875 17.9375 27.4375 17.5312 27.375C14.4062 26.3125 12.25 23.3438 12.25 19.875C12.25 15.5625 15.5625 12.25 19.875 12.25ZM15.2812 23.0312C15.3125 23 15.375 23.0312 15.4375 23.0625C15.5 23.125 15.5 23.2188 15.4688 23.25C15.4062 23.2812 15.3438 23.25 15.2812 23.2188C15.25 23.1562 15.2188 23.0625 15.2812 23.0312ZM14.9375 22.7812C14.9688 22.75 15 22.75 15.0625 22.7812C15.125 22.8125 15.1562 22.8438 15.1562 22.875C15.125 22.9375 15.0625 22.9375 15 22.9062C14.9375 22.875 14.9062 22.8438 14.9375 22.7812ZM15.9375 23.9062C16 23.8438 16.0938 23.875 16.1562 23.9375C16.2188 24 16.2188 24.0938 16.1875 24.125C16.1562 24.1875 16.0625 24.1562 16 24.0938C15.9062 24.0312 15.9062 23.9375 15.9375 23.9062ZM15.5938 23.4375C15.6562 23.4062 15.7188 23.4375 15.7812 23.5C15.8125 23.5625 15.8125 23.6562 15.7812 23.6875C15.7188 23.7188 15.6562 23.6875 15.5938 23.625C15.5312 23.5625 15.5312 23.4688 15.5938 23.4375Z"
              fill="#F3F3F3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
