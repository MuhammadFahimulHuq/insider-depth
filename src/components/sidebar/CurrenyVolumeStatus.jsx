import React from 'react'

const CurrenyVolumeStatus = ({ children, side, calculationState }) => {
  return (
    <div className="relative">
      <div className="overflow-y-scroll h-[690px]">{children}</div>
      <div>
        <div className="pt-5 px-5 flex flex-col gap-2">{calculationState}</div>
      </div>
    </div>
  )
}

export default CurrenyVolumeStatus
