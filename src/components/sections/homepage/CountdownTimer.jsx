"use client";

import { useRef, useState, useEffect } from "react";

const CountdownTimer = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds),
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("52:21:12:08");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    // set timer to 52 days 21 hours 12 minutes 08 seconds
    deadline.setDate(deadline.getDate() + 52);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="flex w-full max-w-[458px] justify-between">
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(0, 1)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(1, 2)}
          </div>
        </div>
        <span className="text-sm text-neutralLight sm:hidden">Days</span>
        <span className="hidden text-neutralLight sm:block md:text-[18px] md:leading-[22.4px]">
          Days
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(3, 4)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(4, 5)}
          </div>
        </div>
        <span className="text-sm text-neutralLight sm:hidden">Hrs</span>
        <span className="hidden text-neutralLight sm:block md:text-[18px] md:leading-[22.4px]">
          Hours
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(6, 7)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(7, 8)}
          </div>
        </div>
        <span className="text-sm text-neutralLight sm:hidden">Mins</span>
        <span className="hidden text-neutralLight sm:block md:text-[18px] md:leading-[22.4px]">
          Minutes
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(9, 10)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary1 bg-neutral px-1.5 pt-1 font-neue-machina-bold text-sm leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(10)}
          </div>
        </div>
        <span className="text-sm text-neutralLight sm:hidden">Secs</span>
        <span className="hidden text-neutralLight sm:block md:text-[18px] md:leading-[22.4px]">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
