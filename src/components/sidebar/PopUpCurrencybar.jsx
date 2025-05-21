import React from 'react'
import goldCoin from '../../assets/goldcoin.svg'
import blueLabel from '../../assets/bluelabel.svg'
const PopUpCurrencybar = ({
  popUpColor,
  popUpBgImg,
  increase,
  CurrencyFeed,
  CurrencyValue,
  time,
}) => {
  return (
    <div className="relative">
      <div
        style={{ background: popUpColor }}
        className="py-[20px] px-[8px] flex items-center gap-2"
      >
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: increase ? 'rotate(0deg)' : 'rotate(180deg)' }}
        >
          <path
            d="M1 6L5 2L9 6"
            stroke="#DDE7EE"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {popUpBgImg && (
          <img src={popUpBgImg} className="absolute top-0 left-0 z-0" />
        )}
        <img src={CurrencyFeed ? goldCoin : blueLabel} alt="currency icon" />
        <div className="flex justify-evenly items-center w-full  font-semibold">
          <p style={{ margin: 0 }} className="text-[14px] text-black">
            {CurrencyValue}
          </p>
          <p className="text-[14px] text-black">{time}</p>
        </div>
      </div>
    </div>
  )
}

export default PopUpCurrencybar
