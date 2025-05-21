import React from 'react'
import goldCoin from '../../assets/goldcoin.svg'
import blueLabel from '../../assets/bluelabel.svg'

const CurrencyBar = ({
  increase,
  notifyColor,
  CurrencyFeed,
  CurrencyValue,
  time,
}) => {
  return (
    <div
      style={{
        background: notifyColor,
      }}
      className="p-[8px] flex items-center gap-2"
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
      <img src={CurrencyFeed ? goldCoin : blueLabel} alt="currency icon" />
      <div className="flex justify-evenly items-center w-full">
        <p style={{ margin: 0 }} className="text-[12px] text-white">
          {CurrencyValue}
        </p>
        <p className="text-[12px] text-white">{time}</p>
      </div>
    </div>
  )
}

export default CurrencyBar
