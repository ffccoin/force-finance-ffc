import React from 'react';

const Card = ({ state, bonusPercent, daysLeft, start,endTime }) => {

  return (
    <div className="card bg-neutral rounded-3xl" style={{ width: '301.67px', height: '232px' }}>
      <div className="card-content p-3">
        <h2 className='mt-4  pl-4 '>State: {state}</h2>
        <p className='font-neue-machina text-4xl mt-5 leading-10 font-extrabold pl-4'>{bonusPercent}%</p>
        <p className='font-apfel-grotezktext-[18px] mt-1  font-normal pl-4'>BONUS</p>
        <div className='flex justify-between pl-4 mt-8'>
          <p className='text-neutralLight'>{daysLeft}</p>
          <span className='text-sm'>{start} <p className='text-sm' >{endTime}</p></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
